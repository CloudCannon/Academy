---
title: "split"
description: "Divide a string into an array."
sub_category: String
---
##### Input
{% raw %}
~~~liquid
{{ "a~b" | split:"~" }}
~~~
{% endraw %}

##### Output

~~~html
['a', 'b']
~~~
