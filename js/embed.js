var GUI=function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(installedChunks[depId]!==0)fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={embed:0};var deferredModules=[];function jsonpScriptSrc(chunkId){return __webpack_require__.p+"js/"+({"addon-settings~addons~editor~fullscreen~player":"addon-settings~addons~editor~fullscreen~player",addons:"addons","iframe-extension-worker":"iframe-extension-worker","library-backdrops":"library-backdrops","library-costumes":"library-costumes","library-sounds":"library-sounds","library-sprites":"library-sprites",sb:"sb","addon-default-entry":"addon-default-entry","addon-entry-2d-color-picker":"addon-entry-2d-color-picker","addon-entry-better-img-uploads":"addon-entry-better-img-uploads","addon-entry-block-count":"addon-entry-block-count","addon-entry-block-palette-icons":"addon-entry-block-palette-icons","addon-entry-blocks2image":"addon-entry-blocks2image","addon-entry-cat-blocks":"addon-entry-cat-blocks","addon-entry-clones":"addon-entry-clones","addon-entry-columns":"addon-entry-columns","addon-entry-custom-block-shape":"addon-entry-custom-block-shape","addon-entry-custom-block-text":"addon-entry-custom-block-text","addon-entry-custom-zoom":"addon-entry-custom-zoom","addon-entry-data-category-tweaks-v2":"addon-entry-data-category-tweaks-v2","addon-entry-debugger":"addon-entry-debugger","addon-entry-default-costume-editor-color":"addon-entry-default-costume-editor-color","addon-entry-disable-paste-offset":"addon-entry-disable-paste-offset","addon-entry-disable-stage-drag-select":"addon-entry-disable-stage-drag-select","addon-entry-editor-buttons-reverse-order":"addon-entry-editor-buttons-reverse-order","addon-entry-editor-colored-context-menus":"addon-entry-editor-colored-context-menus","addon-entry-editor-extra-keys":"addon-entry-editor-extra-keys","addon-entry-editor-sounds":"addon-entry-editor-sounds","addon-entry-editor-stage-left":"addon-entry-editor-stage-left","addon-entry-editor-stepping":"addon-entry-editor-stepping","addon-entry-editor-theme3":"addon-entry-editor-theme3","addon-entry-fullscreen":"addon-entry-fullscreen","addon-entry-gamepad":"addon-entry-gamepad","addon-entry-hide-delete-button":"addon-entry-hide-delete-button","addon-entry-hide-flyout":"addon-entry-hide-flyout","addon-entry-hide-new-variables":"addon-entry-hide-new-variables","addon-entry-hide-stage":"addon-entry-hide-stage","addon-entry-initialise-sprite-position":"addon-entry-initialise-sprite-position","addon-entry-load-extensions":"addon-entry-load-extensions","addon-entry-mediarecorder":"addon-entry-mediarecorder","addon-entry-mouse-pos":"addon-entry-mouse-pos","addon-entry-no-script-bumping":"addon-entry-no-script-bumping","addon-entry-paint-by-default":"addon-entry-paint-by-default","addon-entry-remove-curved-stage-border":"addon-entry-remove-curved-stage-border","addon-entry-remove-sprite-confirm":"addon-entry-remove-sprite-confirm","addon-entry-script-snap":"addon-entry-script-snap","addon-entry-search-sprites":"addon-entry-search-sprites","addon-entry-swap-local-global":"addon-entry-swap-local-global","addon-entry-transparent-orphans":"addon-entry-transparent-orphans","addon-entry-tw-disable-compiler":"addon-entry-tw-disable-compiler","addon-entry-tw-remove-backpack":"addon-entry-tw-remove-backpack","addon-entry-tw-remove-feedback":"addon-entry-tw-remove-feedback","addon-entry-tw-straighten-comments":"addon-entry-tw-straighten-comments","addon-entry-variable-manager":"addon-entry-variable-manager","addon-l10n-de":"addon-l10n-de","addon-l10n-es":"addon-l10n-es","addon-l10n-fr":"addon-l10n-fr","addon-l10n-hu":"addon-l10n-hu","addon-l10n-it":"addon-l10n-it","addon-l10n-ja":"addon-l10n-ja","addon-l10n-ko":"addon-l10n-ko","addon-l10n-nl":"addon-l10n-nl","addon-l10n-pl":"addon-l10n-pl","addon-l10n-pt":"addon-l10n-pt","addon-l10n-ro":"addon-l10n-ro","addon-l10n-ru":"addon-l10n-ru","addon-l10n-sl":"addon-l10n-sl","addon-l10n-tr":"addon-l10n-tr"}[chunkId]||chunkId)+".js"}function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId){var promises=[];var installedChunkData=installedChunks[chunkId];if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2])}else{var promise=new Promise(function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]});promises.push(installedChunkData[2]=promise);var script=document.createElement("script");var onScriptComplete;script.charset="utf-8";script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc)}script.src=jsonpScriptSrc(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null;clearTimeout(timeout);var chunk=installedChunks[chunkId];if(chunk!==0){if(chunk){var errorType=event&&(event.type==="load"?"missing":event.type);var realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")";error.name="ChunkLoadError";error.type=errorType;error.request=realSrc;chunk[1](error)}installedChunks[chunkId]=undefined}};var timeout=setTimeout(function(){onScriptComplete({type:"timeout",target:script})},12e4);script.onerror=script.onload=onScriptComplete;document.head.appendChild(script)}}return Promise.all(promises)};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";__webpack_require__.oe=function(err){console.error(err);throw err};var jsonpArray=window["webpackJsonpGUI"]=window["webpackJsonpGUI"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push(["./src/playground/embed.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player","vendors~editor~embed~fullscreen~player","editor~embed~fullscreen~player"]);return checkDeferredModules()}({"./src/lib/tw-embed-fullscreen-hoc.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",function(){return TWFullScreenHOC});var lodash_bindall__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash.bindall/index.js");var lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_0__);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");var react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);var react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-redux/es/index.js");var _reducers_mode__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/reducers/mode.js");var _reducers_tw__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/reducers/tw.js");var _tw_fullscreen_api__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/lib/tw-fullscreen-api.js");const _excluded=["isFullScreen","onSetIsFullScreen","onSetWindowIsFullScreen"];function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}const TWFullScreenHOC=function TWFullScreenHOC(WrappedComponent){class FullScreenComponent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{constructor(props){super(props);lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default()(this,["handleFullScreenChange"])}componentDidMount(){document.addEventListener("fullscreenchange",this.handleFullScreenChange);document.addEventListener("webkitfullscreenchange",this.handleFullScreenChange)}shouldComponentUpdate(nextProps){return this.props.isFullScreen!==nextProps.isFullScreen}componentDidUpdate(){if(_tw_fullscreen_api__WEBPACK_IMPORTED_MODULE_6__["default"].available()){if(this.props.isFullScreen){_tw_fullscreen_api__WEBPACK_IMPORTED_MODULE_6__["default"].request()}else if(_tw_fullscreen_api__WEBPACK_IMPORTED_MODULE_6__["default"].enabled()){_tw_fullscreen_api__WEBPACK_IMPORTED_MODULE_6__["default"].exit()}}}componentWillUnmount(){document.removeEventListener("fullscreenchange",this.handleFullScreenChange);document.removeEventListener("webkitfullscreenchange",this.handleFullScreenChange)}handleFullScreenChange(){const isFullScreen=_tw_fullscreen_api__WEBPACK_IMPORTED_MODULE_6__["default"].enabled();this.props.onSetWindowIsFullScreen(isFullScreen);this.props.onSetIsFullScreen(isFullScreen)}render(){const _this$props=this.props,{isFullScreen,onSetIsFullScreen,onSetWindowIsFullScreen}=_this$props,props=_objectWithoutProperties(_this$props,_excluded);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent,props)}}FullScreenComponent.propTypes={isFullScreen:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onSetIsFullScreen:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onSetWindowIsFullScreen:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func};const mapStateToProps=state=>({isFullScreen:state.scratchGui.mode.isFullScreen});const mapDispatchToProps=dispatch=>({onSetIsFullScreen:isFullScreen=>dispatch(Object(_reducers_mode__WEBPACK_IMPORTED_MODULE_4__["setFullScreen"])(isFullScreen)),onSetWindowIsFullScreen:isFullScreen=>dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setIsWindowFullScreen"])(isFullScreen))});return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps,mapDispatchToProps)(FullScreenComponent)}},"./src/playground/embed.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _import_first__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/playground/import-first.js");var react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");var react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");var react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);var redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/redux/es/index.js");var react_modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-modal/lib/index.js");var react_modal__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/app-state-hoc.jsx");var _lib_tw_embed_fullscreen_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/lib/tw-embed-fullscreen-hoc.jsx");var _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/lib/tw-state-manager-hoc.jsx");var _addons_entry__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/addons/entry.js");var _render_gui_jsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/playground/render-gui.jsx");var _app_target__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/playground/app-target.js");const getProjectId=()=>{const hashMatch=location.hash.match(/#(\d+)/);if(hashMatch!==null){return hashMatch[1]}const pathMatch=location.pathname.match(/(\d+)\/embed/);if(pathMatch!==null){return pathMatch[pathMatch.length-1]}return"0"};const projectId=getProjectId();const urlParams=new URLSearchParams(location.search);let vm;const onVmInit=_vm=>{vm=_vm;vm.runtime.renderer.setPrivateSkinAccess(false)};const onProjectLoaded=()=>{if(urlParams.has("autoplay")){vm.start();vm.greenFlag()}};const WrappedGUI=Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],_lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"],_lib_tw_embed_fullscreen_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(_render_gui_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]);Object(react_modal__WEBPACK_IMPORTED_MODULE_4__["setAppElement"])(_app_target__WEBPACK_IMPORTED_MODULE_10__["default"]);react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedGUI,{isEmbedded:true,projectId:projectId,onVmInit:onVmInit,onProjectLoaded:onProjectLoaded,routingStyle:"none"}),_app_target__WEBPACK_IMPORTED_MODULE_10__["default"]);if(urlParams.has("addons")){Object(_addons_entry__WEBPACK_IMPORTED_MODULE_8__["default"])()}}});