#!/usr/bin/env python3
"""Restore note2-page3.png from image_09.png - inline execution"""
import os

src = "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1/image_09.png"
dst = "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1/note2-page3.png"

# Read source as binary
with open(src, 'rb') as f:
    data = f.read()

print(f"Read {len(data)} bytes from source")

# Write to destination as binary
with open(dst, 'wb') as f:
    f.write(data)

size = os.path.getsize(dst)
print(f"Written {size} bytes to destination")

# Verify PNG header
with open(dst, 'rb') as f:
    header = f.read(8)
    if header == b'\x89PNG\r\n\x1a\n':
        print("✅ Valid PNG header confirmed")
    else:
        print(f"❌ Bad header: {header.hex()}")
