---
title: "sort"
description: "Sorts an array."
sub_category: Array
---
##### Input
{% raw %}
~~~liquid
<!-- page.my_array is ['c', 'a', 'b'] -->
{{ page.my_array | sort }}
~~~
{% endraw %}

##### Output

~~~html
['a','b','c']
~~~

You can add a argument to sort on a property name:

##### Input
{% raw %}
~~~liquid
{{ page.posts | sort: 'author' }}
~~~
{% endraw %}
And also add a second argument to say whether the nils should be first or last:

##### Input
{% raw %}
~~~liquid
{{ page.posts | sort: 'author', 'last' }}
~~~
{% endraw %}