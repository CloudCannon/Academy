# [gulp](https://github.com/gulpjs/gulp)-webshot  [![Build Status](https://img.shields.io/david/ayhankuru/gulp-webshot.svg?style=flat-square)](https://david-dm.org/ayhankuru/gulp-webshot)

>Webshot provides a simple API for taking webpage screenshots. The module is a light wrapper around PhantomJS, which utilizes WebKit to perform the page rendering.

Uses the [webshot](https://github.com/brenden/node-webshot) library.

## İnstall
```bash
npm install --save-dev gulp-webshot
```

`/theme/stuff.html`:

or 

`/app/stuff.html`:

## How It Works
```js
var gulp = require('gulp'),
    webshot=require('gulp-webshot');

gulp.task('webshot', function() {
  return gulp.src('./Theme/**/**.html')
        .pipe(webshot({ dest:'build/',root:'Theme'}));
})





gulp.task('shot', ['webshot']);

```

## How It Works
```bash
gulp shot
```


## API

### webshot(options)

#### options.dest

Type: `string`

#### options.filename

Type: `string`

#### options.root

Type: `string`


#### options.screenSize

Type: `object`

	width: `int`
    height: `int`


#### options.shotSize

Type: `object`

	width: `int`
    height: `int`


#### options.flatten

Type: `boolean|string`

#### options.streamType

Type: `string`
Default: `png`

Flatten out captures.

more options checkout [webshot options](https://github.com/brenden/node-webshot#options).


