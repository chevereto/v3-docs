# 📦 Installation

To install Chevereto it requires a server environment where the software and uploaded files will be served.

::: warning Requirements
Always check that the server provides the [requirements](../setup/system/requirements.md) required to run Chevereto.
:::

## Docker

Create the `chv-network` that containers will use to comunicate each other.

```sh
docker network create chv-network
```

### Database container

Create the `chv-mariadb` container connected to `chv-network`.

```sh
docker run -d \
    --name chv-mariadb \
    --network chv-network \
    --network-alias mariadb \
    --health-cmd='mysqladmin ping --silent' \
    -e MYSQL_ROOT_PASSWORD=password \
    mariadb:focal
```

```sh
sudo mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

### Chevereto container

Chevereto containers are bootstrapped, Chevereto will be downloaded and installed on first container run.

::: tip
Check the environment variables reference for all `-e` options that you can pass.
:::

<code-group>
<code-block title="Paid">
```sh
docker run -d \
    -p 8008:80 \
    --name chv-httpd-php \
    --network chv-network \
    --network-alias chv-httpd-php \
    -e "CHEVERETO_SOFTWARE=chevereto" \
    -e "CHEVERETO_LICENSE=put_license_here" \
    -e "CHEVERETO_TAG=3.20.0" \
    chevereto/chevereto:3.20-httpd-php
```
</code-block>

<code-block title="Free">
```sh
docker run -d \
    -p 8008:80 \
    --name chv-httpd-php \
    --network chv-network \
    --network-alias chv-httpd-php \
    -e "CHEVERETO_SOFTWARE=chevereto-free" \
    -e "CHEVERETO_TAG=1.3.0" \
    chevereto/chevereto:3.20-httpd-php
```
</code-block>
</code-group>

Check our [Docker Hub](https://hub.docker.com/r/chevereto/chevereto/tags?page=1&ordering=last_updated) for more system tags.

## Root installation

### Prepare Database

Run the following to create the `chevereto` database and its user binding:

```sh
docker exec chv-mariadb mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

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
