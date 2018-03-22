---
date: 2017-02-06
title: Introduction to Liquid
video_id: 6pCdOh_I4EM
description: Introduction to using Liquid in Jekyll static site generator
tags:
  - jekyll-liquid
resources:
  - name: "Liquid documentation"
    link: https://shopify.github.io/liquid/
  - name: "Source code"
    link: https://github.com/CloudCannon/bakery-store/tree/intro-to-liquid
type: Video
set: basics
set_order: 7
icon: liquid
---
## Introduction

Liquid is a templating language Jekyll uses to process pages on your site. With Liquid you can output and modify variables, have logic statements inside your pages and loop over content.

There's two tags in Liquid:

* You can output variables by surrounding them in two curly braces e.g. {% raw %}`{{ variable }}`{% endraw %}
* You can perform logic statements by surrounding them in a curly brace, percentage sign e.g. {% raw %}`{% if statement %}`{% endraw %}

## Output

Let's start with a basic example. We'll add some content in front matter, then output it using front matter. Variables set in front matter are available to us at `page.variable_name`:

{% raw %}
~~~html
---
heading: I like cupcakes
---
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>{{ page.heading }}</h1>
  </body>
</html>
~~~
{% endraw %}

![Liquid output](/images/tutorials/intro-to-liquid/liquid.png){: .screenshot}

## Filters

Now we want the heading to be uppercase. We can run a variable through a filter to modify the output. To use a filter we'll add a "\|" after the variable then pass it a filter, `upcase` in this case:

{% raw %}
~~~html
...
<h1>{{ page.heading | upcase }}</h1>
...
~~~
{% endraw %}

![Liquid output](/images/tutorials/intro-to-liquid/liquid-upcase.png){: .screenshot}

We can run this content through multiple filters. Here we'll run in through a truncate to only output a maximum of eight characters:

{% raw %}
~~~html
...
<h1>{{ page.heading | upcase | truncate: 8 }}</h1>
...
~~~
{% endraw %}

![Liquid output](/images/tutorials/intro-to-liquid/liquid-truncate.png){: .screenshot}

## Logic statements

Let's control whether the `h1` is output on the page. We'll add a new variable to the front matter called `show_heading` and initalize it to true. Then we'll surround the `h1` in an if statement to check if `show_heading` is true:

{% raw %}
~~~html
---
heading: I like cupcakes
show_heading: true
---
...
{% if page.show_heading %}
  <h1>{{ page.heading | upcase | truncate: 8 }}</h1>
{% endif %}
...
~~~
{% endraw %}

![Liquid output](/images/tutorials/intro-to-liquid/liquid-truncate.png){: .screenshot}

This displays the heading on the page. If we change `show_heading` to false it shows nothing.

We can add an `elsif` to the if statement to check other conditions. So if `page.show_heading` is false we'll check if `page.heading` contains the word "cupcake", if it does then we'll output "I want cupcakes", if it doesn't we'll have output I don't want cupcakes:

{% raw %}
~~~html
---
heading: I like cupcakes
show_heading: false
---
...
{% if page.show_heading %}
  <h1>{{ page.heading | upcase | truncate: 8 }}</h1>
{% elsif page.heading contains "cupcake" %}
  <h1>I want cupcakes</h1>
{% else %}
  <h1>I don't want cupcakes</h1>
{% endif %}
...
~~~
{% endraw %}

![If statement](/images/tutorials/intro-to-liquid/if-statement.png){: .screenshot}

## Loops

Let's create a cupcakes array in front matter then loop over it in Liquid and output it in an unordered list. The syntax to loop in Liquid is `for variable in array`, variable can named whatever you'd like and holds the item in the current iteration of the loop:

{% raw %}
~~~html
---
heading: I like cupcakes
show_heading: false
cupcakes:
  - chocolate
  - lemon
  - strawberry
---
...
<ul>
{% for cupcake in page.cupcakes %}
  <li>{{ cupcake }}</li>
{% endfor %}
</ul>
...
~~~
{% endraw %}
