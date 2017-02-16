---
date: 2017-02-08
title: List posts by category
description: List all the posts on your site and group them by their category
categories:
  - jekyll-blogging
  - jekyll-liquid
type: Document
---
## Overview

We can iterate over `site.categories`, each item is an array with two elements. The first element in the array is the category name, the second element is a list of the posts in that category.

{% raw %}
~~~liquid
...
{% for category in site.categories %}
  <h2>{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
...
~~~
{% endraw %}
