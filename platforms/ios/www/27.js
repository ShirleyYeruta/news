(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_fab, ion_fab_button, ion_fab_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab", function() { return Fab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab_button", function() { return FabButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab_list", function() { return FabList; });
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");









var Fab = /*#__PURE__*/function () {
  function Fab(hostRef) {
    var _this = this;

    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Fab);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    /**
     * If `true`, the fab will display on the edge of the header if
     * `vertical` is `"top"`, and on the edge of the footer if
     * it is `"bottom"`. Should be used with a `fixed` slot.
     */

    this.edge = false;
    /**
     * If `true`, both the `ion-fab-button` and all `ion-fab-list` inside `ion-fab` will become active.
     * That means `ion-fab-button` will become a `close` icon and `ion-fab-list` will become visible.
     */

    this.activated = false;

    this.onClick = function () {
      var hasList = !!_this.el.querySelector('ion-fab-list');

      var getButton = _this.getFab();

      var isButtonDisabled = getButton && getButton.disabled;

      if (hasList && !isButtonDisabled) {
        _this.activated = !_this.activated;
      }
    };
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Fab, [{
    key: "activatedChanged",
    value: function activatedChanged() {
      var activated = this.activated;
      var fab = this.getFab();

      if (fab) {
        fab.activated = activated;
      }

      Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(function (list) {
        list.activated = activated;
      });
    }
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      if (this.activated) {
        this.activatedChanged();
      }
    }
    /**
     * Close an active FAB list container.
     */

  }, {
    key: "close",
    value: function () {
      var _close = Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.activated = false;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: "getFab",
    value: function getFab() {
      return this.el.querySelector('ion-fab-button');
    }
  }, {
    key: "render",
    value: function render() {
      var _class;

      var horizontal = this.horizontal,
          vertical = this.vertical,
          edge = this.edge;
      var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this);
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onClick: this.onClick,
        class: (_class = {}, Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "fab-horizontal-".concat(horizontal), horizontal !== undefined), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "fab-vertical-".concat(vertical), vertical !== undefined), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'fab-edge', edge), _class)
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", null));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "activated": ["activatedChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}";
    }
  }]);

  return Fab;
}();

var FabButton = /*#__PURE__*/function () {
  function FabButton(hostRef) {
    var _this2 = this;

    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FabButton);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    /**
     * If `true`, the fab button will be show a close icon.
     */

    this.activated = false;
    /**
     * If `true`, the user cannot interact with the fab button.
     */

    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */

    this.routerDirection = 'forward';
    /**
     * If `true`, the fab button will show when in a fab-list.
     */

    this.show = false;
    /**
     * If `true`, the fab button will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */

    this.translucent = false;
    /**
     * The type of the button.
     */

    this.type = 'button';

    this.onFocus = function () {
      _this2.ionFocus.emit();
    };

    this.onBlur = function () {
      _this2.ionBlur.emit();
    };

    this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionFocus", 7);
    this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionBlur", 7);
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FabButton, [{
    key: "render",
    value: function render() {
      var _Object$assign,
          _this3 = this;

      var el = this.el,
          disabled = this.disabled,
          color = this.color,
          href = this.href,
          activated = this.activated,
          show = this.show,
          translucent = this.translucent,
          size = this.size;
      var inList = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__["h"])('ion-fab-list', el);
      var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this);
      var TagType = href === undefined ? 'button' : 'a';
      var attrs = TagType === 'button' ? {
        type: this.type
      } : {
        download: this.download,
        href: href,
        rel: this.rel,
        target: this.target
      };
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        "aria-disabled": disabled ? 'true' : null,
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__["c"])(color)), (_Object$assign = {}, Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'fab-button-in-list', inList), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'fab-button-translucent-in-list', inList && translucent), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'fab-button-close-active', activated), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'fab-button-show', show), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'fab-button-disabled', disabled), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'fab-button-translucent', translucent), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'ion-activatable', true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'ion-focusable', true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, "fab-button-".concat(size), size !== undefined), _Object$assign))
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])(TagType, Object.assign({}, attrs, {
        class: "button-native",
        disabled: disabled,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onClick: function onClick(ev) {
          return Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__["o"])(href, ev, _this3.routerDirection);
        }
      }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("span", {
        class: "close-icon"
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-icon", {
        name: "close",
        lazy: false
      })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("span", {
        class: "button-inner"
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", null)), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-ripple-effect", null)));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{--color-hover:var(--color);--background-hover:var(--ion-color-primary-tint,#4c8dff);--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.fab-button-disabled){opacity:.5;pointer-events:none}:host(.fab-button-disabled) .button-native{cursor:default;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color:hover) .button-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}:host(.ion-color.activated) .button-native,:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--background);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--transition:box-shadow 280ms cubic-bezier(0.4,0,0.2,1),background-color 280ms cubic-bezier(0.4,0,0.2,1),color 280ms cubic-bezier(0.4,0,0.2,1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0,0,0.2,1) 0ms}:host(.activated){--box-shadow:0 7px 8px -4px rgba(0,0,0,0.2),0 12px 17px 2px rgba(0,0,0,0.14),0 5px 22px 4px rgba(0,0,0,0.12)}.close-icon,::slotted(ion-icon){font-size:24px}:host(.fab-button-in-list){--color:rgba(var(--ion-text-color-rgb,0,0,0),0.54);--color-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint,#f5f6f9)}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}";
    }
  }]);

  return FabButton;
}();

var FabList = /*#__PURE__*/function () {
  function FabList(hostRef) {
    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FabList);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    /**
     * If `true`, the fab list will show all fab buttons in the list.
     */

    this.activated = false;
    /**
     * The side the fab list will show on relative to the main fab button.
     */

    this.side = 'bottom';
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FabList, [{
    key: "activatedChanged",
    value: function activatedChanged(activated) {
      var fabs = Array.from(this.el.querySelectorAll('ion-fab-button')); // if showing the fabs add a timeout, else show immediately

      var timeout = activated ? 30 : 0;
      fabs.forEach(function (fab, i) {
        setTimeout(function () {
          return fab.show = activated;
        }, i * timeout);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _class2;

      var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this);
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        class: (_class2 = {}, Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class2, mode, true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class2, 'fab-list-active', this.activated), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class2, "fab-list-side-".concat(this.side), true), _class2)
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", null));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "activated": ["activatedChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list),:host(.fab-list-side-top) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-start,:host-context([dir=rtl]):host(.fab-list-side-start){left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-end,:host-context([dir=rtl]):host(.fab-list-side-end){left:unset;right:unset;right:0}";
    }
  }]);

  return FabList;
}();



/***/ })

}]);
//# sourceMappingURL=27.js.map