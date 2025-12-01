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
    {% if depth == 0 and first == false %}<hr>{% endif %}
    {% assign first = false %}
    <li>
    <a href="{{ cmd.url }}">
      {% if depth == 0 %}
      <code>{{ cmd.title }}</code>
      {% elsif depth == 1 %}
      |—<code>{{ cmd.title }}</code>
      {% elsif depth == 2 %}
      |&nbsp;&nbsp;&nbsp;&nbsp;|—<code>{{ cmd.title }}</code>
      {% endif %}
      </a>
    </li>
  {% endfor %}
</ul>
