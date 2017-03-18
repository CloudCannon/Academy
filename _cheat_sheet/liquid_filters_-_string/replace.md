---
title: "replace"
description: "Replaces any occurrence of a substring from a string."
sub_category: String
---
##### Input
{% raw %}
~~~liquid
{{ 'I really really like Jekyll' | replace: 'really', 'truly' }}
~~~
{% endraw %}

##### Output

~~~html
I truly truly like Jekyll
~~~
