---
layout: default
title: Commands
---

# Commands

{% assign sorted = site.commands | sort: "ancestry" %}

<ul class="command-tree">
  {% for cmd in sorted %}
    {% assign depth = cmd.ancestry | size %}
    <li style="margin-left: {{ depth | times: 20 }}px;">
      <a href="{{ cmd.url }}">{{ cmd.title }}</a>
      {% if cmd.usage %}
        <code>{{ cmd.usage }}</code>
      {% endif %}
    </li>
  {% endfor %}
</ul>
