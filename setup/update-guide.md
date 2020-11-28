# Update Guide

This guide contains the steps to update Chevereto to its last version. Depending on which version you are currently running you should follow the adequate update procedure.

::: warning Check system requirements
Always check that you requirements won't conflict with the update. In doubt, you can always [ask first](../get-updates.md).
:::

::: danger Backup your database
Make sure to always have a working backup of your database. It will be impossible to rollback without a database backup.
:::

## One-click update

- Go to `/dashboard` and click on "check for updates"
- The system will carry the update
- Restore or merge your file changes (only if needed)

::: tip
If the process fails, try with the manual update procedure.
:::

## Manual update

This outlines the manual update procedure which may be required in certain circumstances:

- Unable to reach `chevereto.com` API server (required to download the software)
- Missing permissions on the `php` user over the software files
- DB queries need to be manually executed (for system stability)

### Database

::: danger Dumped update query
If at `/install` you see a plain text message staring with `#Dumped update query` it means that you MUST manually run the printed queries in your MySQL console.
:::

If [dump update query](../settings/system.md#dump-update-query) setting is **enabled** or if the images table has **more than 1,000,000** records, Chevereto will dump the SQL statements required to carry the database update which must run directly in the SQL console.

Chevereto has this caveat to potentially avoid breaking your database, as the process could take several minutes to complete. When manually updating the database always keep the following considerations:

- Disconnect all peers
- Turn off the SQL server, work directly in its console (phpMyAdmin, Adminer, CLI)
- Run the SQL statements one-by-one (a semi-colon `;` denotes when a SQL statement ends)
- If everything goes well, turn everything back online


### System files

- Download the [latest release](https://chevereto.com/panel/downloads)
- Backup all your file changes (theme, routes, etc.)
- Upload all the files and folders from the `chevereto` folder
- Login to your website (admin user) and then go to `/install`
- Restore or merge your file changes (only if needed)

## Legacy Update

> 👴🏾 These are steps needed when updating from very old releases (unsupported)

::: warning Unsupported
These versions are really old, if you encounter any issue upgrading from these please report it.
:::

### Update from V2.1 - V2.6

When updating from these old versions try to always perform a database backup of your system.

- Download the [latest release](https://chevereto.com/panel/downloads)
- Save the DB connection info from includes/config.php
- Save the `__CHV_CRYPT_SALT__` that you have in `includes/definitions.php`
- Upload all the files except for the images folder
- Go to your website, the system will ask you for the DB connection info
- Complete the process with the required information
- The system MUST ask you for your `__CHV_CRYPT_SALT__`. If not, don't continue the process and ask for support
- Remove the `/admin` folder, you won't need it anymore. Since 3.0.0 the admin folder is `/dashboard`.

### Update from 2.0.X and older

- Update to 2.1 (or newer) following the instructions in the download package
- Proceed with the [Update from 2.1 - 2.6](#update-from-21---26) instructions