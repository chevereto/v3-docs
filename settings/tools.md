# Tools

`/dashboard/settings/tools`

## Decode ID

Converts an encoded id into its integer decoded value.

| Example | Result |
| ------- | ------ |
| v5ZO    | 1234   |

## Encode ID

Converts an integer id into its encoded value.

| Example | Result |
| ------- | ------ |
| 1234    | v5ZO   |

## Send test email

Sends a test mail to the target email address.

Use this to test email delivery rate.

| Example                             | Result                                                 |
| ----------------------------------- | ------------------------------------------------------ |
| test-ihmi89xct@srv1.mail-tester.com | Test email sent to test-ihmi89xct@srv1.mail-tester.com |

## Export a user

Exports user profile information in `json` format.

Use this when needing to export an user.

```json
{
    "name": "Biggie Smalls",
    "username": "admin",
    "email": "admin@chevereto.com",
    "facebook_username": null,
    "twitter_username": null,
    "website": "https:\/\/rodolfo.is",
    "bio": "",
    "timezone": "America\/Santiago",
    "language": "en",
    "is_private": "0",
    "newsletter_subscribe": "1"
}
```

## Regenerate external storage stats

Re-calculate external storage stats for the target storage id.

| Example | Result                                                 |
| ------- | ------------------------------------------------------ |
| 1       | Storage "AWS S3 US WEST N.CALI" (1) stats re-generated |

## Migrate image records from one external storage to another

Re-assign image database tables from one storage to another.

Use this when you want to migrate storages and need to update the database records.

| Values            | Example |
| ----------------- | ------- |
| Source storage id | 1       |
| Target storage id | 2       |
