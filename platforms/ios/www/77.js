(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toggle", function() { return Toggle; });
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js");











var Toggle = /*#__PURE__*/function () {
  function Toggle(hostRef) {
    var _this = this;

    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Toggle);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.inputId = "ion-tg-".concat(toggleIds++);
    this.lastDrag = 0;
    this.activated = false;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;
    /**
     * If `true`, the toggle is selected.
     */

    this.checked = false;
    /**
     * If `true`, the user cannot interact with the toggle.
     */

    this.disabled = false;
    /**
     * The value of the toggle does not mean if it's checked or not, use the `checked`
     * property for that.
     *
     * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
     * it's only used when the toggle participates in a native `<form>`.
     */

    this.value = 'on';

    this.onClick = function () {
      if (_this.lastDrag + 300 < Date.now()) {
        _this.checked = !_this.checked;
      }
    };

    this.onFocus = function () {
      _this.ionFocus.emit();
    };

    this.onBlur = function () {
      _this.ionBlur.emit();
    };

    this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionChange", 7);
    this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionFocus", 7);
    this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionBlur", 7);
    this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionStyle", 7);
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Toggle, [{
    key: "checkedChanged",
    value: function checkedChanged(isChecked) {
      this.ionChange.emit({
        checked: isChecked,
        value: this.value
      });
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      this.emitStyle();

      if (this.gesture) {
        this.gesture.setDisabled(this.disabled);
      }
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this2 = this;

        return _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js"));

              case 2:
                this.gesture = _context.sent.createGesture({
                  el: this.el,
                  gestureName: 'toggle',
                  gesturePriority: 100,
                  threshold: 5,
                  passive: false,
                  onStart: function onStart() {
                    return _this2.onStart();
                  },
                  onMove: function onMove(ev) {
                    return _this2.onMove(ev);
                  },
                  onEnd: function onEnd(ev) {
                    return _this2.onEnd(ev);
                  }
                });
                this.disabledChanged();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = undefined;
      }
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.emitStyle();
    }
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'interactive-disabled': this.disabled
      });
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this.activated = true; // touch-action does not work in iOS

      this.setFocus();
    }
  }, {
    key: "onMove",
    value: function onMove(detail) {
      if (shouldToggle(document, this.checked, detail.deltaX, -10)) {
        this.checked = !this.checked;
        Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_9__["h"])();
      }
    }
  }, {
    key: "onEnd",
    value: function onEnd(ev) {
      this.activated = false;
      this.lastDrag = Date.now();
      ev.event.preventDefault();
      ev.event.stopImmediatePropagation();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value || '';
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      if (this.buttonEl) {
        this.buttonEl.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign,
          _this3 = this;

      var inputId = this.inputId,
          disabled = this.disabled,
          checked = this.checked,
          activated = this.activated,
          color = this.color,
          el = this.el;
      var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this);
      var labelId = inputId + '-lbl';
      var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["f"])(el);
      var value = this.getValue();

      if (label) {
        label.id = labelId;
      }

      Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["a"])(true, el, this.name, checked ? value : '', disabled);
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onClick: this.onClick,
        role: "checkbox",
        "aria-disabled": disabled ? 'true' : null,
        "aria-checked": "".concat(checked),
        "aria-labelledby": labelId,
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["c"])(color)), (_Object$assign = {}, Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'in-item', Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["h"])('ion-item', el)), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'toggle-activated', activated), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'toggle-checked', checked), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'toggle-disabled', disabled), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'interactive', true), _Object$assign))
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "toggle-icon"
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "toggle-inner"
      })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_5__["h"])("button", {
        type: "button",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: disabled,
        ref: function ref(btnEl) {
          return _this3.buttonEl = btnEl;
        }
      }));
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
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}";
    }
  }]);

  return Toggle;
}();

var shouldToggle = function shouldToggle(doc, checked, deltaX, margin) {
  var isRTL = doc.dir === 'rtl';

  if (checked) {
    return !isRTL && margin > deltaX || isRTL && -margin < deltaX;
  } else {
    return !isRTL && -margin < deltaX || isRTL && margin > deltaX;
  }
};

var toggleIds = 0;


/***/ })

}]);
//# sourceMappingURL=77.js.map