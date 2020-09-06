# Theme

`/dashboard/settings/theme`

## Tone

Determines the theme tone.

| Value  | Effect  |
|---|---|
| Light  | Use light mode  |
| Dark  | Use dark mode  |

## Main color

Determines the main color.

| Type  | Example  |
|---|---|
| Hex  | #00A7DA  |

## Top bar button color

Determines the top bar button color.

## Enable vector logo

Toggles the use of vector logo.

| Value  | Effect  |
|---|---|
| Enabled  | Use vector logo  |
| Disabled  | Don't use vector logo  |

## Vector logo image

The vector logo image. The size is just for reference, the system will display the logo fixing height.

| Type  | Default  |
|---|---|
| SVG  | 500x76 |

## Raster logo image

The raster logo image. The size is just for reference, the system will display the logo fixing height.

| Type  | Default  |
|---|---|
| PNG  | 314x48 |

## Logo height

Determines the logo height, which will be fixed and width will be adjusted.

| Type  | Recommended  |
|---|---|
| Integer  | Min: `20` - Max: `50` |

## Favicon image

Determines the favicon image, the icon which appears in the web browser bar.

| Type  | Default  |
|---|---|
| PNG  | 300x300 |

## Image load max. filesize (MB)

Determines the maximum image file size to load. Images bigger than this value will require "click to load" full resolution image.

| Type  | Recommended  |
|---|---|
| Integer  | 3 |

## Enable download button

Toggles the display of a download button for image view.

| Value  | Effect  |
|---|---|
| Enabled  | Enable download button to appear on image view  |
| Disabled | Don't show the image download button  |

## Enable right click on image

Toggles the ability to right click on the images. This controls the display of the context menu for the `<image>` tag.

| Value  | Effect  |
|---|---|
| Enabled  | Enable to right click on images (save-as) |
| Disabled | Disable right click on images  |

## Enable show Exif data

Toggles the display of image Exif data.

| Value  | Effect  |
|---|---|
| Enabled  | Show image Exif data  |
| Disabled | Don't show (hide) image Exif data |

## Enable social share

Toggles the social share buttons for sharing the image.

| Value  | Effect  |
|---|---|
| Enabled  | Enable social share buttons for image  |
| Disabled | Disable social share buttons for image  |

## Enable embed codes (content)

Toggles the display of embed codes.

| Value  | Effect  |
|---|---|
| Enabled  | Show embed codes  |
| Disabled | Don't show (hide) embed codes  |

## Not safe content checkbox in uploader

Toggles the display of the NSFW checkbox.

| Value  | Effect  |
|---|---|
| Enabled  | Enable display of NSFW checkbox  |
| Disabled | DIsable display of NSFW checkbox |

## Custom CSS code

Custom `CSS` code that will get added to the HTML. Example:

```css
body {
    color: red;
}
a {
    text-decoration: underline;
}
```

## Custom JS code

Custom `JS` code that will get added to the HTML. Example:

```js
console.log('argument')
```
