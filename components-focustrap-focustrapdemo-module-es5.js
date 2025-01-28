(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-focustrap-focustrapdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/focustrap/focustrapdemo.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/focustrap/focustrapdemo.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Focus Trap</span>\r\n        <span>Focus Trap keeps focus within a certain DOM element while tabbing.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <div pFocusTrap>\r\n        <h3 class=\"first\">Input</h3>\r\n        <input id=\"input\" type=\"text\" size=\"30\" pInputText> \r\n        \r\n        <h3>Float Label</h3>\r\n        <span class=\"ui-float-label\">\r\n            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n            <label for=\"float-input\">Username</label>\r\n        </span>\r\n\r\n        <h3>Disabled Input</h3>\r\n        <input id=\"disabled-input\" type=\"text\" size=\"30\" pInputText [disabled]=\"true\" />\r\n\r\n        <h3>Input with tabindex -1</h3>\r\n        <input type=\"text\" size=\"30\" pInputText tabindex=\"-1\" />\r\n\r\n        <h3>Button</h3>\r\n        <button pButton type=\"button\" icon=\"pi pi-check\" label=\"Check\"></button>\r\n\r\n        <h3>Disabled Button</h3>\r\n        <button pButton type=\"button\" icon=\"pi pi-check\" [disabled]=\"true\" label=\"Disabled\"></button>\r\n\r\n        <h3>Button with tabindex -1</h3>\r\n        <button pButton type=\"button\" icon=\"pi pi-check\" tabindex=\"-1\"  label=\"Check\"></button>\r\n        \r\n        <h3>Dropdown</h3>\r\n        <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a City\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\r\n\r\n        <h3>Editor</h3>   \r\n        <p-editor [style]=\"{'height':'320px'}\">\r\n            <p-header>\r\n                <span class=\"ql-formats\">\r\n                    <button class=\"ql-bold\" aria-label=\"Bold\"></button>\r\n                    <button class=\"ql-italic\" aria-label=\"Italic\"></button>\r\n                    <button class=\"ql-underline\" aria-label=\"Underline\"></button>\r\n                </span>\r\n            </p-header>\r\n        </p-editor>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;FocusTrapModule&#125; from 'primeng/focustrap';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>FocusTrap is applied to a container element with the <b>pFocusTrap</b> directive.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pFocusTrap&gt;\r\n    //content\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <p>Directive has no properties.</p>\r\n\r\n            <h3>Events</h3>\r\n            <p>Directive has no events.</p>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Directive does not apply any styling to host.</p>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/focustrap\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pFocusTrap&gt;\r\n    &lt;h3 class=\"first\"&gt;Input&lt;/h3&gt;\r\n    &lt;input id=\"input\" type=\"text\" size=\"30\" pInputText&gt; \r\n    \r\n    &lt;h3&gt;Float Label&lt;/h3&gt;\r\n    &lt;span class=\"ui-float-label\"&gt;\r\n        &lt;input id=\"float-input\" type=\"text\" size=\"30\" pInputText&gt; \r\n        &lt;label for=\"float-input\"&gt;Username&lt;/label&gt;\r\n    &lt;/span&gt;\r\n\r\n    &lt;h3&gt;Disabled Input&lt;/h3&gt;\r\n    &lt;input id=\"disabled-input\" type=\"text\" size=\"30\" pInputText [disabled]=\"true\" /&gt;\r\n\r\n    &lt;h3&gt;Input with tabindex -1&lt;/h3&gt;\r\n    &lt;input type=\"text\" size=\"30\" pInputText tabindex=\"-1\" /&gt;\r\n\r\n    &lt;h3&gt;Button&lt;/h3&gt;\r\n    &lt;button pButton type=\"button\" icon=\"pi pi-check\" label=\"Check\"&gt;&lt;/button&gt;\r\n\r\n    &lt;h3&gt;Disabled Button&lt;/h3&gt;\r\n    &lt;button pButton type=\"button\" icon=\"pi pi-check\" [disabled]=\"true\" label=\"Disabled\"&gt;&lt;/button&gt;\r\n\r\n    &lt;h3&gt;Button with tabindex -1&lt;/h3&gt;\r\n    &lt;button pButton type=\"button\" icon=\"pi pi-check\" tabindex=\"-1\"  label=\"Check\"&gt;&lt;/button&gt;\r\n    \r\n    &lt;h3&gt;Dropdown&lt;/h3&gt;\r\n    &lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a City\" optionLabel=\"name\" [showClear]=\"true\"&gt;&lt;/p-dropdown&gt;\r\n\r\n    &lt;h3&gt;Editor&lt;/h3&gt;   \r\n    &lt;p-editor [style]=\"&#123;'height':'320px'&#125;\"&gt;\r\n        &lt;p-header&gt;\r\n            &lt;span class=\"ql-formats\"&gt;\r\n                &lt;button class=\"ql-bold\" aria-label=\"Bold\"&gt;&lt;/button&gt;\r\n                &lt;button class=\"ql-italic\" aria-label=\"Italic\"&gt;&lt;/button&gt;\r\n                &lt;button class=\"ql-underline\" aria-label=\"Underline\"&gt;&lt;/button&gt;\r\n            &lt;/span&gt;\r\n        &lt;/p-header&gt;\r\n    &lt;/p-editor&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class FocusTrapDemo &#123;\r\n\r\n    selectedCity: string;\r\n   \r\n    cities = [\r\n        &#123;name: 'New York', code: 'NY'&#123;,\r\n        &#123;name: 'Rome', code: 'RM'&#123;,\r\n        &#123;name: 'London', code: 'LDN'&#123;,\r\n        &#123;name: 'Istanbul', code: 'IST'&#123;,\r\n        &#123;name: 'Paris', code: 'PRS'&#123;\r\n    ];\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/components/focustrap/focustrap.ts":
/*!***************************************************!*\
  !*** ./src/app/components/focustrap/focustrap.ts ***!
  \***************************************************/
/*! exports provided: FocusTrap, FocusTrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapModule", function() { return FocusTrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");




var FocusTrap = /** @class */ (function () {
    function FocusTrap(el) {
        this.el = el;
    }
    FocusTrap.prototype.onkeydown = function (e) {
        if (e.which === 9) {
            e.preventDefault();
            var focusableElements = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getFocusableElements(this.el.nativeElement);
            if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                    focusableElements[0].focus();
                }
                else {
                    var focusedIndex = focusableElements.indexOf(document.activeElement);
                    if (e.shiftKey) {
                        if (focusedIndex == -1 || focusedIndex === 0)
                            focusableElements[focusableElements.length - 1].focus();
                        else
                            focusableElements[focusedIndex - 1].focus();
                    }
                    else {
                        if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                            focusableElements[0].focus();
                        else
                            focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        }
    };
    FocusTrap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FocusTrap.prototype, "onkeydown", null);
    FocusTrap = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[pFocusTrap]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FocusTrap);
    return FocusTrap;
}());

