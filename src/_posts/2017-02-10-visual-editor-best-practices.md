---
date: 2017-02-09
title: Visual editor best practices
description: Tips to get the most out of the visual editor
category: CloudCannon
tags:
  - jekyll-cloudcannon
type: Document
---

## Overview

The [Visual editor](https://docs.cloudcannon.com/editing/visual-editor/) in [CloudCannon](https://cloudcannon.com) is the main way to edit content in CloudCannon. In this tutorial we'll go over some tips so help you get the most out of the visual editor.

## Editable regions

Editable regions are a great way give update access to an editor for content you define. It's always a good idea to give editors the smallest scope possible to prevent them from updating things they shouldn't or breaking the layout.

For example instead of setting an editable on the whole content `div`:

~~~html
<div class="content editable">
  <h1>Hello World!</h1>

  <p>Hi there, I'm learning Jekyll</p>

  <div class="image">
    <img src="/pooch.jpeg" alt="Pooch"/>
  </div>
</div>
~~~

Set the editable on each element:

~~~html
<div class="content">
  <h1 class="editable">Hello World!</h1>

  <p class="editable">Hi there, I'm learning Jekyll</p>

  <div class="image">
    <img src="/pooch.jpeg" alt="Pooch" class="editable"/>
  </div>
</div>
~~~

This won't always be possible as you might want the editor to add extra paragraphs. If this is the case then try to keep the content inside the `<div>` as simple as possible so it's paragraphs and images. Anything more complex you'll probably have a better experience using front matter.

## Editor content

You can create content that shows in the editor but not on the live site. This is useful for [Editor links](https://docs.cloudcannon.com/editing/editor-links/) which allow you to create inline buttons on your site for editing blog posts or collection documents. See the e

It's also possible to disable JavaScript functions from running in the editor. If you have a pop up for a mailing list sign up or something like that, you probably don't want that appearing while you're editing the site.

See the [Editor content documentation](https://docs.cloudcannon.com/editing/visual-editor/#editor-content) for more information.


