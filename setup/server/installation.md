# Server Installation

To install Chevereto it requires a server environment where the software and uploaded files will be served. This document outlines the generic installation process from scratch.

::: danger Using cPanel?
cPanel users are advised to check the [cPanel guide](cpanel.md).
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

## Provide application files

::: tip
When providing files to your server make sure that the files `owner:group` permissions are usable by the Web Server user.
:::

You will require to provide the Chevereto software application files to your server.

## Using Release package

The release package is a `zip` file containing the software files. Once extracted, the software is ready to be installed.

👉 This method is recommended for **cPanel**, **Plesk** and other web panel users.

* Upload the [latest release](https://chevereto.com/panel/downloads) package to your server (usually in the `public_html` folder)
* Unzip the software using your server built-in `unzip` utility
* Remove the `.zip` file
* Open your target website URL and follow the instructions

## Using Composer package manager

Using Composer the update carried in CLI context. It requires:

* CLI with `curl`, `unzip`
* [Composer](https://getcomposer.org/)

👉 This method is recommended for **VPS** and machines with **CLI access**.

* Run the following command from your **Chevereto project folder**:

<code-group>
<code-block title="Debian">
```sh
LICENSE=YOUR_V3_LICENSE_KEY &&
curl -f -SOJL \
    -X POST -d "nowrap" \
    -H "License: $LICENSE" \
    "https://chevereto.com/api/download/3.20" \
&& unzip chevereto*.zip \
&& rm -rf chevereto*.zip \
&& composer install \
&& chown www-data: . -R \
```
</code-block>
</code-group>

* Open your target website URL and follow the instructions

### Installer

The [installer.php](https://github.com/chevereto/installer) is a single-file tool which will ease the installation of the software. It's an API client which downloads and extracts the software for you.

## Post-Install

Refer to [Initial setup](../../manual/first-steps/initial-setup.md) instructions.
