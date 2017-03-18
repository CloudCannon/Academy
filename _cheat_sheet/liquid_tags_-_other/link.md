---
title: "link"
description: "Generate the correct permalink URL for the path you specify."
---
##### Input

{% raw %}
~~~liquid
{% link _collection/my-document.md %}
{% link _posts/2017-03-15-my-post.md %}
{% link blog/index.html %}
{% link assets/document.pdf %}
~~~
{% endraw %}

##### Output

~~~html
/my_collection/custom-permalink/my-document/
/blog/my-post/
/blog/
/assets/document.pdf
~~~
