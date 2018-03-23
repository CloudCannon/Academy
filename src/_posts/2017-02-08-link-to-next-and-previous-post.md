---
date: 2017-02-08
title: Next/previous posts
description: How to link to the next and previous posts on a blog
category: Blogging
tags:
  - jekyll-blogging
  - jekyll-liquid
  - jekyll-layouts
type: Document
---
## Overview

In the layout for the post we can use the variables `page.next` and `page.previous` to link to the chronological next and previous posts.

{% raw %}
~~~html
...
<nav class="post_navigation">
  {% if page.previous.url %}
    <a href="{{ page.previous.url }}">&laquo; {{ page.previous.title }}</a>
  {% endif %}
  {% if page.next.url %}
    <a href="{{ page.next.url }}">{{ page.next.title }} &raquo;</a>
  {% endif %}
</nav>
...
~~~
{% endraw %}
