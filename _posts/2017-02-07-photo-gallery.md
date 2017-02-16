---
date: 2017-02-07
title: Photo gallery
video_id: IJzga3-lKrw
description: Display photos in a gallery on your Jekyll site
categories:
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

We need a photo gallery on our Bakery Store site to show off all the amazing cakes they offer. We'll cover two ways of implementing a photo gallery on a Jekyll site: using front matter and using Collections.

## Front matter

We'll start with front matter, this is a good way to add a photo gallery if it's only going to be on one page. First we'll create `photo-gallery.html` and add the default layout and an array with all the image data to the front matter.

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

## Liquid

We can loop over this array to output the images in a grid. There's already CSS styles to format it nicely.

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

![Cakes](/images/tutorials/photo-gallery/cakes.jpg){: .screenshot}

Having the photo gallery in this format gives us flexibility. If we want to reorder the items we can just reorder the array in front matter. If we wanted to make the images link somewhere we'd just add the location to the front matter.

{% raw %}
~~~yaml
...
- image_path: /images/cakes/lemon-cake.jpg
  title: Lemon Cake
  link: /lemon-cake.html
...
~~~
{% endraw %}

Then output the link in an `a` when we output the images.

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

Now let's change this to use a Collection for the data instead of front matter on the page. If we were displaying the photo gallery on multiple pages or had a lot of metadata for each image using a Collection would be a good choice.

We'll create a `photo_gallery` collection, if you're not sure how to do this check out our [Introduction to Collections tutorial](/jekyll-casts/introduction-to-collections/). Each document in the collection will have the metadata for a single image. For example `_photo_gallery/lemon-cake.md` will look like this.

{% raw %}
~~~yaml
---
image_path: /images/cakes/lemon-cake.jpg
title: Lemon Cake
---
~~~
{% endraw %}

We can tweak our loop from before to output from the `photo_gallery` collection.

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

If we wanted to control the order of photos we could add a `weight` variable to the front matter of the documents in `photo_gallery`. `weight` is a number which indicates the photo's position.

{% raw %}
~~~yaml
---
image_path: /images/cakes/lemon-cake.jpg
title: Lemon Cake
weight: 1
---
~~~
{% endraw %}

Then we would order it by the weight before they're output.

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
