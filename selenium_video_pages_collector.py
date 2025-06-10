from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time
import re

username = input('請輸入您的帳號: ')
password = input('請輸入您的密碼: ')

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--no-sandbox')
driver = webdriver.Chrome(options=chrome_options)

# 自動登入
print('自動登入中...')
driver.get('https://www.sharecourse.net/sharecourse/general/user/login')
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, 'id')))
driver.find_element(By.NAME, 'id').send_keys(username)
driver.find_element(By.NAME, 'password').send_keys(password)
driver.find_element(By.XPATH, '//button[@type="submit"]').click()
time.sleep(2)

# 進入課程影片頁
driver.get('https://www.sharecourse.net/sharecourse/course/content/chapter/2909')
time.sleep(2)

# 取得所有章節的 chid
chapter_chids = []
chapter_headings = driver.find_elements(By.CSS_SELECTOR, 'div.chapterGroup > div.heading')
for heading in chapter_headings:
    onclick = heading.get_attribute('onclick')
    if onclick:
        match = re.search(r"chapter/2909\\?chid=(\d+)", onclick)
        if match:
            chapter_chids.append(match.group(1))
    else:
        href = heading.get_attribute('href')
        if href:
            match = re.search(r"chapter/2909\\?chid=(\d+)", href)
            if match:
                chapter_chids.append(match.group(1))
chapter_chids = list(set(chapter_chids))
print(f'共找到 {len(chapter_chids)} 個章節')

# 依序進入每個章節頁，抓取所有小節影片頁連結
video_page_links = []
for chid in chapter_chids:
    url = f'https://www.sharecourse.net/sharecourse/course/content/chapter/2909?chid={chid}'
    driver.get(url)
    time.sleep(1.5)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    for a in soup.select('div.textBlock a'):
        href = a.get('href')
        if href and 'vid=' in href:
            if not href.startswith('http'):
                href = 'https://www.sharecourse.net' + href
            video_page_links.append(href)

# 去重複並寫入 video_pages.txt
video_page_links = list(set(video_page_links))
with open('video_pages.txt', 'w', encoding='utf-8') as f:
    for link in video_page_links:
        f.write(link + '\n')
print(f'共寫入 {len(video_page_links)} 個影片頁網址到 video_pages.txt')

driver.quit() 