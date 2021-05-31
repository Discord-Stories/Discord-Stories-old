/**
 * @name DiscordStories
 * @description Let you be able to post and see stories like how Instagram stories works
 * @version _Development
 * @invite nKbSGzW6
 * @authorId 465026906450821121
 */

// @updateUrl https://raw.githubusercontent.com/pickaxe828/Discord-Stories/main/discord_stories.plugin.js

let plugin_name = "DiscordStories";


module.exports = class DiscordStories {

    TODO() { }

    getName() {
        return "DiscordStories";
    }

    getDescription() {
        return 'Discord Stories third party plug-in!';
    }

    getVersion() {
        return "_internalTest";
    }

    getAuthor() {
        return "Pickaxe828#4395";
    }

    load() { 
        updater()
    }

    unload() { }

    start() {
        init()
        frdListUpload()

    }

    stop() { } // Required function. Called when the plugin is deactivated

    observer(changes) {
        uiRefresh()

    }

}