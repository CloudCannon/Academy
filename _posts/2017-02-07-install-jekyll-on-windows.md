---
date: 2017-02-07
title: Install Jekyll on Windows
video_id: ichYzFwmwZ8
description: Set up Jekyll on a Windows environment
categories:
  - jekyll-set-up
resources:
  - name: Chocolatey
    link: http://chocolatey.org
type: Video
set: setup
set_order: 1
---
## Introduction

In this installation guide we'll be using Windows 10. These instructions should work for older versions of Windows but they have not but tested.

Open Command Prompt which can be found in `All Apps -> Windows System -> Command Prompt`. Right click on the icon, select "More" then "Run as administrator"

![Command Prompt](/images/tutorials/windows-install/command-prompt.png)

## Commands

Next we'll install [Chocolatey](https://chocolatey.org/) which is a package manager for Windows.

{% raw %}
~~~bash
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
~~~
{% endraw %}

Close Command Prompt and open it again to make Chocolatey available, remember to run it as administrator.

First we'll install ruby.

{% raw %}
~~~bash
choco install ruby -y
~~~
{% endraw %}

Close Command Prompt and open it once again to make Ruby available, remember to run it as administrator.

And now we can install Jekyll.

{% raw %}
~~~bash
gem install jekyll
~~~
{% endraw %}

## Final check

We can test Jekyll is working by checking the version installed.
{% raw %}
~~~bash
jekyll -v
~~~
{% endraw %}

![Version](/images/tutorials/windows-install/version.png)
