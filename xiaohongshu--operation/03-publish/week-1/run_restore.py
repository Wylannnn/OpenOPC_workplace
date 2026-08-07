#!/usr/bin/env python3
"""Run the restore script"""
import subprocess, sys
result = subprocess.run([sys.executable, "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1/do_restore.py"], capture_output=True, text=True)
print(result.stdout)
if result.stderr:
    print("STDERR:", result.stderr)
print(f"Return code: {result.returncode}")
