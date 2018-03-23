---
date: 2017-02-08
title: List posts with full content
description: List all the posts with their full content
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
{% for post in site.posts %}
  <article>
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    {{ post.content }}
  </article>
{% endfor %}
...
~~~
{% endraw %}