var FocusTrapModule = /** @class */ (function () {
    function FocusTrapModule() {
    }
    FocusTrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [FocusTrap],
            declarations: [FocusTrap]
        })
    ], FocusTrapModule);
    return FocusTrapModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/focustrap/focustrapdemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/focustrap/focustrapdemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FocusTrapDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapDemoRoutingModule", function() { return FocusTrapDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _focustrapdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focustrapdemo */ "./src/app/showcase/components/focustrap/focustrapdemo.ts");




var FocusTrapDemoRoutingModule = /** @class */ (function () {
    function FocusTrapDemoRoutingModule() {
    }
    FocusTrapDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _focustrapdemo__WEBPACK_IMPORTED_MODULE_3__["FocusTrapDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], FocusTrapDemoRoutingModule);
    return FocusTrapDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/focustrap/focustrapdemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/focustrap/focustrapdemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: FocusTrapDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapDemoModule", function() { return FocusTrapDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/dialog/dialog */ "./src/app/components/dialog/dialog.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/accordion/accordion */ "./src/app/components/accordion/accordion.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony import */ var _focustrapdemo_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./focustrapdemo-routing.module */ "./src/app/showcase/components/focustrap/focustrapdemo-routing.module.ts");
/* harmony import */ var _focustrapdemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./focustrapdemo */ "./src/app/showcase/components/focustrap/focustrapdemo.ts");
/* harmony import */ var src_app_components_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/autocomplete/autocomplete */ "./src/app/components/autocomplete/autocomplete.ts");
/* harmony import */ var src_app_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/calendar/calendar */ "./src/app/components/calendar/calendar.ts");
/* harmony import */ var src_app_components_multiselect_multiselect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/multiselect/multiselect */ "./src/app/components/multiselect/multiselect.ts");
/* harmony import */ var src_app_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/dropdown/dropdown */ "./src/app/components/dropdown/dropdown.ts");
/* harmony import */ var src_app_components_editor_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/editor/editor */ "./src/app/components/editor/editor.ts");
/* harmony import */ var src_app_components_focustrap_focustrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/components/focustrap/focustrap */ "./src/app/components/focustrap/focustrap.ts");


















var FocusTrapDemoModule = /** @class */ (function () {
    function FocusTrapDemoModule() {
    }
    FocusTrapDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _focustrapdemo_routing_module__WEBPACK_IMPORTED_MODULE_10__["FocusTrapDemoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"],
                src_app_components_focustrap_focustrap__WEBPACK_IMPORTED_MODULE_17__["FocusTrapModule"],
                src_app_components_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoCompleteModule"],
                src_app_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"],
                src_app_components_multiselect_multiselect__WEBPACK_IMPORTED_MODULE_14__["MultiSelectModule"],
                src_app_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                src_app_components_editor_editor__WEBPACK_IMPORTED_MODULE_16__["EditorModule"]
            ],
            declarations: [
                _focustrapdemo__WEBPACK_IMPORTED_MODULE_11__["FocusTrapDemo"]
            ]
        })
    ], FocusTrapDemoModule);
    return FocusTrapDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/focustrap/focustrapdemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/focustrap/focustrapdemo.ts ***!
  \****************************************************************/
/*! exports provided: FocusTrapDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapDemo", function() { return FocusTrapDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FocusTrapDemo = /** @class */ (function () {
    function FocusTrapDemo() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
    FocusTrapDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./focustrapdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/focustrap/focustrapdemo.html")
        })
    ], FocusTrapDemo);
    return FocusTrapDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-focustrap-focustrapdemo-module-es5.js.map