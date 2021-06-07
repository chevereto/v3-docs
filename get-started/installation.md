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
docker exec chv-mariadb sudo mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

### Chevereto container

A Chevereto [container](../setup/stacks/container.md) can be either bootstrapped or you can build and manage your system images using [container registry](../setup/stacks/container-registry.md) (recommended).

## Root installation

### Prepare Database

Run the following to create the `chevereto` database and its user binding:

```sh
mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
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
The installer HTTP API will POST to `/install` to complete Chevereto installation. If that process fail, you must remove the `installer.php` file and open your website at `/install` to complete the process manually.
:::

### Zip package

* Download the [latest release](https://chevereto.com/panel/downloads)
* Upload all the contents of the `chevereto` folder to your server (usually in the `public_html` folder)
* Go to your target website URL and follow the instructions
