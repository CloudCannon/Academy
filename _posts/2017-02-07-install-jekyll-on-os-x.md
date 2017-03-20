---
date: 2017-02-07
title: Install Jekyll on Mac OS X
video_id: buZ-v5Qt19w
description: Set up Jekyll on a OS X environment
tags:
  - jekyll-setup
resources:
  - name: Homebrew
    link: http://brew.sh/
type: Video
set: basics
set_order: 3
icon: apple
---
## Introduction

In this installation guide we'll be using Mac OS X 10.11 El Capitan. These instructions should work for older versions of OS X but they have not but tested.

## Commands

Install Xcode from the AppStore, this around a 4GB download.

![Xcode](/images/tutorials/mac-install/xcode.png)

We'll open up the Terminal which can be found at `Applications/Utilities/Terminal`. In the Terminal we can run the rest of our installation commands.

![Terminal](/images/tutorials/mac-install/terminal.png)

We need to install "Command Line Tools" which gives us access to commonly used tools, utilities, and compilers such as make and GCC.

{% raw %}
~~~bash
xcode-select --install
~~~
{% endraw %}

![Command Line Tools](/images/tutorials/mac-install/xcode-select.png)

After that we need to agree to Xcode's license. Either run the command below or open up Xcode which will prompt you to agree to the license.

{% raw %}
~~~bash
sudo xcodebuild -license
~~~
{% endraw %}

OS X already has Ruby already installed but it has some quirks that makes installing Jekyll tricky. Instead of using this version, we'll install our own version of Ruby.

First we'll install [Homebrew](http://brew.sh/). Homebrew helps you install packages and is a must-have for anyone programming on OS X.

{% raw %}
~~~bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
~~~
{% endraw %}

Now we can install Ruby.

{% raw %}
~~~bash
brew install ruby
~~~
{% endraw %}

And now we can install Jekyll.

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

![Version](/images/tutorials/mac-install/version.png)
