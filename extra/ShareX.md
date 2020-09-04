# ShareX

[ShareX](https://en.wikipedia.org/wiki/ShareX) is an utility for Windows that allows you to upload images, screen captures, text and other kind of content to several providers. You can easily use ShareX with your Chevereto website to upload images directly from your computer thanks to the [Chevereto API](./../api/V1.md).

## Get ShareX

ShareX is free and Open Source. You can download it from [ShareX website](https://getsharex.com/) and once downloaded proceed to install it in your computer.

## Add Chevereto to ShareX

Since ShareX version 9.4.0 you only need to:

- Go to image destination settings
- Select «Chevereto»
- Fill your website details

For older ShareX versions you need to manually import Chevereto to ShareX. First copy the following code block somewhere and edit it to match your Chevereto installation.

```json
{
    "Name": "Chevereto",
    "RequestType": "POST",
    "RequestURL": "http://mysite.com/api/1/upload", // edit this
    "FileFormName": "source",
    "Arguments": {
    "key": "your API key goes here", // edit this
    "format": "redirect",
    "source": "%input"
    },
    "ResponseType": "RedirectionURL",
    "RegexList": [],
    "URL": "",
    "ThumbnailURL": "",
    "DeletionURL": ""
}
```

Once you are ready editing this code, copy all the code and follow these steps:

- Open ShareX
- Click on "Destinations" and then go to "Destination Settings..."
- Scroll down and click "Custom uploaders"
- Click on "Import" and then "From clipboard" (is on the column at the left)

You will see that the information from the code block has been added to ShareX. Click on "Test" next to the "Image uploader" section. You should see something like this in the "Test result" log:

```
URL: http://mysite.com/image/<id>
```

If everything is OK you will see that and ShareX is ready to upload directly to you Chevereto website.

## Upload images to an user account

Chevereto API V1 works uploading images as guest. If you want to upload images to a given user check the [API user upload Workaround](./../api/V1.md).

## Need help?

Refer to this topic for help about [ShareX and Chevereto](https://chevereto.com/community/threads/sharex-and-chevereto.5254/).
