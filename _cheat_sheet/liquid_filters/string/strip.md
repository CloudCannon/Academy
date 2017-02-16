---
title: "strip"
description: "Removes whitespace characters from around a string."
sub_category: String
version: 3
---
##### Input
{% raw %}
~~~liquid
{{ '          I love Jekyll!          ' | strip }}
~~~
{% endraw %}

##### Output

~~~html
I love Jekyll!
~~~
