(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_segment, ion_segment_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_segment", function() { return Segment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_segment_button", function() { return SegmentButton; });
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");








var Segment = /*#__PURE__*/function () {
  function Segment(hostRef) {
    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Segment);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
    this.didInit = false;
    /**
     * If `true`, the user cannot interact with the segment.
     */

    this.disabled = false;
    /**
     * If `true`, the segment buttons will overflow and the user can swipe to see them.
     */

    this.scrollable = false;
    this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this, "ionChange", 7);
    this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this, "ionStyle", 7);
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Segment, [{
    key: "valueChanged",
    value: function valueChanged(value) {
      if (this.didInit) {
        this.updateButtons();
        this.ionChange.emit({
          value: value
        });
      }
    }
  }, {
    key: "segmentClick",
    value: function segmentClick(ev) {
      var selectedButton = ev.target;
      this.value = selectedButton.value;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.value === undefined) {
        var checked = this.getButtons().find(function (b) {
          return b.checked;
        });

        if (checked) {
          this.value = checked.value;
        }
      }

      this.emitStyle();
    }
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      this.updateButtons();
      this.didInit = true;
    }
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'segment': true
      });
    }
  }, {
    key: "updateButtons",
    value: function updateButtons() {
      var value = this.value;

      var _iterator = Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.getButtons()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var button = _step.value;
          button.checked = button.value === value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "getButtons",
    value: function getButtons() {
      return Array.from(this.el.querySelectorAll('ion-segment-button'));
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign;

      var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this);
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["H"], {
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.color)), (_Object$assign = {}, Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'segment-disabled', this.disabled), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'segment-scrollable', this.scrollable), _Object$assign))
      });
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "value": ["valueChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ".sc-ion-segment-md-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-md-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-md-h{pointer-events:none}.segment-scrollable.sc-ion-segment-md-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-md-h::-webkit-scrollbar{display:none}.sc-ion-segment-md-h{--background:none;--background-checked:none;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--color:rgba(var(--ion-text-color-rgb,0,0,0),0.6);--color-checked:var(--ion-color-primary,#3880ff);--color-checked-disabled:var(--color-checked);--indicator-color:transparent}.segment-disabled.sc-ion-segment-md-h{opacity:.3}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button{--background-activated:rgba(var(--ion-color-base-rgb),0.16);--ripple-color:var(--ion-color-base);background:transparent;color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-color-base);color:var(--ion-color-base)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked.activated{color:var(--ion-color-base)}\@media (any-hover:hover){.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button:hover{background:rgba(var(--ion-color-base-rgb),.04)}}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-toolbar-color-checked,var(--color-checked));color:var(--ion-toolbar-color-checked,var(--color-checked))}.sc-ion-segment-md-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{--background-hover:rgba(var(--ion-color-contrast-rgb),0.04);--background-activated:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb),0.6);--color-checked:var(--ion-color-contrast);--indicator-color-checked:var(--ion-color-contrast)}";
    }
  }]);

  return Segment;
}();

var ids = 0;

var SegmentButton = /*#__PURE__*/function () {
  function SegmentButton(hostRef) {
    var _this = this;

    Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SegmentButton);

    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
    /**
     * If `true`, the segment button is selected.
     */

    this.checked = false;
    /**
     * If `true`, the user cannot interact with the segment button.
     */

    this.disabled = false;
    /**
     * Set the layout of the text and icon in the segment.
     */

    this.layout = 'icon-top';
    /**
     * The type of the button.
     */

    this.type = 'button';
    /**
     * The value of the segment button.
     */

    this.value = 'ion-sb-' + ids++;

    this.onClick = function () {
      _this.checked = true;
    };

    this.ionSelect = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this, "ionSelect", 7);
  }

  Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SegmentButton, [{
    key: "checkedChanged",
    value: function checkedChanged(checked, prev) {
      if (checked && !prev) {
        this.ionSelect.emit();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _class;

      var checked = this.checked,
          type = this.type,
          disabled = this.disabled,
          hasIcon = this.hasIcon,
          hasLabel = this.hasLabel,
          layout = this.layout;
      var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this);
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["H"], {
        onClick: this.onClick,
        "aria-disabled": disabled ? 'true' : null,
        class: (_class = {}, Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'segment-button-has-label', hasLabel), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'segment-button-has-icon', hasIcon), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'segment-button-has-label-only', hasLabel && !hasIcon), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'segment-button-has-icon-only', hasIcon && !hasLabel), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'segment-button-disabled', disabled), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'segment-button-checked', checked), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "segment-button-layout-".concat(layout), true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'ion-activatable', true), Object(_Users_usc_Desktop_ionic_04_noticias_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'ion-activatable-instant', true), _class)
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["h"])("button", {
        type: type,
        "aria-pressed": checked ? 'true' : null,
        class: "button-native",
        disabled: disabled
      }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["h"])("slot", null), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["h"])("ion-ripple-effect", null)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "segment-button-indicator"
      }));
    }
  }, {
    key: "hasLabel",
    get: function get() {
      return !!this.el.querySelector('ion-label');
    }
  }, {
    key: "hasIcon",
    get: function get() {
      return !!this.el.querySelector('ion-icon');
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "checked": ["checkedChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ":host{--padding-start:0;--padding-end:0;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;height:auto;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type){border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host-context([dir=rtl]):first-of-type,:host-context([dir=rtl]):host(:first-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host(:not(:first-of-type)){border-left-width:0}:host-context([dir=rtl]):host(:not(:first-of-type)),:host-context([dir=rtl]):not(:first-of-type){border-right-width:0;border-left-width:var(--border-width)}:host(:last-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host-context([dir=rtl]):host(:last-of-type),:host-context([dir=rtl]):last-of-type{border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.button-native{border-radius:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.segment-button-indicator{-ms-flex-item-align:end;align-self:flex-end;width:100%;height:2px;background-color:var(--indicator-color);opacity:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-checked) .segment-button-indicator{background-color:var(--indicator-color-checked,var(--color-checked))}:host(.activated){color:var(--color-activated,var(--color))}:host(.segment-button-disabled){color:var(--color-disabled)}:host(.segment-button-disabled.segment-button-checked){color:var(--color-checked-disabled)}::slotted(ion-icon){-ms-flex-order:-1;order:-1}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}:host{--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s,opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;font-size:14px;font-weight:500;letter-spacing:.06em;line-height:40px;text-transform:uppercase}:host(.activated),:host(.segment-button-checked){--border-color:var(--ion-color-primary,#3880ff);opacity:1}:host(.segment-button-disabled){opacity:.3}::slotted(ion-icon){font-size:24px}::slotted(ion-icon),::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon),:host(.segment-button-layout-icon-top) ::slotted(ion-label){margin-top:0}:host(.segment-button-layout-icon-bottom) ::slotted(ion-label),:host(.segment-button-layout-icon-top) ::slotted(ion-icon){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon),:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-checked.activated){color:var(--color-checked)}\@media (any-hover:hover){:host(:hover){background:var(--background-hover)}}";
    }
  }]);

  return SegmentButton;
}();



/***/ })

}]);
//# sourceMappingURL=61.js.map