# CloudFlare

[CloudFlare](https://en.wikipedia.org/wiki/CloudFlare) is a reverse proxy that is widely used to speed up and add security to websites.

## Setup CloudFlare

Go to [create an account](https://www.cloudflare.com/sign-up) and follow the steps. You will need to do some changes to your website DNS so be aware of that. Some hosting companies have partnerships with CloudFlare so in those cases you can enable CloudFlare directly from your hosting account.

## Real connecting IP

CloudFlare is a proxy, so it is required to pass the real peer IP to your webserver, otherwise the registered IPs will match CloudFlare and not the end-user. For Nginx, you must use `ngx_http_realip_module`. For Apache, `mod_remoteip`.

Kindly read the [CloudFlare documentation](https://support.cloudflare.com/hc/en-us/articles/200170786) regarding this. If you run Nginx, we recommend to check this repository: [ergin/nginx-cloudflare-real-ip](https://github.com/ergin/nginx-cloudflare-real-ip).

## CloudFlare HTTPS

CloudFlafe offers a wide range of HTTPS solutions that allows you to easily turn on/off SSL on your website. Depending on what kind of certificate you want to handle they offer "Flexible" and "Full" SSL variations. To enable HTTPS follow these steps:

- Go to your [websites](https://www.cloudflare.com/my-websites)
- Click on the gear icon and select "CloudFlare settings"
- Scroll down to the SSL section and select your configuration

### Force HTTPS

By default CloudFlare HTTPS doesn't force all the traffic to HTTPS. To force HTTPS do the following:

- Go to your [websites](https://www.cloudflare.com/my-websites)
- Click on the gear icon and select "Page rules"
- Enter your website in the URL pattern input
- Toggle the "Always use HTTPS" switch
- Click on "Add rule" at the bottom

By doing this all the traffic of your website will use HTTPS. When someone access your website using HTTP, CloudFlare will redirect those request to HTTPS.

## More help

Visit [CloudFlare Support](https://support.cloudflare.com/) if you need more help. You can also contact [Chevereto support](https://chevereto.com/support) if you need anything.
