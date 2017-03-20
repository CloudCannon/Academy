---
date: 2017-02-07
title: Install Jekyll on Linux
video_id: 1wj4OvFkR9g
description: Set up Jekyll on a Linux environment
tags:
  - jekyll-setup
type: Video
set: basics
set_order: 4
icon: linux
---
## Introduction

In this installation guide we'll be using Ubuntu 16.04. If you're using a different Linux distribution, change the `apt-get` commands to the package manager on your operation system.

To begin with, we'll open up the Terminal. In the Terminal we can run our installation commands.

![Terminal](/images/tutorials/linux-install/terminal.png)

## Commands

First we'll make sure Ubuntu is up to date.

{% raw %}
~~~bash
sudo apt-get update
~~~
{% endraw %}

Then we'll install ruby.

{% raw %}
~~~bash
sudo apt-get install ruby-full
~~~
{% endraw %}

And finally we'll install Jekyll.

{% raw %}
~~~bash
sudo gem install jekyll
~~~
{% endraw %}

## Final check

We can test Jekyll is working by checking the version installed.
{% raw %}
~~~bash
jekyll -v
~~~
{% endraw %}

![Version](/images/tutorials/linux-install/version.png)
