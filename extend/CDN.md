# Content Delivery Network (CDN)

A content delivery network is system that offload your website by distributing your content among several edge servers. When using a CDN the content is cached in this network and delivered using the closest edge server rather than direct access to the content in your server. You may check the [Wikipedia entry for CDN](https://en.wikipedia.org/wiki/Content_delivery_network) if you want to learn more.

This documentation refers to CDN for your local storage. For CDN on external storage check [this link](./storages.md).

## How does it works

The CDN services works by using a "Pull zone" which on setup will get you a "CDN URL" or "Pull zone URL". This URL will be used to replace your normal URL for the static content. For example, lets say that an image in your server can be accessed using this URL:

```
http://demo.chevereto.com/image/picture.jpg
```

When you turn on the CDN in Chevereto the system will replace your default URL with the CDN URL so the displayed URL will be:

```
http://pullzone-url.at.cdn-service.com/image/picture.jpg
```

The origin (the URL at your server) will be used on demand to cache the content to the CDN. The whole thing will need time to show improvements to end users depending on how many activity has your website.

## Step-by-step Enable CDN

First of all you will need to create a pull zone in your CDN provider. To enable CDN in Chevereto follow these steps:

- Go to Dashboard > Settings > External Services
- Go to the CDN menu and set "Enabled"
- Put the CDN URL in the form
- Save your changes

## Custom domain (CNAME record)

Your CDN provider will give you an URL to pull the content from your website and put it in the CDN. Most likely they will give you a long URL like this:

```
http://pullzone-url.at.cdn-service.com/
```

Most CDN providers allows you to use a [CNAME record](https://en.wikipedia.org/wiki/CNAME_record) so you will end up with something like this:

```
http://cdn.mydomain.com/
```

Benefits of using the CNAME is that if you switch CDN providers the change will be seamless and the URLs will keep working as nothing have been changed. Also if you decide to turn off the CDN at all you simply change the CNAME to your domain and everything will keep working. Is highly recommended that you use your CDN with CNAME.

Refer to your CDN provider for instructions regarding the use of a CNAME record.
