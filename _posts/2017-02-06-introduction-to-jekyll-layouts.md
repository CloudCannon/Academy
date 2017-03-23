---
date: 2017-02-06
title: Introduction to layouts
video_id: Gc2d-eGSSdQ
description: Use Jekyll layouts to reduce repetition on your site
tags:
  - jekyll-layouts
resources:
  - name: "Layout documentation"
    link: https://jekyllrb.com/docs/frontmatter/
  - name: "Source code"
    link: https://github.com/CloudCannon/bakery-store/tree/layouts
type: Video
set: basics
set_order: 9
icon: layout
---
## Introduction

Most websites typically have a header and footer which remains similar across all pages. If you compare this `index.html` file:

{% raw %}
~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Home Page</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700" media="all">
  </head>
  <body>
    <header>
      <div class="container">
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog.html">Blog</a></li>
          </ul>
        </nav>
        <h1><a href="/">Bakery<strong>Store</strong></a></h1>
      </div>
    </header>
    <div class="content">
      <section class="hero">
        <div class="small-container">
          <h2>Fresh, homemade baked goods</h2>
          <p class="sub-text">Bakery<strong>Store</strong> serves the freshest baked goods in San Francisco.</p>
        </div>
      </section>
      <div class="container">
        <p class="post-hero center-text spacing">Bakery<strong>Store</strong> is known for our fresh bread, delicious cupcakes and chocolatey cookies.</p>
      </div>
      <div class="container">
        <div class="columns spacing">
          <div class="column half">
            <img src="/images/bread.jpg" width="430" alt="Bread">
          </div>
          <div class="column half">
            <h3>Fresh Bread</h3>
            <p>Our bread is baked fresh every morning.</p>
          </div>
        </div>
        <div class="columns spacing">
          <div class="column half">
            <h3>Delicious Cupcakes</h3>
            <p>The best cupcakes in San Francisco.</p>
          </div>
          <div class="column half">
            <img src="/images/cupcake.jpg" width="430" alt="cupcake">
          </div>
        </div>
        <div class="columns spacing">
          <div class="column half">
            <img src="/images/cookie.jpg" width="430" alt="cookie">
          </div>
          <div class="column half">
            <h3>Chocolatey cookies</h3>
            <p>Served with a glass of milk.</p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <p class="center-text"> <a href="http://cloudcannon.com">Created by CloudCannon</a></p>
      </div>
    </footer>
  </body>
</html>
~~~
{% endraw %}

You can see the content outside of the content div is almost exactly the same as `blog.html`:

{% raw %}
~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Blog</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700" media="all">
  </head>
  <body>
    <header>
      <div class="container">
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog.html">Blog</a></li>
          </ul>
        </nav>
        <h1><a href="/">Bakery<strong>Store</strong></a></h1>
      </div>
    </header>
    <div class="content">
      <div class="container">
        <h2 class="spacing">Blog</h2>
        <div class="blog-posts">
          <div class="blog-post spacing">
            <h3><a href="/post.html">Where did the chocolate chip cookie come from?</a></h3>
            <p class="summary">Information<span class="date">January 02, 2016</span></p>
            <p>The chocolate chip cookie was invented by Ruth Graves Wakefield. She owned the Toll House Inn, in Whitman, Massachusetts, a very popular restaurant that featured home cooking in the 1930s. Her cookbook, Toll House Tried and True Recipes, was first published in 1936 by M. Barrows &amp; Company, New York. The 1938 edition of the cookbook was the first to include the recipe "Toll House Chocolate Crunch Cookie" which rapidly became a favorite cookie in American homes.</p>

            <p>Source / Read more <a href="https://en.wikipedia.org/wiki/Chocolate_chip_cookie">Wikipedia</a>.</p>
          </div>
          <div class="blog-post spacing">
            <h3><a href="/post.html">What is sour dough?</a></h3>
            <p class="summary">Information<span class="date">January 01, 2016</span></p>
            <p>Sourdough bread is made by the fermentation of dough using naturally-occurring lactobacilli and yeast. Sourdough bread has a mildly sour taste not present in most breads made with baker's yeast and better inherent keeping qualities than other breads, due to the lactic acid produced by the lactobacilli.</p>
            <p>Source / Read more <a href="https://en.wikipedia.org/wiki/Sourdough">Wikipedia</a>.</p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <p class="center-text"> <a href="http://cloudcannon.com">Created by CloudCannon</a></p>
      </div>
    </footer>
  </body>
