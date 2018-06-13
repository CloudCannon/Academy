---
title: Prerequisites
tagline: Install whats needed for CloudCannon Suite
weight: 0
in_nav: true
---

Welcome to the prerequisites guide. Use this guide to get your development machine setup.

### Node & NPM

To check if you have Node.js installed, run this command in your terminal:

```sh
$ node -v
```

To confirm that you have npm installed you can run this command in your terminal:

```sh
$ npm -v
```

If either of these commands fail, follow the [npm install guide](https://www.npmjs.com/get-npm).

### Install PhantomJS

To check if you have PhantomJS installed, run this command in your terminal:

```sh
$ phantomjs -v
```

If this comand fails, follow the [PhantomJS install guide](http://phantomjs.org/download.html). Alternatively, use `brew` to install the package.

```sh
$ brew install phantomjs
```

### Install the gulp-cli

Installing the gulp cli allows you to run the `gulp` command in your terminal:

```sh
$ npm install --global gulp-cli
```

### Next

Now that you have development machine setup you can move to [installing the CloudCannon Suite](/install).