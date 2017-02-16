---
title: "truncate"
description: "Truncate a string down to x characters."
sub_category: String
---
##### Input
{% raw %}
~~~liquid
{{ "I love Jekyll" | truncate: 12 }}
~~~
{% endraw %}

##### Output

~~~html
I love Je...
~~~
