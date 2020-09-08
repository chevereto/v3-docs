# Email

`/dashboard/settings/email`

::: tip
Test email delivery results at [tools](./tools.md#send-test-email).
:::

## From name

Determines the `from` name used when sending transactional emails.

| Type  | Default |
|---|---|
| String  | `Chevereto`  |

## From email address

Determines the `email` used when sending transactional emails.

It is recommended to use a "no-reply" address.

| Type  | Example |
|---|---|
| String  | `no-reply@chevereto.com`  |

## Incoming email address

Determines the `email` inbox.

Contact form and system notifications will send emails to this address.

| Type  | Example |
|---|---|
| String  | `inbox@chevereto.com`  |

## Email mode

Determines the email mode to use.

::: warning
The setting `PHP mail() func.` should only be used at development environment and for reliability you should always use SMTP.
:::

| Value  | Effect  |
|---|---|
| SMTP  | Send email using [Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) |
| PHP mail() func.  | Send email using PHP [mail function](https://www.php.net/manual/en/function.mail.php)  |

::: tip
Below SMTP settings applies only when `Email mode` is set to `SMTP`.
:::

## SMTP server and port

Determines SMTP server and its port.

| Type  | Values  |
|---|---|
| String  | SMTP hostname  |
| Integer  | Ports: 25, 80, 465, 587 |

## SMTP username

Determines SMTP username.

| Type  | Values  |
|---|---|
| String  | SMTP username  |

## SMTP password

Determines SMTP password.

| Type  | Values  |
|---|---|
| String  | SMTP password  |

## SMTP security

Determines SMTP security.

| Value  | Effect  |
|---|---|
| TLS  | Use [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security)  |
| SSL  | Use Secure Sockets Layer  |
| Unsecured  | Don't secure emails  |
