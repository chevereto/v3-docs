# 📦 Installation

To install Chevereto it requires a server environment where the software and uploaded files will be served.

::: warning Requirements
Always check that the server provides the [requirements](../setup/system/requirements.md) required to run Chevereto. Don't ignore the system messages mentioning lack of server software as those are detections in the application layer.
:::

## Installation methods

### Installer

The [chevereto/installer](https://github.com/chevereto/installer) is a single `.php` file which will download and extract the latest release in the target destination.

* Upload the [installer](https://chevereto.com/download/file/installer) to your server target destination (usually the `public_html` folder).

Using CLI (recommended):

* Download the software at the installer path.

<code-group>
<code-block title="Paid">
```php
php installer.php -a download -s chevereto -l=licenseKeyHere
```
</code-block>

<code-block title="Free">
```php
php installer.php -a download -s chevereto-free
```
</code-block>
</code-group>

* Extract the software indicating target `-p` path to extract.

<code-group>
<code-block title="Paid">
```php
php installer.php -a extract -s chevereto -p /var/www/html -f chevereto-pkg-*.zip
```
</code-block>

<code-block title="Free">
```php
php installer.php -a extract -s chevereto-free -p /var/www/html -f chevereto-pkg-*.zip
```
</code-block>
</code-group>

Once done, remove the `installer.php` file and open your website at `/install` to complete the process.

Using HTTP:

* Open your website at `/installer.php` and follow the process.

![Chevereto Installer](https://camo.githubusercontent.com/1c1a868703419338eb6b01802270171b4bbb134d/68747470733a2f2f63686576657265746f2e636f6d2f7372632f696d672f696e7374616c6c65722f73637265656e2d76322e706e673f3230313930363233)

::: danger
The installer HTTP API will POST to `/install` to complete Chevereto installation. If that process fail, you must remove the `installer.php` file and open your website at `/installer` to complete the process manually.
:::

### Zip package

* Download the [latest release](https://chevereto.com/panel/downloads)
* Upload all the contents of the `chevereto` folder to your server (usually in the `public_html` folder)
* Go to your target website URL and follow the instructions

## Post-installation

## Initial setup

You can setup Chevereto using HTTP or CLI (recommended).

### HTTP setup

* Go to `/install` and submit the installation form.

### CLI setup (V3.20+)

* Run the following command:

<code-group>
<code-block title="Shell">
```sh
sudo -u www-data php cli.php -C install \
    -u dev \
    -e dev@chevereto.loc \
    -x password
```
</code-block>

<code-block title="Docker">
```sh
docker exec -it \
    --user www-data \
    my-container /usr/local/bin/php /var/www/html/cli.php -C install \
    -u dev \
    -e dev@chevereto.loc \
    -x password
```
</code-block>
</code-group>

| Option | Description    |
| ------ | -------------- |
| u      | Admin username |
| e      | Admin email    |
| x      | Admin password |

### Background jobs (V3.18+)

The application background tasks needs to be executed by running a cron. At `/dashboard` you will find the [required cron](../setup/system/requirements.md#cron) entry for your installation.

::: danger
Don't forget to provide the cron executing to fullfil the application background jobs. If this is not configured Chevereto won't remove expired images, check for updates, process external storage deletes and more. It is very important to setup this.
:::

### Setup email

Go to [Email settings](../settings/email.md) to configure the transactional email service.
