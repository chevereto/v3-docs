# Image upload

`/dashboard/settings/image-upload`

## Enabled image formats

Determines which image formats can be uploaded.

::: tip Formats supported
JPG PNG BMP GIF WEBP
:::

## Enable uploads

Toggles the image upload functionality.

## Upload user interface

Determines how the upload will be displayed.

- `On-page container` uses a JS uploader that stays in page
- `/upload route` drives users towards the upload page

## Guest uploads

Same as [enable uploads](#enable-uploads), but for guest users.

## Moderate uploads

Determines if incoming uploads must be moderated or not.

- `Disabled` no moderation required
- `Guest` moderate guest uploads
- `All` moderate all uploads

## Enable embed codes (uploader)

Toggles the display of embed codes after upload process.

## Upload threads

Determines the number of parallel threads used by the uploader. This setting should be configured according to the installed hardware and the usage of your website.

## Redirect on single upload

Toggles the HTTP redirection on single image upload.

## Enable duplicate uploads

Toggles the acceptance of duplicate uploads.

## Enable expirable uploads

Toggles the availability of expirable uploads, which will get automatically removed after a certain date.

## Auto delete guest uploads

Determines the automatic deletion of guest uploads.

## Maximum image size

Determines the maximum size (in pixels) allowed for image uploads. Larger images will get automatically downscale.

## Image Exif data

Toggles the handling of image [Exif](https://en.wikipedia.org/wiki/Exif) data.

## Image Exif data (user setting)

Toggles if users can determine how to handle Exif data.

## Maximum upload file size [MB]
## Maximum upload file size (guests)
## Image path
## Storage mode
## File naming method
## Thumb size
## Medium image fixed dimension
## Medium image fixed size
## Watermarks
### Watermark user toggles
### Watermark file toggles
### Minimum image size needed to apply watermark
### Watermark image
### Watermark position
### Watermark percentage
### Watermark margin
### Watermark opacity