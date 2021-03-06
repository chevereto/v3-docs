# Server Updating

This section outlines the update process required to upgrade to V3 from old releases (V3.X).

::: danger
* Always check that your server meets the [requirements](../server/requirements.md) for running the target release to update.
* Make sure to always have a working backup of your database and your code modifications (if any). Keep in mind that after the update you will need to re-apply your modifications.
:::

## CLI update (V3.20+)

* Run the following command:

```sh
sudo -u www-data php /var/www/html/cli.php -C update
```

## HTTP update

* Go to `/dashboard` and click on "check for updates"
* Install the update when prompted

## Manual update

* Download the [latest release](https://chevereto.com/panel/downloads)
* Upload all the files and folders from the `chevereto` folder to your target website
* Go to `/install`
