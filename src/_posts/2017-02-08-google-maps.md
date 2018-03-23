---
date: 2017-02-08
title: Google Maps
description: Embed a responsive Google Map on your Jekyll site.
category: General
tags:
  - jekyll-third-parties
  - jekyll-includes
type: Document
---

## Overview

Google Maps allows you to embed a map on your Jekyll site. It's free, highly customisable and can display locations anywhere in the world.

## Instructions

1.  [Create a Google Map API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
2.  Copy the key into your `_config.yml` under the variable `google_maps_javascript_api_key`:
    ~~~yaml
    ...
    google_maps_javascript_api_key: "YOUR_GOOGLE_MAPS_API_KEY"
    ...
    ~~~
3.  Create `_includes/google-map.html` with the following source. I've hard coded the width and height so it'll work if you copy and paste it but this should really be set in CSS. The way I've structured this you can only include this once per page.
    {% raw %}
    ~~~html
    <div id="map" style="width:300px;height:300px;"></div>
    <script>
      window.mapData = {"latitude": {{ include.latitude }},"longitude": {{ include.longitude }}, "zoom": {{ include.zoom}}};

      function initMap() {
        var myOptions = {
          scrollwheel: false,
          draggable: false,
          panControl: false,
          disableDefaultUI: true,
          zoom: window.mapData.zoom,
          maxZoom: window.mapData.zoom,
          minZoom: window.mapData.zoom,
          center: new google.maps.LatLng(window.mapData.latitude, window.mapData.longitude),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map'), myOptions);

        var marker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(window.mapData.latitude, window.mapData.longitude)
        });

        google.maps.event.addDomListener(window, 'resize', function() {
          map.setCenter(myOptions.center);
        });
      }
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key={{ site.google_maps_javascript_api_key }}&amp;callback=initMap"></script>
    ~~~
    {% endraw %}

## Using the include

To use the map include we need to pass it a latitude, longitude and zoom level.


{% raw %}
~~~html
{% include google-map.html latitude=-45.8787605 longitude=170.5027976 zoom=5 %}
~~~
{% endraw %}


## Customise

There are [many arguments](https://developers.google.com/maps/documentation/javascript/3.exp/reference) you can pass to the Google Map to fit your usecase. In this snippet I've disabled zooming and panning and show the road map.

You even add customise the visual style of your map, checkout [SnazzyMaps](https://snazzymaps.com/) for some drop in styles.