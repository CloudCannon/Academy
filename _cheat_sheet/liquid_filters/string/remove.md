---
title: "remove"
description: "Removes any occurrence of a substring from a string."
sub_category: String
---
##### Input
{% raw %}
~~~liquid
{{ 'I really really like Jekyll' | remove: 'really' }}
~~~
{% endraw %}

##### Output

~~~html
I like Jekyll
~~~
