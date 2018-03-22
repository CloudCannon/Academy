---
title: "for"
description: "Repeatedly executes a block of code."
sub_category: Iteration
---
##### Input

{% raw %}
~~~liquid
{% for page in site.pages %}
  {{ page.title }}
{% endfor %}
~~~
{% endraw %}

##### Output

~~~html
index
about
contact
~~~
