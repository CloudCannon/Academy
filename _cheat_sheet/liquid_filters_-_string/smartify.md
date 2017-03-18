---
title: "smartify"
description: "Convert quotes into smart quotes with SmartyPants"
sub_category: String
---
##### Input
{% raw %}
~~~liquid
{{ 'Use "Jekyll" --- the static generator...' | smartify }}
~~~
{% endraw %}

##### Output

~~~html
Use &ldquo;Jekyll&rdquo; &mdash; the static generator&hellip;
~~~
