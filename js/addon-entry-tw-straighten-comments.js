/*! For license information please see addon-entry-tw-straighten-comments.js.LICENSE */
(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-tw-straighten-comments"],{"./src/addons/addons/tw-straighten-comments/_runtime_entry.js":function(t,s,n){"use strict";n.r(s),n.d(s,"resources",(function(){return e}));const e={"userscript.js":n("./src/addons/addons/tw-straighten-comments/userscript.js").default}},"./src/addons/addons/tw-straighten-comments/userscript.js":function(t,s,n){"use strict";n.r(s),s.default=async function(t){let{addon:s,global:n,console:e}=t;const r=await s.tab.traps.getBlockly(),o=r.BubbleDragger.prototype.endBubbleDrag;r.BubbleDragger.prototype.endBubbleDrag=function(t,n){if(!s.self.disabled&&this.draggingBubble_.comment){const t=this.draggingBubble_.comment.iconXY_.y-r.ScratchBubble.TOP_BAR_HEIGHT/2;n.y=t-this.startXY_.y}return o.call(this,t,n)}}}}]);
//# sourceMappingURL=addon-entry-tw-straighten-comments.js.map