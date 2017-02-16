---
date: 2017-02-08
title: Google Custom Search Engine
description: Add Search to your Jekyll site using Google Custom Search Engine
categories:
  - jekyll-third-parties
  - jekyll-search
type: Document
---

## Overview

Google Custom Search Engine is the easiest way I've found to add search to a Jekyll site. To install it's simply a matter of creating an account and embedding a code and search functionality works great.  

## Instructions

1.  [Sign up for Google Custom Search Enginge](https://cse.google.com/)
2.  Create a new "search engine". You'll need to provide a domain and title.
3.  Click "Get the Code" and copy the source into an include `_includes/google-search.html`. Your `cx` will be different but otherwise it should look like this:
    ~~~html
    <script>
      (function() {
        var cx = '012084064073534095313:hl3e_tosrlq';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      })();
    </script>
    <gcse:search></gcse:search>
    ~~~
4.  Use the include in layouts or on pages where you want search:
    {% raw %}
    ~~~html
    {% include google-search.html %}
    ~~~
    {% endraw %}

## Customise

Google also has options for customising the look and feel of the results and search box is displayed, options for how content is indexed, statistics and other options.

## Screenshots

Here I've added a search field to a Jekyll template:

![Search box](/images/tutorials/google-custom-search-engine/search-box.png){: .screenshot}

And the results display as an overlay:

![Results](/images/tutorials/google-custom-search-engine/results.png){: .screenshot}