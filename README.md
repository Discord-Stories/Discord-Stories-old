# Discord Stories

**It's still working in progress, not suggested to use for now** 
<br/>

This is Discord Stories system, just like how Instagram stories works.
<br/>
<br/>

# How to download it/ run it?
**Make sure you've downloaded BandagedBetterDiscord from [HERE](https://rauenzi.github.io/BetterDiscordApp/)**

Click the button above or [HERE](https://github.com/pickaxe828/Discord-Stories/archive/refs/heads/main.zip) to download the zip file.

Unzip the file, and put the `discord_stories.plugin.js` inside of `%appdata%/betterdiscord/plugins` with File Explorer.
<br/>
<br/>

# Will this violate/ against Discord ToS?
Yes it's a violation of Discord ToS, but you won't get banned by Discord proactively because using BetterDiscord/ Discord Stories.
[Here for more detail](https://www.reddit.com/r/discordapp/comments/9mtdxr/why_is_betterdiscord_against_the_tos/e7hap1q)
<br/>
<br/>

# How does it work? (Technically)   
## Create account ##
Once you download this plugin and when it get started, one Discord Stories account is created on the database online. 
<br/>
<br/>

## Fetching for new stories ##
These things will be sent to our server:

* Client name (Your name)
* Client id (Your user id)
* Friend list (Your friend list)
  
After these stuff has sent to the server, the server will see who is your friend and give the corrisponding stories through our [API]()
<br/>
<br/>

## Create/ upload new stories ##
These things will be sent to our server:

* The context you've uploaded
* Client id
* Friend list (Your friend list)
  
After these stuff has sent to the server, the server will store down the time you sent to the server, the context, and your friend list. The  friend list will be deleted after your stories expire (After 24 hours).
<br/>
<br/>

