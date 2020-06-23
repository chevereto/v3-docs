# Email

This feature allows you to customize the overall email delivery settings which are located at Dashboard > Settings > Email.

## Configurable values

- System email address and "FROM" name
- Email mode (either SMTP or PHPMail)
- For SMTP you can configure the security protocol, host, port, etc.

## Recommended settings

The SMTP email method is highly recommended because it works better to deliver emails. The native PHP function (PHPMail) should only be used at development environment and for reliability you should always use SMTP.

To use the SMTP method you will need working SMTP credentials that you can get at your hosting company. You can also use third-party SMTP providers like [SparkPost](https://app.sparkpost.com/).
