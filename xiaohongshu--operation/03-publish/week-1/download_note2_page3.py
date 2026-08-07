#!/usr/bin/env python3
"""Download note2-page3.png from Agnes AI"""
import urllib.request, os

url = "https://platform-outputs.agnes-ai.space/images/t2i/7092cb373a9b4c79ae356fe8ead363f2.png"
path = "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1/note2-page3.png"

urllib.request.urlretrieve(url, path)
size = os.path.getsize(path)
print(f"Downloaded: {size} bytes")
