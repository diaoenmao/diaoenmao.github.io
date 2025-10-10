from PIL import Image

def pad_to_square_transparent(image):
    """Pad an RGBA image to a square while preserving transparency."""
    width, height = image.size
    max_dim = max(width, height)

    # Ensure image is RGBA
    image = image.convert("RGBA")

    # Create a transparent background
    new_image = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))

    # Center the original image on the transparent square
    paste_x = (max_dim - width) // 2
    paste_y = (max_dim - height) // 2
    new_image.paste(image, (paste_x, paste_y), mask=image)

    return new_image

# Example:
img = Image.open("01.png")
square_img = pad_to_square_transparent(img)
square_img.save("02.png")
