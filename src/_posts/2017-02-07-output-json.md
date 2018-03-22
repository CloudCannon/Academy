---
date: 2017-02-07
title: Output JSON
video_id: lmoq_Kd1pXs
description: Turn Jekyll Data into JSON
tags:
  - jekyll-liquid
  - jekyll-front-matter
  - jekyll-collections
  - jekyll-data-files
resources:
  - name: Source code
    link: https://github.com/CloudCannon/bakery-store/tree/json
  - name: Katy Decorah's "Unconventional use cases for Jekyll"
    link: http://katydecorah.com/code/jekyllconf/
type: Video
set: advanced
set_order: 2
---
## Introduction

Jekyll can act purely as a content manager and hand off the displaying and interaction of content to JavaScript. This is useful if you have a site or component that needs user interaction with JavaScript but you also want an easy way to manage the content in a markdown or data file. The easiest way to get JavaScrip to understand your content is using [JSON](https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/).


## Jsonify

If the data is an array or hash you can use the `jsonify` filter to convert it to JSON.

{% raw %}
~~~liquid
---
colors:
  - red
  - blue
  - green
---
<script>
  var colors = {{ page.colors | jsonify }};
</script>
~~~
{% endraw %}

Which generates a JSON array of colors.

{% raw %}
~~~javascript
...
var colors = ["red","blue","green"];
...
~~~
{% endraw %}

## Liquid

If we need more control over the output we can always build a JSON object ourselves.

{% raw %}
~~~liquid
var posts = [
  {% for post in site.posts %}
    {
      "title": "{{ post.title }}",
      "category": "{{ post.category }}",
      "url": "{{ post.url }}"
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
];
~~~
{% endraw %}

This gives us complete control over the JSON and allows us to run variables through filters.

{% raw %}
~~~javascript
[
  {
    "title":"Where Did The Cookie Come From",
    "category":"Information",
    "url":"/information/2016/01/02/where-did-the-cookie-come-from.html"
  },
  {
    "title":"What Is Sour Dough",
    "category":"Information",
    "url":"/information/2016/01/01/what-is-sour-dough.html"
  }
]
~~~
{% endraw %}

## Use case

Katy DeCorah shows us a real application of this technique in her [JekyllConf](http://jekyllconf.com) 2016 talk, [Unconventional Use Cases For Jekyll](https://www.youtube.com/watch?v=s84wFRD8vfE).

Katy creates a [map](http://katydecorah.com/unconventional/jekyllconf/) which shows the location of all the speakers at the conference. Hovering over a country displays the speakers in that country.

![JekyllConf 2016 map](/images/tutorials/json/map.png)

It's all controlled by a Jekyll data file which is output to JSON.

{% raw %}
~~~yaml
- speaker: Ire Aderinkokun
  twitter: ireaderinokun
  country: Nigeria
  talk: Using Jekyll For Rapid CSS Testing

- speaker: Amy Johnston
  twitter: amybeukenex
  country: Netherlands
  talk: Jekyll For Technical Documentation

- speaker: Julio Faerman
  twitter: jmfaerman
  country: Brazil
  talk: Jekyll On AWS

- speaker: Bud Parr
  twitter: budparr
  country: United States
  talk: Real World Content Strategy With Jekyll
...
~~~
{% endraw %}

This is a great demonstration of separating content from logic. The YAML file only contains the speaker information which makes it easy to add, remove or edit speakers. The JavaScript is simpler as it won't be polluted with speaker content.

The code for the site is available [here](https://github.com/katydecorah/unconventional/).


