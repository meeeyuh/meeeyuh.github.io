---
layout: post
title: "Blog"
permalink: /blog/
---

# My Thoughts

Choose how you’d like to browse my blog:

<div id="blog-controls">
    <button onclick="showByDate()">Sort by Date</button>
    <button onclick="showByCategory()">Sort by Category</button>
</div>

<div id="posts-by-date">
  <h2>Latest Posts</h2>
  <ul>
    {% for post in site.posts %}
      <li class="blog-post-item">
        {% if post.image %}
          <a href="{{ post.url }}">
            <img src="{{ post.image }}" alt="{{ post.title }}" class="blog-thumbnail">
          </a>
        {% endif %}
        <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})
      </li>
    {% endfor %}
  </ul>
</div>

<div id="posts-by-category" style="display: none;">
  <h2>Browse by Category</h2>

  {% assign categories = "Disc Golf, Life Lessons, Health, Wellness, Ramblings" | split: ", " %}

  {% for category in categories %}
    <h3>{{ category }}</h3>
    <ul>
      {% for post in site.posts %}
        {% if post.categories contains category %}
          <li class="blog-post-item">
            {% if post.image %}
              <a href="{{ post.url }}">
                <img src="{{ post.image }}" alt="{{ post.title }}" class="blog-thumbnail">
              </a>
            {% endif %}
            <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  {% endfor %}
</div>

<script>
  function showByDate() {
    document.getElementById('posts-by-date').style.display = 'block';
    document.getElementById('posts-by-category').style.display = 'none';
  }

  function showByCategory() {
    document.getElementById('posts-by-date').style.display = 'none';
    document.getElementById('posts-by-category').style.display = 'block';
  }
</script>
