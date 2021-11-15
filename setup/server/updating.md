# Server Updating

This section outlines the update process required to upgrade to V3 from old releases (V3.X).

::: danger Checklist
* Check that your server meets the [requirements](../server/requirements.md) for running the target release to update.
* Make sure to have a recent backup of your database and your code modifications (if any).
* After the update you will need to re-apply your modifications.
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

* Upload the [latest release](https://chevereto.com/panel/downloads) package to your server (usually in the `public_html` folder)
* Unzip the software using your server built-in `unzip` utility
* Remove the `.zip` file
* Go to `/install`
