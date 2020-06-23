Update guide
============

This guide contains the steps to update Chevereto to its last version. Depending on which version you are currently running you should follow the adequate update procedure.

One-click update (3.6.9 and newer)
----------------------------------

*   Go to `/dashboard` and click on "check for updates"
*   The system will carry the update
*   Restore or merge your file changes (only if needed)

Manual procedures
-----------------

### Manual update (files)

This procedure will be required if unable to login to your installation or if your server is unable to fetch the Chevereto API.

*   Download the [latest release](https://chevereto.com/panel/downloads)
*   Backup all your file changes (theme, routes, etc.)
*   Upload all the files and folders from the `chevereto` folder
*   Login to your website (admin user) and then go to `/install`
*   Restore or merge your file changes (only if needed)

### Manual update (database)

If the images table has more than 1,000,000 records, Chevereto will dump the SQL statements required to carry the database update which must run directly in the SQL console. You can force dumping the update query by going to `/dashboard/settings/system`.

*   Disconnect all peers
*   Turn off the SQL server, work directly in its console
*   Run the SQL statements one-by-one directly in the SQL console
*   If everything goes well, turn everything back online

Update from 2.1 - 2.6
---------------------

When updating from these old versions try to always perform a database backup of your system.

*   Download the [latest release](https://chevereto.com/panel/downloads)
*   Save the DB connection info from includes/config.php
*   Save the `__CHV_CRYPT_SALT__` that you have in `includes/definitions.php`
*   Upload all the files except for the images folder
*   Go to your website, the system will ask you for the DB connection info
*   Complete the process with the required information
*   The system MUST ask you for your `__CHV_CRYPT_SALT__`. If not, don't continue the process and ask for support
*   Remove the `/admin` folder, you won't need it anymore. Since 3.0.0 the admin folder is `/dashboard`.

Update from 2.0.X and older
---------------------------

*   Update to 2.1 (or newer) following the instructions in the download package
*   Proceed with the [Update from 2.1 - 2.6](#from-2_1-to-2_5) instructions