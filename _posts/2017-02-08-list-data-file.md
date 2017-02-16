---
date: 2017-02-08
title: List data in a data file
description: Output all the data from a data file
categories:
  - jekyll-data-files
  - jekyll-liquid
type: Document
---
## Overview

If we have a data file located at `_data/people.csv`:

{% raw %}
~~~text
name,twitter
George,gphillips_nz
Mike,mikeneumegen
Ross,rphillips_nz
~~~
{% endraw %}

We can output the data in a list by looping of `site.data.people`:

{% raw %}
~~~html
...
<ul>
{% for person in site.data.people %}
  <li>
    <a href="https://twitter.com/{{ person.twitter }}">
      {{ person.name }}
    </a>
  </li>
{% endfor %}
</ul>
...
~~~
{% endraw %}
