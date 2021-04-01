# Language

Chevereto uses `gettext` for its translations and the system comes with a lot of languages built-in which you can find in the `app/content/languages` folder.

## Add new languages

### OneSky

If you want to add a brand new language we encourage you to apply to [translation](http://translate.chevereto.com/), where you can easily contribute a new language. OneSky features a complete suite for translations with no additional software required.

::: tip
Translations contributed will get added to the software.
:::

### Manually

Put your `.po` files at `app/content/languages` folder. The language code must be expressed in ISO format.

::: warning
Considering using a [.po editor software](https://www.google.com/search?q=po%20editor) to create the translation file.
:::

## Customizing language strings

All language strings can be customized to fit what you want to show to your visitors. That way, you don't need to touch the theme at all.

The system works by overriding the target translation. For example, replacing `Upload and share your images.` to "Upload, do it now!" by doing the following procedure:

### 1. Get the translation string (`msgid` and `msgstr` values)

- Go to the `app/content/languages` folder
- Open the file `en.po` (in this example we are overriding English language)
- Find this text: `Upload and share your images.`
- Copy the `msgid` and the `msgstr` lines, you should get something like this:

```po
msgid "Upload and share your images."
msgstr ""
```

::: tip
The property `msgstr` is empty because English is the base language. If you open any other language you will see that value actually translated.
:::

### 2. Override translation string

- Go to the `app/content/languages/overrides` folder
- Create the file `en.po` with these contents:

```po
msgid "Upload and share your images."
msgstr "Upload, do it now!"
```

::: tip
You only need to replace `msgstr` because that is the translation string.
:::

The result is that the system now will display `Upload, do it now!` instead of the default `Upload and share your images.` and it will only affect that language.

::: warning
**Note:** You don't actually need a gettext editor for language overrides, but make sure to use double-quotes. If you need to put a double quote inside `msgstr` use `\"` (escaped double-quote).
:::
