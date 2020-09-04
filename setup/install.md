# Install

This refers to the provisioning alternatives for getting a Chevereto installation in your own server. It takes from granted that your server meets all the [system requirements](./requirements.md).

If you are new into self-hosting you should check the [guides](../contributed.md#guides) created by other users of the software.

> If you are installing on a VPS check our [Root install (LEMP)](./root-install.md) guide.

## Procedures

### A. Install using our Installer

The [installer](installer.md) is a single `.php` file which will download and extract the latest release. This is the recommended way to provision Chevereto (the actual software, not the server).

### B. Install using Docker

Docker allows you to easily install a container version of the software.

> 👏🏾 All the Docker images are [user provided](https://hub.docker.com/search?q=chevereto&type=image). If you know about more Docker images let's us know to list it here. Thanks for contributing!

Note: when using Docker with the paid edition check that the image support our `installer`.
> 
- [nmtan/chevereto](https://hub.docker.com/r/nmtan/chevereto/) thanks to [Tan Nguyen](https://github.com/tanmng)
- [zaywalker/chevereto](https://hub.docker.com/r/zaywalker/chevereto) thanks to [Jae Yoon KIM](https://github.com/zaywalker)
- [einverne/chevereto](https://hub.docker.com/r/einverne/chevereto) thanks to [Ein Verne](https://github.com/einverne)

> Check our [guides](../contributed.md#guides) section for help setting up a Docker environment.

### C. Install via zip

- Download the [latest release](https://chevereto.com/panel/downloads)
- Upload all the contents of the `chevereto` folder to your server (usually in the `public_html` folder)
- Go to your target website URL and follow the instructions

### D. Install using Softaculous/Fantastico

If your web hosting includes [Softaculous](https://softaculous.com/)/[Fantastico](https://netenberg.com/fantastico.php), you can install Chevereto-Free with just one click, it should be available for one-click install under the "Image Galleries" category.

> **Note:** Our paid edition isn't available in these script libraries. However, you can install Chevereto Free and then **one-click upgrade** it to the paid edition directly from the `/dashboard` panel.

## Install issues

Most common install issue is missing [system requirements](./requirements.md) so make sure that you are running a compatible system and that all the data is correct like working MySQL credentials and privileges.

> Check our [community support](https://chevereto.com/community/categories/support.43/) in case you need help with the server provisioning

## Runtime php.ini configuration

As `app/settings.php` is loaded everywhere and it is not override by the update procedure, this is the safer place to add runtime `php.ini` directives using [`ini_set`](https://www.php.net/manual/en/function.ini-set.php).