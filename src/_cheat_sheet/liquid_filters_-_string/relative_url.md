---
title: "relative_url"
description: "Prepend the `baseurl` value to the input."
sub_category: String
version: 3
---
##### Input
{% raw %}
~~~liquid
<!-- baseurl is set to "/mysite" in _config.yml -->
{{ '/images/dog.jpeg' | relative_url }}
~~~
{% endraw %}

##### Output

~~~html
/mysite/images/dog.jpeg
~~~
