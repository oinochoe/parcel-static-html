
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
```