# Server Updating

This section outlines the update process required to upgrade to V3 from old releases (V3.X).

::: danger Checklist
* Check that your server meets the [requirements](../server/requirements.md) for running the target release to update.
* Make sure to have a recent backup of your database and your code modifications (if any).
* After the update you will need to re-apply your modifications.
:::

## Using Release package

The release package is a `zip` file containing the software files. Once extracted, the software is ready to be updated.

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
&& composer install --ignore-platform-reqs \
&& chown www-data: . -R \
&& php cli.php -C install
```
</code-block>
</code-group>

## HTTP update (legacy)

::: tip Not working?
The HTTP method doesn't provide the same reliability as the other methods. Don't worry if it randomly fails, if that ever happens simply try again with an alternative update method instead.
:::

👉 This method should be used only as last resort.

* Go to [panel/license](https://chevereto.com/panel/license) and grab your V3 license key
* Go to `/dashboard` and click on "check for updates"
* Install the update when prompted
* Provide your license key
