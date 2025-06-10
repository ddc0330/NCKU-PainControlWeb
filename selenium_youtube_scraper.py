from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import UnexpectedAlertPresentException, NoAlertPresentException, TimeoutException
from bs4 import BeautifulSoup
import time
import re
import random
from urllib.parse import urlparse, parse_qs
from datetime import datetime

def get_chapter_info(url):
    """從URL中提取章節信息"""
    parsed = urlparse(url)
    query_params = parse_qs(parsed.query)
    chapter_id = query_params.get('chid', [None])[0]
    video_id = query_params.get('vid', [None])[0]
    return chapter_id, video_id

def login(driver, username, password):
    """執行登入操作"""
    print('自動登入中...')
    try:
        driver.get('https://www.sharecourse.net/sharecourse/general/user/login')
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, 'id')))
        
        # 清除並重新輸入帳號密碼
        id_input = driver.find_element(By.NAME, 'id')
        id_input.clear()
        id_input.send_keys(username)
        
        password_input = driver.find_element(By.NAME, 'password')
        password_input.clear()
        password_input.send_keys(password)
        
        # 點擊登入按鈕
        login_button = driver.find_element(By.XPATH, '//button[@type="submit"]')
        driver.execute_script("arguments[0].click();", login_button)
        
        # 等待登入完成
        time.sleep(3)
        
        # 驗證登入是否成功
        if not check_login_status(driver):
            raise Exception("登入失敗")
            
        print('登入成功')
        return True
    except Exception as e:
        print(f'登入過程發生錯誤: {e}')
        return False

def check_login_status(driver):
    """檢查是否仍在登入狀態"""
    try:
        # 檢查多個可能的登入狀態指標
        indicators = [
            "//a[contains(text(), '登出')]",  # 登出按鈕
            "//a[contains(@href, '/sharecourse/general/user/logout')]",  # 登出連結
            "//div[contains(@class, 'user-info')]"  # 用戶信息區域
        ]
        
        for indicator in indicators:
            elements = driver.find_elements(By.XPATH, indicator)
            if len(elements) > 0:
                return True
                
        # 檢查是否在登入頁面
        if "login" in driver.current_url.lower():
            return False
            
        return False
    except:
        return False

def get_youtube_link(driver, url, max_retries=3):
    """獲取單個頁面的 YouTube 連結，包含重試機制"""
    for attempt in range(max_retries):
        try:
            # 添加隨機延遲，避免請求過於頻繁
            time.sleep(random.uniform(1, 3))
            
            driver.get(url)
            
            # 檢查登入狀態
            if not check_login_status(driver):
                print("登入已過期，重新登入...")
                if not login(driver, username, password):
                    if attempt < max_retries - 1:
                        print(f'重試中... (第 {attempt + 1} 次)')
                        continue
                    return None
                driver.get(url)
            
            # 等待 videoFrame iframe 出現
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.ID, 'videoFrame'))
            )
            
            # 切換到 videoFrame
            driver.switch_to.frame(driver.find_element(By.ID, 'videoFrame'))
            
            # 再找 YouTube 的 iframe
            yt_iframe = driver.find_element(By.XPATH, "//iframe[contains(@src, 'youtube.com/embed/')]")
            yt_src = yt_iframe.get_attribute('src')
            print('找到:', yt_src)
            
            # 切回主頁面
            driver.switch_to.default_content()
            return yt_src
            
        except UnexpectedAlertPresentException:
            try:
                alert = driver.switch_to.alert
                print('彈窗訊息：', alert.text)
                alert.accept()
            except NoAlertPresentException:
                pass
            print(f'此頁因登入過期無法取得: {url}')
            if attempt < max_retries - 1:
                print(f'重試中... (第 {attempt + 1} 次)')
                time.sleep(2)
                continue
            return None
        except Exception as e:
            print(f'此頁無 videoFrame 或錯誤: {url}, {e}')
            if attempt < max_retries - 1:
                print(f'重試中... (第 {attempt + 1} 次)')
                time.sleep(2)
                continue
            return None
        time.sleep(1)
    return None

