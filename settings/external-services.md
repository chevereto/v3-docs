# External services

`/dashboard/settings/external-services`

## Akismet spam protection

Toggles usage of [Akismet](https://akismet.com/) service.

| Value    | Effect          |
| -------- | --------------- |
| Enabled  | Enable Akismet  |
| Disabled | Disable Akismet |

## Akismet API key

*Applies only if `Akismet spam protection` is `Enabled`.

| Type   | Description     |
| ------ | --------------- |
| String | Akismet API key |

## StopForumSpam spam protection

Toggles usage of [Stop Forum Spam](https://stopforumspam.com/) service.

| Value    | Effect                  |
| -------- | ----------------------- |
| Enabled  | Enable Stop Forum Spam  |
| Disabled | Disable Stop Forum Spam |

## CDN

Toggles usage of [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) (Content delivery network).

| Value    | Effect      |
| -------- | ----------- |
| Enabled  | Enable CDN  |
| Disabled | Disable CDN |

## CDN URL

*Applies only if `CDN` is set to `Enabled`.

Determines the CDN for the website. The CDN URL will be used for all local static resources.

| Type   | Description        |
| ------ | ------------------ |
| String | The CDN (pull) URL |

## reCAPTCHA

Toggles usage of [reCAPTCHA](https://www.google.com/recaptcha/about/).

| Value    | Effect            |
| -------- | ----------------- |
| Enabled  | Enable reCAPTCHA  |
| Disabled | Disable reCAPTCHA |

## reCAPTCHA version

*Applies only if `reCAPTCHA` is set to `Enabled`.

Determines the reCAPTCHA version. It must match the version spec for your key.

| Type    | Values |
| ------- | ------ |
| Integer | 2, 3   |

## reCAPTCHA site key

*Applies only if `reCAPTCHA` is set to `Enabled`.

Determines the reCAPTCHA site key.

| Type   | Values             |
| ------ | ------------------ |
| String | reCAPTCHA site key |

## reCAPTCHA secret key

*Applies only if `reCAPTCHA` is set to `Enabled`.

Determines the reCAPTCHA secret key.

| Type   | Values               |
| ------ | -------------------- |
| String | reCAPTCHA secret key |

## reCAPTCHA threshold

*Applies only if `reCAPTCHA` is set to `Enabled`.

Determines the reCAPTCHA threshold.

For example, if you

| Value | Effect                                                                                                       |
| ----- | ------------------------------------------------------------------------------------------------------------ |
| 0     | Always display reCAPTCHA                                                                                     |
| n     | Display reCAPTCHA after (n) failed attempts, for example when failing to provide the right login credentials |

## Force reCAPTCHA on contact page

*Applies only if `reCAPTCHA` is set to `Enabled`.

Toggle showing (forced) reCAPTCHA on contact page.

| Value    | Effect                                   |
| -------- | ---------------------------------------- |
| Enabled  | Enable forced reCAPTCHA on contact page  |
| Disabled | Disable forced reCAPTCHA on contact page |

## Comments API

Determines the comment API to use.

| Value           | Effect                                            |
| --------------- | ------------------------------------------------- |
| Disqus          | Use [Disqus](https://disqus.com/) comment service |
| JavaScript/HTML | Use any HTML comment provider                     |

## Disqus shortname

*Applies only if `Comments API` is set to `Disqus`.

Determines the Disqus shortname.

| Type   | Value            |
| ------ | ---------------- |
| String | Disqus shortname |

## Disqus secret key

*Applies only if `Comments API` is set to `Disqus`.

Determines the Disqus secret key.

| Type   | Value             |
| ------ | ----------------- |
| String | Disqus secret key |

## Disqus public key

*Applies only if `Comments API` is set to `Disqus`.

Determines the Disqus public key.

| Type   | Value             |
| ------ | ----------------- |
| String | Disqus public key |

## Comment code

*Applies only when `Comments API` is set to `JavaScript/HTML`

Determines the HTML comment code, which will get added to image view.

| Type   | Value |
| ------ | ----- |
| String | HTML  |

## ModerateContent

Toggles usage of [ModerateContent](https://www.moderatecontent.com/) service.

| Value    | Effect                  |
| -------- | ----------------------- |
| Enabled  | Enable ModerateContent  |
| Disabled | Disable ModerateContent |

## ModerateContent API Key

*Applies only if `ModerateContent` is `Enabled`.

Determines the ModerateContent API key.

| Type   | Value                   |
| ------ | ----------------------- |
| String | ModerateContent API key |

## Automatic approve

*Applies only if `ModerateContent` is `Enabled`.

Toggles automatic approve for content approved by ModerateContent.

| Value    | Effect                                    |
| -------- | ----------------------------------------- |
| Enabled  | Enable ModerateContent automatic approve  |
| Disabled | Disable ModerateContent automatic approve |

## Block content

*Applies only if `ModerateContent` is `Enabled`.

Determines which content will be blocked by ModerateContent.

| Value          | Effect                       |
| -------------- | ---------------------------- |
| Disabled       | Don't block any content      |
| Adult          | Block adult content          |
| Teen and adult | Block adult and teen content |

## Flag NSFW

*Applies only if `ModerateContent` is `Enabled`.

Determines which content will get NSFW flagged by ModerateContent.

| Value          | Effect                      |
| -------------- | --------------------------- |
| Disabled       | Don't flag any content      |
| Adult          | Flag adult as NSFW          |
| Teen and adult | Flag adult and teen as NSFW |

## Analytics code

Determines the analytics HTML code that will track stats for your website. This is where you can place the tracking code provided by Google Analytics, Heap, Yandex.Metrica, [Matomo](https://matomo.org/), Mixpanel, etc.

Code you enter in this section will be printed in all views.

| Type   | Description |
| ------ | ----------- |
| String | HTML        |
