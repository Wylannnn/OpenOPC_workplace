#!/usr/bin/env python3
"""Copy image_09.png to note2-page3.png to restore the overwritten file"""
import shutil

src = "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1/image_09.png"
dst = "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1/note2-page3.png"

shutil.copy2(src, dst)
print(f"Copied {src} -> {dst}")
print(f"Size: {shutil.os.path.getsize(dst)} bytes")