</html>
~~~
{% endraw %}

## Reduce repetition

In Jekyll we can use layouts to eliminate this repetition and make the site easier to maintain.

To start, we'll create a new directory called `_layouts`. Inside this we'll create a new file called `default.html`.

Now we'll cut all the HTML from `index.html` which repeats across multiple pages and paste it into `_layouts/default.html`. We also need a placeholder for where the content of the page is going to go. Jekyll makes this available to us using a `{% raw %}{{ content }}{% endraw %}` variable:

{% raw %}
~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Home Page</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700" media="all">
  </head>
  <body>
    <header>
      <div class="container">
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog.html">Blog</a></li>
          </ul>
        </nav>
        <h1><a href="/">Bakery<strong>Store</strong></a></h1>
      </div>
    </header>
    <div class="content">
      {{ content }}
    </div>
    <footer>
      <div class="container">
        <p class="center-text"> <a href="http://cloudcannon.com">Created by CloudCannon</a></p>
      </div>
    </footer>
  </body>
</html>
~~~
{% endraw %}

Let's use this layout on `index.html`. Jekyll front matter has a special variable called `layout` which is used to specify a layout for this page. In this case we want `index.html` to use the default layout:

{% raw %}
~~~html
---
layout: default
---
<section class="hero">
  <div class="small-container">
    <h2>Fresh, homemade baked goods</h2>
    <p class="sub-text">Bakery<strong>Store</strong> serves the freshest baked goods in San Francisco.</p>
  </div>
</section>
<div class="container">
  <p class="post-hero center-text spacing">Bakery<strong>Store</strong> is known for our fresh bread, delicious cupcakes and chocolatey cookies.</p>
</div>
<div class="container">
  <div class="columns spacing">
    <div class="column half">
      <img src="/images/bread.jpg" width="430" alt="Bread">
    </div>
    <div class="column half">
      <h3>Fresh Bread</h3>
      <p>Our bread is baked fresh every morning.</p>
    </div>
  </div>
  <div class="columns spacing">
    <div class="column half">
      <h3>Delicious Cupcakes</h3>
      <p>The best cupcakes in San Francisco.</p>
    </div>
    <div class="column half">
      <img src="/images/cupcake.jpg" width="430" alt="cupcake">
    </div>
  </div>
  <div class="columns spacing">
    <div class="column half">
      <img src="/images/cookie.jpg" width="430" alt="cookie">
    </div>
    <div class="column half">
      <h3>Chocolatey cookies</h3>
      <p>Served with a glass of milk.</p>
    </div>
  </div>
</div>
~~~
{% endraw %}

When we look at `index.html` in a browser it looks exactly as it did before, however now it's using a layout. Let's change `blog.html` to use the layout as well.

