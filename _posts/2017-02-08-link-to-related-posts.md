---
date: 2017-02-08
title: Link to related posts
description: How to link to the related posts on a blog
categories:
  - jekyll-blogging
  - jekyll-liquid
  - jekyll-layouts
type: Document
---
## Overview

In the layout for the post we can use the variable `site.related_posts`:

{% raw %}
~~~liquid
...
<ul class="related_posts">
  {% for post in site.related_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
...
~~~
{% endraw %}

By default this will output the ten most recent posts. If you run jekyll with the `--lsi` flag, it scans the content and tries to actually find relevant posts.

## Limit

To display a maximum of three posts we can add a limit:

{% raw %}
~~~liquid
...
<ul class="related_posts">
  {% for post in site.related_posts limit: 3 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
...
~~~
{% endraw %}
