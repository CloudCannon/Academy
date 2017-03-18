---
title: "absolute_url"
description: "Prepend the `baseurl` and `url` to the input."
sub_category: String
version: 3
---
##### Input
{% raw %}
~~~liquid
<!-- baseurl is set to "/mysite" in _config.yml -->
<!-- url is set to "http://example.com" in _config.yml -->
{{ '/images/dog.jpeg' | absolute_url }}
~~~
{% endraw %}

##### Output

~~~html
http://example.com/mysite/images/dog.jpeg
~~~
