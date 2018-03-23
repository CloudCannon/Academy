---
date: 2017-02-08
title: List posts
description: List all the posts on your site
category: Blogging
tags:
  - jekyll-blogging
  - jekyll-liquid
type: Document
---
## Overview

`site.posts` gives us all the posts on our site so it's simply a matter of iterating over it.

{% raw %}
~~~liquid
...
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
      - <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    </li>
  {% endfor %}
</ul>
...
~~~
{% endraw %}
