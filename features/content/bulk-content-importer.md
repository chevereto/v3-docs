# Bulk content importer

::: v4
Check the updated documentation at [📥 Bulk importer](https://v4-admin.chevereto.com/dashboard/bulk-importer.html).
:::

This tool allows to **mass import** images, albums, and users by parsing the contents of a filesystem location. It is intended to be used when you want to import a massive amount of content that otherwise will be troublesome to import by using the API or the web gui.

::: tip Importing != Syncing
Importing takes the content from the importing path and *import it* into database, filesystem or external storage. Failed files will be moved to a special directory at `./importing/failed/`.
:::

## How to use it

::: tip demo-importing
Check the repository at [chevereto/demo-importing](https://github.com/chevereto/demo-importing) for an example on how to organize your files to use the Bulk content importer.
:::

Bulk content importer works by scanning the `importing/` path, where folders are used to denote a given parsing format for the files contained within.

Placing the content at these directories following the [parsing formats](#parsing-formats) conventions will enable to import images to users created as a folder, add categories, etc.

| `./importing/`  | Parsing                                                       |
| --------------- | ------------------------------------------------------------- |
| `parse-users/`  | [Top-level folder as username](#top-level-folder-as-username) |
| `parse-albums/` | [Top-level folders as albums](#top-level-folders-as-albums)   |
| `no-parse/`     | [No folder parsing](#no-parse)                                |

::: tip
Go to `dashboard/bulk` to review importing jobs.
:::

### Charset

Files and `.json` metadata must be in UTF-8.

### Command

<code-group>
<code-block title="V3.20+">
```sh
sudo -u www-data php /var/www/html/cli.php -C importing
```
</code-block>

<code-block title="Older">
```sh
sudo -u www-data IS_CRON=1 THREAD_ID=1 php importing.php
```
</code-block>
</code-group>

### Cron entry

The importing command can be automatically scheduled by using [cron](https://en.wikipedia.org/wiki/Cron):

```sh
* * * * * COMMAND_HERE >/dev/null 2>&1
```

### Threads

You can speed up the process by running the importing in multiple threads by passing different `env` for `THREAD_ID`.

```sh
sudo -u www-data THREAD_ID=1 php cli.php -C importing
sudo -u www-data THREAD_ID=2 php cli.php -C importing
```

### File locking

The importing process can be locked by placing an empty lock file at `./importing/.lock`.

The process won't be carried until this file gets removed. This comes handy when you want to import a large dataset and you care about the nested folder structure.

## Parsing formats

The bulk importer scans the target importing directory and creates content accordingly parsing rules described below. User assets (avatar, background image) will get uploaded to the system user folder.

::: tip
The parser creates users and albums only if those doesn't exists. It detects if `username` exists, and it does the same for albums (based on the album name + its owner).
:::

### Top-level folder as username

Top-level folders within the importing path will be handled as `username`. Second-level folders will be parsed as `album name`.

```shell
./<path>
└── rodolfo <- username
    ├── weapons <- album name
    │   ├── machine-gun.jpg
    │   └── rocket-launcher.jpg
    └── logo-alt.png
```

For the tree above, the parser will:

* Create `rodolfo` user (if the user doesn't exists)
* Create album `weapons` under `rodolfo` user (if the album doesn't exists)
* Upload the images contained in `./<path>/rodolfo/weapons` to rodolfo's `weapons` album
* Upload `logo-alt.png` to `rodolfo` (no album)

### Top-level folders as albums

Top-level folders within the importing path will be handled as `album_name`.

```shell
./<path>
└── weapons <- album name
    ├── machine-gun.jpg
    ├── rocket-launcher.jpg
    └── logo-alt.png
```

For the tree above, the parser will:

* Create album `weapons` as guest user (if the album doesn't exists)
* Upload the images contained in `./<path>/weapons` to `weapons` album

### No parse

No folder is parsed, only images will be imported as guest.

```shell
./<path>
├── machine-gun.jpg
├── rocket-launcher.jpg
└── logo-alt.png
```

For the tree above, the parser will:

* Upload the images contained in `./<path>` to public, as guest user.

## Statuses

The importing jobs statuses get defined as follow:

| Status    | Description                                     |
| --------- | ----------------------------------------------- |
| Queued    | Job is in the processing queue (default status) |
| Working   | Job is being parsed                             |
| Paused    | Job is paused                                   |
| Canceled  | Job aborted by the user                         |
| Completed | Job completed (everything parsed)               |

::: tip
Importing may show "completed" when there's nothing else to parse, but internally it will get re-queued automatically.
:::

## Metadata

The bulk importer supports metadata using the JSON format, same as [Google Photos](#importing-from-google-photos). Metadata must be provided per content basis, meaning that you must use one metadata file for each content.

::: tip UTF-8
Metadata must be in UTF-8 format. Don't forget to fix your charset.
:::

| Content                               | Type     | Metadata file                          |
| ------------------------------------- | -------- | -------------------------------------- |
| `rodolfo/`                            | username | `rodolfo/metadata.json`                |
| `rodolfo/weapons/`                    | album    | `rodolfo/weapons/metadata.json`        |
| `rodolfo/weapons/machine-gun.jpg`     | image    | `rodolfo/weapons/machine-gun.json`     |
| `rodolfo/weapons/rocket-launcher.jpg` | image    | `rodolfo/weapons/rocket-launcher.json` |
| `rodolfo/logo-alt.png`                | image    | `rodolfo/logo-alt.json`                |

Tree below shows metadata for the table above.

```shell
./<path>
└── rodolfo
    ├── weapons
    │   ├── machine-gun.jpg
    │   ├── machine-gun.json
    │   ├── rocket-launcher.jpg
    │   ├── rocket-launcher.json
    │   └── metadata.json
    ├── logo-alt.png
    ├── logo-alt.json
    └── metadata.json
```

::: tip Note
Metadata properties merges the content being parsed, meaning that you don't need to explicitly indicate all properties, only what you need to describe.
:::

### Image metadata

JSON metadata file below provides a sample metadata for `machine-gun.jpg`.

```json
{
    "imageData": {
        "title": "Machine gun",
        "description": "Say hello to my little friend!",
        "nsfw": false,
        "category": {
            "name": "Guns",
            "urlKey": "Guns",
            "description": "Guns don't kill people, sugar does."
        }
    }
}
```

::: tip Image categories
Image categories will be created if needed long as you provide both `name` and `urlKey`.
:::

### Album metadata

JSON metadata file bellow provides a sample metadata for `guns/` album.

```json
{
    "albumData": {
        "title": "Guns",
        "description": "Guns should be banned.",
        "access": "private",
        "privacy": {
            "type": "password",
            "password": "12345"
        }
    }
}
```

For album privacy, you can pick from:

| Privacy type       | Effect                                        |
| ------------------ | --------------------------------------------- |
| `public`           | Public album (default)                        |
| `private`          | Private album for owner                       |
| `private_but_link` | Same as `private` + those with the album link |
| `password`         | Will set the password for accessing the album |

For example, if you need `private_but_link` the metadata property should look like this:

```json
{
    "privacy": {
        "type": "private_but_link"
    }
}
```

### User metadata

JSON metadata file bellow provides a sample metadata for `rodolfo/` user.

```json
{
    "userData": {
        "role": "user",
        "name": "Rodolfo Berrios",
        "username": "rodolfo",
        "email": "rodolfo@chevereto.com",
        "website": "https://rodolfoberrios.com",
        "bio": "I'm the Master of Puppets @chevereto, the alpha-omega. He/Him/They.",
        "profileImages": {
            "avatar": "rodo-avatar.jpg",
            "background": "rodo-bkg.jpg"
        },
        "networks": {
            "facebook": "no!",
            "twitter": "no!"
        },
        "timezone": "America/Santiago",
        "language": "cl",
        "private": false
    }
}
```

Profile images have to be located in the `.assets/` folder inside the user folder.

```shell
./<path>
└── rodolfo
    └── .assets
        ├── rodo-avatar.jpg
        └── rodo-bkg.jpg
```

::: warning User assets
The type of the image assets must be one of the file formats handled by your installation.
:::
