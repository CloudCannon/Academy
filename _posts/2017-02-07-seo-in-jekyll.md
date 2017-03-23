---
date: 2017-02-07
title: SEO
video_id: 7o7DRrCstdo
description: Search Engine Optimization for Jekyll sites
tags:
  - jekyll-plugins
  - jekyll-front-matter
  - jekyll-collections
resources:
  - name: Source code
    link: https://github.com/CloudCannon/bakery-store/tree/seo
  - name: Beginners guide to SEO
    link: https://moz.com/beginners-guide-to-seo
  - name: Search Engine Optimization Starter Guide
    link: http://static.googleusercontent.com/media/www.google.com/en/us/webmasters/docs/search-engine-optimization-starter-guide.pdf
  - name: SEO scanner
    link: http://seositecheckup.com/
type: Video
set: intermediate
set_order: 8
---
## Introduction

In this tutorial we'll go over techniques to improve the search engine optimization of our [demo Bakery Store site](https://github.com/CloudCannon/bakery-store/tree/seo).

## Jekyll SEO Tag Plugin

The [jekyll-seo-tag plugin](https://github.com/jekyll/jekyll-seo-tag) is the best way to set all the meta tags we need for SEO. We add a {% raw %}`{% seo %}`{% endraw %} Liquid tag in our `<head>`. Then in the page front matter we can set `title`, `description`, `image` and many other options which output as `<title>`, `<meta name="description">`, [Open Graph tags](http://ogp.me/) and [JSON-LD](http://json-ld.org/). Open Graph allows us to control how content is displayed when it's shared on Facebook, Twitter, Pinterest and other social networks. JSON-LD helps Google and other search engines display your content in search results.

Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/) is a useful tool for previewing what content will look like when it's shared.

![Facebook Open Graph Debugger](/images/tutorials/seo/facebook.png){: .screenshot}

Here's more information on creating SEO friendly [title tags](https://moz.com/learn/seo/title-tag) and [description tags](https://moz.com/learn/seo/meta-description).

## Structured URLs

With permalinks, we can control how Jekyll builds site URLs. Head over to our [permalink tutorial](/jekyll/permalinks/) to review how they work. Google recommends using descriptive keywords in the URL.

Moz has a great [URL guide](https://moz.com/learn/seo/url) to help you create SEO friendly URLs.

## Sitemap

Sitemaps help search engines find content on your site. We can generate a sitemap using the [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) plugin or David Ensinger has a [useful Liquid script](http://davidensinger.com/2013/03/generating-a-sitemap-in-jekyll-without-a-plugin/).

For more information check out [Google's sitemap documentation](https://support.google.com/webmasters/answer/183668?hl=en).

## Custom 404 Pages

Custom 404 Pages in Jekyll can help users navigate our site if they've gone to a page which doesn't exist. [GitHub Pages](https://pages.github.com), [CloudCannon](http://cloudcannon.com) and the Jekyll Server will show `404.html` (if the file exists) when they can't find a page. Other services may require configuration to get custom 404 pages working.

Have a look at [404 page best practices](https://searchenginewatch.com/sew/how-to/2293339/404-page-best-practices) to help create useful 404 pages for your visitors.

## Other Resources

This should be enough to get you started with SEO on Jekyll. Here are some other useful links to continue your learning.

* Moz has a fantastic guide called [beginners guide to SEO](https://moz.com/beginners-guide-to-seo).
* Google also has a useful reference - [Search Engine Optimization
Starter Guide](http://static.googleusercontent.com/media/www.google.com/en/us/webmasters/docs/search-engine-optimization-starter-guide.pdf).
* There are plenty of [SEO scanners](http://seositecheckup.com/) which will help you find common SEO problems.
