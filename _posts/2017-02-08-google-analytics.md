---
date: 2017-02-08
title: Google Analytics
description: Add Google Analytics to your Jekyll blog
categories:
  - jekyll-third-parties
type: Document
---

## Overview

Google Analytics is a visitor analytics platform you can drop into your Jekyll site. With Google Analytics you can see how many visitors you have each day, how the get to your site, their location and other valuable information.

![Google Analytics](/images/tutorials/google-analytics/example.png)


## Instructions

1.  Create a new Analytics account if you don't already have one - [Google Analytics](analytics.google.com).
2.  Set up a property for your site.
3.  In your Property Settings copy the `Tracking Id` and set it as a `google_analytics_key` variable in your `_config.yml`:
    {% raw %}
    ~~~yaml
    ...
    google_analytics_key: UA-16478174-16
    ...
    ~~~
4.  In your main layout (usually `_layouts/default.html`) paste this code somewhere in your `<head>`:

    ~~~liquid
    {% if jekyll.environment == 'production' and site.google_analytics_key != '' %}
      <script>
        (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,"script","//www.google-analytics.com/analytics.js","ga");

        ga("create", "{{ site.google_analytics_key }}", "auto");
        ga("send", "pageview");
      </script>
    {% endif %}
    ~~~

This snippet will only add the the tracking code in the production environment.

## Custom Events

Tracking custom events can give you deeper insight into how people are using your site. Google Analytics allows us to add [custom events](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) using JavaScript. For example, you could track the number of times a share button was clicked like this:

~~~javascript
var buttons = document.getElementsByClassName("share-button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function handleOutboundLinkClicks(event) {
    ga("send", "event", {
      eventCategory: "Outbound Link",
      eventAction: "click",
      eventLabel: event.target.href,
      transport: "beacon"
    });
  });
}
~~~