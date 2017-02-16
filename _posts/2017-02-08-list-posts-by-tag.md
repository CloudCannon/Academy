---
date: 2017-02-08
title: List posts by tag
description: List all the posts on your site and group them by their tag
categories:
  - jekyll-blogging
  - jekyll-liquid
type: Document
---
## Overview

We can iterate over `site.tags`, each item is an array with two elements. The first element in the array is the tag name, the second element is a list of the posts in that tag.

{% raw %}
~~~liquid
...
{% for tag in site.tags %}
  <h2>{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
...
~~~
{% endraw %}
