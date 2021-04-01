# ⚡ Updating

This section outlines the update process required for existing Chevereto V3 instances.

::: warning Check system requirements
Always check that your server meets the requirements for running the target release to update.
:::

::: danger Backup your database
Make sure to always have a working backup of your database. It will be impossible to rollback without a database backup.
:::

## One-click update

* Go to `/dashboard` and click on "check for updates"
* Install the update when prompted
* Restore or merge your file changes (only if needed)

::: tip
If the process fails, try with [manual update](#manual-update).
:::

## Manual update

* Download the [latest release](https://chevereto.com/panel/downloads)
* Backup all your file changes (theme, routes, etc.)
* Upload all the files and folders from the `chevereto` folder
* Login to your website (admin user) and then go to `/install`
* Restore or merge your file changes (only if needed)
