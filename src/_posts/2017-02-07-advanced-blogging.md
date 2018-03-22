---
date: 2017-02-07
title: Advanced blogging
video_id: NMeVXMucuuo
description: Advanced tips and tricks for creating your Jekyll blog
tags:
  - jekyll-blogging
resources:
  - name: Posts documentation
    link: https://jekyllrb.com/docs/posts/
  - name: Source code
    link: https://github.com/CloudCannon/bakery-store/tree/advanced-blogging
type: Video
set: advanced
set_order: 1
---
## Introduction

In a [previous](/jekyll/introduction-to-blogging/) tutorial we built a simple blog for our Bakery Store. In this tutorial we'll add advanced blogging features and go over some other tricks.

## Setting a title

The post `_posts/2016-04-03-chocolate-chip-cookies.md` has a default `title` of "chocolate chip cookies" which comes directly from the filename. If we want to keep the filename the same but set our own title we can use front matter.

{% raw %}
~~~html
---
layout: posts
title: How are chocolate cookies made?
---
...
~~~
{% endraw %}

Now `post.title` is "How are chocolate cookies made?".


## Setting a date
We can do the same thing with the date. Let's publish this post on new year's day.

{% raw %}
~~~html
---
layout: posts
title: How are chocolate cookies made?
date: 2016-01-01
---
...
~~~
{% endraw %}

![Title Date](/images/tutorials/advanced-blogging/title-date.png){: .screenshot}

## Published

In front matter we can control whether a blog post is published. If we set `published` to false in the front matter, it will remove the post from the blog listing on the site. This is an easy way to temporarily remove a post from the blog listing, just note you can still access the post by going directly to its URL.

{% raw %}
~~~html
---
layout: posts
title: How are chocolate cookies made?
date: 2016-01-01
published: false
---
...
~~~
{% endraw %}

## Excerpt

`blog.html` lists all the blog posts on the site. Let's show visitors a snippet of text from the post content to give them a glimpse of what's inside. Jekyll makes the first paragraph in a blog post available to us using `excerpt`.

{% raw %}
~~~html
---
layout: page
title: Blog Page
---
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
~~~
{% endraw %}

![Excerpt](/images/tutorials/advanced-blogging/excerpt.png){: .screenshot}

If we wanted to more control over the content in the snippet we can use a excerpt separator. In the post's front matter we can specify `excerpt_separator` which is a sequence of characters to indicate the end of the excerpt. Let's add a few paragraphs of text and add a excerpt separator.

{% raw %}
~~~html
---
layout: posts
title: How are chocolate cookies made?
date: 2016-01-01
excerpt_separator: <!-- excerpt -->
---
How are chocolate cookies made?

Well now you'll find out!

<!-- excerpt -->

The chocolate chip cookie was invented by Ruth Graves Wakefield. She owned the Toll House Inn, in Whitman, Massachusetts, a very popular restaurant that featured home cooking in the 1930s. Her cookbook, Toll House Tried and True Recipes, was first published in 1936 by M. Barrows &amp; Company, New York. The 1938 edition of the cookbook was the first to include the recipe "Toll House Chocolate Crunch Cookie" which rapidly became a favorite cookie in American homes.

Source / Read more [Wikipedia](https://en.wikipedia.org/wiki/Chocolate_chip_cookie)
~~~
{% endraw %}

![Excerpt Seperator](/images/tutorials/advanced-blogging/excerpt-seperator.png){: .screenshot}

If we don't want the excerpt to be part of the post content we can use a regular front matter variable.

{% raw %}
~~~html
---
layout: posts
title: How are chocolate cookies made?
date: 2016-01-01
description: Welcome to the exciting world of chocolate chip cookies
---
...
~~~
{% endraw %}

Then we output `description` instead on `excerpt` in `blog.html`.

{% raw %}
~~~html
---
layout: page
title: Blog Page
---
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.description }}
    </li>
  {% endfor %}
</ul>
~~~
{% endraw %}



## Categories

Categories are set in the post's front matter. Let's put `_posts/2016-04-03-chocolate-chip-cookies.md` in the `cookies` and `baking` categories.

{% raw %}
~~~html
---
layout: posts
title: How are chocolate cookies made?
date: 2016-01-01
categories:
  - cookies
  - baking
---
...
~~~
{% endraw %}

We'll put `_posts/2016-04-04-sourdough-bread.md` in the `baking` category.

{% raw %}
~~~html
---
layout: posts
categories:
  - baking
---
...
~~~
{% endraw %}

Adding a category to a post changes the default URL. So the URL for `_posts/2016-04-04-sourdough-bread.md` was `/2016/04/04/sourdough-bread.html` and now it's `/baking/2016/04/04/sourdough-bread.html`.

Let's add a list of the categories and posts inside those categories to `blog.html`. Jekyll makes the categories available to us at `site.categories`. Iterating over `site.categories` gives as another array with two items, the first item is the name of the category and the second item is an array of blog posts in that category.

{% raw %}
~~~html
---
layout: page
title: Blog Page
---
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
~~~
{% endraw %}

![Categories](/images/tutorials/advanced-blogging/categories.png){: .screenshot}

## Tags

Jekyll also has the concept of tags which behave in a similar way to categories. Let's add a tag of bread to `_posts/2016-04-04-sourdough-bread.md`.

{% raw %}
~~~html
---
layout: posts
categories:
  - baking
tags:
  - bread
---
...
~~~
{% endraw %}

We can access the tags on our site at `site.tags`. The main difference between categories and tags is:

 * By default categories will add the category to the URL whereas tags will not and two.
 * We can customise the URL for posts to include the category using permalinks. We can't with tags.

## Post URL

The problem with hardcoding a link to a post is if we change the URL of the post in the future, the link will break. With `post_url` the link will automatically update i[ we change the URL.

Instead of linking directly to a post:

{% raw %}
~~~html
...
<p>
  <a href="/bread/2016-04-04-sourdough-bread.html">Sourdouh Bread</a>
</p>
...
~~~
{% endraw %}

We call `post_url` and pass it the date and title of the post:

{% raw %}
~~~html
...
<p>
  <a href="{% post_url 2016-04-04-sourdough-bread %}">Sourdough Bread</a>
</p>
...
~~~
{% endraw %}

## Summary

Now you've got a solid foundation in Jekyll blogging it might be worth taking a look at some related topics:

* Learn about customising your post URL with [permalinks](/jekyll/permalinks/).
* Create [archive pages](/jekyll/jekyll-archives/) to organise posts by date, category or tag.
* Build [search](/jekyll/jekyll-search-using-lunr-js/) for your posts using lunr.js.