/**
 * @name DiscordStories
 * @author Pickaxe828#4395
 * @description Let you be able to post and see stories like how Instagram stories works
 * @version _Development
 * @invite nKbSGzW6
 * @updateUrl https://raw.githubusercontent.com/pickaxe828/Discord-Stories/main/discord_stories.plugin.js
 **/


module.exports = class DiscordStories {

    load() { 
        
    }

    unload() { }

    start() {
        this.updater()
        this.init()
        this.frdListUpload()

    }

    stop() { } // Required function. Called when the plugin is deactivated

    observer(changes) {
        this.uiRefresh()

    }

    updater() {
        const fs = require("fs");
        //%appdata%\betterdiscord\plugins
        let request = new XMLHttpRequest();
        request.open("https://api.github.com/projects/349918168", {headers:{"Accept":"application/vnd.github.v3+json"}});
        console.log(request);
    }

    init() {}
    frdListUpload() {}
    uiRefresh() {}
}