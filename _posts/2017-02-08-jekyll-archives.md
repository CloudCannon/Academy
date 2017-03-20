---
date: 2017-02-08
title: Archives
description: Archive posts by date, tags and categories.
tags:
  - jekyll-plugins
  - jekyll-blogging
type: Document
---

## Overview

The [jekyll-archives](https://github.com/jekyll/jekyll-archives) plugin let's you generate pages which list posts by their categories, tags or date. This site uses jekyll-archives to organise tutorials by their category.

## Installation

1.  [Create a Gemfile](/jekyll-setup/gemfiles-and-the-bundler/) if you don't already have one.
2.  Add jekyll-archives to the jekyll_plugins group in your Gemfile:
    ~~~ruby
    source 'https://rubygems.org'

    gem 'jekyll', '3.3.1'

    group :jekyll_plugins do
      gem 'jekyll-archives'
    end
    ~~~
3. Run `bundle install`

## Configuration

All configuration is set in `_config.yml` under the `archives` key. The default configuration is set to this:

~~~yaml
jekyll-archives:
  enabled: []
  layout: 'archive'
  permalinks:
    year: '/:year/'
    month: '/:year/:month/'
    day: '/:year/:month/:day/'
    tag: '/tag/:name/'
    category: '/category/:name/'
~~~

### Enabled

Describes which archives types are enabled. The options are 'all' or an array of any combination of year, month, day, categories, tags.

~~~yaml
enabled: all
~~~

~~~yaml
enabled:
  - categories
~~~

~~~yaml
enabled:
  - year
  - month
  - tags
~~~

### Layout

The layout to use if no type specific layout is set.

~~~yaml
layout: archive
~~~

### Type specific layout

Layouts for specific types of archives.

~~~yaml
layouts:
  year: year-archive
  month: month-archive
  day: day-archive
  tag: tag-archive-layout
~~~

### Permalinks

Customise the permalink format of the archive pages.

~~~yaml
permalinks:
  year: '/archives/year/:year/'
  month: '/archives/month/:year-:month/'
  tag: '/archives/tag/:name/`
~~~

Check out the [configuration documentation](https://github.com/jekyll/jekyll-archives/blob/master/docs/configuration.md) for in-depth information.

## Usage

Once the plugin is set up you can link to the permalink you've set up. On this site, there's a category called `jekyll-plugins` so I can link to it like this:

~~~html
<a href="/categories/jekyll-plugins/">Plugins</a>
~~~

You can output all the categories and links to their archive pages by looping of `site.categories`:

{% raw %}
~~~html
<ul>
{% for category in categories %}
  {% assign category_name = category[0] %}
  <li>
    <a href="/category/{{ category_name | slugify }}/">{{ category_name | replace: "-", " " }}</a>
	</li>
{% endfor %}
~~~
{% endraw %}

I always replace spaces with hyphens in my category names to avoid having `%20` in the URLs making them a little nicer to read. If you do this you can just replace `-` with a space when you output the actual name like I have above.