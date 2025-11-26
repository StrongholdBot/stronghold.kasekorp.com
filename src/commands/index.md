---
layout: default
title: Commands
---

# Commands

<ul>
{% assign commands = site.commands | sort: "path" %}
{% for cmd in commands %}
  <li>
    <a href="{{ cmd.url }}">{{ cmd.title }}</a>
    <span class="ancestors">
      – {{ cmd.ancestry | join: " → " }}
    </span>
  </li>
{% endfor %}
</ul>
