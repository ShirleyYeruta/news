(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");







var Avatar = /*#__PURE__*/function () {
  function Avatar(hostRef) {
    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Avatar);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Avatar, [{
    key: "render",
    value: function render() {
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this)
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null));
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";
    }
  }]);

  return Avatar;
}();

var Badge = /*#__PURE__*/function () {
  function Badge(hostRef) {
    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Badge);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Badge, [{
    key: "render",
    value: function render() {
      var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this);
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this.color)), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mode, true))
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null));
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}";
    }
  }]);

  return Badge;
}();

var Thumbnail = /*#__PURE__*/function () {
  function Thumbnail(hostRef) {
    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Thumbnail);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Thumbnail, [{
    key: "render",
    value: function render() {
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this)
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null));
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";
    }
  }]);

  return Thumbnail;
}();



/***/ })

}]);
//# sourceMappingURL=9.js.map