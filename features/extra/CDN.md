# Content Delivery Network (CDN)

A content delivery network is system that offload your website by distributing your content among several edge servers. When using a CDN the content is cached in this network and delivered using the closest edge server rather than direct access to the content in your server.

## How it works

The CDN services works by using a "Pull zone" which is an endpoint that fetches resources from your website and from there, it re-distributes the access of these. The pull zone is actually an URL that will be configured to deliver the source contents.

For example, lets say that an image resource in your server can be accessed using this URL:

```
https://demo.chevereto.com/image/picture.jpg
```

When using a CDN the URL used will be the pull zone URL, and it will look like this:

```
https://pullzone-url.at.cdn-service.com/image/picture.jpg
```

The origin (the URL at your server) will be used on demand to cache the content to the CDN. The whole thing will need time to show improvements to end users depending on how many activity has your website.

## Enable CDN for your website

Enabling CDN for your website will distribute the loading of your website static assets like `js`, `css`, fonts, etc. It will also distribute the loading of user generated content stored in local (no external storage).

- Go to Dashboard > Settings > External Services
- Go to the CDN menu and set "Enabled"
- Put the CDN URL in the form
- Save your changes

## Enable CDN for external storage

Enabling CDN for external storage is trivial as provide the [Storage URL](../settings/external-storage.md#storage-url).

## Custom domain (CNAME record)

Your CDN provider will give you an URL to pull the content from your website and put it in the CDN. Most likely they will give you a long URL like this:

```
https://pullzone-url.at.cdn-service.com/
```

Most CDN providers allows you to use a [CNAME record](https://en.wikipedia.org/wiki/CNAME_record) so you will end up with something like this:

```
https://cdn.mydomain.com/
```

Benefits of using the CNAME is that if you switch CDN providers the change will be seamless and the URLs will keep working as nothing have been changed. Also if you decide to turn off the CDN at all you simply change the CNAME to your domain and everything will keep working. Is highly recommended that you use your CDN with CNAME.

Refer to your CDN provider for instructions regarding the use of a CNAME record.

