# External storage

External storage works like adding a network drive to your computer. The uploaded files will be stored in this external storage rather than in your website local hard drive, which helps to leverage your server load and deliver a more reliable website.

## How does it works

Chevereto maps each image to the corresponding storage server using the given Storage URL to locate that file.

## URL Mapping

The storage URL will be used to "map" the uploaded images to the target storage URL by appending the file location to this URL. For example, if you set `https://storage.com/bucket/` as URL, it will map to `https://storage.com/bucket/the-file-path.jpg`. You can completely customize this URL to map your storage scheme.

::: warning
Chevereto only maps the URL to present a resulting image storage URL. The storage URL must resolve to the mapped URL
:::

## Storage URL

The storage URL is the URL that Chevereto will use to map the files stored in the given storage. This could be the direct URL, a CNAME URL, a CDN URL or any URL that resolves the requested image. This means that you can customize the URL that you want to use for the storage. Is recommended that you use URLs that match your domain so try to take advantage of using a [CNAME record](https://en.wikipedia.org/wiki/CNAME_record).

## CDN over external storage

Since you can customize the storage URL you can easily add a CDN for each storage you want to use. You only need to go to your CDN provider and create a pull zone for the origin storage URL. So if you are using Amazon S3 the source or origin URL will be something like this:

```
https://s3.amazonaws.com/my-bucket/
```

So your CDN url will be something like this:

```
https://pullzone-url.at.cdn-service.com/
```

And a CNAME record will allow you to end up with something like this:

```
https://s3-cdn.mydomain.com/
```

## dding a new external storage

If the storage credentials are correct the storage will be added and then you can toggle the activate checkbox to enable or disable that storage. When no storage is set to active the system will use the local storage.

## External storage APIs

### Amazon S3

The Amazon S3 API allows to upload images to an [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3) bucket. You will need an [Amazon Web Services](https://aws.amazon.com/) (AWS) account for this.

- To setup Amazon S3:
  - Create access credentials from [Identity and Access Management](https://console.aws.amazon.com/iam/home?#users) console
  - Click on "Create New Users", make sure to enable "Programmatic access"
  - On permissions, associate **AmazonS3FullAccess**
  - Store the **user name**, **Access Key ID** and **Secret Access Key** at the end of the process
  - Create a bucket from the [S3 console](https://console.aws.amazon.com/s3)
  - Click on "Create a Bucket" and proceed to create a bucket
  - On permissions, make sure "Block new public ACLs" and "Remove public access" are unchecked (Public access settings)
  - Store the **bucket name** and the **region**
  - You don't need to setup logging

If you want to use a custom domain follow the [CNAME](https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs) documentation. Otherwise just make sure that the [Storage URL](#storage-url) ends with `/<your_bucket_name>/`

### S3 Compatible

The S3 Compatible API allows to upload images to any bucket implementing the S3 standard. The configuration is exactly the same as Amazon S3 but the storage isn't provided by Amazon.

### Backblaze B2

Todo.

### FTP

The FTP API allows to upload images to a server implementing the [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol).

### SFTP

The SFTP API allows to upload images to a server implementing the [SSH File Transfer Protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol).

### Google Cloud

The Google Cloud API allows to upload images to a Google Cloud Storage bucket. You will need a [Google Cloud](https://cloud.google.com/) service account and [activate cloud storage](https://cloud.google.com/storage/docs/signup) for this.

- To setup Google Cloud Storage:
  - Create a project
  - Go to "APIs & services" dashboard and make sure that "Google Cloud Storage JSON API" is enabled
  - Go to "APIs & services" > "Credentials", click on "Create credentials" then click on "Service account key"
  - Make sure to use the following settings:
    - Select your service account or create a new one.
    - Key type: JSON
    - Your browser will start to download the JSON key file. Store **the file contents**.
  - Go to "Storage" then click on "Browser"
  - Create a bucket by clicking the "Create bucket" button. Store the **bucket name**.

### Local

The [Local API](../settings/external-storage.md#local) allows to upload images to any filesystem path in the server.

### Microsoft Azure

Todo.

### OpenStack

The [OpenStack API](../settings/external-storage.md#openstack) allows to upload images to an [OpenStack](https://en.wikipedia.org/wiki/OpenStack) container.

- OpenStack configuration for RunAbove:
  - Identity URL: <https://auth.Runabove.io/v2.0>
  - Username: Your RunAbove username
  - Password: Your RunAbove password
  - Region: `SBG-1` or `BHS-1` This is the data center where your container was created
  - Container: Name of your created container
  - Tenant id: Leave it blank
  - Tenant name: Your `project id`, found on OpenStack Horizon on the left side (CURRENT PROJECT))
  - URL: Your URL to access the container (see [RunAbove CNAME](https://community.runabove.com/kb/en/object-storage/how-to-put-object-storage-behind-your-domain-name.html))
