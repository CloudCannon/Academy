---
title: "where_exp"
description: "Select all the objects in an array where the expression is true."
---
##### Input
{% raw %}
~~~liquid
<!-- page.people is
  - name: "John"
    school: "Stanford"
    year: 2016
  - name: "Jane"
    school: "Stanford"
    year: 2017
  - name: "Joe"
    school: "Harvard"
    year: 2015
-->
{{ page.people | where_exp: "item", "item.name contains 'Jo'" }}

{{ page.people | where_exp: "item", "item.year >= 2016" }}

{{ page.people | where_exp: "item", "item.school != "Stanford" }}
~~~
{% endraw %}

##### Output

~~~html
{"name"=>"John", "school"=>"Stanford", "year"=>2016}{"name"=>"Joe", "school"=>"Harvard", "year"=>2015}

{"name"=>"John", "school"=>"Stanford", "year"=>2016}{"name"=>"Jane", "school"=>"Stanford", "year"=>2017}

{"name"=>"Joe", "school"=>"Harvard", "year"=>2015}
~~~
