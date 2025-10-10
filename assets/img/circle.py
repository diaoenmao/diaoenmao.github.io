from PIL import Image, ImageDraw

# Open your image
im = Image.open("test.png").convert("RGBA")

# Create white circular background
size = max(im.size)
background = Image.new("RGBA", (size, size), (255, 255, 255, 0))
draw = ImageDraw.Draw(background)
draw.ellipse((0, 0, size, size), fill=(255, 255, 255, 255))

# Paste your image centered
bg_w, bg_h = background.size
im_w, im_h = im.size
offset = ((bg_w - im_w) // 2, (bg_h - im_h) // 2)
background.paste(im, offset, im)

background.save("test_output.png")
