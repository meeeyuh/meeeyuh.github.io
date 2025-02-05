---
title: "Blog"
permalink: /blog/
---

# My Thoughts

Check out my latest posts below:

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
  {% endfor %}
</ul>
