---
title: "group_by_exp"
description: "Group an array's items using a Liquid expression."
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
{{ page.people | group_by_exp: "item", "item.name | size" }}

{{ page.people | group_by_exp: "item", "item.year | modulo: 2" }}

{{ page.people | group_by_exp: "item", "item.school | replace: 'rd', 'ry' " }}
~~~
{% endraw %}

##### Output

~~~html
{"name"=>4, "items"=>[{"name"=>"John", "school"=>"Stanford", "year"=>2016}, {"name"=>"Jane", "school"=>"Stanford", "year"=>2017}], "size"=>2}{"name"=>3, "items"=>[{"name"=>"Joe", "school"=>"Harvard", "year"=>2015}], "size"=>1}

{"name"=>0, "items"=>[{"name"=>"John", "school"=>"Stanford", "year"=>2016}], "size"=>1}{"name"=>1, "items"=>[{"name"=>"Jane", "school"=>"Stanford", "year"=>2017}, {"name"=>"Joe", "school"=>"Harvard", "year"=>2015}], "size"=>2}

{"name"=>"Stanfory", "items"=>[{"name"=>"John", "school"=>"Stanford", "year"=>2016}, {"name"=>"Jane", "school"=>"Stanford", "year"=>2017}], "size"=>2}{"name"=>"Harvary", "items"=>[{"name"=>"Joe", "school"=>"Harvard", "year"=>2015}], "size"=>1}
~~~
