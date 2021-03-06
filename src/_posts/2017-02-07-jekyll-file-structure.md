---
date: 2017-02-07
title: File structure
video_id: iF6emJkKTHk
description: Overview of Jekyll's file structure
category: Setup
tags:
  - jekyll-setup
resources:
  - name: Source code
    link: https://github.com/CloudCannon/bakery-store/tree/structure
type: Video
set: basics
set_order: 5
icon: library
---
## Introduction

A basic Jekyll site has a file structure similar to this:

![Jekyll File Structure](/images/tutorials/file-structure/overview.png)

In this tutorial we'll take a high-level look at what these directories mean. Don't stress if you don't pick up these concepts now, we'll go over these topics in-depth in later tutorials.

## _config.yml

Holds the configuration for your Jekyll site. This is commonly used to:

* Set global variables on the site
* Configure collections or defaults
* Specify runtime variables we want to run every time  

## _drafts

All our unpublished blog posts. This allows us to work on blog posts without publishing them to the live site.

## _includes

Page snippets which can be included throughout our site. Includes are often used for page sections which are duplicated across the site like a newsletter subscribe form.

## _layouts

Templates which wrap around content. All the repeating HTML on our site like the header, footer and navigation typically live in a layout.

## _posts

Contains our blog posts usually written in Markdown.

## _data

`_data` contains YAML, JSON and CSV files. The data in these files can be used throughout the Jekyll site.

## _site

Once Jekyll has built our site it puts the entire static site including all our assets in `_site`.

## .jekyll-metadata

This file is used by Jekyll's incremental build feature to keep track of the files which have changed.

## Other Files/Folders

Files with front matter are processed and output to `_site` on a build. Files **without** front matter (typically CSS, JavaScript and image files) are copied straight to `_site` on a build.
