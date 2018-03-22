---
date: 2017-02-08
title: List posts by year
description: List all the posts on your site and group them by their year
tags:
  - jekyll-blogging
  - jekyll-liquid
type: Document
---
## Overview

We can iterate over `site.posts` and keep track of the current year. When the year changes, we'll output the year as a title and then carry on outputting the post details.

{% raw %}
~~~liquid
...
{% for post in site.posts %}
  {% capture current_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% if current_year != previous_year %}
    {% unless forloop.first %}
      </ul>
    {% endunless %}
    <h2>{{ current_year }}</h2>
    <ul>
    {% assign previous_year = current_year %}
  {% endif %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>

  {% if forloop.last %}
    </ul>
  {% endif %}
{% endfor %}
...
~~~
{% endraw %}
