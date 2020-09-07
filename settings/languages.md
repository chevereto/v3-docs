# Languages

`/dashboard/settings/languages`

Chevereto uses `gettext` syntax for its translations and the system comes with a lot of languages built-in which you can find in the `app/content/languages` folder.

## Dashboard settings

From your dashboard you are able to configure several language related settings. To configure the languages navigate to `Dashboard > Settings > Languages`

### Default language

This sets the language that will be used by default. This means that for all users this will be the default language used if "Auto language" is turned off.

### Auto language

When enabled the system will detect the user language based on the browser language preference. If this language is available in the system Chevereto will use this language for this user. The system will use the "Default language" if the detected language isn't available.

### Language chooser

When enabled the system will allow users to choose which language they want to use.

### Available languages

If you don't want to make available all the built-in languages you can selective turn on/off any language in where you can also set the default language and if users can or cannot select custom languages.

## Add new languages

If you want to add a new language we encourage you to rely in our [translation center](http://translate.chevereto.com/) where you can easily contribute with a new translation. If you want to manually add a translation file from scratch you should get a [.po editor software](https://www.google.com/search?q=po%20editor) and create your own translation. Work with a .po file is not something that easy or confortable to do so that's why we encurage you to avoid this alternative.
