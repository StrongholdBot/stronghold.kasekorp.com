---
layout: default
title: Features
permalink: /features/
---

# Features

This page is an overview the main features of the bot and how they work.

## Ranking

This is a system where ranks are determined by points.

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
Includes efficient two-way requests and convenient cross-server messaging.

Set up diplomacy using {% include ds-cmd.html cmd="dpm setup" %}.

### Allies

- Add an ally by running {% include ds-cmd.html cmd="dpm allies add" %}
- Remove an ally with {% include ds-cmd.html cmd="dpm allies remove" %}
- List all allies using {% include ds-cmd.html cmd="dpm allies list" %}

### Enemies

- Add an enemy by using {% include ds-cmd.html cmd="dpm enemies add" %}
- Remove an enemy using {% include ds-cmd.html cmd="dpm enemies remove" %}
- List all enemies with {% include ds-cmd.html cmd="dpm enemies list" %}

### Neutral Servers

- Add a neutral server by running {% include ds-cmd.html cmd="dpm neutrals add" %}
- Remove a neutral server using {% include ds-cmd.html cmd="dpm neutrals remove" %}
- List all neutrals server using {% include ds-cmd.html cmd="dpm neutrals list" %}

### Messages

- Send a diplomatic message using {% include ds-cmd.html cmd="dpm send" %}
- Alternatively, reply to one of Stronghold's messages in a diplomacy thread to send what you say directly (ping must be enabled)

## Sessions

Permitted users can start and manage sessions, a generic form of an event that people can attend.
Includes real-time participant logging, management, a time quota system, and default options.

See the status of sessions with {% include ds-cmd.html cmd="session status" %}

### Management

- Start a session by running {% include ds-cmd.html cmd="session start" %}
- Stop a session using {% include ds-cmd.html cmd="session stop" %}
- Edit an ongoing session with {% include ds-cmd.html cmd="session edit" %}
- Remove or kick a participant using {% include ds-cmd.html cmd="session remove" %} and {% include ds-cmd.html cmd="session kick" %} respectively (see the difference in their usage sections)

### Time Quotas

- Set a time quota using {% include ds-cmd.html cmd="session quota" %}
- View the time a user has spent in a session with {% include ds-cmd.html cmd="session time" %}

### Default Options

- Set defaults for sessions using {% include ds-cmd.html cmd="session edit_default" %}
- Start a session with the defaults after running {% include ds-cmd.html cmd="session quickstart" %}

## Activity Checks

Create customisable modular activity checks. Automatically send a message to a channel on a custom interval. For information regarding formatting and event sequencing, run {% include ds-cmd.html cmd="activity checks info" %}.

- Start an activity check using {% include ds-cmd.html cmd="activity checks create" %}
- Cancel an activity check by using {% include ds-cmd.html cmd="activity checks cancel" %}. Use this to change options
- Pause and resume activity checks using {% include ds-cmd.html cmd="activity checks pause" %} and {% include ds-cmd.html cmd="activity checks resume" %} respectively.
- Run an activity check, regardless of the interval, with {% include ds-cmd.html cmd="activity checks execute" %}.

## Permission Management

Manage internal permissions to fine-tune who can do what with the bot.

- Get the calculated permissions of a user using {% include ds-cmd.html cmd="permissions get" %}, which combines the permissions specific to the user and their roles.
- List available permissions using {% include ds-cmd.html cmd="permissions list" %}

### Roles

Manage permissions specific to roles.

- Add permissions with {% include ds-cmd.html cmd="permissions roles add" %}
- Remove permissions using {% include ds-cmd.html cmd="permissions roles remove" %}
- List permissions by running {% include ds-cmd.html cmd="permissions roles list" %}
- Set permissions directly (remove any previous perms) with {% include ds-cmd.html cmd="permissions roles set" %}
- Clear all permissions using {% include ds-cmd.html cmd="permissions roles clear" %}

### Users

Manage permissions that apply to individual users.

- Add permissions with {% include ds-cmd.html cmd="permissions users add" %}
- Remove permissions using {% include ds-cmd.html cmd="permissions users remove" %}
- List permissions by running {% include ds-cmd.html cmd="permissions users list" %}
- Set permissions directly (remove any previous perms) with {% include ds-cmd.html cmd="permissions users set" %}
- Clear all permissions by using {% include ds-cmd.html cmd="permissions users clear" %}

## Logging

Keep track of what happens using the bot, including errors, warnings, information, and change tracking.
After running {% include ds-cmd.html cmd="setup" %}, you can configure logging. More information can be found in the [Getting Started guide](/getting-started/).

## Miscellaneous

Some miscellaneous commands for utility purposes.

### Setup

Run {% include ds-cmd.html cmd="setup" %} to configure the bot.

### Help

Use {% include ds-cmd.html cmd="help" %} to see all available commands or view the help entry for a specific command.

### Feedback

Run {% include ds-cmd.html cmd="feedback" %} to send feedback to the bot developers.

### Invite

Run {% include ds-cmd.html cmd="invite" %} to get a link to invite the bot to your server.

### Ping

Use {% include ds-cmd.html cmd="ping" %} to see if the bot is online and calculate latency.
