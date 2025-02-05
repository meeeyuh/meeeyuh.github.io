---
title: "Blog"
permalink: /blog/
---

# Blog Posts

Here are my latest posts:

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
  {% endfor %}
</ul>

[Back to Home](index.md)
[About Mi](about.md)