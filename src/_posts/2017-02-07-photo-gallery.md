---
date: 2017-02-07
title: Photo gallery
video_id: xdxboa6WUeA
description: Display photos in a gallery on your Jekyll site
category: General
tags:
  - jekyll-liquid
  - jekyll-front-matter
  - jekyll-collections
resources:
  - name: Source code
    link: https://github.com/CloudCannon/bakery-store/tree/photo-gallery
type: Video
set: intermediate
set_order: 3
---
## Introduction

We're looking at two ways of implementing a photo gallery in Jekyll: using front matter and collections.

## Front matter

If the photo gallery is only going to be used on one page then front matter is a nice choice. First we'll create `photo-gallery.html` and add an array with image data to the front matter.

{% raw %}
~~~yaml
---
layout: default
images:
  - image_path: /images/cakes/apple-pie.jpg
    title: Apple Pie
  - image_path: /images/cakes/birthday-cake.jpg
    title: Birthday Cake
  - image_path: /images/cakes/black-forest.jpg
    title: Black Forest
  - image_path: /images/cakes/brownie.jpg
    title: Brownie
  - image_path: /images/cakes/cheese-cake.jpg
    title: Cheese Cake
  - image_path: /images/cakes/chocolate-cake.jpg
    title: Chocolate Cake
  - image_path: /images/cakes/fruit-cake.jpg
    title: Fruit Cake
  - image_path: /images/cakes/lamington.jpg
    title: Lamington
  - image_path: /images/cakes/lemon-cake.jpg
    title: Lemon Cake
---
~~~
{% endraw %}

Now we've got our data in front matter we can loop over the array to output the images in a grid.

{% raw %}
~~~html
...
<ul class="photo-gallery">
  {% for image in page.images %}
    <li><img src="{{ image.image_path }}" alt="{{ image.title}}"/></li>
  {% endfor %}
</ul>
~~~
{% endraw %}

And finally we would just need to add some CSS to make it display nicely. I'm not going to cover that in this tutorial as it really depends on your requirements and site.

![Cakes](/images/tutorials/photo-gallery/cakes.jpg){: .screenshot}

Using front matter for the photo gallery gives us a lot of flexibility. We can easily reorder items and extend the structure to adjust the functionality. For example, to have each item link somewhere we can add a link field to the array:

{% raw %}
~~~yaml
...
- image_path: /images/cakes/lemon-cake.jpg
  title: Lemon Cake
  link: /lemon-cake.html
...
~~~
{% endraw %}

Then output the link in an `a` when we output the images:

{% raw %}
~~~html
...
<ul class="photo-gallery">
  {% for image in page.images %}
    <li>
      <a href="{{ image.link }}">
        <img src="{{ image.image_path }}" alt="{{ image.title}}"/>
      </a>
    </li>
  {% endfor %}
</ul>
~~~
{% endraw %}

## Collection

Using a collection for a photo gallery is good choice if we are displaying the photo gallery on multiple pages or had a lot of metadata for each image.

First we'll create a `photo_gallery` collection, if you're not sure how to do this check out our [Introduction to Collections tutorial](/jekyll/introduction-to-jekyll-collections/).

Each document in the collection will have metadata for a single image. For example, `_photo_gallery/lemon-cake.md`:

{% raw %}
~~~yaml
---
image_path: /images/cakes/lemon-cake.jpg
title: Lemon Cake
---
~~~
{% endraw %}

Using liquid we can iterate over the `photo_gallery` collection:

{% raw %}
~~~html
...
<ul class="photo-gallery">
  {% for image in site.photo_gallery %}
    <li><img src="{{ image.image_path }}" alt="{{ image.title}}"/></li>
  {% endfor %}
</ul>
~~~
{% endraw %}

If we need to control the order of photos we could add a `weight` variable to the front matter of the documents in `photo_gallery`. `weight` is a number which indicates the photo's position.

{% raw %}
~~~yaml
---
image_path: /images/cakes/lemon-cake.jpg
title: Lemon Cake
weight: 1
---
~~~
{% endraw %}

Then we order the collection documents by the weight before they're output:

{% raw %}
~~~html
...
{% assign sorted_photos = site.photo_gallery | sort: "weight" %}
<ul class="photo-gallery">
  {% for image in sorted_photos %}
    <li><img src="{{ image.image_path }}" alt="{{ image.title}}"/></li>
  {% endfor %}
</ul>
~~~
{% endraw %}

## JavaScript

These techniques will work exactly the same when using a JavaScript photo gallery. For example the [template pages](/templates/hydra/) on this site use a library called [lightSlider](http://sachinchoolur.github.io/lightslider/) to display screenshots. Lightslider expects the elements in a simple `<ul>` structure in the HTML and it handles the rest of logic to slide between the photos.