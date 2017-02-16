---
title: "uri_escape"
description: "URI escape a string."
sub_category: String
---
##### Input
{% raw %}
~~~liquid
{{ "foo, bar \baz?" | uri_escape }}
~~~
{% endraw %}

##### Output

~~~html
foo,%20bar%20%5Cbaz?
~~~
