import requests
from bs4 import BeautifulSoup
import re
from urllib.parse import urljoin

class ShareCourseScraper:
    def __init__(self):
        self.session = requests.Session()
        self.base_url = 'https://www.sharecourse.net'
        self.login_url = 'https://www.sharecourse.net/sharecourse/user/login'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

    def login(self, username, password):
        # 先取得登入頁面，取得 cookies 及隱藏欄位
        resp = self.session.get(self.login_url, headers=self.headers)
        soup = BeautifulSoup(resp.text, 'html.parser')
        # 取得 rehref（如果有的話，否則設空字串）
        rehref_input = soup.find('input', {'name': 'rehref'})
        rehref_value = rehref_input['value'] if rehref_input else ''
        # 準備登入資料
        login_data = {
            'id': username,
            'password': password,
            'rehref': rehref_value,
            'rememberme': 'on'
        }
        # 發送登入請求（用正確 action url）
        response = self.session.post(
            'https://www.sharecourse.net/sharecourse/general/user/loginForm',
            data=login_data,
            headers=self.headers
        )
        # 登入成功會 302 跳轉，或頁面有「登出」字樣
        if response.status_code in [200, 302] and ('登出' in response.text or 'logout' in response.text or response.history):
            print("登入成功！")
            return True
        else:
            print("登入失敗，請檢查帳號密碼或表單欄位！")
            print(response.text)
            return False

    def get_video_links(self, course_url):
        """獲取課程頁面中的影片連結"""
        try:
            # 使用已登入的 session 訪問課程頁面
            response = self.session.get(course_url, headers=self.headers)
            response.raise_for_status()  # 檢查請求是否成功
            
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 找出所有 iframe
            iframes = soup.find_all('iframe', src=True)
            
            video_links = []
            for iframe in iframes:
                src = iframe['src']
                # 處理相對路徑
                if not src.startswith('http'):
                    src = urljoin(self.base_url, src)
                
                # 匹配 YouTube 影片 ID
                match = re.search(r'youtube\.com/embed/([a-zA-Z0-9_-]{11})', src)
                if match:
                    video_id = match.group(1)
                    video_url = f'https://www.youtube.com/watch?v={video_id}'
                    video_links.append(video_url)
            
            return video_links
            
        except requests.RequestException as e:
            print(f"獲取影片連結時發生錯誤: {e}")
            return []

    def full_video_crawl(self, course_id):
        # 1. 進入「我的課程」頁
        reserve_list_url = 'https://www.sharecourse.net/sharecourse/course/view/reserveList'
        resp1 = self.session.get(reserve_list_url, headers=self.headers)
        print("我的課程頁面取得，長度：", len(resp1.text))

        # 2. 進入課程首頁
        homepage_url = f'https://www.sharecourse.net/sharecourse/course/content/homepage/{course_id}'
        resp2 = self.session.get(homepage_url, headers=self.headers)
        print("課程首頁取得，長度：", len(resp2.text))

        # 3. 進入課程影片頁
        chapter_url = f'https://www.sharecourse.net/sharecourse/course/content/chapter/{course_id}'
        resp3 = self.session.get(chapter_url, headers=self.headers)
        print("課程影片頁取得，長度：", len(resp3.text))

        # 4. 解析影片連結
        soup = BeautifulSoup(resp3.text, 'html.parser')
        iframes = soup.find_all('iframe', src=True)
        video_links = []
        for iframe in iframes:
            src = iframe['src']
            match = re.search(r'youtube\.com/embed/([a-zA-Z0-9_-]{11})', src)
            if match:
                video_id = match.group(1)
                video_url = f'https://www.youtube.com/watch?v={video_id}'
                video_links.append(video_url)
        return video_links

    def crawl_all_video_links(self, chapter_list_url):
        # 1. 取得章節列表頁
        resp = self.session.get(chapter_list_url, headers=self.headers)
        soup = BeautifulSoup(resp.text, 'html.parser')
        # 2. 找出所有影片頁連結（遍歷所有章節）
        video_page_links = []
        for chapter_group in soup.select('div.chapterGroup'):
            for a in chapter_group.select('div.textBlock a'):
                href = a.get('href')
                if href and 'youtube' not in href:
                    if not href.startswith('http'):
                        href = urljoin(self.base_url, href)
                    video_page_links.append(href)
        print(f"共找到 {len(video_page_links)} 個影片頁面連結")
        # 3. 依序請求每個影片頁，抓 videoFrame iframe src
        all_video_frame_links = []
        for idx, url in enumerate(video_page_links):
            resp2 = self.session.get(url, headers=self.headers)
            soup2 = BeautifulSoup(resp2.text, 'html.parser')
            # 存下第一個影片頁的 HTML 以便 debug
            if idx == 0:
                with open('debug_video_page.html', 'w', encoding='utf-8') as f:
                    f.write(resp2.text)
                print("已將第一個影片頁 HTML 存為 debug_video_page.html")
            iframe = soup2.find('iframe', id='videoFrame')
            if iframe:
                src = iframe['src']
                print(f"找到 videoFrame src: {src}")
                all_video_frame_links.append(src)
            else:
                print(f"此頁無 videoFrame: {url}")
        # 去重複
        all_video_frame_links = list(set(all_video_frame_links))
        # 進一步請求每個 videoFrame src，抓取真正的 YouTube 連結
        yt_links = []
        for vf_url in all_video_frame_links:
            resp = self.session.get(vf_url, headers=self.headers)
            soup = BeautifulSoup(resp.text, 'html.parser')
            yt_iframe = soup.find('iframe', src=re.compile(r'youtube\\.com/embed/'))
            if yt_iframe:
                yt_src = yt_iframe['src']
                print(f"找到 YouTube 連結: {yt_src}")
                yt_links.append(yt_src)
            else:
                print(f"此 videoFrame 無 YouTube 連結: {vf_url}")
        # 寫入 link.txt
        with open('link.txt', 'w', encoding='utf-8') as f:
            for link in yt_links:
                f.write(link + '\n')
        print(f"已將 {len(yt_links)} 個 YouTube 連結存到 link.txt")
        return yt_links

def main():
    # 創建爬蟲實例
    scraper = ShareCourseScraper()
    
    # 登入資訊
    username = input("請輸入您的帳號: ")
    password = input("請輸入您的密碼: ")
    
    # 嘗試登入
    if scraper.login(username, password):
        chapter_list_url = 'https://www.sharecourse.net/sharecourse/course/content/chapter/2909'
        video_links = scraper.crawl_all_video_links(chapter_list_url)
        if video_links:
            print("\n找到以下影片連結：")
            for i, link in enumerate(video_links, 1):
                print(f"{i}. {link}")
        else:
            print("未找到任何影片連結")

if __name__ == "__main__":
    main() 