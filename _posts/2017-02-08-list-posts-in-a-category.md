---
date: 2017-02-08
title: List posts in a category
description: List all the posts in a particular category
tags:
  - jekyll-blogging
  - jekyll-liquid
type: Document
---
## Overview

`site.categories.*category_name*` gives us an array of posts in that category:

{% raw %}
~~~liquid
...
<ul>
  {% for post in site.categories.books %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
...
~~~
{% endraw %}
