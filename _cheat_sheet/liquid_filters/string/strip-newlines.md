---
title: strip_newlines
description: "Strip all new line characters from the input string."
sub_category: String
---
##### Input
{% raw %}
~~~liquid
{{ "Hello
there" | strip_newlines }}
~~~
{% endraw %}

##### Output

~~~html
Hello there
~~~
