/*! For license information please see addon-entry-initialise-sprite-position.js.LICENSE */
(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-initialise-sprite-position"],{"./src/addons/addons/initialise-sprite-position/_runtime_entry.js":function(t,s,e){"use strict";e.r(s),e.d(s,"resources",(function(){return i}));const i={"userscript.js":e("./src/addons/addons/initialise-sprite-position/userscript.js").default}},"./src/addons/addons/initialise-sprite-position/userscript.js":function(t,s,e){"use strict";e.r(s),s.default=async function(t){let{addon:s}=t;const e=s.tab.traps.vm,i=e.constructor.prototype.addSprite;e.constructor.prototype.addSprite=function(t){var e,n;let r,o=!0;"object"==typeof t?[r,o]=[t,!1]:r=JSON.parse(t);const c="cd21514d0531fdffb22204e0ec5ed84a.svg"===(null===(e=r.costumes)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.baseLayerMD5);return s.self.disabled||!c&&r.tags&&s.settings.get("library")||(r.scratchX&&(r.scratchX=s.settings.get("x"),r.scratchY=s.settings.get("y")),r.x&&(r.x=s.settings.get("x"),r.y=s.settings.get("y"))),i.call(this,o?JSON.stringify(r):r)};const n=()=>{const t=e.runtime.getTargetForStage().constructor.prototype,i=t.duplicate;t.duplicate=function(){return i.call(this).then(t=>{if(!s.self.disabled)switch(s.settings.get("duplicate")){case"custom":t.setXY(s.settings.get("x"),s.settings.get("y"));break;case"keep":t.setXY(this.x,this.y)}return t})}};e.runtime.getTargetForStage()?n():e.runtime.once("PROJECT_LOADED",n)}}}]);
//# sourceMappingURL=addon-entry-initialise-sprite-position.js.map