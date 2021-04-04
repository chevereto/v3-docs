# 🚀 Upgrading

This section outlines the upgrade process required to install V3. You can upgrade to V3 from _any_ previous old release.

::: warning Unsupported
These versions are really old, if you encounter any issue upgrading from these please report it.
:::

## Update from V2.1 - V2.6

When updating from these old versions try to always perform a database backup of your system.

* Download the [latest release](https://chevereto.com/panel/downloads)
* Save the DB connection info from `includes/config.php`
* Save the `__CHV_CRYPT_SALT__` that you have in `includes/definitions.php`
* Upload all the files except for the images folder
* Go to your website, the system will ask you for the DB connection info
* Complete the process with the required information
* The system MUST ask you for your `__CHV_CRYPT_SALT__`. If not, don't continue the process and ask for support
* Remove the `/admin` folder, you won't need it anymore. Since 3.0.0 the admin folder is `/dashboard`.

## Update from 2.0.X and older

* Update to 2.1 (or newer) following the instructions in the download package
* Proceed with the [Update from 2.1 - 2.6](#update-from-v2-1-v2-6) instructions
