---
title: Install
tagline: Install CloudCannon Suite to your site
weight: 1
in_nav: true
---

Welcome to the install guide. If you have your development machine setup, this guide will go through updating your site structure and adding basic packages.

### Prepare source

A custom source directory keeps the root directory clean and free for configuration. Move all jekyll source including Gemfile and Gemfile.lock to the `src` folder. To do this with bash use the following command:

```sh
$ mkdir src
$ mv `ls -A | grep -v src` ./src
```

If you don't want to use the command line, this can be done in finder/explorer.

### Create a package.json in your project directory
If you don't have a package.json, create one. If you need help, run an `npm init` which will walk you through giving it a name, version, description, etc.

```sh
$ npm init
```

### Install your dependencies

Run this command in your project directory:

```sh
$ npm install --save-dev gulp@next cloudcannon-suite
```

### Create a gulpfile.js

In your project directory, create a file named `gulpfile.js` in your project root with these contents:

```js
const gulp = require("gulp");
const suite = require("cloudcannon-suite");

suite.jekyllDev(gulp);
```

### Test your suite

Run the gulp command in your project directory:

```sh
$ gulp dev
```

If you run into any issues, check your folder structure matches the [suite structure](/structure/).

### Result

Voila! This will build your site to `dist/site` and serve it on localhost:4000. Any changes made in `src` will trigger another build.

```sh
$ gulp dev
[19:14:48] Using gulpfile ~/Work/cloudcannon/suite/gulpfile.js
[19:14:48] Starting 'dev'...
[19:14:48] Starting 'dev:build'...
[19:14:48] $ bundle exec jekyll build --destination dist/site
Configuration file: src/_config.yml
            Source: src
       Destination: dist/src
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.73 seconds.
 Auto-regeneration: disabled. Use --watch to enable.
[19:14:50] Finished 'dev:build' after 1.58 s
[19:14:50] Starting 'dev:watch'...
[19:14:50] Finished 'dev:watch' after 45 ms
[19:14:50] Starting 'dev:serve'...
[19:14:50] Webserver started at http://localhost:4000
[19:14:50] Finished 'dev:serve' after 40 ms
[19:14:50] Finished 'dev' after 1.67 s
```

### Next

You are ready to start developing more efficiently. If you need more features, choose a package and follow the install steps.