External storage
================

An external storage works pretty much like add a network drive to your computer, the uploaded files will be stored in this external storage rather than in your website local hard drive which helps to leverage your server load and deliver a more reliable website.

How does it works
-----------------

Instead of store the files in the server hard disk, the system will store the files in an external storage server. Chevereto will map each image to the corresponding storage system and it will use the given Storage URL to locate that file and all the Chevereto system functionalities will work exactly the same.

Step-by-step add external storage
---------------------------------

To add an external storage in Chevereto follow these steps:

*   Go to Dashboard > Settings > External Storage
*   Click on "Add storage"
*   Submit the form with the required data

If the storage credentials are correct the storage will be added and then you can toggle the activate checkbox to enable or disable that storage. When no storage is set to active the system will use the local storage.

Storage services supported
--------------------------

*   [Amazon S3](#amazon-s3)
*   [Google Cloud Storage](#google-cloud-storage)
*   OpenStack (like [RunAbove](#runabove))
*   Azure
*   Alibaba Cloud
*   Backblaze B2
*   S3 clone (like DreamObjects)
*   FTP
*   SFTP

### Amazon S3

You will need an [Amazon Web Services](https://aws.amazon.com/) (AWS) account for this. To setup Amazon S3 follow these steps:

*   Create access credentials from [Identity and Access Management](https://console.aws.amazon.com/iam/home?#users) console

*   Click on "Create New Users", make sure to enable "Programmatic access"
*   On permissions, associate **AmazonS3FullAccess**
*   Store the **user name**, **Access Key ID** and **Secret Access Key** at the end of the process

*   Create a bucket from the [S3 console](https://console.aws.amazon.com/s3)

*   Click on "Create a Bucket" and proceed to create a bucket
*   On permissions, make sure "Block new public ACLs" and "Remove public access" are unchecked (Public access settings)
*   Store the **bucket name** and the **region**
*   You don't need to setup logging

*   Add S3 storage to Chevereto

*   Go to Dashboard > Settings > External Storage
*   Click on "Add storage"
*   Fill the form with the required data that you got following this guide

If you want to use a custom domain follow the [CNAME](https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs) documentation. Otherwise just make sure that the [Storage URL](#storage-url) ends with `/<yourbucketname>/`

### Google Cloud Storage

You will need a [Google Cloud](https://cloud.google.com/) service account and [activate cloud storage](https://cloud.google.com/storage/docs/signup) for this. To setup Google Cloud Storage follow these steps:

*   Create a project
*   Go to "APIs & services" dashboard and make sure that "Google Cloud Storage JSON API" is enabled
*   Go to "APIs & services" > "Credentials", click on "Create credentials" then click on "Service account key"
*   Make sure to use the following settings:

*   Select your service account or create a new one.
*   Key type: JSON

*   Your browser will start to download the JSON key file. This file contains the key that you need to provide later on in the Chevereto Storage form.
*   Go to "Storage" then click on "Browser"
*   Create a bucket by clicking the "Create bucket" button. This will be where Chevereto will upload the images

### OpenStack (RunAbove)

OpenStack configuration will vary from each given provider. This guide setup has been successfully tested with RunAbove.

*   Identity URL: https://auth.Runabove.io/v2.0
*   Username: Your RunAbove username
*   Password: Your RunAbove password
*   Region: `SBG-1` or `BHS-1` This is the data center where your container was created
*   Container: Name of your created container
*   Tenant id: Leave it blank
*   Tenant name: Your `project id`, found on OpenStack Horizon on the left side (CURRENT PROJECT))
*   URL: Your URL to access the container (see [RunAbove CNAME](https://community.runabove.com/kb/en/object-storage/how-to-put-object-storage-behind-your-domain-name.html))

Storage URL
-----------

The storage URL is the URL that Chevereto will use to map the files stored in the given storage. This could be the direct URL, a CNAME URL, a CDN URL or any URL that resolves the requested image. This means that you can customize the URL that you want to use for the storage. Is recommended that you use URLs that match your domain so try to take advantage of using a [CNAME record](https://en.wikipedia.org/wiki/CNAME_record).

CDN over external storage
-------------------------

Since you can customize the storage URL you can easily add a CDN for each storage you want to use. You only need to go to your CDN provider and create a pull zone for the origin storage URL. So if you are using Amazon S3 the source or origin URL will be something like this:

```
http://s3.amazonaws.com/my-bucket/
```

So your CDN url will be something like this:

```
http://pullzone-url.at.cdn-service.com/
```

And a CNAME record will allow you to end up with something like this:

```
http://s3-cdn.mydomain.com/
```