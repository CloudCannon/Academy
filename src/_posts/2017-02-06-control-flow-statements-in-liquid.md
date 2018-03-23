---
date: 2017-02-06
title: Control flow statements in Liquid
video_id: VFZteTaikNI
description: Use Liquid to control which content is displayed on the page
category: Liquid
tags:
  - jekyll-liquid
resources:
  - name: "Liquid documentation"
    link: https://shopify.github.io/liquid/
  - name: "Source code"
    link: https://github.com/CloudCannon/bakery-store/tree/liquid-control-flow
type: Video
set: basics
set_order: 11
icon: control
---
## Introduction
We have a list of cupcakes on our [Bakery Store examples site](https://github.com/CloudCannon/bakery-store/tree/liquid-control-flow) and we're using Liquid to only show a subset of these cupcakes.

The cupcakes are a collection, here's one of the cupcakes to show you the structure:

{% raw %}
~~~html
---
type: Chocolate Banana
rating: 1
image_path: /images/cupcakes/chocolate_banana.jpg
description: Our delicious chocolate and banana cupcake.
---
~~~
{% endraw %}


In `cupcakes.html`, we iterate over the collection and output each cupcake's image, type and description:

{% raw %}
~~~html
---
layout: page
title: Muffins
---
<h1>Our cupcakes</h1>

<div class="cupcakes">
{% for cupcake in site.cupcakes %}
  <div class="cupcake">
    <div class="image"><img src="{{ cupcake.image_path }}" alt="{{ cupcake.type }}" /></div>
    <h2>{{ cupcake.type }}</h2>
    <p>{{ cupcake.description }}</p>
  </div>
{% endfor %}
</div>
~~~
{% endraw %}

![Cupcakes](/images/tutorials/control-flow-statements/cupcakes.png)

## The if statement

We'll add an if statement inside the for loop to surround the output of a cupcake and try out different ways of filtering the cupcakes. First let's only show the lemon cupcake:

{% raw %}
~~~html
---
layout: page
title: Muffins
---
<h1>Our cupcakes</h1>

<div class="cupcakes">
{% for cupcake in site.cupcakes %}
  {% if cupcake.type == "Lemon" %}
    <div class="cupcake">
      <div class="image"><img src="{{ cupcake.image_path }}" alt="{{ cupcake.type }}" /></div>
      <h2>{{ cupcake.type }}</h2>
      <p>{{ cupcake.description }}</p>
    </div>
  {% endif %}
{% endfor %}
</div>
~~~
{% endraw %}

![Lemon Cupcake](/images/tutorials/control-flow-statements/lemon.png)

## Not equal to

How about everything *except* the Lemon cupcake:

{% raw %}
~~~html
...
{% if cupcake.type != "Lemon" %}
...
~~~
{% endraw %}

![Lemon Cupcake](/images/tutorials/control-flow-statements/not-lemon.png)

## Contains

What if we want to show all the chocolate cupcakes? There's multiple chocolate cupcakes so we can use contains to check if the word "chocolate" exists in the string:

{% raw %}
~~~html
...
{% if cupcake.type contains "Chocolate" %}
...
~~~
{% endraw %}

![Lemon Cupcake](/images/tutorials/control-flow-statements/chocolate.png)

## Less than and greater than

Let's get the lowest rated cupcakes, we'll check if the rating is less than three:

{% raw %}
~~~html
...
{% if cupcake.rating < 3 %}
...
~~~
{% endraw %}

![Lemon Cupcake](/images/tutorials/control-flow-statements/less-than.png)

What about the highest rated? Let's check if the rating is greater or equal to three:

{% raw %}
~~~html
...
{% if cupcake.rating >= 3 %}
...
~~~
{% endraw %}

![Lemon Cupcake](/images/tutorials/control-flow-statements/greater-than.png)

## Unless

We can also use an `unless` which is the exact opposite of an if statement. If we change the previous if statement to `unless` we'll be back to getting the lowest rated cupcakes:

{% raw %}
~~~html
...
{% unless cupcake.rating >= 3 %}
...
~~~
{% endraw %}

![Lemon Cupcake](/images/tutorials/control-flow-statements/less-than.png)

## Case statement

Let's output an icon indicating the cupcake's rating. The icons we have are named `sick.png`, `unhappy.png`, `ok.png`, `happy.png` and `super_happy.png`.

One way to do this would be with if statements which would look something like this:

{% raw %}
~~~html
<p class="rating">
  {% if cupcake.rating == 1 %}
    <img src="/images/rating/sick.png"/>
  {% elsif cupcake.rating == 2 %}
    <img src="/images/rating/unhappy.png"/>
  {% elsif cupcake.rating == 3 %}
    <img src="/images/rating/ok.png"/>
  {% elsif cupcake.rating == 4 %}
    <img src="/images/rating/happy.png"/>
  {% elsif cupcake.rating == 5 %}
    <img src="/images/rating/super_happy.png"/>
  {% endif %}
</p>
~~~
{% endraw %}


This is ok but we can do even better with a case statement. With a case statement we set the variable we're looking at, then we have different cases depending on the value of that variable:

{% raw %}
~~~html
<p class="rating">
  {% case cupcake.rating %}
    {% when 1 %}
      <img src="/images/rating/sick.png"/>
    {% when 2 %}
      <img src="/images/rating/unhappy.png"/>
    {% when 3 %}
      <img src="/images/rating/ok.png"/>
    {% when 4 %}
      <img src="/images/rating/happy.png"/>
    {% when 5 %}
      <img src="/images/rating/super_happy.png"/>
  {% endcase %}
</p>
~~~
{% endraw %}

![Rating](/images/tutorials/control-flow-statements/rating.png)
