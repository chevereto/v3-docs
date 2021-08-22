# Server Installation

To install Chevereto it requires a server environment where the software and uploaded files will be served. This document outlines the generic installation process from scratch.

::: tip

* [cPanel installation](cpanel.md)

:::

## Requirements

Before installing anything check that the target server provides the system [requirements](../server/requirements.md) to run Chevereto.

## Database

### Using web panels

You can refer to the documentation for creating the MySQL database required for Chevereto. Here references for the most popular panels:

* [CloudPanel Database](https://www.cloudpanel.io/docs/cloudpanel-ce/frontend-area/databases)
* [cPanel Database](https://docs.cpanel.net/cpanel/databases/mysql-databases/)
* [Plesk Database](https://docs.plesk.com/en-US/obsidian/customer-guide/website-databases/creating-databases.65157/)
* [CyberPanel Database](https://cyberpanel.net/docs/view-and-manage-databases-table-from-cloud-platform/)

### Using the MySQL console

Run the following command to create the `chevereto` database and its user binding:

```sh
sudo mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

## Provide application

You will require to provide the Chevereto software application files to your server. You can do this auto with the [Installer](#installer) or manual by downloading the [zip package](#zip-package).

::: tip
The Installer will detect any missing library in your system, it works as a system check utility.
:::

## Installer

The [installer.php](https://chevereto.com/download/file/installer) is a single-file tool which will ease the installation of the software. It's an API client which downloads and extracts the software for you.

The installer provides a [HTTP API](https://github.com/chevereto/installer/blob/master/HTTP.md) for the whole process:

![Chevereto Installer](https://camo.githubusercontent.com/1c1a868703419338eb6b01802270171b4bbb134d/68747470733a2f2f63686576657265746f2e636f6d2f7372632f696d672f696e7374616c6c65722f73637265656e2d76322e706e673f3230313930363233)

The Installer also provides a [CLI API](https://github.com/chevereto/installer/blob/master/CLI.md).

You can check the repository at [chevereto/installer](https://github.com/chevereto/installer).

### Zip package

* Download the [latest release](https://chevereto.com/panel/downloads)
* Upload all the contents of the `chevereto` folder to your server (usually in the `public_html` folder)
* Go to your target website URL and follow the instructions

## Post-Install

Refer to [First-steps](../../manual/first-steps/README.md) instructions.
