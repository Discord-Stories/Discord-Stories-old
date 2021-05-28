# Discord Stories

[![image](https://img.shields.io/github/issues/pickaxe828/Discord-Stories?style=flat-square)](https://github.com/pickaxe828/Discord-Stories/issues)
[![image](https://img.shields.io/github/forks/pickaxe828/Discord-Stories?style=flat-square)](https://github.com/pickaxe828/Discord-Stories/network/members)
[![image](https://img.shields.io/github/license/pickaxe828/Discord-Stories?style=flat-square)](https://github.com/pickaxe828/Discord-Stories/blob/main/LICENSE)

**It's still working in progress, not suggested to use for now, more info [HERE](#known-issues)**
<br/><br/>
<span style="color:red">Some testers has reported that this plugin affects the performance of their discord client, some optimizations should be done before 1.0</span>
<br/>
**Also, this plugin haven't been posted on the BetterDiscordLibrary/ BetterDiscord Discord server #plugin-releases channel, which means it's not checked/ approved by BetterDiscord yet**
<br/>

This is Discord Stories system, just like how Instagram stories works.
<br/>
<br/>
<!---
## Current progress
Last update to this photo: 20/4/2021
<br/>
<img src="https://raw.githubusercontent.com/pickaxe828/img/e81bc82bf1d8e08907ba4fc60cbcf087ff745bc0/discord-stories-wip-2.PNG" width="30%" height="30%">
-->

## How to download it/ run it?
_**Currently under overhaul, the commits in this branch is deprecated. More details [HERE](#overhaul)**_

~~**Make sure you've already downloaded BandagedBetterDiscord from [HERE](https://rauenzi.github.io/BetterDiscordApp/)**~~


~~1. Click the button above or [HERE](https://github.com/pickaxe828/Discord-Stories/archive/refs/heads/main.zip) to download the zip file.<br/>
2. Unzip the `.zip`<br/>
3. Open the path `%appdata%/betterdiscord/plugins` on File Explorer.<br/>
4. Put the `discord_stories.plugin.js` inside of the folder.<br/>
5. If BetterDiscord client sucessfully loaded it in, a bubble box should appear.~~
<br/>
<br/>

## Known issues
- [ ] 🟥 Plugin makes the BetterDiscord client not starting (performance) <br/>
- [ ] 🟥 UI glitches (UI)

## Will this violate/ against Discord ToS?
Yes it's a violation of Discord ToS, but you won't get banned by Discord proactively because using BetterDiscord/ Discord Stories.
<br/>
[Here for more detail](https://www.reddit.com/r/discordapp/comments/9mtdxr/why_is_betterdiscord_against_the_tos/e7hap1q)
<br/>

## Overhaul
Yes, definitely pain in the ass, but I must do it. Down below is all about the overhaul, what I'll do and change in the future.
<br/>
- Previously, the `plugin.js` file is a whole mess 🤦‍♂️, because I didn't know much in webdev 🤦‍♂️, and I just used a whole bunch of code on changing the styles, which could be reduced by making a `theme.css` for the plugin.
  - I will use [React](https://github.com/rauenzi/BetterDiscordApp/wiki/Creating-Plugins#react), which might reduce some redundant code on placing the elements, also, I will try to use more classes for styles used in discord originally, so this plugin could fit into more themes.

<br/>
<br/>

- The stories column above the `Active Now` is kinda too small, which makes the size of the icon squeezes into a shape too small
- Forgot to add names under the icons in the concept arts & the code 🤦‍♂️
  - (TBD) Considering instead of putting the whole UI inside the plugin, I might make the UI as a independent website. Clients can login with `user id` and a `password` (kinda like an API key? Should be randomly generated and cannot be customized as it should only be used internally in API), and kinda embed it with `iframe`. So if I make big changes to the UI, the changes will on the webpage instead of the `plugin`, which also avoided the problem of *outdate plugins / auto updater*. (Not sure if this break ToS of BetterDiscord)