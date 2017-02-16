---
date: 2017-02-08
title: YouTube
description: Embed a responsive YouTube video on your Jekyll site.
categories:
  - jekyll-third-parties
  - jekyll-includes
type: Document
---

## Overview

YouTube is a great way to host video your Jekyll site. It's free, loads quickly, is reliable and it's easy to embed in your site.

## Instructions

1.  Find your video on YouTube then go to Share -> Embed
2.  Copy the embed code to a new include `_includes/youtube.html`.
3.  Replace the end part of the iframe src url with a variable `youtube_id`:
    ~~~html
    <iframe width="560" height="315" src="https://www.youtube.com/embed/{{ include.youtube_id}}" frameborder="0" allowfullscreen></iframe>
    ~~~

Now you can use this include anywhere in your site by passing it the id of the YouTube video

~~~html
...
{% include youtube.html youtube_id=_OBlgSz8sSM %}
...
~~~

## Responsive YouTube video

The include above works fine but the videos are always the same size. If you have a responsive site it's better if the video scales so it always makes use of the available space.

With a few tweaks to the include script you can achieve this. We'll add a `div` around the iframe and remove the width and height. I've also added `?rel=0&modestbranding=1&showinfo=0` to the src URL which removes some of the YouTube branding and makes it display cleaner:

~~~html
<div class="video_wrapper">
  <iframe src="https://www.youtube.com/embed/{{ include.youtube_id}}?rel=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>
~~~

To finish off we'll add some CSS. This forces the video to always be the full width of is container and to maintain a particular aspect ratio. In this case we have a ratio of 16:9 which gives us `padding-bottom: 56.25%;` (9/16):

~~~css
.video_wrapper {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 25px;
	height: 0;
}

.video_wrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
~~~