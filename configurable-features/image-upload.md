Image upload
============

The image upload is the main feature of Chevereto and you can highly customize how it works at Dashboard > Settings > Image Upload.

Configurable values
-------------------

### Uploads (Enable/disable)

Control the global setting for the image upload feature. When enabled the system will allow image uploads in all the endpoints (main website and API access).

### Guest uploads (Enable/disable)

Controls the image upload feature for non logged in users. If you want to allow image upload only for logged in users you should set this to `disable` and the system will ask to login to upload images.

### Max. file size allowed

Configure the maximum size allowed per image upload and the system won't allow to upload images larger than the value in this setting. Note that you can't override the server max. file upload limit and that there are some [common PHP pitfalls](https://php.net/manual/en/features.file-upload.common-pitfalls.php) when you use a large value in this setting.

### Image path

Sets where the system will store the images relative to the Chevereto root. This setting is only used when the image is upload to the local storage. `Default value: images`

### Storage mode

Sets the path prefix for the uploaded images. When using "Datefolders" the system will create a `/2014/10/14/` structure for the uploaded image. `Default value: Datefolder`

### File naming

Controls how the uploaded files are named or re-named when they are allocated in the storage. When using "Original" the system will try to use the original filename, "Random" will generate a complete random filename and "Mixed" uses part from the original filename and random strings. When using "Original" but the filename is already being used, the "Random" method will be used. `Default value: Original`

### Thumb size

Sets the fixed width and height for the generated thumb sized image. The generated image will have fixed dimensions and it won't be adjusted.

### Medium size

Sets the width for the generated medium size image. The height will be adjusted to this width.

### Watermark (enable/disable)

Controls the usage of watermark function for the uploaded images. When enabled a watermark will added to the uploaded images and you can configure the watermark image, position and opacity.