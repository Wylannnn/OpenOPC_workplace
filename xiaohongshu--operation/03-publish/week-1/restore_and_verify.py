#!/usr/bin/env python3
"""Restore note2-page3.png from image_09.png and verify"""
import shutil, os

src = "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1/image_09.png"
dst = "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1/note2-page3.png"

# Verify source exists and is valid
if not os.path.exists(src):
    print(f"ERROR: Source {src} not found!")
    exit(1)

src_size = os.path.getsize(src)
print(f"Source: {src} ({src_size} bytes)")

# Copy
shutil.copy2(src, dst)
dst_size = os.path.getsize(dst)
print(f"Copied to {dst} ({dst_size} bytes)")

# Verify it's a PNG
with open(dst, 'rb') as f:
    header = f.read(8)
    if header == b'\x89PNG\r\n\x1a\n':
        print("✅ Valid PNG header confirmed")
    else:
        print(f"❌ Invalid PNG header: {header.hex()}")
        exit(1)

print(f"✅ Restore complete: {dst_size} bytes")
