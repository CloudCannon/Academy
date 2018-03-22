---
title: "default"
description: "Set a fallback incase a value doesn't exist."
sub_category: String
version: 3
---
##### Input
{% raw %}
~~~liquid
{{ nil | default: "hello"  }}
~~~
{% endraw %}

##### Output

~~~html
hello
~~~