{% raw %}
~~~html
---
layout: default
---
<div class="container">
  <h2 class="spacing">Blog</h2>
  <div class="blog-posts">
    <div class="blog-post spacing">
      <h3><a href="/post.html">Where did the chocolate chip cookie come from?</a></h3>
      <p class="summary">Information<span class="date">January 02, 2016</span></p>
      <p>The chocolate chip cookie was invented by Ruth Graves Wakefield. She owned the Toll House Inn, in Whitman, Massachusetts, a very popular restaurant that featured home cooking in the 1930s. Her cookbook, Toll House Tried and True Recipes, was first published in 1936 by M. Barrows &amp; Company, New York. The 1938 edition of the cookbook was the first to include the recipe "Toll House Chocolate Crunch Cookie" which rapidly became a favorite cookie in American homes.</p>

      <p>Source / Read more <a href="https://en.wikipedia.org/wiki/Chocolate_chip_cookie">Wikipedia</a>.</p>
    </div>
    <div class="blog-post spacing">
      <h3><a href="/post.html">What is sour dough?</a></h3>
      <p class="summary">Information<span class="date">January 01, 2016</span></p>
      <p>Sourdough bread is made by the fermentation of dough using naturally-occurring lactobacilli and yeast. Sourdough bread has a mildly sour taste not present in most breads made with baker's yeast and better inherent keeping qualities than other breads, due to the lactic acid produced by the lactobacilli.</p>
      <p>Source / Read more <a href="https://en.wikipedia.org/wiki/Sourdough">Wikipedia</a>.</p>
    </div>
  </div>
</div>
~~~
{% endraw %}

## Layout inheritance

In the next example we're building multiple landing pages and they're all going to have a hero section:

{% raw %}
~~~html
<section class="hero">
  <div class="small-container">
    <h2>Fresh, homemade baked goods</h2>
    <p class="sub-text">Bakery<strong>Store</strong> serves the freshest baked goods in San Francisco.</p>
  </div>
</section>
~~~
{% endraw %}

If we put this hero section in `_layouts/default.html` it's going to output it on every page including `blog.html` which we don't want. Instead, we can use layout inheritance to get around this problem. We'll start by creating a new layout, `_layouts/page.html`. In Jekyll, we can set a layout within a layout, so in the page layout we'll add the hero section then it will call the default layout which has rest of the page structure:

{% raw %}
~~~html
---
layout: default
---
<section class="hero">
  <div class="small-container">
    <h2>Fresh, homemade baked goods</h2>
    <p class="sub-text">Bakery<strong>Store</strong> serves the freshest baked goods in San Francisco.</p>
  </div>
</section>
{{ content }}
~~~
{% endraw %}

We can use this layout on our landing pages and keep the rest of the pages using the default layout.

## Conditions

Let's use front matter to set the heading in the hero section so it can change on each page. In `_layouts/page.html` instead of `<h2>Fresh, homemade baked goods</h2>`, we'll make it a variable:

{% raw %}
~~~html
---
layout: default
---
<section class="hero">
  <div class="small-container">
    <h2>{{ page.hero_text }}</h2>
    <p class="sub-text">Bakery<strong>Store</strong> serves the freshest baked goods in San Francisco.</p>
  </div>
</section>
{{ content }}
~~~
{% endraw %}

On our landing pages we can set `hero_text` in the front matter which changes the heading:
{% raw %}
~~~html
---
layout: page
hero_text: Home Page!
---
...
~~~
{% endraw %}

![Hero Section](/images/tutorials/layouts/hero-section.png){: .screenshot}

## Page titles

We don't want the title for each page to be "Home Page" so let's change it to a variable in `_layouts/default.html`:

{% raw %}
~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700" media="all">
  </head>
  ...
~~~
{% endraw %}

On a page we can set a title in front matter:

{% raw %}
~~~html
---
layout: default
title: Blog
---
...
~~~
{% endraw %}

Which will insert that page's title into `<title>`.

## Jekyll 3 vs Jekyll 2

There's a one minor difference between Jekyll 2 and 3 in regards to variables in layouts.

If we set a front matter variables inside a layout:

{% raw %}
~~~html
---
layout: default
city: San Francisco
---
...
~~~
{% endraw %}

In Jekyll 2 we could output `city` using the `page` variable:

{% raw %}
~~~html
{{ page.city }}
~~~
{% endraw %}


In Jekyll 3 we would output `city` using the `layout` variable:

{% raw %}
~~~html
{{ layout.city }}
~~~
{% endraw %}
