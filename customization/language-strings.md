Language strings
================

Chevereto language strings can be easily customized to fit what you want to show to your visitors. You can configure absolutely any language string from a button to a complete paragraph without messing with theme editing.

Translation overrides
---------------------

The system works by overriding the target translation, for instance you can replace "Upload and share your images." by doing the following procedure:

### 1\. Get the msgid and msgstr values

*   Go to the `app/content/languages` folder
*   Open the file `en.po` (in this example we are overriding English language)
*   Find this text: `Upload and share your images.`
*   Copy the `msgid` and the `msgstr` lines, you should get something like this:

```
    msgid "Upload and share your images."
    msgstr ""
```    

In this case `msgstr` is empty because English is the base language.

### 2\. Override translation

For this example you will need to create an override file in `app/content/languages/overrides/en.po` with this content:

```
msgid "Upload and share your images."
msgstr "Upload and share your photos."
```
You only need to replace `msgstr` because that is the translation string. The result is that now Chevereto will display "Upload and share your photos." in the homepage. Make sure to save the document using a text editor and use "UTF-8 without BOM" to avoid issues.

**Note:** You don't need a gettext editor to do this but make sure to use double-quotes. If you need to put a double quote inside `msgstr` use `\"` (escaped double-quote).

Performance wise
----------------

Maybe you are aware of the impact of doing this but don't worry about it. Chevereto uses translations cache so the impact on the system can't be even measured so you can freely add many custom language strings as you want.