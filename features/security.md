# Security

## Encoded IDs

Chevereto public IDs are encoded in order to avoid enumeration and get hard to guess URLs. All the users, images and albums ids are encoded for public use.

Public IDs are encoded to avoid any attempt of content enumeration attack.

### Encoding and decoding IDs

On installation, Chevereto creates a randomly generated `crypt_salt` which is used by the `CHV\encodeID()` and `CHV\decodeID()` functions. This allows to convert the numeric ids stored in the database to alphanumeric ids. Public ids vary from each different installation.

### Making encoded IDs larger

Larger encoded IDs will be always better for preserving the privacy of the uploaded content.

You have to alternatives to achieve larger encoded IDs:

#### Altering `id_padding` setting

::: warning
This method will affect previously generated links. Use it only if is safe to edit the IDs.
:::

Go to the database, find the `chv_settings` table and edit the `setting_name` identified as `id_padding`. (zero by default).

Entering an integer value like `5000` will instruct the system to generate IDs using this base padding.

#### Altering `chv_images` table

::: tip
This method won't affect any previously generated links.
:::

Go to the database, find the `chv_images` table and change the `AUTOINCREMENT` to the ID padding you want to use.

## CSRF protection

Cross-site request forgery ([CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)) is an exploit that is used to fool the websites by transmitting instructions from a remote website without the user's consent, for example trigger a delete content request.

The CSRF protection is based in the usage of a request token. The request token is set by session when the website loads and is asked when subsequential request are being made. If the token doesn't match the session it means that the request has not being initiated by the session and the system will return a 403 error.

## Cryptography

Chevereto uses the [BCrypt](https://en.wikipedia.org/wiki/Bcrypt) cryptography method to store the passwords and cookie login entries. Social login and the "Keep me logged in" feature uses a strong combination of BCrypt and random generated strings.

## reCAPTCHA

Chevereto includes support for [reCAPTCHA](https://www.google.com/recaptcha/intro/) which helps to prevent bots from signing up and try to brute-force an user password. In Dashboard > Settings > External services you can enable or disable reCAPTCHA and set how many invalid attempts triggers the reCAPTCHA.

## Invalid requests

An invalid request is when a user enters a bad password or the CSRF token doesn't match. Each time an invalid request is triggered the system stores the IP and the given action that triggers that invalid request.

There is a hard-coded setting in the system that controls the limit of allowed invalid requests per day and when an user reaches the `CHV_MAX_INVALID_REQUESTS_PER_DAY` the system won't allow requests from that in IP in a period of 24 hours. The hard-coded value of this setting is 25 invalid requests and you can modify it in the `/app/loader.php` file.
