from PIL import Image

def trim_image(image_path, output_path):
    # Open the image
    image = Image.open(image_path)
    image = image.convert("RGBA")  # Ensure image is in RGBA mode

    # Get the bounding box of the non-transparent areas
    bbox = image.getbbox()

    # Crop the image to the bounding box
    cropped_image = image.crop(bbox)

    # Save the cropped image
    cropped_image.save(output_path)

# Specify the path to your input and output images
input_path = "logo.png"
output_path = "edited_logo.png"

# Trim the image
trim_image(input_path, output_path)

print(f"Cropped image saved to {output_path}")