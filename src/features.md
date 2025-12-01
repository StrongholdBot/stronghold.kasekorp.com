---
layout: default
title: Features
permalink: /features/
---

# Features

This page is an overview the main features of the bot and how they work.

## Ranking

This is the big one. It's a system where ranks are determined by points.

### Ranks

Ranks are associated with a role and have point requirements.

- View a user's ranking details using {% include ds-cmd.html cmd="ranking view" %}
- Add ranks with {% include ds-cmd.html cmd="ranking ranks add" %}, or multiple at once with {% include ds-cmd.html cmd="ranking ranks add_bulk" %}
- Remove ranks using {% include ds-cmd.html cmd="ranking ranks remove" %}
- Edit existing ranks with {% include ds-cmd.html cmd="ranking ranks edit" %}
- Check which users are in a rank using {% include ds-cmd.html cmd="ranking ranks in" %}
- List all exiting ranks using {% include ds-cmd.html cmd="ranking ranks list" %}

### Points

Points determine a user's rank. Yes, they can be negative.

- Points can be added to and removed from users using {% include ds-cmd.html cmd="ranking points add" %} and {% include ds-cmd.html cmd="ranking points remove" %}
- Points can also be directly set with {% include ds-cmd.html cmd="ranking points set" %}
- View a user's points using {% include ds-cmd.html cmd="ranking view" %}
- View the point leaderboard using {% include ds-cmd.html cmd="ranking points lb" %}

## Diplomacy

This is a system where allowed members of servers can send messages to and manage relations with other servers.

Set up diplomacy using {% include ds-cmd.html cmd="dpm setup" %}

### Allies

- Add an ally using {% include ds-cmd.html cmd="dpm allies add" %}
- Remove an ally with {% include ds-cmd.html cmd="dpm allies remove" %}
- List all allies using {% include ds-cmd.html cmd="dpm allies list" %}

### Enemies

- Add an enemy using {% include ds-cmd.html cmd="dpm enemies add" %}
- Remove an enemy using {% include ds-cmd.html cmd="dpm enemies remove" %}
- List all enemies with {% include ds-cmd.html cmd="dpm enemies list" %}

### Neutral servers

- Add a neutral server using {% include ds-cmd.html cmd="dpm neutrals add" %}
- Remove a neutral server using {% include ds-cmd.html cmd="dpm neutrals remove" %}
- List all neutrals server using {% include ds-cmd.html cmd="dpm neutrals list" %}

### Messages

- Send a diplomatic message using {% include ds-cmd.html cmd="dpm send" %}
- Alternatively, reply to one of Stronghold's messages in a diplomacy thread to send what you say directly (ping must be enabled)

## Sessions

Permitted users can start and manage sessions, a generic form of an event that people can attend.

### Management

- Start a session using {% include ds-cmd.html cmd="sessions start" %}
- Stop a session using {% include ds-cmd.html cmd="sessions stop" %}
- Edit an ongoing session with {% include ds-cmd.html cmd="sessions edit" %}

## Activity Checks

## Permission Management

## Logging
