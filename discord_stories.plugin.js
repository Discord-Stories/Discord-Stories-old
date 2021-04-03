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
    getName() {
        return "Discord Stories";
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
    }

    stop() { } // Required function. Called when the plugin is deactivated

    observer(changes) { 

        if (document.getElementsByClassName("container-1D34oG")[0]) {
            this.UIinit();
            
        }   // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
    }


    UIinit() {

        if (!document.getElementsByClassName("storiesColumn")[0]) {

            let stories_column = document.createElement('div');
            let container = document.getElementsByClassName("nowPlayingColumn-2sl4cE")[0];
            stories_column = container.insertBefore(stories_column, document.getElementsByClassName("nowPlayingScroller-2XrVUt")[0]);

            let stories_title = document.createElement('h3');
            let title = document.createTextNode("Stories");
            let stories_container = document.createElement('div');
            

            document.getElementsByClassName("nowPlayingScroller-2XrVUt")[0].style.height = "auto";


            stories_column.className = "storiesColumn";
            stories_column.style.height = "100px";
            stories_column.style.width = "336px";
            stories_column.style.padding = "16px 8px 16px 16px";

            stories_title.className = "header-13Cw0- da-header base-1x0h_U da-base size12-3cLvbJ";

            //393C43
            stories_container.className = "storiesContainer parent";
            stories_container.style.height = "100%";
            stories_container.style.width = "100%";

            stories_title.appendChild(title);
            stories_column.appendChild(stories_title);
            stories_column.appendChild(stories_container);


            let add_button_src = document.getElementsByClassName("circleIconButton-1QV--U")[0];
            let add_button = add_button_src.cloneNode(true);
            let add_button_container = document.createElement("div");
            add_button.style.borderRadius = "100%";
            add_button_container.className = "child";
            add_button_container.style.verticalAlign = "top";
            add_button_container.style.display = "inline-block";
            add_button_container.style.width = "48px";
            add_button_container.style.padding = "0px 10px 0px 0px";

            add_button_container.appendChild(add_button);
            stories_container.appendChild(add_button_container);

            if (Boolean(BdApi.loadData(plugin_name, "allowFriendListScraping"))) {
                this.dummyIconGen();

            }else{
                let ask_fls_perm_button = document.createElement("div");
                let ask_fls_perm_button_text = document.createElement("p");

                ask_fls_perm_button.className = "child";
                ask_fls_perm_button.style.display = "inline-block";
                ask_fls_perm_button.style.width = "268px";
                ask_fls_perm_button.style.height = "48px";
                ask_fls_perm_button.style.borderRadius = "100px/100px";
                ask_fls_perm_button.style.backgroundColor = "#202225";
                
                ask_fls_perm_button_text.textContent = `Allow Discord Stories getting your friend list`
                ask_fls_perm_button_text.style.fontWeight = "600"
                ask_fls_perm_button_text.style.margin = "0px";
                ask_fls_perm_button_text.style.color = "#FFFFFF"
                ask_fls_perm_button_text.style.fontSize = "75%"
                ask_fls_perm_button_text.style.textAlign = "center"
                ask_fls_perm_button_text.display = "flex"
                ask_fls_perm_button_text.style.lineHeight = "48px"
                ask_fls_perm_button_text.style.fontWeight = "600"

                ask_fls_perm_button.appendChild(ask_fls_perm_button_text);
                stories_container.appendChild(ask_fls_perm_button);

                ask_fls_perm_button.addEventListener('click', event => {
                    BdApi.saveData(plugin_name, "allowFriendListScraping", 1);
                    ask_fls_perm_button.remove();
                    this.dummyIconGen();

                });
            }

            add_button.addEventListener("click", event => {
                this.getAddPanel();
                
            });            
        }
    }


    getAddPanel() {
        if (!document.getElementsByClassName("modal-3c3bKg")[0]) {
            let _container = document.getElementsByClassName("layerContainer-yqaFcK")[0];
            let _bg = document.createElement("div");
            let _wrapper = document.createElement("div");
            let _child = document.createElement("div");
            let panel = document.createElement("div");

            _bg.className = "backdrop-1wrmKB";
            _bg.style = "opacity: 0.85; background-color: rgb(0, 0, 0); z-index: 1000; transform: translateZ(0px)";

            _wrapper.className = "modal-3c3bKg";
            _wrapper.style = "opacity: 1; transform: scale(1) translateZ(0px)";

                _child.className = "inner-1ilYF7";

                    panel.className = "uploadModal-2ifh8j";

            let _bottom = document.createElement("div");
            let _send_btn = document.createElement("div");
            let _send_txt = document.createElement("div");
            let _cancel_btn = document.createElement("div");
            let _cancel_txt = document.createElement("div");

            _bottom.className = "flex-1xMQg5 flex-1O1GKY horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 footer-2gL1pp";
            _send_btn.className = "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN da-grow"
            _send_txt.className = "contents-18-Yxp"
            _cancel_btn.className = "button-38aScr lookLink-9FtZy- colorPrimary-3b3xI6 sizeMedium-1AC_Sl grow-q77ONN"
            _cancel_txt.className = "contents-18-Yxp";
            
            _send_btn.type = "submit"
            _send_txt.textContent = "Upload"
            _cancel_btn.type = "button"
            _cancel_txt.textContent = "Cancel"
            
            this.TODO();

            _send_btn.appendChild(_send_txt);
            _cancel_btn.appendChild(_cancel_txt);



            _child.appendChild(panel);
            _wrapper.appendChild(_child);
            _container.appendChild(_bg);
            _container.appendChild(_wrapper);

            _bottom.appendChild(_send_btn);
            _bottom.appendChild(_cancel_btn);

            panel.appendChild(_bottom);
                    
            _cancel_btn.addEventListener("click", event => {
                _bg.remove();
                _wrapper.remove();

            });
        }
    }
    
    getSettingsPanel() {
        let wrapper = document.createElement("div");
        wrapper.className = "ui-flex flex-vertical flex-justify-start flex-align-stretch flex-nowrap ui-switch-item";
        wrapper.style.height = "200px";
        wrapper.style = "margin-top: 1.5rem;";
        

        let titleContainer = document.createElement("div");
        titleContainer.className = 'class="ui-flex flex-horizontal flex-justify-start flex-align-stretch flex-nowrap"';
        titleContainer.style.display = "flex";
        titleContainer.style = "margin-middle: 1.5rem; vertical-align: middle";

        let title = document.createElement("h3");
        title.innerText = "Allow friend list scraping";
        title.className = "ui-form-title h3 margin-reset margin-reset ui-flex-child";
        titleContainer.appendChild(title);

        //button
        let button = document.createElement("div");
        button.className = "bd-switch plugin-settings";

        let input = document.createElement("input");
        input.type = "checkbox";
        input.className = "bd-checkbox";

        if (Boolean(BdApi.loadData(plugin_name, "allowFriendListScraping"))) {
            button.className = "bd-switch bd-switch-checked";
        }

        button.appendChild(input);
        button.style.float = "right";

        input.onclick = () => {

            BdApi.saveData(this.getName(), "allowFriendListScraping");
            if (button.className == "bd-switch") {
                BdApi.saveData(plugin_name, "allowFriendListScraping", 1);
                button.className = "bd-switch bd-switch-checked";
            }else{
                BdApi.saveData(plugin_name, "allowFriendListScraping", 0);
                button.className = "bd-switch";
            }
        };

        titleContainer.appendChild(button);
        wrapper.appendChild(titleContainer);
        
        return wrapper;
    }

    dummyIconGen() {
        
        let relationshipModule = BdApi.findModuleByProps("getRelationships");
        let relationships = relationshipModule.getRelationships();
        let usersModule = BdApi.findModuleByProps("getCurrentUser");
        let friends = [];


        for (let i = 0; i < Object.keys(relationships).length; i++) {
            if (relationships[Object.keys(relationships)[i]] === 1) {
                friends.push(usersModule.getUser(Object.keys(relationships)[i]));
            }
        }

        console.log(friends);

    }

    TODO() {}
}
