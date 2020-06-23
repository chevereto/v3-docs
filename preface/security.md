Security
========

Chevereto system includes security features that allows you to have a more robust and reliable website.

Encoded IDs
-----------

Chevereto public IDs are encoded in order to avoid enumeration and get hard to guess URLs. All the users, images and albums ids are encoded.

### Encoding and decoding IDs

When you install Chevereto the system creates a randomly generated `crypt_salt` which is used by the `CHV\encodeID()` and `CHV\decodeID()` functions. This allows to conver the numeric ids stored in the database to alphanumeric ids and it also means that the public ids vary from each different installation

CSRF
----

Cross-site request forgery ([CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)) is an exploit that is used to fool the websites by transmitting instructions from a remote website without the user's consent, for example trigger a delete content request.

### CSRF protection

The CSRF protection is based in the usage of a request token. The request token is set by session when the website loads and is asked when subsequential request are being made. If the token doesn't match the session it means that the request has not being initiated by the session and the system will return a 403 error.

Cryptography
------------

Chevereto uses the [BCrypt](https://en.wikipedia.org/wiki/Bcrypt) cryptography method to store the passwords and cookie login entries. Social login and the "Keep me logged in" feature uses a strong combination of BCrypt and random generated strings.

reCAPTCHA
---------

Chevereto includes support for [reCAPTCHA](https://www.google.com/recaptcha/intro/) which helps to prevent bots from signing up and try to brute-force an user password. In Dashboard > Settings > External services you can enable or disable reCAPTCHA and set how many invalid attempts triggers the reCAPTCHA.

Invalid requests
----------------

An invalid request is when a user enters a bad password or the CSRF token doesn't match. Each time an invalid request is triggered the system stores the IP and the given action that triggers that invalid request.

There is a hard-coded setting in the system that controls the limit of allowed invalid requests per day and when an user reaches the `CHV_MAX_INVALID_REQUESTS_PER_DAY` the system won't allow requests from that in IP in a period of 24 hours. The hard-coded value of this setting is 25 invalid requests and you can modify it in the `/app/loader.php` file.