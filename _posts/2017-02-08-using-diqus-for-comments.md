---
date: 2017-02-08
title: Disqus
description: Add commenting to your posts and other pages using Disqus
categories:
  - jekyll-blogging
  - jekyll-third-parties
type: Document
---

## Overview

Disqus is a free, hosted commenting system you can drop into your Jekyll site. With Disqus, we can add commenting to a blog or other pages in a couple of minutes.

## Instructions

1.  Register your site with [Disqus](https://disqus.com/websites/).
2.  Copy the [Universal Embed code](https://disqus.com/admin/universalcode/) below
    {% raw %}
    ~~~javascript
    <div id="disqus_thread"></div>
    <script>
      var disqus_shortname = '{{ site.disqus_shortname }}';
      var disqus_config = function () {
        this.page.url = "{{ page.url | prepend: site.url }}";
        this.page.identifier = "{{ page.id }}";
      };

      (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>

    ~~~
    {% endraw %}
3.  Paste it into your post layout.
4.  Set `url` to your site's domain and `disqus_shortname` to your shortname in `_config.yml`
    {% raw %}
    ~~~yaml
    ...
    url: http://mysite.com
    disqus_shortname: YOUR_DISQUS_SHORTNAME
    ~~~
    {% endraw %}


## Turn off commenting

If we wanted to disable commenting on particular pages we could set `comments: false` in front matter the surround the Universal Embed code with an if statement:

{% raw %}
~~~liquid
...
{% if page.comments != false %}
  ...
{% endif %}
...
~~~
{% endraw %}
