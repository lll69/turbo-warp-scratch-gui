(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-custom-zoom"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/custom-zoom/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/custom-zoom/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-custom-zoom-area {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 60px;\n  height: 148px;\n  pointer-events: none;\n}\n.blocklyZoom > * {\n  transition: transform var(--sa-custom-zoom-speed, 0) ease-in-out;\n}\n.sa-custom-zoom-hidden > * {\n  transform: translateX(80px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/custom-zoom/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/custom-zoom/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/custom-zoom/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/custom-zoom/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/custom-zoom/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/custom-zoom/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console
}) {
  await addon.tab.traps.getBlockly();
  let controlsRect;
  let previousIsHovered = false;
  const speeds = {
    none: "0s",
    short: "0.2s",
    default: "0.3s",
    long: "0.5s"
  };
  const customZoomAreaElement = document.createElement("div");
  customZoomAreaElement.className = "sa-custom-zoom-area";

  function update() {
    document.removeEventListener("mousemove", onMouseMove);
    if (addon.tab.editorMode !== "editor") return;
    Blockly.getMainWorkspace().options.zoomOptions.maxScale = addon.settings.get("maxZoom") / 100;
    Blockly.getMainWorkspace().options.zoomOptions.minScale = addon.settings.get("minZoom") / 100;
    Blockly.getMainWorkspace().options.zoomOptions.startScale = addon.settings.get("startZoom") / 100;
    Blockly.getMainWorkspace().options.zoomOptions.scaleSpeed = 1 + 0.2 * (addon.settings.get("zoomSpeed") / 100);
    const svgGroup = getZoomControls();
    const autohide = addon.settings.get("autohide");
    if (svgGroup) svgGroup.classList.toggle("sa-custom-zoom-hidden", autohide);

    if (autohide) {
      const injectionDiv = document.querySelector(".injectionDiv");
      injectionDiv.appendChild(customZoomAreaElement);
      updateRect();
      document.addEventListener("mousemove", onMouseMove);
    }
  }

  function getZoomControls() {
    const zoomControls = Blockly.getMainWorkspace().zoomControls_;
    if (zoomControls) return zoomControls.svgGroup_;
    return null;
  }

  function onMouseMove(e) {
    const isHovered = e.x > controlsRect.left && e.x < controlsRect.right && e.y > controlsRect.top && e.y < controlsRect.bottom;

    if (isHovered !== previousIsHovered) {
      previousIsHovered = isHovered;
      const svgGroup = getZoomControls();

      if (svgGroup) {
        svgGroup.style.setProperty("--sa-custom-zoom-speed", speeds[addon.settings.get("speed")]);
        svgGroup.classList.toggle("sa-custom-zoom-hidden", !isHovered);
      }
    }
  }

  function updateRect() {
    controlsRect = customZoomAreaElement.getBoundingClientRect();
  }

  function onResize() {
    if (addon.tab.editorMode === "editor" && addon.settings.get("autohide")) {
      updateRect();
    }
  }

  await addon.tab.waitForElement(".blocklyZoom");
  update();
  addon.tab.addEventListener("urlChange", update);
  addon.settings.addEventListener("change", update);
  window.addEventListener("resize", onResize);
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-custom-zoom.js.map