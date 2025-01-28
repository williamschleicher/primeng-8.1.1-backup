(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-icons-icons-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/icons/icons.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/icons/icons.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Icons</span>\r\n        <span>PrimeNG components internally use <a href=\"https://github.com/primefaces/primeicons\">PrimeIcons</a> library, the official icons suite from <a href=\"https://www.primetek.com.tr\">PrimeTek</a>.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation icons-documentation\">\r\n    <h3 style=\"margin-top:0px\">Download</h3>\r\n    <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install primeicons --save\r\n</code>\r\n</pre>\r\n\r\n    <h3>Getting Started</h3>\r\n    <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>. A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;i class=\"pi pi-check\"&gt;&lt;/i&gt;\r\n&lt;i class=\"pi pi-times\"&gt;&lt;/i&gt;\r\n</code>\r\n</pre>\r\n\r\n<i class=\"pi pi-check\"></i>\r\n<i class=\"pi pi-times\"></i>\r\n\r\n    <h3>Size</h3>\r\n    <p>Size of the icons can easily be changed using font-size property.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;i class=\"pi pi-check\"&gt;&lt;/i&gt;\r\n</code>\r\n</pre>\r\n    <i class=\"pi pi-check\"></i>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;i class=\"pi pi-check\" style=\"font-size: 3em\"&gt;&lt;/i&gt;\r\n</code>\r\n</pre>\r\n<i class=\"pi pi-check\" style=\"font-size: 3em\"></i>\r\n\r\n    <h3>Spinning Animation</h3>\r\n    <p>Special pi-spin class applies infinite rotate to an icon.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;i class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"&gt;&lt;/i&gt;\r\n</code>\r\n</pre>\r\n<i class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"></i>\r\n\r\n    <h3>List of Icons</h3>\r\n    <p>Here is the current list of PrimeIcons, more icons will be added periodically. You may also <a href=\"https://github.com/primefaces/primeicons/issues\">request new icons</a> at the issue tracker.</p>\r\n    <div>\r\n        <input class=\"icon-filter\" (input)=\"onFilter($event)\" pInputText [ngStyle]=\"{width: '100%', padding: '1em', margin: '16px 0 26px 0'}\" placeholder=\"Search an icon\"> \r\n    </div>\r\n\r\n    <div class=\"ui-g icons-list\">\r\n        <div class=\"ui-g-12 ui-md-2\" *ngFor=\"let icon of filteredIcons\">\r\n            <i class=\"pi pi-{{icon.properties.name}}\"></i>\r\n            <div>pi-{{icon.properties.name}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/codehighlighter/codehighlighter.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/codehighlighter/codehighlighter.ts ***!
  \***************************************************************/
/*! exports provided: CodeHighlighter, CodeHighlighterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function() { return CodeHighlighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function() { return CodeHighlighterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CodeHighlighter = /** @class */ (function () {
    function CodeHighlighter(el) {
        this.el = el;
    }
    CodeHighlighter.prototype.ngAfterViewInit = function () {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
        }
    };
    CodeHighlighter.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    CodeHighlighter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[pCode]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CodeHighlighter);
    return CodeHighlighter;
}());

var CodeHighlighterModule = /** @class */ (function () {
    function CodeHighlighterModule() {
    }
    CodeHighlighterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [CodeHighlighter],
            declarations: [CodeHighlighter]
        })
    ], CodeHighlighterModule);
    return CodeHighlighterModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/icons/icons-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/icons/icons-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: IconsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsRoutingModule", function() { return IconsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.component */ "./src/app/showcase/components/icons/icons.component.ts");




var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/icons/icons.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/icons/icons.component.ts ***!
  \**************************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_iconservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/iconservice */ "./src/app/showcase/service/iconservice.ts");



var IconsComponent = /** @class */ (function () {
    function IconsComponent(iconService) {
        this.iconService = iconService;
    }
    IconsComponent.prototype.getIcons = function () {
        var _this = this;
        this.iconService.getIcons().subscribe(function (data) {
            _this.icons = data;
            _this.filteredIcons = data;
        });
    };
    IconsComponent.prototype.getIcon = function (id) {
        this.selectedIcon = this.iconService.getIcon(id);
    };
    IconsComponent.prototype.onFilter = function (event) {
        var _this = this;
        this.searchText = event.target.value;
        if (!this.icons)
            this.filteredIcons = [];
        if (!this.searchText)
            this.filteredIcons = this.icons;
        this.searchText = this.searchText;
        this.filteredIcons = this.icons.filter(function (it) {
            return it.icon.tags[0].includes(_this.searchText);
        });
    };
    IconsComponent.prototype.unselectIcon = function () {
        this.selectedIcon = null;
    };
    IconsComponent.prototype.ngOnInit = function () {
        this.getIcons();
    };
    IconsComponent.ctorParameters = function () { return [
        { type: _service_iconservice__WEBPACK_IMPORTED_MODULE_2__["IconService"] }
    ]; };
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/icons/icons.component.html"),
            styles: ["\n        .icons-list {\n            text-align: center;\n        }\n\n        .icons-list i {\n            font-size: 2em;\n        }\n\n        .icons-list .ui-md-2 {\n            padding-bottom: 2em;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_iconservice__WEBPACK_IMPORTED_MODULE_2__["IconService"]])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/icons/icons.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/showcase/components/icons/icons.module.ts ***!
  \***********************************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.component */ "./src/app/showcase/components/icons/icons.component.ts");
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons-routing.module */ "./src/app/showcase/components/icons/icons-routing.module.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");







var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"],
                _icons_routing_module__WEBPACK_IMPORTED_MODULE_5__["IconsRoutingModule"]
            ],
            declarations: [
                _icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]
            ]
        })
    ], IconsModule);
    return IconsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-icons-icons-module-es5.js.map