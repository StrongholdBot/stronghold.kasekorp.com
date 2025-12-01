---
layout: default
title: Commands
---

# Commands

{% assign sorted = site.commands | sort: "order" %}

<ul class="command-tree">
  {% for cmd in sorted %}
    {% assign depth = cmd.ancestry | size %}
    <li style="margin-left: {{ depth | times: 3 }}rem;">
    <a href="{{ cmd.url }}">
      {% if depth == 0 %}
      <h1 class="no-toc">{{ cmd.title }}</h1>
      {% elsif depth == 1 or depth == 2 %}
      <h2 class="no-toc">{{ cmd.title }}</h2>
      {% endif %}
      </a>
    </li>
  {% endfor %}
</ul>
