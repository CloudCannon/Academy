---
title: "rstrip"
description: "Removes whitespace characters from the end of a string."
sub_category: String
version: 3
---
##### Input
{% raw %}
~~~liquid
{{ '          I love Jekyll!          ' | rstrip }}
~~~
{% endraw %}

##### Output

~~~html
          I love Jekyll!
~~~