def write_chapter_links(chapter_id, links, output_file):
    """寫入章節連結到文件"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(output_file, 'a', encoding='utf-8') as f:
        f.write(f'\n# Chapter {chapter_id} - {timestamp}\n')
        for link in links:
            # 轉換成標準 YouTube 頁面
            match = re.search(r'youtube.com/embed/([a-zA-Z0-9_-]{11})', link)
            if match:
                video_id = match.group(1)
                watch_url = f'https://www.youtube.com/watch?v={video_id}'
                f.write(watch_url + '\n')
            else:
                f.write(link + '\n')
        f.write(f'# End of Chapter {chapter_id}\n')

# 讓使用者輸入帳號密碼
username = input('請輸入您的帳號: ')
password = input('請輸入您的密碼: ')

# 讀取影片頁面連結
video_page_links = []
with open('video_pages.txt', 'r', encoding='utf-8') as f:
    for line in f:
        url = line.strip()
        if url:
            video_page_links.append(url)

# 設置 Chrome 選項
chrome_options = Options()
chrome_options.add_argument('--headless')  # 不開啟實體瀏覽器
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--enable-unsafe-swiftshader')  # 解決 WebGL 警告
chrome_options.add_argument('--ignore-certificate-errors')  # 忽略 SSL 錯誤
chrome_options.add_argument('--ignore-ssl-errors')  # 忽略 SSL 錯誤
driver = webdriver.Chrome(options=chrome_options)

# 初始登入
if not login(driver, username, password):
    print("初始登入失敗，程式結束")
    driver.quit()
    exit(1)

# 清空輸出文件
with open('link.txt', 'w', encoding='utf-8') as f:
    f.write(f'# 開始時間: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}\n')

# 處理每個影片頁面
chapter_links = {}  # 用於存儲每個章節的連結

# 首先按章節分組
for url in video_page_links:
    chapter_id, video_id = get_chapter_info(url)
    if chapter_id not in chapter_links:
        chapter_links[chapter_id] = []
    chapter_links[chapter_id].append(url)

# 按章節處理
total_links = 0
chapter_number = 1
for chapter_id, urls in chapter_links.items():
    print(f'\n開始處理章節 {chapter_id}')
    
    # 章節開始前重新登入
    if not login(driver, username, password):
        print(f"章節 {chapter_id} 登入失敗，跳過此章節")
        continue
    
    # 處理章節內的每個影片
    chapter_yt_links = []
    for url in urls:
        yt_src = get_youtube_link(driver, url)
        if yt_src:
            chapter_yt_links.append(yt_src)
    
    # 寫入此章節的連結
    if chapter_yt_links:
        with open('link.txt', 'a', encoding='utf-8') as f:
            f.write(f'\n# Chapter {chapter_number}\n')
            for link in chapter_yt_links:
                # 轉換成標準 YouTube 頁面
                match = re.search(r'youtube.com/embed/([a-zA-Z0-9_-]{11})', link)
                if match:
                    video_id = match.group(1)
                    watch_url = f'https://www.youtube.com/watch?v={video_id}'
                    f.write(watch_url + '\n')
                else:
                    f.write(link + '\n')
        total_links += len(chapter_yt_links)
        print(f'章節 {chapter_id} 完成，已寫入 {len(chapter_yt_links)} 個連結')
    
    chapter_number += 1
    
    # 章節結束後休息較長時間
    print(f'章節 {chapter_id} 處理完成，休息 10-15 秒...')
    time.sleep(random.uniform(10, 15))

driver.quit()

# 寫入結束時間
with open('link.txt', 'a', encoding='utf-8') as f:
    f.write(f'\n# 結束時間: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}\n')
    f.write(f'# 總共收集到 {total_links} 個連結\n')

print(f'程式執行完成，共收集 {total_links} 個連結') 