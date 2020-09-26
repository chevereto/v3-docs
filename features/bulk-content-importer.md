# Bulk content importer

This tool allows to **mass import** images, albums, and users by parsing the contents of a filesystem location. It is intended to be used when you want to import a massive amount of content that otherwise will be troublesome to import by using the API or the web gui.

::: tip Importing != Syncing
Importing takes the content from the importing path and *import it* into database, filesystem or external storage, **removing the file from the importing path**.
:::

## How to use it

Go to `dashboard/bulk`, from there you will be able to add and manage importing jobs.

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

- Create `rodolfo` user (if the user doesn't exists)
- Create album `weapons` under `rodolfo` user (if the album doesn't exists)
- Upload the images contained in `./<path>/rodolfo/weapons` to rodolfo's `weapons` album
- Upload `logo-alt.png` to `rodolfo` (no album)

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

- Create album `weapons` as guest user (if the album doesn't exists)
- Upload the images contained in `./<path>/weapons` to `weapons` album

### No parse

No folder is parsed, only images will be imported as guest.

```shell
./<path>
├── machine-gun.jpg
├── rocket-launcher.jpg
└── logo-alt.png
```

For the tree above, the parser will:

- Upload the images contained in `./<path>` to public, as guest user.

## Automatic importing

Automatic importing works by continuously observe the `importing/` path. In this path you will find folders that follow a given parsing format. Simply add contents to this folder following the convention.

| Path                       | Parsing                                                       |
| -------------------------- | ------------------------------------------------------------- |
| `./importing/parse-users`  | [Top-level folder as username](#top-level-folder-as-username) |
| `./importing/parse-albums` | [Top-level folders as albums](#top-level-folders-as-albums)   |
| `./importing/no-parse`     | [No folder parsing](#no-parse)                                |

::: warn Cron required
The system works with a scheduled command to continuously process the importing. You will need to add the crontab entry that you will find at `dashboard/bulk`. Please refer to your server administrator in how to add this entry to your server.
:::

## Manual importing

Manual importing works by creating a one-time job that will be carried on a filesystem path and parsing method of your choice.

::: warning Permissions
The path must be writable by the PHP user, make sure that `www-data` (or the specific user in your case) owns the target importing folder.
:::

Once you add the import job, click on "process" under the "actions" menu. The job status will change to "working".

::: warning Browser-based
Manual importing is orchestrated with JavaScript, meaning that you must keep the web browser active to carry on the process. Don't worry, the process can be paused/resumed at any time.
:::

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
Automatic importing may show "completed" when there's nothing else to parse, but internally it will get re-queued automatically.
:::

## Metadata

The bulk importer supports metadata (data that describes other data) using the JSON format, same as [Google Photos](#importing-from-google-photos).

Metadata must be provided per content basis, meaning that you must use one metadata file for each content.

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
            "twitter": "godlike"
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

## View logs

The whole importing process gets logged in texts files located at `/app/import/jobs/<id>/logs/`. You can tail `process.txt` and `error.txt` to get the live status of the importing process. You can also access these logs by clicking on the "Actions" menu.

## Importing from Google Photos

The metadata format used is exactly the same used by Google Photos, meaning that you can run away from that proprietary service and start owning your photos.

- Go to [Google Takeout](https://takeout.google.com/)
- Select Google Photos and follow the process
- Once you're done, you will get a zipped file
- Rename `Takeout/Google Photos` folder to the target username

From there, you can take the folder for automatic importing or one-time (manual importing).

::: warning Metadata
At this time the image metadata provided by Google Photos for images is named as `imagename.ext.json` format, which is not recognized by Chevereto yet. I'm working in add support for this in the next revision.
:::
