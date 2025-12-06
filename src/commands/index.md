---
layout: default
title: Commands
permalink: /commands/
---

# Commands

{% assign sorted = site.commands | sort: "order" %}
{% assign first = true %}

<ul align='left' class="command-tree">
  {% for cmd in sorted %}
    {% assign depth = cmd.ancestry | size %}
    {% assign first = false %}
    <li>
    <a href="{{ cmd.url }}">
      {% if depth == 0 %}
      <code><h2 class="no-toc">{{ cmd.title }}</h2></code>
      {% elsif depth == 1 %}
      |—<code><h3 class="no-toc">{{ cmd.title }}</h3></code>
      {% elsif depth == 2 %}
      |&nbsp;&nbsp;&nbsp;&nbsp;|—<code><h4 class="no-toc">{{ cmd.title }}</h4></code>
      {% endif %}
      </a>
    </li>
  {% endfor %}
</ul>
