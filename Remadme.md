
* www 폴더를 만듭니다.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="canonical" data-attr-t data-attr-t-interpolate href-t="{{links.baseAbsolute}}filename.{{links.extension}}" />
    <script src="./app.js"></script>
</head>
<body>
    <h1 data-t="my.key"></h1>
    <p data-t>other.key</p>
    <input type="submit" data-attr-t value-t="other.ok">

</body>
</html>
```

* locals 폴더 내에 en.json, fr.json을 만듭니다.

```
{
    "my": {
        "key": "Salut"
    },
    "other": {
        "key": "mec",
        "ok": "confirmer"
    },
    "links": {
        "baseAbsolute": "http://www.example.com/ja/",
        "extension": "htm"
    }
}
```

* 실행합니다.
```
static-i18n -l en -i en -i fr www
```selector (default: [data-t]): The selector to look for elements to translate. If it is an attribute, the attribute content is used as the key when non empty, otherwise the text of the element is used.

attrSelector (default: [data-attr-t]): The selector to look for elements

attrInterpolateSelector (default: [data-attr-t-interpolate]): The selector that should be applied to elements to indicate that interpolation should be performed for the custom attributes on that element

xml (default: false): If true, enables XML mode for https://github.com/fb55/htmlparser2 which avoids breaking self-closing tags

attrSuffix (default: -t): Suffix for attr to translate. value-t will be translated and mapped to value.

attrInterpolateSuffix (default: -t-interpolate): Suffix for attr to interpolate the translations.

useAttr (default: true): If false, the element text is always used as the key, even if the attribute value is not empty.

nsSeparator (default: :): The namespace separator. Useful if keys contain colons. Change it to something else to prevent cutting off the namespace.

replace (default: false): If true, the element is replaced by the translation. Useful to use something like <t>my.key</t> to translate.

locales (default: ['en'], CLI alias: -i): the list of locales to be generated. All locales need to have an existing resource file.

fixPaths (default: true): When true, the script[src] and link[href] relative paths are fixed to fit the new subdirectory structure. (See example above.)

locale (default: en, CLI alias: -l): The default locale.

exclude (default: []): Files to exclude. Can contain regex (uses normal test) or string (uses startsWith).

fileFormat (default: json): The file format for the translations. Supports json, and yml or yaml which will be treated as YAML files. The file extension must match this format.

encoding (default: utf8): The encoding to read files (only works with yaml for now)

files (default: **/*.html): The files to translate, relative to the base directory.

baseDir (default: process.cwd(), CLI alias: -d): The base directory to look for translations. Not useful for CLI usage as it is overriden by the directory argument.

translateConditionalComments (default: false): Translate the content of conditional comments (see #1). This is still experimental, and could fail on edge cases. Open an issue if needed.

allowHtml (default: false): Allow the usage of HTML in translation

removeAttr (default: true): When true, removes the attribute used to translate (e.g. data-t will be removed)

outputDir (default: i18n, CLI alias: -o): The directory to output generated files

outputDefault (default: __file__): The name for the default locale output files, relative to outputDir. __file__ will be replaced by the current file name

outputOther (default: __lng__/__file__): The name for the other locales output files, relative to outputDir. __lng__ will be replaced by the current locale

localesPath (default: locales): The directory of the translations, where each file should be named LOCALE_NAME.json

outputOverride: Override outputDefault or outputOther for special cases (default: {}) eg:

{
  "en": {
    "index.html": "foo.html"
  },
  "ja": {
    "index.html": "ja_index.html"
  }
}
i18n: Object passed directly to i18next.init. This allows you to override pretty much anything. Read i18next doc for more info.

When using the CLI, outputOverride and i18n options are parsed as JSON.