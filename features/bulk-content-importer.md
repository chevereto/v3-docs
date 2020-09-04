# Bulk content importer

This tool allows to mass insert images, albums, and users to your Chevereto based website by parsing the contents of a filesystem folder.

## How it works

The bulk importer scans the target directory and creates content accordingly. The image files will get uploaded to the existing local/remote storage instance. User assets (avatar and background images) will get uploaded to the system user folder.

The process removes the importing directory and its contents. Make sure that you have a copy in case something goes wrong.

## How to use it

You can use this tool by navigating to `dashboard/bulk` (requires 3.12.0). In the bulk importer page, you will be able to both add and manage the current importing jobs.

## Directory structures

A folder based structure allows adding users and albums. Images will get parsed even without a folder based structure. Note that additional folder levels get ignored.

### Top level folders as users

Top level folders get parsed as users, identified by the username. Any content inside the user folder gets bound to the user. Second level folders get parsed as user albums. Directory structure: `/<username>/<album>/filename.jpg`

### Top level folders as albums

Top level folders get parsed as guest albums. Any image inside the album folder gets bound to the alleged album. Directory structure: `/<album>/filename.jpg`

## Metadata

Optionally, you can define metadata (data that describes other data) using JSON. Metadata must be provided per content basis, meaning that you must use one metadata file for each content.

The metadata information merges the content being parsed so you don't need to indicate all metadata properties, only what you want to add.

### Image metadata

Image metadata must be provided as `<filename>.json` (same directory). Metadata for `/<album>/example.jpg` must be defined at `/<album>/example.json`:

```json
{
    "imageData": {
        "title": "Pewito color cafe",
        "description": "Podemos apreciar un pewito de color cafe",
        "nsfw": false,
        "category": {
            "name": "Animals",
            "urlKey": "animals",
            "description": "Images of animals from all around the globe"
        }
    }
}
```

Missing categories will be automatically added long as you provide both `name` and `urlKey`.

### Album metadata

Album metadata must be provided inside the album folder. `/<album>/metadata.json`:

```json
{
    "albumData": {
        "title": "Detroit Rock City (KISS)",
        "description": "Pics from last concert in Detroit.",
        "access": "private",
        "privacy": {
            "type": "password",
            "password": "12345"
        }
    }
}
```

### User metadata

User metadata must be provided inside the user folder. `/<user>/metadata.json`:

```json
{
    "userData": {
        "role": "user",
        "name": "Peter Jackson",
        "username": "peter",
        "email": "peter@welcometomordor.com",
        "website": "http://hereibringyouthestuffpeter.com",
        "bio": "Maker of TLOTR and that other movie",
        "profileImages": {
            "avatar": "7Ns6rtiI_400x400.jpg",
            "background": "1500x500.jpg"
        },
        "networks": {
            "facebook": "peterj",
            "twitter": "peterjk"
        },
        "timezone": "Pacific/Auckland",
        "language": "en",
        "private": false
    }
}
```

Profile images have to be located in the `.assets` folder inside the user folder.

The filename and type of the image assets must be one of the file formats handled by your installation.

## Processing

To start an importing task, click on "process" under the "actions" menu.

## Statuses

The importing jobs statuses get defined as follow:

- Queued: Job is in the processing queue (default status).
- Working: Job is being parsed.
- Paused: Job is paused.
- Canceled: Job aborted by the user.
- Completed: Job completed.

Once you start a process, its status will change to "working". If you abandon a working process it will get locked for processing. After a short time, the status will get changed to "paused".

## View logs

The whole importing process gets logged in texts files located at `/app/import/jobs/<id>/logs/`. You can tail `process.txt` and `error.txt` to get the live status of the importing process. You can also access these logs by clicking on the "Actions" menu.
