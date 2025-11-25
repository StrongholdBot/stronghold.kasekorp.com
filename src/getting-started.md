---
layout: default
title: Getting Started
---

# Getting Started

This guide will walk you through the process of installing and setting up Stronghold.

## Installing Stronghold

Go [here](https://discord.com/oauth2/authorize?client_id=1185666263259824158), (sign in) and click {% include emphasis.html text="Add to Server" %}.
The bot will be added to your server, and now you need to set it up.

## Setup

Run {% include ds-cmd.html cmd="/setup" %} to get started.<br>
Reading the instructions should guide you through the setup process.
In case you still have questions, here's an explanation:

### Assigning administrators

The first step is to assign who you would like to be able to control basically all aspects of the bot. This excludes things only the server owner can do, such as setting up the server and adding or removing other administrators. Typically, you want only your most trusted users to have this permission.

### Logging

If you are unsure or don't care, just pick {% include emphasis.html text="Create new" %} or choose some forum channel and leave the category to {% include emphasis.html text="everything" %}.
Otherwise, pick the categories you want to receive.

If you want to be a contrarian and receive no logs, don't select any channel. <b>This is not recommended.</b> Log channels can receive important update information, warnings, and erorrs.

### Existing roles

If you've already set up the bot earlier, or, by some miracle, you have roles named "Inactive" or "In Session", you can choose to use them here. This will make the bot recognise them as inactivity and session participation markers, respectively.

## Permissions

Stronghold attempts to make permission checks for all commands, but it is not perfect.

The solution: give the bot the {% include emphasis.html text="Administrator" %} permission. However, not everyone wants to do this. In that case, ensure the bot has the permissions it requires in certain channels. Issues often arise when the bot is not allowed to send messages in a channel, typically if everyone cannot by default.

## Next steps

Now that you're (hopefully) ready to begin using the bot, check out the following links:

- [Commands](/commands)
- [Big features](/features)

As usual, if you have any questions, please [contact us](/contact).
