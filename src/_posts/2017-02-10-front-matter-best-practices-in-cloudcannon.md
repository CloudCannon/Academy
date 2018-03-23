---
date: 2017-02-09
title: Front matter editor best practices
description: Tips to get the most out of front matter editor in CloudCannon
category: Front Matter
tags:
  - jekyll-cloudcannon
  - jekyll-front-matter
type: Document
---

## Overview

The front matter editor in [CloudCannon](https://cloudcannon.com) provides an easy way for editors to update variables and content on a page. The editor works with any front matter and with a few tweaks, provides an even better experience for your editors.

![Front matter editor](/images/tutorials/front-matter-best-practices/front-matter-example.png)

## Content types

The front matter editor has interfaces for different types of content. Using the correct interface makes it easier for editors to update content and ensures they're using the correct format. For example if you had a front matter field called `sale_start:` it would show as a text field which they could enter anything in to. If you changed this to `sale_start_date:` it would show as a date picker and restrict the input to a date.

![Front matter date picker](/images/tutorials/front-matter-best-practices/front-matter-date-picker.png)

Have a look at the [front matter documentation](https://docs.cloudcannon.com/editing/front-matter/) for a full list of content types.

## Hide properties

There are times when you might not want your editors to see a particular front matter variable. If a property begins with an underscore it won't show in the front matter editor.

~~~yaml
_image_src: /src/
~~~

This works if you can control the variable name but there are special variables like `layout` where you can't prefix it with an underscore. For these variables we can use [front matter defaults](https://jekyllrb.com/docs/configuration/#front-matter-defaults). Front matter defaults live in `_config.yml`. Adding a default here means you don't need to add it to the individual page and it won't show in the front matter editor. You can set the layout for all pages on the site:

~~~yaml
defaults:
  -
    scope:
      path: ""
    values:
      layout: "default"
~~~

Or you can set it for a group or individual page using the scope:

~~~yaml
defaults:
  -
    scope:
      path: "index.html"
    values:
      layout: "home"
~~~
