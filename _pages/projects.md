---
layout: clean-default
title: Projects
permalink: /projects/
---

<div class="modern-homepage">
  <nav class="main-nav">
    <div class="nav-container">
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/bio/" class="nav-link">Bio</a>
        <a href="/blog/" class="nav-link">Blog</a>
        <a href="/experience/" class="nav-link">Experience</a>
        <a href="/projects/" class="nav-link active">Projects</a>
        <a href="/uses/" class="nav-link">Uses</a>
      </div>
      <div class="theme-toggle">
        <button class="theme-btn" onclick="toggleTheme()">🌙</button>
      </div>
    </div>
  </nav>

  <main class="main-content">
    <div class="content-container">
      <h1 class="main-title">Projects</h1>
      <p>This is the Projects page. Content coming soon...</p>
    </div>
  </main>
</div>

<script>
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
}
</script> 