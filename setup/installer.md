# Installer

The Installer is a single PHP file that downloads, extracts and install Chevereto. You can [download](https://chevereto.com/download/file/installer) it and execute it anywhere you want to install Chevereto.

You can learn more about it at [chevereto/installer](https://github.com/chevereto/installer) and [chevereto/installer-source](https://github.com/chevereto/installer-source)

## How it Works

- Upload the [installer](https://chevereto.com/download/file/installer) to your target destination (usually the `public_html` folder).
- Open your website at `/installer.php` and follow the process.

![](https://camo.githubusercontent.com/1c1a868703419338eb6b01802270171b4bbb134d/68747470733a2f2f63686576657265746f2e636f6d2f7372632f696d672f696e7374616c6c65722f73637265656e2d76322e706e673f3230313930363233)

The installer will prompt with steps to install the software, after that it will download the software, extract it and it will post to `/install` the data previously provided.

## Troubleshoot

The Installer is built on top of many assumptions that not always perform as expected. For example, the Installer assumes that URL rewriting is working properly and that HTTP requests can be made to `/install`.

If the installer fails **before** extracting the software you should switch to manual installation. If it fails **after** extracting the software you should continue the process at `/install`. In both cases get rid of the installer file.
