---
date: 2017-02-07
title: Introduction to plugins
video_id: l-Uu5Hi2as4
description: How to add Jekyll plugins to your site
category: Plugins
tags:
  - jekyll-setup
  - jekyll-plugins
resources:
  - name: Source code
    link: https://github.com/CloudCannon/bakery-store/tree/plugins
type: Video
set: intermediate
set_order: 5
---
## Introduction

There are times when Jekyll simply can't do something we need it to. Fortunately with Jekyll plugins we can write or download Ruby code to extend Jekyll and do whatever we need.

Jekyll plugins fall into five categories:

## Generators

Generators create content on your site. For example:

* [jekyll-feed](https://github.com/jekyll/jekyll-feed) creates an Atom feed of blog posts.
* [jekyll-archives](https://github.com/jekyll/jekyll-archives) creates archive pages for blog categories and tags.
* [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) creates a sitemap.

## Converters

Converters change a markup language into another format. For example:

* [jekyll-textile-converter](https://github.com/jekyll/jekyll-textile-converter) converts textile to HTML.
* [jekyll-coffeescript](https://github.com/jekyll/jekyll-coffeescript) converts Coffeescript to JavaScript.
* [jekyll-opal](https://github.com/jekyll/jekyll-opal) converts Ruby to JavaScript.

## Commands

Commands extend the `jekyll` executable with subcommands. For example:

* [jekyll-compose](https://github.com/jekyll/jekyll-compose) adds subcommands for creating a post, page or draft.

## Tags

Tags create custom Liquid tags. For example:

* [jekyll-youtube](https://github.com/dommmel/jekyll-youtube) embeds a YouTube video.
* [jekyll-asset-path-plugin](https://github.com/samrayner/jekyll-asset-path-plugin) outputs a relative URL for assets.
* [jekyll-swfobject](https://github.com/sectore/jekyll-swfobject) embeds a SWF object.

## Filters

Filters create custom Liquid filters. For example:

* [jekyll-time-ago](https://github.com/markets/jekyll-timeago) - The distance between two dates in words.
* [jekyll-toc](https://github.com/toshimaru/jekyll-toc) - Generates a table of content.
* [jekyll-email-protect](https://github.com/vwochnik/jekyll-email-protect) - Obfuscates emails to protect them from spam bots.

## Hooks

Hooks give fine-grained control over different points in the build process.

## How do we install Jekyll plugins?

There are two ways to install Jekyll plugins:

### _plugins

This is the easiest method. We simply download a plugin to the `_plugins` directory on our site.

In this example we'll add a plugin for calculating an estimated read time of a piece of content. First let's create `_plugins/reading_time.rb` and adding the following source code (credit [zachleat](https://gist.github.com/zachleat/5792681)):

{% raw %}
~~~ruby
# Outputs the reading time

# Read this in “about 4 minutes”
# Put into your _plugins dir in your Jekyll site
# Usage: Read this in about {{ page.content | reading_time }}

module ReadingTimeFilter
  def reading_time( input )
    words_per_minute = 180

    words = input.split.size;
    minutes = ( words / words_per_minute ).floor
    minutes_label = minutes === 1 ? " minute" : " minutes"
    minutes > 0 ? "about #{minutes} #{minutes_label}" : "less than 1 minute"
  end
end

Liquid::Template.register_filter(ReadingTimeFilter)
~~~
{% endraw %}

Now we can use this filter using {% raw %}`{{ page.content | reading_time }}`{% endraw %}. On our [Bakery Store site](https://github.com/CloudCannon/bakery-store/tree/plugins) I've added the filter to `_layouts/post.html`:

{% raw %}
~~~html
---
layout: default
---
<div class="container">
  <h2 class="spacing">{{ page.title }}</h2>

  <div class="blog-post spacing">
    <p class="summary">{{ page.category }} - {{ content | reading_time }} <span class="date">{{ page.date | date: '%B %d, %Y' }}</span></p>
    {{ content }}
  </div>
</div>
~~~
{% endraw %}

![Reading Time](/images/tutorials/plugins/reading-time.png){: .screenshot}

### Gemfile

This is more complicated but much better option as it allows you to easily upgrade a plugin in the future. These instructions assume you know what a Gem, Gemfile and the bundler are. If you new to these topics or need a brush up, checkout our [Gemfile and the bundler tutorial](/jekyll/gemfiles-and-the-bundler/).

In this example we'll add the [jekyll-feed](https://github.com/jekyll/jekyll-feed) plugin to our site.

First we'll create `Gemfile` with jekyll and jekyll-feed Gems:

{% raw %}
~~~ruby
source 'https://rubygems.org'

gem 'jekyll', '3.1.6'

group :jekyll_plugins do
  gem 'jekyll-feed'
end
~~~
{% endraw %}

Next let's install the Gems using the bundler:

{% raw %}
~~~bash
bundle install
~~~
{% endraw %}

Now we can add a link to the feed in our `<head>` using {% raw %}`{% feed_meta %}`{% endraw %}:

{% raw %}
~~~html
...
<head>
  <meta charset="utf-8">
  <title>{{ page.title }}</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700" media="all">
  {% feed_meta %}
</head>
...
~~~
{% endraw %}

And finally we need to run Jekyll using `bundle exec`:

{% raw %}
~~~ruby
bundle exec jekyll serve
~~~
{% endraw %}

Now our live site has a `/feed.xml` file with a list of our blog posts.

![Feed](/images/tutorials/plugins/feed.png){: .screenshot}

## Where can we find Jekyll plugins?

One of thing to look out for when we're looking for Jekyll plugins is many of them were made years ago for older versions of Jekyll so they may not work with current versions.

Have a look at the [Jekyll GitHub Organization](https://github.com/jekyll) and the [plugins page](https://jekyllrb.com/docs/plugins/) in the Jekyll documentation (note many of these are out of date).
