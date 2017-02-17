---
date: 2017-02-09
title: Advanced navigation
description: An easy way to manage navigation menus in Jekyll
tags:
  - jekyll-liquid
  - jekyll-data-files
  - jekyll-includes
type: Document
---
## Introduction

My favourite way to handle navigation in Jekyll is using a data file. It allows you to control the navigation items in a central file and separate them for the navigation logic. It also has much better performance on larger sites than our [simple navigation](/jekyll-liquid/jekyll-front-matter/simple-navigation/) tutorial.

## Instructions

1.  Create a yml data file for the navigation items at `_data/navigation.yml`.
2.  Inside `_data/navigation.yml` create an array of navigation items where each item has a link and a name:
    {% raw %}
    ~~~yml
    - link: /
      name: Home
    - link: /about/
      name: About
    - link: /services
      name: Services
    - link: /contact/
      name: Contact
    ~~~
    {% endraw %}
3.  Create `_includes/navigation.html`. This file iterates over the navigation data file and outputs the links and adds a `class="active"` if it's the current page:
    {% raw %}
    ~~~html
    <nav>
      {% for item in site.data.navigation %}
        <a href="{{ item.link %}" {% if item.link == page.url %}class="active"{% endif %}>
          {{ item.name }}
        </a>
      {% endfor %}
    </nav>
    ~~~
    {% endraw %}

## Usage

You can use the navigation in your layout by doing an include:

{% raw %}
~~~html
{% include navigation.html %}
~~~
{% endraw %}

## Extending

This method is easily extendable to fit your situation. For example you might want to highlight particular links with a red border. You can add this meta data to `_data/navigation.yml`:

{% raw %}
~~~yml
- link: /
  name: Home
- link: /about/
  name: About
  highlight: true
- link: /services
  name: Services
  highlight: true
- link: /contact/
  name: Contact
~~~
{% endraw %}

And then use it in the include:

{% raw %}
~~~html
<nav>
  {% for item in site.data.navigation %}
    <a href="{{ item.link %}" {% if item.highlight %}style="border: 1px solid red;"{% endif %} {% if item.link == page.url %}class="active"{% endif %}>
      {{ item.name }}
    </a>
  {% endfor %}
</nav>
~~~
{% endraw %}