---
date: 2017-02-06
title: Looping in liquid
video_id: uDiOH6EbaRA
description: Control how liquid loops over your content
tags:
  - jekyll-liquid
resources:
  - name: "Liquid documentation"
    link: https://shopify.github.io/liquid/
  - name: "Source code"
    link: https://github.com/CloudCannon/bakery-store/tree/liquid-loops
type: Video
set: basics
set_order: 13
icon: loop
---
## Introduction

In Liquid you often need to loop over arrays. In this tutorial taking an in-depth look at all the options available to us when we're looping.

On our Bakery Store site we have `cupcake.html` which lists all the cupcakes available.

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
      <div class="image">
        <img src="{{ cupcake.image_path }}" alt="{{ cupcake.type }}" />
      </div>
      <h2>{{ cupcake.type }}</h2>
      <p>{{ cupcake.description }}</p>
    </div>
  {% endfor %}
</div>
~~~
{% endraw %}

![Cupcakes](/images/tutorials/looping-in-liquid/cupcakes.png){: .screenshot}

## Cycle

First we'll add an image filter in CSS to make all the images black and white.

{% raw %}
~~~html
...
<img src="{{ cupcake.image_path }}" alt="{{ cupcake.type }}" style="-webkit-filter: grayscale(100%)" />
...
~~~
{% endraw %}

![Black and white cupcakes](/images/tutorials/looping-in-liquid/black-and-white.png)

Let's change the image filter for each image. We'll make the first image black and white, the second sepia, the third inverted and then cycle through those options for the rest of the images. To do this we'll use a `cycle` which has multiple values it iterates over each time it's called.

{% raw %}
~~~html
...
<img src="{{ cupcake.image_path }}" alt="{{ cupcake.type }}" style="-webkit-filter: {% cycle "grayscale", "sepia", "invert" %}(100%)" />
...
~~~
{% endraw %}

![Cycle Cupcakes](/images/tutorials/looping-in-liquid/cycle.png){: .screenshot}

## Index

Next we'll number the cupcakes. We can access the current iteration of the loop using `forloop.index`.

{% raw %}
~~~html

...
<h2>{{ forloop.index }}. {{ cupcake.type }}</h2>
...
~~~
{% endraw %}

![Cupcakes Index](/images/tutorials/looping-in-liquid/index.png){: .screenshot}

We can make the 0 indexed if we use `forloop.index0`.

{% raw %}
~~~html
...
<h2>{{ forloop.index0 }}. {{ cupcake.type }}</h2>
...
~~~
{% endraw %}

![Cupcakes Index0](/images/tutorials/looping-in-liquid/index0.png){: .screenshot}

## First and last

The next thing we'll do is change the first and last cupcakes so the title is white text on a black background. We can check it's the first or last item in the loop using `forloop.first` and `forloop.last`.

{% raw %}
~~~html
...
<h2
{% if forloop.first or forloop.last %}
  style="background: black; color: white;"
{% endif %}
>{{ forloop.index0 }}. {{ cupcake.type }}</h2>
...
~~~
{% endraw %}

![Cupcakes First](/images/tutorials/looping-in-liquid/first.png)

## Rindex

If we wanted to change this to the last three items instead of the first and the last we could use `forloop.rindex`. rindex gives us how many iterations are left in the loop. So on the first iteration the `forloop.rindex` will be six, on the second it would be five and on the last it would be one. We can also use `forloop.rindex0` to have a zero indexed number.

{% raw %}
~~~html
...
<h2
  {% if forloop.rindex <= 3 %}
    style="background: black; color: white;"
  {% endif %}
>{{ forloop.index0 }}. {{ cupcake.type }}</h2>
...
~~~
{% endraw %}

![Cupcakes rindex](/images/tutorials/looping-in-liquid/rindex.png){: .screenshot}

## Length

When you hover of a heading on the cupcakes page, let's make it popup with the total number of cupcakes available. I could get the size from the collection like this `site.cupcakes.size` or we could get it from the forloop like this `forloop.length`.

{% raw %}
~~~html
...
<h2
{% if forloop.rindex <= 3 %}
  style="background: black; color: white;"
{% endif %}

title="{{ forloop.length }} cupcakes"
>{{ forloop.index0 }}. {{ cupcake.type }}</h2>
...
~~~
{% endraw %}

![Cupcakes title](/images/tutorials/looping-in-liquid/title.png){: .screenshot}

## Continue

We can use a `continue` to skip straight to the next item in the loop. So in this example we've skipped over the Lemon cupcake.

{% raw %}
~~~html
...
{% for cupcake in site.cupcakes %}
  {% if cupcake.type == "Lemon" %}
    {% continue %}
  {% endif %}
  <div class="cupcake">
    <div class="image">
      <img src="{{ cupcake.image_path }}" alt="{{ cupcake.type }}"
        style="-webkit-filter: {% cycle "grayscale", "sepia", "invert" %}(100%)"
      />
    </div>
    <h2
      {% if forloop.rindex <= 3 %}
        style="background: black; color: white;"
      {% endif %}

      title="{{ forloop.length }} cupcakes"
    >{{ forloop.index0 }}. {{ cupcake.type }}</h2>
    <p>{{ cupcake.description }}</p>
  </div>
{% endfor %}
...
~~~
{% endraw %}

![Cupcakes continue](/images/tutorials/looping-in-liquid/continue.png){: .screenshot}

## Break

We can use a `break` to exit the loop. So in this example we're dropping out of the loop when it gets to the Lemon cupcake.

{% raw %}
~~~html
...
{% for cupcake in site.cupcakes %}
  {% if cupcake.type == "Lemon" %}
    {% break %}
  {% endif %}
  <div class="cupcake">
    <div class="image">
      <img src="{{ cupcake.image_path }}" alt="{{ cupcake.type }}"
        style="-webkit-filter: {% cycle "grayscale", "sepia", "invert" %}(100%)"
      />
    </div>
    <h2
      {% if forloop.rindex <= 3 %}
        style="background: black; color: white;"
      {% endif %}

      title="{{ forloop.length }} cupcakes"
    >{{ forloop.index0 }}. {{ cupcake.type }}</h2>
    <p>{{ cupcake.description }}</p>
  </div>
{% endfor %}
...
~~~
{% endraw %}

![Cupcakes break](/images/tutorials/looping-in-liquid/break.png){: .screenshot}

## Reversed

Let's get rid of the break statement and try reversing the order of the loop. We can do this by passing reversed to the for loop.

{% raw %}
~~~html
...
{% for cupcake in site.cupcakes reversed %}
...
~~~
{% endraw %}

![Cupcakes reversed](/images/tutorials/looping-in-liquid/reversed.png){: .screenshot}

## Limit and offset

We can add a `limit` to a show maximum of three cupcakes and an `offset` which skips over the first x number of cupcakes.

{% raw %}
~~~html
...
{% for cupcake in site.cupcakes reversed limit: 3 offset: 3 %}
...
~~~
{% endraw %}

![Cupcakes offset](/images/tutorials/looping-in-liquid/limit.png){: .screenshot}

## Else

You might need to handle the case where your array is empty. In this example we'll create an empty flavours array, then we'll loop over that array and specify an else which is the case where the array is empty.

{% raw %}
~~~html
---
layout: page
title: Muffins
flavours: []
---
...
{% for flavour in page.flavours %}
  {{ flavour }}
{% else %}
  <h3>There are no flavours</h3>
{% endfor %}
...
~~~
{% endraw %}

![Cupcakes else](/images/tutorials/looping-in-liquid/else.png){: .screenshot}
