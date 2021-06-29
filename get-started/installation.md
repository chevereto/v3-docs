# Installation

To install Chevereto it requires a server environment where the software and uploaded files will be served.

::: warning Requirements
Always check that the server provides the [requirements](../setup/system/requirements.md) required to run Chevereto.
:::

## Prepare Database

::: tip
If you are running a server application panel refer to their documentation for creating a MySQL database for Chevereto.
:::

If you have console access you can run the following command to create the `chevereto` database and its user binding:

```sh
sudo mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

## Provide the application

You will require to provide the Chevereto application files to your server. You can do this automatically with the [Installer](#installer) or manually downloading the [zip package](#zip-package).

## Installer

The [chevereto/installer](https://github.com/chevereto/installer) is a single-file tool which will ease the installation of the software. It's an API client which downloads and extracts the software for you.

The installer provides a neat HTTP API for the whole process:

![Chevereto Installer](https://camo.githubusercontent.com/1c1a868703419338eb6b01802270171b4bbb134d/68747470733a2f2f63686576657265746f2e636f6d2f7372632f696d672f696e7374616c6c65722f73637265656e2d76322e706e673f3230313930363233)

The Installer also provides a [CLI API](https://github.com/chevereto/installer/blob/master/CLI_API.md).

### Zip package

* Download the [latest release](https://chevereto.com/panel/downloads)
* Upload all the contents of the `chevereto` folder to your server (usually in the `public_html` folder)
* Go to your target website URL and follow the instructions
