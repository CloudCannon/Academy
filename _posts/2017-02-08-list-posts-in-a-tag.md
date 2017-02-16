---
date: 2017-02-08
title: List posts in a tag
description: List all the posts in a particular tag
categories:
  - jekyll-blogging
  - jekyll-liquid
type: Document
---
## Overview

`site.tags.*tag_name*` gives us an array of posts which have that tag:

{% raw %}
~~~liquid
...
<ul>
  {% for post in site.tags.dogs %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
...
~~~
{% endraw %}
