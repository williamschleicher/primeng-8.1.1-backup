(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputgroup-inputgroupdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/inputgroup/inputgroupdemo.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/inputgroup/inputgroupdemo.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">InputGroup</span>\r\n        <span>Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside\r\n            .ui-inputgroup element. Multiple addons can be used within the same group as well.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Addons</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\r\n                <input type=\"text\" pInputText placeholder=\"Username\">         \r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\">$</span>\r\n                <input type=\"text\" pInputText placeholder=\"Price\">   \r\n                <span class=\"ui-inputgroup-addon\">.00</span>      \r\n            </div>\r\n        </div>\r\n                \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\">www</span>\r\n                <input type=\"text\" pInputText placeholder=\"Website\">      \r\n            </div>\r\n        </div>\r\n    </div>\r\n        \r\n    <h3>Multiple Addons</h3>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-tags\" style=\"line-height: 1.25;\"></i></span>  \r\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-shopping-cart\" style=\"line-height: 1.25;\"></i></span>   \r\n                <input type=\"text\" pInputText placeholder=\"Price\"> \r\n                <span class=\"ui-inputgroup-addon\">$</span>  \r\n                <span class=\"ui-inputgroup-addon\">.00</span>      \r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <h3>Button Addons</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <button pButton type=\"button\" label=\"Search\"></button>\r\n                <input type=\"text\" pInputText placeholder=\"Keyword\">         \r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <input type=\"text\" pInputText placeholder=\"Keyword\">   \r\n                <button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-warn\"></button>      \r\n            </div>\r\n        </div>\r\n                \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"></button>    \r\n                <input type=\"text\" pInputText placeholder=\"Vote\">   \r\n                <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"></button>      \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <h3>Checkbox and RadioButton</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\r\n                <input type=\"text\" pInputText placeholder=\"Username\">         \r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <input type=\"text\" pInputText placeholder=\"Price\">   \r\n                <span class=\"ui-inputgroup-addon\"><p-radioButton></p-radioButton></span>      \r\n            </div>\r\n        </div>\r\n                \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\r\n                <input type=\"text\" pInputText placeholder=\"Website\">      \r\n                <span class=\"ui-inputgroup-addon\"><p-radioButton></p-radioButton></span> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"inputgroupdemo.html\">\r\n<a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputgroup\" class=\"btn-viewsource\" target=\"_blank\">\r\n    <i class=\"fa fa-github\"></i>\r\n    <span>View on GitHub</span>\r\n</a>\r\n\r\n    <pre>\r\n    <code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Addons&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"pi pi-user\" style=\"line-height: 1.25;\"&gt;&lt;/i&gt;&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Username\"&gt;         \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;$&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt;   \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;.00&lt;/span&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n            \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;www&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Website\"&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n    \r\n&lt;h3&gt;Multiple Addons&lt;/h3&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"pi pi-tags\" style=\"line-height: 1.25;\"&gt;&lt;/i&gt;&lt;/span&gt;  \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"pi pi-shopping-cart\" style=\"line-height: 1.25;\"&gt;&lt;/i&gt;&lt;/span&gt;   \r\n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt; \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;$&lt;/span&gt;  \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;.00&lt;/span&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Button Addons&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;button pButton type=\"button\" label=\"Search\"&gt;&lt;/button&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Keyword\"&gt;         \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Keyword\"&gt;   \r\n            &lt;button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-warn\"&gt;&lt;/button&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n            \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"&gt;&lt;/button&gt;    \r\n            &lt;input type=\"text\" pInputText placeholder=\"Vote\"&gt;   \r\n            &lt;button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"&gt;&lt;/button&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Checkbox and RadioButton&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-checkbox&gt;&lt;/p-checkbox&gt;&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Username\"&gt;         \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt;   \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-radioButton&gt;&lt;/p-radioButton&gt;&lt;/span&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n            \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-checkbox&gt;&lt;/p-checkbox&gt;&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Website\"&gt;      \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-radioButton&gt;&lt;/p-radioButton&gt;&lt;/span&gt; \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n        \r\n        <p-tabPanel header=\"inputgroupdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class InputGroupDemo &#123;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InputGroupDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupDemoRoutingModule", function() { return InputGroupDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inputgroupdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputgroupdemo */ "./src/app/showcase/components/inputgroup/inputgroupdemo.ts");




let InputGroupDemoRoutingModule = class InputGroupDemoRoutingModule {
};
InputGroupDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _inputgroupdemo__WEBPACK_IMPORTED_MODULE_3__["InputGroupDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], InputGroupDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/inputgroup/inputgroupdemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/inputgroup/inputgroupdemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: InputGroupDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupDemoModule", function() { return InputGroupDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inputgroupdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputgroupdemo */ "./src/app/showcase/components/inputgroup/inputgroupdemo.ts");
/* harmony import */ var _inputgroupdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputgroupdemo-routing.module */ "./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/checkbox/checkbox */ "./src/app/components/checkbox/checkbox.ts");
/* harmony import */ var _components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/radiobutton/radiobutton */ "./src/app/components/radiobutton/radiobutton.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");












let InputGroupDemoModule = class InputGroupDemoModule {
};
InputGroupDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inputgroupdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputGroupDemoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            _components_button_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"],
            _components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_11__["CodeHighlighterModule"]
        ],
        declarations: [
            _inputgroupdemo__WEBPACK_IMPORTED_MODULE_4__["InputGroupDemo"]
        ]
    })
], InputGroupDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/inputgroup/inputgroupdemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/inputgroup/inputgroupdemo.ts ***!
  \******************************************************************/
/*! exports provided: InputGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupDemo", function() { return InputGroupDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputGroupDemo = class InputGroupDemo {
};
InputGroupDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./inputgroupdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/inputgroup/inputgroupdemo.html")
    })
], InputGroupDemo);



/***/ })

}]);
//# sourceMappingURL=components-inputgroup-inputgroupdemo-module-es2015.js.map