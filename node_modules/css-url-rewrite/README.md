css-url-rewrite
===============

[![Build Status](https://travis-ci.org/tamaspap/css-replace-urls.svg?branch=master)](https://travis-ci.org/tamaspap/css-replace-urls)

Replace all `@imports` and `url()`s using a given function.

## Installation

```bash
$ npm install --save css-url-rewrite
```

## Usage

```js
function replace(url) {
  return 'http://example.com' + url;
}

var replaced = rewriteCssUrls(css, replace);
```

```css
body {
  background: url(/images/bg.png);
}
```

yields:

```css
body {
  background: url(http://example.com/images/bg.png);
}
```
