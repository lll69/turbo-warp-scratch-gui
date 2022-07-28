(window["webpackJsonpGUI"]=window["webpackJsonpGUI"]||[]).push([["addon-entry-default-costume-editor-color"],{"./src/addons/addons/default-costume-editor-color/_runtime_entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"resources",function(){return resources});var _userscript_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/addons/addons/default-costume-editor-color/userscript.js");const resources={"userscript.js":_userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]}},"./src/addons/addons/default-costume-editor-color/userscript.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_exports__["default"]=async function({addon,global,console,msg}){await addon.tab.traps.getPaper();const hexComponent=str=>Math.round(+str).toString(16).toUpperCase().padStart(2,"0");const parseColor=color=>{if(color===null){return null}if(typeof color==="string"){if(color.startsWith("#")){return color.substring(0,9).toUpperCase()}const rgbMatch=color.match(/^rgb\((\d+)\s*,(\d+)\s*,(\d+)\)$/);if(rgbMatch){const[_,r,g,b]=rgbMatch;return"#".concat(hexComponent(r)).concat(hexComponent(g)).concat(hexComponent(b))}const rgbaMatch=color.match(/^rgba\((\d+)\s*,(\d+)\s*,(\d+),([\d.]+)\)$/);if(rgbaMatch){const[_,r,g,b,a]=rgbaMatch;return"#".concat(hexComponent(r)).concat(hexComponent(g)).concat(hexComponent(b)).concat(hexComponent(a*255))}}console.log("Could not normalize color",color);return null};const parseColorStyleColor=color=>{if(color===MIXED)return MIXED;return parseColor(color)};const MIXED="scratch-paint/style-path/mixed";const SCRATCH_DEFAULT_FILL=parseColor("#9966FF");const SCRATCH_DEFAULT_STROKE=parseColor("#000000");const TOOL_INFO=Object.assign(Object.create(null),{BRUSH:{resetsFill:true},ERASER:{},LINE:{resetsStroke:true,requiresNonZeroStrokeWidth:true,supportsGradient:true},FILL:{resetsFill:true,supportsGradient:true},SELECT:{supportsGradient:true},RESHAPE:{supportsGradient:true},OVAL:{resetsFill:true,resetsStroke:true,supportsGradient:true},RECT:{resetsFill:true,resetsStroke:true,supportsGradient:true},TEXT:{resetsFill:true,resetsStroke:true},BIT_BRUSH:{resetsFill:true},BIT_LINE:{resetsFill:true,requiresNonZeroStrokeWidth:true},BIT_OVAL:{resetsFill:true,resetsStroke:true,supportsGradient:true},BIT_RECT:{resetsFill:true,resetsStroke:true,supportsGradient:true},BIT_TEXT:{resetsFill:true,resetsStroke:true},BIT_FILL:{resetsFill:true,supportsGradient:true},BIT_ERASER:{},BIT_SELECT:{supportsGradient:true}});const getToolInfo=()=>TOOL_INFO[addon.tab.redux.state.scratchPaint.mode];class ColorStyleReducerWrapper{constructor(reduxPropertyName,primaryAction,secondaryAction,gradientTypeAction){this.reduxPropertyName=reduxPropertyName;this.primaryAction=primaryAction;this.secondaryAction=secondaryAction;this.gradientTypeAction=gradientTypeAction}get(state=addon.tab.redux.state){return state.scratchPaint.color[this.reduxPropertyName]}set(newColor){const state=this.get();const newPrimary=parseColorStyleColor(newColor.primary);if(state.primary!==newPrimary){addon.tab.redux.dispatch({type:this.primaryAction,color:newPrimary})}const toolInfo=getToolInfo();const toolSupportsGradient=toolInfo&&toolInfo.supportsGradient;if(toolSupportsGradient){const newSecondary=parseColorStyleColor(newColor.secondary);if(state.secondary!==newSecondary){addon.tab.redux.dispatch({type:this.secondaryAction,color:newSecondary})}if(state.gradientType!==newColor.gradientType){addon.tab.redux.dispatch({type:this.gradientTypeAction,gradientType:newColor.gradientType})}}}}const fillStyle=new ColorStyleReducerWrapper("fillColor","scratch-paint/fill-style/CHANGE_FILL_COLOR","scratch-paint/fill-style/CHANGE_FILL_COLOR_2","scratch-paint/fill-style/CHANGE_FILL_GRADIENT_TYPE");const strokeStyle=new ColorStyleReducerWrapper("strokeColor","scratch-paint/stroke-style/CHANGE_STROKE_COLOR","scratch-paint/stroke-style/CHANGE_STROKE_COLOR_2","scratch-paint/stroke-style/CHANGE_STROKE_GRADIENT_TYPE");const simpleHexColor=hex=>({primary:hex,secondary:null,gradientType:"SOLID"});let defaultFillColor;let defaultStrokeColor;let defaultStrokeWidth;const setDefaultColorsToSettings=()=>{defaultFillColor=simpleHexColor(parseColor(addon.settings.get("fill")));defaultStrokeColor=simpleHexColor(parseColor(addon.settings.get("stroke")));defaultStrokeWidth=addon.settings.get("strokeSize")};setDefaultColorsToSettings();const applyFillColor=()=>{fillStyle.set(defaultFillColor)};const applyStrokeColor=()=>{strokeStyle.set(defaultStrokeColor)};const applyStrokeWidth=mustBeNonZero=>{let width=defaultStrokeWidth;if(width===0&&mustBeNonZero){width=1}if(addon.tab.redux.state.scratchPaint.color.strokeWidth!==width){addon.tab.redux.dispatch({type:"scratch-paint/stroke-width/CHANGE_STROKE_WIDTH",strokeWidth:width})}};if(!addon.self.disabled){applyFillColor();applyStrokeColor();applyStrokeWidth(false)}addon.settings.addEventListener("change",()=>{if(!addon.settings.get("persistence")){setDefaultColorsToSettings()}});const isValidColorToPersist=color=>color.primary!==null&&color.primary!==MIXED;let activatingTool=false;addon.tab.redux.initialize();addon.tab.redux.addEventListener("statechanged",({detail})=>{if(addon.self.disabled){return}const action=detail.action;if(!activatingTool&&addon.settings.get("persistence")){const newFill=fillStyle.get();if(fillStyle.get(detail.prev)!==newFill&&isValidColorToPersist(newFill)){defaultFillColor=newFill}const newStroke=strokeStyle.get();if(strokeStyle.get(detail.prev)!==newStroke&&isValidColorToPersist(newStroke)){defaultStrokeColor=newStroke}const newStrokeWidth=detail.next.scratchPaint.color.strokeWidth;if(typeof newStrokeWidth==="number"){defaultStrokeWidth=newStrokeWidth}}if(action.type==="scratch-paint/modes/CHANGE_MODE"){activatingTool=true;queueMicrotask(()=>{activatingTool=false;if(addon.settings.get("persistence")){const toolInfo=getToolInfo();if(!toolInfo){console.warn("unknown tool",newToolName);return}if(toolInfo.resetsFill){applyFillColor()}if(toolInfo.resetsStroke){applyStrokeWidth(!!toolInfo.requiresNonZeroStrokeWidth);applyStrokeColor()}}else{const oldFillColor=fillStyle.get(detail.prev);if(oldFillColor.primary===null||oldFillColor.primary===MIXED){const newFillColor=fillStyle.get();if(newFillColor.primary===SCRATCH_DEFAULT_FILL){applyFillColor()}}const oldStrokeColor=strokeStyle.get(detail.prev);if(oldStrokeColor.primary===null||oldStrokeColor.primary===MIXED){const newStrokeColor=strokeStyle.get();if(newStrokeColor.primary===SCRATCH_DEFAULT_STROKE){applyStrokeWidth(true);applyStrokeColor()}}}})}})}}}]);