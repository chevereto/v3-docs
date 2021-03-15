# Website settings

`/dashboard/settings/website`

## Website name

Determines the name of your website, it will be used in all document titles (trailing).

## Website `doctitle`

Determines the `doctitle` for your website, mainly used in homepage.

## Website description

A brief summary on what's your website.

## Powered by Chevereto

Determines if the "Powered by Chevereto" appears on your website.

Showing "Powered by Chevereto" allows others to know the software and it helps us to get known.

| Value    | Effect                                |
| -------- | ------------------------------------- |
| Enabled  | Enable "Powered by Chevereto" footer  |
| Disabled | Disable "Powered by Chevereto" footer |

## HTTPS

Determines how HTTPS will be handled for the application URLs.

| Value     | Effect                                                   |
| --------- | -------------------------------------------------------- |
| Automatic | Use HTTPS on URLs if web server is configured with HTTPS |
| Forced    | Always use HTTPS                                         |
| Disabled  | Disable HTTPS (all URLs will use `http`)                 |

## Default time zone

Determines the default system time zone. This will be the default timezone for new user sign-up.

## Search

Toggles the search functionality.

Search allows users to locate content based on a search query.

| Value    | Effect         |
| -------- | -------------- |
| Enabled  | Enable search  |
| Disabled | Disable search |

## Explore

Toggles the explore functionality.

Explore browses the public available images.

| Value    | Effect          |
| -------- | --------------- |
| Enabled  | Enable explore  |
| Disabled | Disable explore |

## Explore (guests)

Toggles the explore functionality (for guests).

Same as [explore](#explore), but only affects guests users.

| Value    | Effect                    |
| -------- | ------------------------- |
| Enabled  | Enable explore for guest  |
| Disabled | Disable explore for guest |

## Random

Toggles the random functionality.

Random allows to randomly show a public image. It enables `?random` to fetch a random public image.

| Value    | Effect                |
| -------- | --------------------- |
| Enabled  | Enable random button  |
| Disabled | Disable random button |

## Likes

Toggles the likes functionality.

Likes allow users to like content. It also generates "liked" listings.

| Value    | Effect        |
| -------- | ------------- |
| Enabled  | Enable likes  |
| Disabled | Disable likes |

## Followers

Toggles the followers functionality.

Followers allow users to follow each other. It also enables the "following" listing for each user.

| Value    | Effect            |
| -------- | ----------------- |
| Enabled  | Enable followers  |
| Disabled | Disable followers |

## Website mode

Determines the website mode. It will affect how your installation works.

| Value     | Effect                                          |
| --------- | ----------------------------------------------- |
| Community | A community-like website with users interacting |
| Personal  | A single-user experience                        |

## Website privacy mode

Determines the website privacy mode.

::: warning
Private mode will always require login. Implement it only for private audiences.
:::

| Value   | Effect                                                 |
| ------- | ------------------------------------------------------ |
| Public  | All content is intended to be public                   |
| Private | All content is intended to be private (login required) |

## Content privacy mode*

*Applies only if `Website privacy mode` is set to `Private`.

Determines the user content privacy mode.

Privacy is provisioned per album basis. Images inherits privacy from the album.

| Value                                | Effect                                                                      |
| ------------------------------------ | --------------------------------------------------------------------------- |
| Default                              | Users can freely choose the privacy for their own content                   |
| Force private (self)                 | User content is forced to be private and only the owner can see the content |
| Force private (anyone with the link) | User content is forced to be private but accesible for anyone with the link |
