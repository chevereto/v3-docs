# System

`/dashboard/settings/system`

## Automatic updates check

Toggles the automatic updates check. When enabled, your installation will automatically check for new updates.

| Value  | Effect  |
|---|---|
| Enabled  | Enable automatic updates check  |
| Disabled  | Disable automatic updates check  |

## Display available updates notification

Toggles the display of a system notification on update available.

| Value  | Effect  |
|---|---|
| Enabled  | Enable available updates notification  |
| Disabled  | Disable available updates notification  |

## Dump update query

Toggles the display of the update query. When enabled, the update query will be shown and not executed.

::: warning
This is automatically enabled if the installation holds more than 1,000,000 (1M) images. This is because is safer to run the query directly in the database console.
:::

| Value  | Effect  |
|---|---|
| Enabled  | Dump the update query (queries should be manually executed)  |
| Disabled  | Run the update query (queries will be executed directly)  |

## SEO image URLs

Toggles image SEO URLs.

When enabled, the image URL will contain its title, like `/image/image-title.<id>`.

| Value  | Effect  |
|---|---|
| Enabled  | Enable SEO image URLs |
| Disabled  | Disable SEO image URLs  |

## SEO album URLs

Toggles album SEO URLs.

When enabled, the album URL will contain its title, like `/album/album-name.<id>`.

| Value  | Effect  |
|---|---|
| Enabled  | Enable SEO album URLs |
| Disabled  | Disable SEO album URLs  |

## Minify code

Toggles CSS and JSS minification.

When enabled, `*.min.js` and `*.min.css` will be automatically used.

| Value  | Effect  |
|---|---|
| Enabled  | Enable minify code |
| Disabled  | Disable minify code  |

## Maintenance

Toggles maintenance mode.

When enabled, the website will show a maintenance message and no actions will be allowed.

| Value  | Effect  |
|---|---|
| Enabled  | Enable maintenance mode |
| Disabled  | Disable maintenance mode  |

## Crypt salt

The crypt salt used to encode DB integer IDs to alphanumeric representations.

::: warning
This value is shown only for reference. It shouldn't be edited.
:::

| Type  | Example  |
|---|---|
| String  | bnnnfer98 |

## PHP error reporting

Toggles PHP error reporting. When enabled, the system will use:

```php
error_reporting(E_ALL ^ E_NOTICE);
```

| Value  | Effect  |
|---|---|
| Enabled  | Enable PHP error reporting |
| Disabled  | Disable PHP error reporting  |

## Debug level

Shows the debug level. This value is taken from the [settings file](../setup/settings-file.md).

| Type  | Example  |
|---|---|
| Integer  | Print and log errors |
