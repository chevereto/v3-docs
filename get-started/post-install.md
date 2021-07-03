# Post-Install

This document outlines the installation process once the application files have been provided to the server.

::: tip
If you haven't provided the application files you need to go back to [Installation](installation.md) guide.
:::

## Initial setup

Initial setup refers to the process that creates the chevereto database tables and the Chevereto admin user. This is needed just once, the first time the system gets installed and it can be made using HTTP (web) or CLI.

### HTTP setup (recommended)

* Go to `/install` and submit the installation form.

We recommend this method as is completely gui-based and very friendly to follow.

### CLI setup

* Run the following command:

```sh
sudo -u www-data php /var/www/html/cli.php -C install \
    -u dev \
    -e dev@chevereto.loc \
    -x password
```

| Option | Description    |
| ------ | -------------- |
| u      | Admin username |
| e      | Admin email    |
| x      | Admin password |

Note that this method relies on the PHP CLI so it should be preferred when possible as it is more reliable than HTTP API just because it doesn't require the HTTP web server. Kindly note that CLI setup is for advanced users.

## Setup cron

Background jobs needs to be configured by running a [cron](../setup/system/requirements.md#cron). You need to configure this and make sure that is working every time you deploy Chevereto.

::: danger Must have
If this is not configured Chevereto won't remove expired images, check for updates, process external storage deletes and run maintenance tasks.
:::

## Setup email

Go to [Email settings](../settings/email.md) to understand how configure the transactional email service. You need to configure this every time you change email delivery provider.

::: danger Must have
If email delivery isn't configured Chevereto won't be able to recover user's lost passwords neither complete registrations requiring to confirm email address.
:::
