(window["webpackJsonpGUI"]=window["webpackJsonpGUI"]||[]).push([["addon-entry-search-sprites"],{"./node_modules/css-loader/index.js!./src/addons/addons/search-sprites/search-bar.css":function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);exports.push([module.i,".sa-search-sprites-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\ninput.sa-search-sprites-box {\n  width: 100%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: 0px;\n  border-bottom: 1px solid hsla(0, 0%, 1%, 0.15);\n  outline: none;\n  padding: 5px 20px 5px 10px;\n}\n\n.sa-search-sprites-reset {\n  display: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.sa-search-sprites-box:not(:placeholder-shown) ~ .sa-search-sprites-reset {\n  display: block;\n}\n",""])},"./src/addons/addons/search-sprites/_runtime_entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"resources",function(){return resources});var _userscript_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/addons/addons/search-sprites/userscript.js");var _css_loader_search_bar_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/index.js!./src/addons/addons/search-sprites/search-bar.css");var _css_loader_search_bar_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_css_loader_search_bar_css__WEBPACK_IMPORTED_MODULE_1__);const resources={"userscript.js":_userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],"search-bar.css":_css_loader_search_bar_css__WEBPACK_IMPORTED_MODULE_1___default.a}},"./src/addons/addons/search-sprites/userscript.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_exports__["default"]=async function({addon,global,console,msg}){let spritesContainer;let spriteSelectorContainer;const container=document.createElement("div");container.className="sa-search-sprites-container";addon.tab.displayNoneWhileDisabled(container,{display:"flex"});const searchBox=document.createElement("input");searchBox.className="sa-search-sprites-box";searchBox.placeholder=msg("placeholder");searchBox.autocomplete="off";searchBox.type="text";const search=query=>{if(!spritesContainer)return;query=query.toLowerCase();const containsQuery=str=>str.toLowerCase().includes(query);for(const sprite of spritesContainer.children){const visible=!query||containsQuery(sprite.children[0].children[1].innerText)||containsQuery(sprite.children[0].children[2].children[0].innerText)&&sprite.children[0].classList.contains("sa-folders-folder");sprite.style.display=visible?"":"none"}};searchBox.addEventListener("input",e=>{search(e.target.value)});const reset=()=>{search("");searchBox.value=""};const resetButton=document.createElement("button");resetButton.className="sa-search-sprites-reset";resetButton.addEventListener("click",reset);resetButton.textContent="×";addon.self.addEventListener("disabled",reset);container.appendChild(searchBox);container.appendChild(resetButton);while(true){await addon.tab.waitForElement("div[class^='sprite-selector_items-wrapper']",{markAsSeen:true,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:state=>!state.scratchGui.mode.isPlayerOnly});spritesContainer=document.querySelector('[class^="sprite-selector_items-wrapper"]');spriteSelectorContainer=document.querySelector('[class^="sprite-selector_scroll-wrapper"]');spriteSelectorContainer.insertBefore(container,spritesContainer);reset()}}}}]);