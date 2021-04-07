# ⚡ Updating

::: warning Check system requirements
Always check that your server meets the [requirements](../setup/system/requirements.md) for running the target release to update.
:::

::: danger Backup
Make sure to always have a working backup of your database and your code modifications (if any). Keep in mind that after the update you will need to re-apply your modifications.
:::

## CLI update (3.19+)

::: tip Recommended
This is recommended as it has zero chances to fail due to time execution limitations.
:::

* Run the following command:

<code-group>
<code-block title="Shell">
```sh
sudo -u www-data php cli.php -C update
```
</code-block>

<code-block title="Docker">
```sh
docker exec -it \
    --user www-data \
    my-container /usr/local/bin/php /var/www/html/cli.php -C update
```
</code-block>
</code-group>

## HTTP update

* Go to `/dashboard` and click on "check for updates"
* Install the update when prompted

## Manual update

* Download the [latest release](https://chevereto.com/panel/downloads)
* Upload all the files and folders from the `chevereto` folder to your target website
* Go to `/install`
