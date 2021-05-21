/**
 * @name DiscordStories
 * @description Let you be able to post and see stories like how Instagram stories works
 * @version _Development
 * @invite nKbSGzW6
 * @authorId 465026906450821121
**/

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

    load() { } // Optional function. Called when the plugin is loaded in to memory

    start() {
        if (BdApi.Themes.isEnabled("DiscordStories")) { } else {
            this.startUpFatal();
        }
        
    }

    stop() { } // Required function. Called when the plugin is deactivated

    getAddPanel() { }
    
    getSettingsPanel() {

    }

    dummyIconGen() {

    }

    

    startUpFatal() {
        //BdApi.showConfirmationModal("Discord Stories",
        //    [
        //        "Theme need to be loaded first! Download it ",
        //        BdApi.React.createElement("a", { href: "https://google.com", target: "_blank" }, "here")
        //    ],
        //    {
        //        confirmText: "Okay",
        //        cancelText: false
        //    }
        //).then(
        //    BdApi.Plugins.disable(plugin_name));
        
    }


    UIrefresh() {
        BdApi.reactDOM.render(<h1>Hello, world!</h1>, document.getElementsByClassName("container-lRFx4q")[0])
    }

    

    observer(changes) {
        if (document.location["href"] === "https://discord.com/channels/@me") {
            console.log("observed");
            this.UIrefresh();
        }
        // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
    }

}