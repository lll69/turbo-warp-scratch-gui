(window["webpackJsonpGUI"]=window["webpackJsonpGUI"]||[]).push([["addon-entry-editor-theme3"],{"./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/theme3.css":function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);exports.push([module.i,'path.blocklyBlockBackground[fill="#FF6680"],\npath.blocklyBlockBackground[fill="#5CB1D6"],\npath.blocklyBlockBackground[fill="#FFBF00"],\npath.blocklyBlockBackground[fill="#29beb8"],\ng[data-category] > path.blocklyBlockBackground {\n  stroke: #0003;\n}\ng[data-argument-type="dropdown"] > path,\ng[data-argument-type="variable"] > path,\npath[data-argument-type="boolean"],\ng[data-shapes="c-block c-1 hat"] > g[data-shapes="stack"]:not(.blocklyDraggable) > path /* block preview in define block */ {\n  stroke: #0003;\n  fill: #0001;\n}\ng[data-argument-type="dropdown"] > rect,\ng[data-argument-type="variable"] > rect {\n  stroke: #0003;\n  fill: #0000;\n}\ng[data-argument-type*="text"] > path,\n[data-category] g > line {\n  stroke: #0002;\n}\n.scratchCategoryItemBubble {\n  border-color: #0003 !important;\n}\n\n.fieldTextInput {\n  border-color: #0003 !important;\n}\n\n.blocklyBlockBackground[fill="#FFFFFF"] {\n  fill: var(--editorTheme3-inputColor);\n}\n.blocklyEditableText > text {\n  fill: var(--editorTheme3-inputColor-text);\n}\n.blocklyHtmlInput {\n  background-color: var(--editorTheme3-inputColor);\n  color: var(--editorTheme3-inputColor-text);\n}\n',""])},"./src/addons/addons/editor-theme3/_runtime_entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"resources",function(){return resources});var _theme3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/addons/addons/editor-theme3/theme3.js");var _css_loader_theme3_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/theme3.css");var _css_loader_theme3_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_css_loader_theme3_css__WEBPACK_IMPORTED_MODULE_1__);const resources={"theme3.js":_theme3_js__WEBPACK_IMPORTED_MODULE_0__["default"],"theme3.css":_css_loader_theme3_css__WEBPACK_IMPORTED_MODULE_1___default.a}},"./src/addons/addons/editor-theme3/theme3.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/addons/libraries/common/cs/text-color.esm.js");function updateSettings(addon,newStyle){document.documentElement.style.setProperty("--editorTheme3-inputColor-text",Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["textColor"])(addon.settings.get("input-color")));var stylesheet="";const textMode=addon.settings.get("text");if(textMode==="black"){stylesheet+="\n      .blocklyText {\n        fill: #575e75;\n      }\n      .blocklyDropdownText {\n        fill: #575e75 !important;\n      }\n      .blocklyDropDownDiv .goog-menuitem,\n      #s3devIDD > li {\n        color: #575e75;\n      }"}if(textMode==="colorOnWhite"){stylesheet+='\n      .blocklyDropDownDiv:not([style*="rgb(255, 255, 255)"]) .goog-menuitem {\n        color: #575e75;\n      }'}if(textMode==="colorOnBlack"){stylesheet+='\n      .blocklyDropDownDiv:not([style*="rgb(255, 255, 255)"]) .goog-option-selected .goog-menuitem-checkbox {\n        filter: brightness(0) invert(1);\n      }\n      .u-dropdown-searchbar {\n        border-color: rgba(255, 255, 255, 0.15);\n      }'}var categories={motion:{color:"#4C97FF",tertiaryColor:"#3373CC"},looks:{color:"#9966FF",tertiaryColor:"#774DCB"},sounds:{color:"#CF63CF",tertiaryColor:"#BD42BD",alt:"sound"},events:{color:"#DE9E2E",tertiaryColor:"#CC9900"},control:{color:"#FFBF00",tertiaryColor:"#CF8B17"},sensing:{color:"#5CB1D6",tertiaryColor:"#2E8EB8"},operators:{color:"#59C059",tertiaryColor:"#389438"},data:{color:"#FF8C1A",tertiaryColor:"#DB6E00",alt:"variables"},"data-lists":{color:"#FF661A",tertiaryColor:"#E64D00",alt:"lists",var:"dataLists"},custom:{color:"#FF6680",tertiaryColor:"#FF6355",alt:"myBlocks"},Pen:{color:"#0FBD8C",tertiaryColor:"#0B8E69",alt:"pen"},TurboWarp:{color:"#ff4c4c",tertiaryColor:"#e64444",alt:"tw",var:"tw"},sa:{color:"#29beb8",tertiaryColor:"#3aa8a4",alt:"a-b"}};for(var prop of Object.keys(categories)){var settingName=categories[prop].var?categories[prop].var:prop;var propNameForSettings=prop==="TurboWarp"?"tw":prop;if(textMode==="white"||textMode==="black"){let tertiary=Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(addon.settings.get(propNameForSettings+"-color"),{r:.8,g:.8,b:.8});stylesheet+='g[data-category="'.concat(prop,'"] > path.blocklyBlockBackground {\n        fill: var(--editorTheme3-').concat(settingName,"Color);\n        ").concat(textMode==="black"?"--sa-block-text-color: #575e75;":"",'\n      }\n      .blocklyBlockBackground[fill="').concat(categories[prop].tertiaryColor,'"] /* open dropdown */ {\n        fill: #0003;\n      }\n      .scratchCategoryId-').concat(categories[prop].alt?categories[prop].alt:prop," > .scratchCategoryItemBubble {\n        background-color: var(--editorTheme3-").concat(settingName,'Color) !important;\n      }\n      .blocklyDropDownDiv[data-category="').concat(prop,'"]:not([style*="rgb(255, 255, 255)"]) {\n        background-color: var(--editorTheme3-').concat(settingName,'Color) !important;\n        border-color: #0003 !important;\n      }\n      .blocklyBubbleCanvas [stroke="').concat(categories[prop].tertiaryColor,'"] {\n        stroke: var(--editorTheme3-').concat(settingName,"Color);\n      }\n      #s3devIDD > li.").concat(prop," {\n        background-color: var(--editorTheme3-").concat(settingName,"Color);\n      }\n      #s3devIDD > li.").concat(prop,":hover,\n      #s3devIDD > li.").concat(prop,".sel {\n        background-color: ").concat(tertiary,';\n      }\n      .sa-debugger-block-preview[data-category="').concat(prop,'"] {\n        background-color: var(--editorTheme3-').concat(settingName,"Color) !important;\n      }\n      ");if(prop==="custom"){stylesheet+='path.blocklyBlockBackground[fill="#FF6680"] {\n          fill: var(--editorTheme3-'.concat(prop,"Color);\n          ").concat(textMode==="black"?"--sa-block-text-color: #575e75;":"","\n        }\n        #s3devIDD > li.null {\n          background-color: var(--editorTheme3-").concat(settingName,"Color);\n        }\n        #s3devIDD > li.null:hover,\n        #s3devIDD > li.null.sel {\n          background-color: ").concat(tertiary,";\n        }")}if(prop==="sensing"){stylesheet+='path.blocklyBlockBackground[fill="#5CB1D6"] {\n          fill: var(--editorTheme3-'.concat(prop,"Color);\n          ").concat(textMode==="black"?"--sa-block-text-color: #575e75;":"","\n        }")}if(prop==="events"){stylesheet+='path.blocklyBlockBackground[fill="#FFBF00"] {\n          fill: var(--editorTheme3-'.concat(prop,"Color);\n          ").concat(textMode==="black"?"--sa-block-text-color: #575e75;":"",'\n        }\n        .blocklyDropDownDiv[style*="rgb(255, 191, 0)"] {\n          background-color: var(--editorTheme3-').concat(prop,"Color) !important;\n          border-color: #0003 !important;\n        }")}if(prop==="Pen"){stylesheet+='path.blocklyBlockBackground[fill="#0FBD8C"] {\n          fill: var(--editorTheme3-'.concat(prop,"Color);\n          ").concat(textMode==="black"?"--sa-block-text-color: #575e75;":"",'\n        }\n        .blocklyDropDownDiv[style*="rgb(15, 189, 140)"] {\n          background-color: var(--editorTheme3-').concat(prop,"Color) !important;\n          border-color: #0003 !important;\n        }\n        #s3devIDD > li.extension {\n          background-color: var(--editorTheme3-").concat(settingName,"Color);\n        }\n        #s3devIDD > li.extension:hover,\n        #s3devIDD > li.extension.sel {\n          background-color: ").concat(tertiary,";\n        }")}if(prop==="sa"){stylesheet+='path.blocklyBlockBackground[fill="#29beb8"] {\n          fill: var(--editorTheme3-'.concat(prop,"Color);\n          ").concat(textMode==="black"?"--sa-block-text-color: #575e75;":"","\n        }")}}else{let background={colorOnWhite:"#fff",colorOnBlack:"#282828"}[textMode];let inputShadow={colorOnWhite:"#00000026",colorOnBlack:"#fff3"}[textMode];let secondary=Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(addon.settings.get(propNameForSettings+"-color"),{a:.15});let secondaryActive=Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(addon.settings.get(propNameForSettings+"-color"),{a:.25});let menuText={colorOnWhite:"#575e75",colorOnBlack:"#fff"}[textMode];stylesheet+='g[data-category="'.concat(prop,'"] > path.blocklyBlockBackground,\n      g[data-category="').concat(prop,'"] > g[data-argument-type="dropdown"] > rect,\n      g[data-category="').concat(prop,'"] > g[data-argument-type="variable"] > rect {\n        fill: ').concat(background,";\n        stroke: var(--editorTheme3-").concat(settingName,"Color);\n        --sa-block-text-color: ").concat(menuText,";\n        --sa-block-secondary-color: ").concat(secondaryActive,';\n      }\n      g[data-category="').concat(prop,'"] > .blocklyText,\n      g[data-category="').concat(prop,'"] > g:not([data-id]) > .blocklyText /* variable and list reporters */ {\n        fill: var(--editorTheme3-').concat(settingName,'Color);\n      }\n      g[data-category="').concat(prop,'"] > g[data-argument-type="dropdown"] > .blocklyDropdownText,\n      g[data-category="').concat(prop,'"] > g[data-argument-type="variable"] > .blocklyDropdownText,\n      g[data-category="').concat(prop,'"] > g[data-argument-type="dropdown"] > g > .blocklyDropdownText {\n        fill: var(--editorTheme3-').concat(settingName,'Color) !important;\n      }\n      g[data-category="').concat(prop,'"] > g[data-argument-type="dropdown"] > path,\n      g[data-category="').concat(prop,'"] > g[data-argument-type="variable"] > path,\n      g[data-category="').concat(prop,'"] > path[data-argument-type="boolean"] {\n        fill: ').concat(secondary,";\n        stroke: var(--editorTheme3-").concat(settingName,'Color);\n      }\n      .blocklyBlockBackground[fill="').concat(categories[prop].tertiaryColor,'"] /* open dropdown */ {\n        fill: ').concat(secondaryActive," !important;\n      }\n      .scratchCategoryId-").concat(categories[prop].alt?categories[prop].alt:prop," > .scratchCategoryItemBubble {\n        background-color: var(--editorTheme3-").concat(settingName,'Color) !important;\n      }\n      .blocklyDropDownDiv[data-category="').concat(prop,'"]:not([style*="rgb(255, 255, 255)"]) {\n        background-color: ').concat(background," !important;\n        border-color: var(--editorTheme3-").concat(settingName,'Color) !important;\n      }\n      .blocklyDropDownDiv[data-category="').concat(prop,'"] .goog-menuitem-highlight {\n        background-color: ').concat(secondaryActive,';\n      }\n      .blocklyBubbleCanvas [stroke="').concat(categories[prop].tertiaryColor,'"],\n      g[data-category=').concat(prop,'] > g[data-argument-type*="text"] > path,\n      g[data-category=').concat(prop,"] > g > line  {\n        stroke: var(--editorTheme3-").concat(settingName,'Color);\n      }\n      .blocklyWidgetDiv.fieldTextInput[style*="box-shadow"] {\n        box-shadow: 0 0 0 4px ').concat(inputShadow," !important;\n      }\n      #s3devIDD > li.").concat(prop," {\n        background-color: ").concat(secondary,";\n        color: var(--editorTheme3-").concat(settingName,"Color);\n      }\n      #s3devIDD > li.").concat(prop,":hover,\n      #s3devIDD > li.").concat(prop,".sel {\n        background-color: ").concat(secondaryActive,";\n      }");if(prop==="custom"){stylesheet+='path.blocklyBlockBackground[fill="#FF6680"] {\n          fill: '.concat(background,";\n          stroke: var(--editorTheme3-").concat(prop,"Color);\n          --sa-block-text-color: ").concat(menuText,";\n          --sa-block-secondary-color: ").concat(secondaryActive,';\n        }\n        path.blocklyBlockBackground[fill="#FF6680"] ~ .blocklyText,\n        g[data-shapes="c-block c-1 hat"] > g[data-shapes="stack"]:not(.blocklyDraggable) > .blocklyText,\n        .blocklyEditableText > rect[fill="#FF3355"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(prop,'Color);\n        }\n        path.blocklyBlockBackground[fill="#FF6680"] ~ [data-argument-type="text"] > path {\n          stroke: var(--editorTheme3-').concat(prop,'Color);\n        }\n        g[data-shapes="c-block c-1 hat"] > g[data-shapes="stack"]:not(.blocklyDraggable) > path,\n        path[data-argument-type="boolean"][fill="#FF3355"] {\n          fill: ').concat(secondary,";\n          stroke: var(--editorTheme3-").concat(prop,'Color);\n        }\n        .blocklyEditableText > rect[fill="#FF3355"] {\n          fill: ').concat(secondary,";\n        }\n        #s3devIDD > li.null {\n          background-color: ").concat(secondary,";\n          color: var(--editorTheme3-").concat(settingName,"Color);\n        }\n        #s3devIDD > li.null:hover,\n        #s3devIDD > li.null.sel {\n          background-color: ").concat(secondaryActive,";\n        }")}if(prop==="sensing"){stylesheet+='path.blocklyBlockBackground[fill="#5CB1D6"],\n        g[data-argument-type="dropdown"] > rect[fill="#5CB1D6"] {\n          fill: '.concat(background,";\n          stroke: var(--editorTheme3-").concat(prop,"Color);\n          --sa-block-text-color: ").concat(menuText,";\n          --sa-block-secondary-color: ").concat(secondaryActive,';\n        }\n        g[data-argument-type="dropdown"] > path[fill="#47A8D1"] {\n          fill: ').concat(secondary,";\n          stroke: var(--editorTheme3-").concat(prop,'Color);\n        }\n        path.blocklyBlockBackground[fill="#5CB1D6"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(prop,'Color);\n        }\n        g[data-argument-type="dropdown"] > rect[fill="#5CB1D6"] ~ .blocklyText,\n        g[data-argument-type="dropdown"] > rect[fill="#2E8EB8"] ~ .blocklyText,\n        g[data-argument-type="dropdown"] > path[fill="#47A8D1"] ~ * > .blocklyText,\n        g[data-argument-type="dropdown"] > path[fill="#2E8EB8"] ~ * > .blocklyText {\n          fill: var(--editorTheme3-').concat(prop,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(92, 177, 214)"] {\n          background-color: ').concat(background," !important;\n          border-color: var(--editorTheme3-").concat(settingName,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(92, 177, 214)"] .goog-menuitem-highlight {\n          background-color: ').concat(secondaryActive,";\n        }")}if(prop==="events"){stylesheet+='path.blocklyBlockBackground[fill="#FFBF00"],\n        g[data-argument-type="dropdown"] > rect[fill="#FFBF00"],\n        g[data-argument-type="dropdown"] > rect[fill="#CC9900"] {\n          fill: '.concat(background,";\n          stroke: var(--editorTheme3-").concat(settingName,"Color);\n          --sa-block-text-color: ").concat(menuText,";\n          --sa-block-secondary-color: ").concat(secondaryActive,';\n        }\n        path.blocklyBlockBackground[fill="#FFBF00"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(prop,'Color);\n        }\n        path.blocklyBlockBackground[fill="#FFBF00"] ~ g[data-argument-type="variable"] > g > .blocklyDropdownText {\n          fill: var(--editorTheme3-').concat(prop,'Color) !important;\n        }\n        g[data-argument-type="dropdown"] > rect[fill="#FFBF00"] ~ .blocklyText,\n        g[data-argument-type="dropdown"] > rect[fill="#CC9900"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(prop,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(255, 191, 0)"] {\n          background-color: ').concat(background," !important;\n          border-color: var(--editorTheme3-").concat(settingName,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(255, 191, 0)"] .goog-menuitem-highlight {\n          background-color: ').concat(secondaryActive,";\n        }")}if(prop==="Pen"){stylesheet+='g[data-category] /* specificity */ > path.blocklyBlockBackground[fill="#0FBD8C"] {\n          fill: '.concat(background,";\n          stroke: var(--editorTheme3-").concat(prop,"Color);\n          --sa-block-text-color: ").concat(menuText,";\n          --sa-block-secondary-color: ").concat(secondaryActive,';\n        }\n        path.blocklyBlockBackground[fill="#0FBD8C"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(prop,'Color);\n        }\n        path.blocklyBlockBackground[fill="#0FBD8C"] ~ g[data-argument-type="dropdown"] > g > .blocklyDropdownText {\n          fill: var(--editorTheme3-').concat(prop,'Color) !important;\n        }\n        g[data-argument-type="dropdown"] > path[fill="#0DA57A"] {\n          fill: ').concat(secondary,";\n          stroke: var(--editorTheme3-").concat(prop,'Color);\n        }\n        .blocklyDropDownDiv[style*="rgb(15, 189, 140)"] {\n          background-color: ').concat(background," !important;\n          border-color: var(--editorTheme3-").concat(settingName,'Color) !important;\n        }\n        .blocklyDropDownDiv[style*="rgb(15, 189, 140)"] .goog-menuitem-highlight {\n          background-color: ').concat(secondaryActive,';\n        }\n        path.blocklyBlockBackground[fill="#0FBD8C"] ~ [data-argument-type="text"] > path,\n        path.blocklyBlockBackground[fill="#0FBD8C"] ~ g > line  {\n          stroke: var(--editorTheme3-').concat(prop,"Color);\n        }\n        #s3devIDD > li.extension {\n          background-color: ").concat(secondary,";\n          color: var(--editorTheme3-").concat(settingName,"Color);\n        }\n        #s3devIDD > li.extension:hover,\n        #s3devIDD > li.extension.sel {\n          background-color: ").concat(secondaryActive,";\n        }")}if(prop==="sa"){stylesheet+='path.blocklyBlockBackground[fill="#29beb8"] {\n          fill: '.concat(background,";\n          stroke: var(--editorTheme3-").concat(prop,"Color);\n          --sa-block-text-color: ").concat(menuText,";\n          --sa-block-secondary-color: ").concat(secondaryActive,';\n        }\n        path.blocklyBlockBackground[fill="#29beb8"] ~ .blocklyText {\n          fill: var(--editorTheme3-').concat(prop,'Color);\n        }\n        path.blocklyBlockBackground[fill="#29beb8"] ~ [data-argument-type="text"] > path {\n          stroke: var(--editorTheme3-').concat(prop,"Color);\n        }")}}}document.documentElement.style.setProperty("--editorTheme3-inputColor-text",Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["textColor"])(addon.settings.get("input-color")));newStyle.textContent=stylesheet}__webpack_exports__["default"]=async function(_ref){let{addon,global,console}=_ref;const otherStyle=document.querySelector("[data-addon-id='".concat(addon.self.id,"']"));const newStyle=document.createElement("style");updateSettings(addon,newStyle);addon.settings.addEventListener("change",()=>{updateSettings(addon,newStyle)});newStyle.className="scratch-addons-style";newStyle.setAttribute("data-addon-id",addon.self.id);newStyle.setAttribute("data-addon-index",otherStyle.getAttribute("data-addon-index"));otherStyle.parentElement.insertBefore(newStyle,otherStyle.nextSibling);addon.self.addEventListener("reenabled",()=>newStyle.disabled=false)}},"./src/addons/libraries/common/cs/text-color.esm.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"parseHex",function(){return parseHex});__webpack_require__.d(__webpack_exports__,"convertToHex",function(){return convertToHex});__webpack_require__.d(__webpack_exports__,"convertFromHsv",function(){return convertFromHsv});__webpack_require__.d(__webpack_exports__,"convertToHsv",function(){return convertToHsv});__webpack_require__.d(__webpack_exports__,"brightness",function(){return brightness});__webpack_require__.d(__webpack_exports__,"textColor",function(){return textColor});__webpack_require__.d(__webpack_exports__,"multiply",function(){return multiply});__webpack_require__.d(__webpack_exports__,"brighten",function(){return brighten});__webpack_require__.d(__webpack_exports__,"alphaBlend",function(){return alphaBlend});__webpack_require__.d(__webpack_exports__,"makeHsv",function(){return makeHsv});__webpack_require__.d(__webpack_exports__,"recolorFilter",function(){return recolorFilter});function parseHex(hex){return{r:parseInt(hex.substring(1,3),16),g:parseInt(hex.substring(3,5),16),b:parseInt(hex.substring(5,7),16),a:hex.length>=9?parseInt(hex.substring(7,9),16)/255:1}}function convertComponentToHex(a){a=Math.round(a).toString(16);if(a.length===1)return"0".concat(a);return a}function convertToHex(obj){const r=convertComponentToHex(obj.r);const g=convertComponentToHex(obj.g);const b=convertComponentToHex(obj.b);const a=obj.a!==undefined?convertComponentToHex(255*obj.a):"";return"#".concat(r).concat(g).concat(b).concat(a)}function convertFromHsv(_ref){let{h,s,v}=_ref;if(s===0)return{r:255*v,g:255*v,b:255*v};const h1=h/60;const hi=Math.floor(h1);const x=v*(1-s*(1-h1+hi));const y=v*(1-s*(h1-hi));const z=v*(1-s);switch(hi){case 0:return{r:255*v,g:255*x,b:255*z};case 1:return{r:255*y,g:255*v,b:255*z};case 2:return{r:255*z,g:255*v,b:255*x};case 3:return{r:255*z,g:255*y,b:255*v};case 4:return{r:255*x,g:255*z,b:255*v};case 5:return{r:255*v,g:255*z,b:255*y};default:return{r:0,g:0,b:0}}}function convertToHsv(_ref2){let{r,g,b}=_ref2;r/=255;g/=255;b/=255;const v=Math.max(r,g,b);const d=v-Math.min(r,g,b);if(d===0)return{h:0,s:0,v:v};const s=d/v;const hr=(v-r)/d;const hg=(v-g)/d;const hb=(v-b)/d;let h1;if(!hr)h1=hb-hg;else if(!hg)h1=2+hr-hb;else if(!hb)h1=4+hg-hr;const h=60*h1%360;return{h:h,s:s,v:v}}function brightness(hex){const{r,g,b}=parseHex(hex);return r*.299+g*.587+b*.114}function textColor(hex,black,white,threshold){threshold=threshold!==undefined?threshold:170;if(typeof threshold!=="number")threshold=brightness(threshold);if(brightness(hex)>threshold){return black!==undefined?black:"#575e75"}else{return white!==undefined?white:"#ffffff"}}function multiply(hex,c){const{r,g,b,a}=parseHex(hex);if(c.r===undefined)c.r=1;if(c.g===undefined)c.g=1;if(c.b===undefined)c.b=1;if(c.a===undefined)c.a=1;return convertToHex({r:c.r*r,g:c.g*g,b:c.b*b,a:c.a*a})}function brighten(hex,c){const{r,g,b,a}=parseHex(hex);if(c.r===undefined)c.r=1;if(c.g===undefined)c.g=1;if(c.b===undefined)c.b=1;if(c.a===undefined)c.a=1;return convertToHex({r:(1-c.r)*255+c.r*r,g:(1-c.g)*255+c.g*g,b:(1-c.b)*255+c.b*b,a:1-c.a+c.a*a})}function alphaBlend(opaqueHex,transparentHex){const{r:r1,g:g1,b:b1}=parseHex(opaqueHex);const{r:r2,g:g2,b:b2,a}=parseHex(transparentHex);return convertToHex({r:(1-a)*r1+a*r2,g:(1-a)*g1+a*g2,b:(1-a)*b1+a*b2})}function makeHsv(hSource,sSource,vSource){const h=typeof hSource==="number"?hSource:convertToHsv(parseHex(hSource)).h;const s=typeof hSource!=="number"&&convertToHsv(parseHex(hSource)).s===0?0:typeof sSource==="number"?sSource:convertToHsv(parseHex(sSource)).s;const v=typeof vSource==="number"?vSource:convertToHsv(parseHex(vSource)).v;return convertToHex(convertFromHsv({h:h,s:s,v:v}))}function recolorFilter(hex){const{r,g,b}=parseHex(hex);return"url(\"data:image/svg+xml,\n    <svg xmlns='http://www.w3.org/2000/svg'>\n      <filter id='recolor'>\n        <feColorMatrix values='\n          0 0 0 0 ".concat(r/255,"\n          0 0 0 0 ").concat(g/255,"\n          0 0 0 0 ").concat(b/255,"\n          0 0 0 1 0\n        '/>\n      </filter>\n    </svg>#recolor\n  \")").split("\n").join("")}}}]);