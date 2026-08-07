import os
import glob

directory = "/Users/Waylan/my-ai-lab/OpenOPC_workplace/xiaohongshu--operation/03-publish/week-1"
for f in glob.glob(os.path.join(directory, "image_*.png")):
    os.remove(f)
    print(f"Removed: {f}")
print("Cleanup complete")
