---
layout: post
title: "Blog"
permalink: /blog/
---

## My Thoughts

Choose how you’d like to browse my blog:

<div id="blog-controls">
    <button onclick="showByDate()">Sort by Date</button>
    <button onclick="showByCategory()">Sort by Category</button>
</div>

<div id="posts-by-date">
  <h2>Latest Posts</h2>
  <div class="blog-grid">
    {% for post in site.posts %}
      <a href="{{ post.url }}" class="blog-card">
        {% if post.image %}
          <div class="blog-card-image" style="background-image: url('{{ post.image }}');">
            <div class="blog-card-text">
              <h3>{{ post.title }}</h3>
              <p class="post-date">{{ post.date | date: "%Y-%m-%d" }}</p>
            </div>
          </div>
        {% endif %}
      </a>
    {% endfor %}
  </div>
</div>

<div id="posts-by-category" style="display: none;">
  <h2>Browse by Category</h2>

  {% assign categories = "Disc Golf, Life Lessons, Health + Wellness, Ramblings" | split: ", " %}

  {% for category in categories %}
    <h3>{{ category }}</h3>
    <div class="blog-grid">
      {% for post in site.posts %}
        {% if post.categories contains category %}
          <a href="{{ post.url }}" class="blog-card">
            {% if post.image %}
              <div class="blog-card-image" style="background-image: url('{{ post.image }}');">
                <div class="blog-card-text">
                  <h3>{{ post.title }}</h3>
                  <p class="post-date">{{ post.date | date: "%Y-%m-%d" }}</p>
                </div>
              </div>
            {% endif %}
          </a>
        {% endif %}
      {% endfor %}
    </div>
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
