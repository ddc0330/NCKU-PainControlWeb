def generate_urls():
    base_url = "https://www.sharecourse.net/sharecourse/course/content/chapter/2909?chid=17734&vid={}"
    urls = []
    
    for vid in range(114190, 114385):  # 114384 + 1 to include the last number
        url = base_url.format(vid)
        urls.append(url)
    
    # Write to file with line breaks
    with open('video_pages.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(urls))

if __name__ == "__main__":
    generate_urls()
    print("URLs have been generated and saved to video_pages.txt") 