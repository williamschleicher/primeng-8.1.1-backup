(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-toolbar-toolbardemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/toolbar/toolbardemo.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/toolbar/toolbardemo.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Toolbar</span>\r\n        <span>Toolbar is a grouping component for buttons and other content.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toolbar>\r\n        <div class=\"ui-toolbar-group-left\">\r\n            <button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"></button>\r\n            <button pButton type=\"button\" label=\"Upload\" icon=\"pi pi-upload\" class=\"ui-button-success\"></button>\r\n                \r\n            <i class=\"ui-toolbar-separator pi pi-bars\" style=\"vertical-align: middle\"></i>\r\n            \r\n            <p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton>\r\n        </div>\r\n        \r\n        <div class=\"ui-toolbar-group-right\">\r\n            <button pButton type=\"button\" icon=\"pi pi-search\"></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-calendar\" class=\"ui-button-success\"></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"></button>\r\n        </div>\r\n   </p-toolbar>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ToolbarModule&#125; from 'primeng/toolbar';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Toolbar is a container component defined using p-toolbar element. Left aligned content is placed inside a div \r\n            having .ui-toolbar-group-left class and similarly .ui-toolbar-group-right for right alignment.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toolbar&gt;\r\n    &lt;div class=\"ui-toolbar-group-left\"&gt;\r\n        &lt;button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"&gt;&lt;/button&gt;\r\n        &lt;button pButton type=\"button\" label=\"Upload\" icon=\"pi pi-upload\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n            \r\n        &lt;i class=\"pi pi-bars\"&gt;&lt;/i&gt;\r\n        \r\n        &lt;p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-toolbar-group-right\"&gt;\r\n        &lt;button pButton type=\"button\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\r\n        &lt;button pButton type=\"button\" icon=\"pi pi-calendar\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n        &lt;button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n    &lt;/div&gt;\r\n&lt;/p-toolbar&gt;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-toolbar</td>\r\n                            <td>Main container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toolbar-group-left</td>\r\n                            <td>Left content container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toolbar-group-right</td>\r\n                            <td>Right content container.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/toolbar\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toolbar&gt;\r\n    &lt;div class=\"ui-toolbar-group-left\"&gt;\r\n        &lt;button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"&gt;&lt;/button&gt;\r\n        &lt;button pButton type=\"button\" label=\"Upload\" icon=\"pi pi-upload\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n            \r\n        &lt;i class=\"ui-toolbar-separator pi pi-bars\" style=\"vertical-align: middle\"&gt;&lt;/i&gt;\r\n        \r\n        &lt;p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-toolbar-group-right\"&gt;\r\n        &lt;button pButton type=\"button\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\r\n        &lt;button pButton type=\"button\" icon=\"pi pi-calendar\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n        &lt;button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n    &lt;/div&gt;\r\n&lt;/p-toolbar&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.ts":
/*!***********************************************!*\
  !*** ./src/app/components/toolbar/toolbar.ts ***!
  \***********************************************/
/*! exports provided: Toolbar, ToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarModule", function() { return ToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let Toolbar = class Toolbar {
    constructor(el) {
        this.el = el;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
};
Toolbar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Toolbar.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Toolbar.prototype, "styleClass", void 0);
Toolbar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-toolbar',
        template: `
        <div [ngClass]="'ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix'" [ngStyle]="style" [class]="styleClass">
            <ng-content></ng-content>
        </div>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], Toolbar);

let ToolbarModule = class ToolbarModule {
};
ToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [Toolbar],
        declarations: [Toolbar]
    })
], ToolbarModule);



/***/ }),

/***/ "./src/app/showcase/components/toolbar/toolbardemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/toolbar/toolbardemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ToolbarDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarDemoRoutingModule", function() { return ToolbarDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _toolbardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbardemo */ "./src/app/showcase/components/toolbar/toolbardemo.ts");




let ToolbarDemoRoutingModule = class ToolbarDemoRoutingModule {
};
ToolbarDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _toolbardemo__WEBPACK_IMPORTED_MODULE_3__["ToolbarDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ToolbarDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/toolbar/toolbardemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/toolbar/toolbardemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarDemoModule", function() { return ToolbarDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toolbardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbardemo */ "./src/app/showcase/components/toolbar/toolbardemo.ts");
/* harmony import */ var _toolbardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbardemo-routing.module */ "./src/app/showcase/components/toolbar/toolbardemo-routing.module.ts");
/* harmony import */ var _components_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/toolbar/toolbar */ "./src/app/components/toolbar/toolbar.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_splitbutton_splitbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/splitbutton/splitbutton */ "./src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");










let ToolbarDemoModule = class ToolbarDemoModule {
};
ToolbarDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _toolbardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ToolbarDemoRoutingModule"],
            _components_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"],
            _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _components_splitbutton_splitbutton__WEBPACK_IMPORTED_MODULE_7__["SplitButtonModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _toolbardemo__WEBPACK_IMPORTED_MODULE_3__["ToolbarDemo"]
        ]
    })
], ToolbarDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/toolbar/toolbardemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/toolbar/toolbardemo.ts ***!
  \************************************************************/
/*! exports provided: ToolbarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarDemo", function() { return ToolbarDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarDemo = class ToolbarDemo {
    ngOnInit() {
        this.items = [
            { label: 'Angular.io', icon: 'fa fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa fa-paint-brush', routerLink: ['/theming'] }
        ];
    }
};
ToolbarDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./toolbardemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/toolbar/toolbardemo.html"),
        styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n\n        :host ::ng-deep .ui-splitbutton {\n            margin-left: .25em;\n        }\n\n        :host ::ng-deep .ui-splitbutton button {\n            margin-right: 0;\n        }\n    "]
    })
], ToolbarDemo);



/***/ })

}]);
//# sourceMappingURL=components-toolbar-toolbardemo-module-es2015.js.map