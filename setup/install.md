# Install

This refers to the provisioning alternatives for getting Chevereto installed in your server. It takes from granted that your server meets all the [system requirements](./requirements.md).

::: tip Using VPS?
If you are installing on a VPS check our [Root install (LEMP)](./root-install.md) and [Root install (OpenLiteSpeed)](./root-openlitespeed.md) guides.
:::

New into self-hosting? Check the user powered [guides](../contributed.md#guides) and our recommendation on [hosting](hosting.md) providers.

## Procedures

### A. Install using our Installer (recommended)

The [chevereto/installer](https://github.com/chevereto/installer) is a single `.php` file which will download and extract the latest release in the target destination.

- Upload the [installer](https://chevereto.com/download/file/installer) to your server target destination (usually the `public_html` folder).
- Open your website at `/installer.php` and follow the process.

![Chevereto Installer](https://camo.githubusercontent.com/1c1a868703419338eb6b01802270171b4bbb134d/68747470733a2f2f63686576657265746f2e636f6d2f7372632f696d672f696e7374616c6c65722f73637265656e2d76322e706e673f3230313930363233)

The installer will prompt with steps to install the software, after that it will download the software, extract it and it will post to `/install` the data previously provided.

#### Troubleshoot

::: warning Don't panic
The installer works on top of HTTP so it relies in many sub-systems that could fail. If doesn't work for you the recommendation is to follow another install procedure.
:::

- If you get an **Unable to perform HTTP request** it means that URL rewriting and/or other systems are preventing the installer to issue HTTP requests to `/install`.
- It fails **before** extracting the software: Switch to manual installation
- It fails **after** extracting the software: Go to `/install` to continue the process

⚠ In both cases REMOVE the `installer.php` file

### B. Install using Docker

Docker allows you to easily install a container version of the software.

> 👏🏾 All the Docker images are [user provided](https://hub.docker.com/search?q=chevereto&type=image). If you know about more Docker images let's us know to list it here. Thanks for contributing!

Note: when using Docker with the paid edition check that the image support our `installer`.

- [linuxserver/chevereto](https://github.com/linuxserver/docker-chevereto) ([fleet](https://fleet.linuxserver.io/image?name=linuxserver/chevereto)) thanks to [linuxserver.io](https://www.linuxserver.io/) - [support](https://forums.unraid.net/topic/97235-support-linuxserverio-chevereto/)
- [nmtan/chevereto](https://hub.docker.com/r/nmtan/chevereto/) thanks to [Tan Nguyen](https://github.com/tanmng)
- [zaywalker/chevereto](https://hub.docker.com/r/zaywalker/chevereto) thanks to [Jae Yoon KIM](https://github.com/zaywalker)
- [einverne/chevereto](https://hub.docker.com/r/einverne/chevereto) thanks to [Ein Verne](https://github.com/einverne)

Check our [guides](../contributed.md#guides) section for user provided guides on setting up a Docker environment.

### C. Install via zip

- Download the [latest release](https://chevereto.com/panel/downloads)
- Upload all the contents of the `chevereto` folder to your server (usually in the `public_html` folder)
- Go to your target website URL and follow the instructions

### D. Install using Softaculous/Fantastico

If your web hosting includes [Softaculous](https://softaculous.com/)/[Fantastico](https://netenberg.com/fantastico.php), you can install Chevereto-Free with just one click, it should be available for one-click install under the "Image Galleries" category.

::: warning Paid edition
**Note:** Our paid edition isn't available in these script libraries. However, you can install Chevereto Free and then **one-click upgrade** it to the paid edition directly from the `/dashboard` panel.
:::

## Cron

Since Chevereto v3.17 background jobs are issued using a cron, which is a scheduled task for jobs like removing images from external storage, remove expired images and many other maintenance tasks. At `/dashboard` you will find the crontab entry for your installation.

Kindly refer to the documentation of your server software for the procedure to add add the cron entry.

## Install issues

Most common install issue is missing [system requirements](./requirements.md) so make sure that you are running a compatible system and that all the data is correct like working MySQL credentials and privileges.

::: tip Get help
Check our [community support](https://chevereto.com/community/categories/support.43/) in case you need help with the server provisioning
:::
