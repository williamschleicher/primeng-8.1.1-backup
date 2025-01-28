(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-setup-setup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/setup/setup.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/setup/setup.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Get Started</span>\r\n        <span>PrimeNG is a rich set of open source native Angular UI components.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <h3 style=\"margin-top:0px\">Download</h3>\r\n    <p>PrimeNG is available at npm, if you have an existing application run the following command to download it to your project.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install primeng --save\r\nnpm install primeicons --save\r\n</code>\r\n</pre>\r\n\r\n    <h3>Load Configuration</h3>\r\n    <p>PrimeNG is distributed in commonjs format, a module manager of your choice is required and this guide provides samples for SystemJS, WebPack and Angular CLI.</p>\r\n\r\n    <h3>Import</h3>\r\n    <p>UI components are configured as modules, once PrimeNG is downloaded and configured, modules and apis can be imported from 'primeng/*' shorthand in your application code. Documentation\r\n        of each component states the import path.\r\n    </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;AccordionModule&#125; from 'primeng/accordion';     //accordion and accordion tab\r\nimport &#123;MenuItem&#125; from 'primeng/api';                 //api\r\n</code>\r\n</pre>\r\n\r\n    <h3>Dependencies</h3>\r\n    <p>Majority of PrimeNG components (95%) are native and there are some exceptions having 3rd party dependencies. In addition, components require <a href=\"https://www.npmjs.com/package/primeicons\">PrimeIcons</a> for icons.</p>\r\n\r\n    <p>The css dependencies are as follows, Prime Icons, theme of your choice and structural css of components.</p>\r\n\r\n<pre>\r\n<code class=\"language-html\" pCode ngNonBindable>\r\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeicons/primeicons.css\" /&gt;\r\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/themes/nova-light/theme.css\" /&gt;\r\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/primeng.min.css\" /&gt;\r\n</code>\r\n</pre>\r\n    \r\n    <p>Here is the list of components with 3rd party dependencies.</p>\r\n\r\n    <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Component</th>\r\n                    <th>Dependency</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>Schedule</td>\r\n                    <td>FullCalendar 4.0.0-alpha.2</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Editor</td>\r\n                    <td>Quill Editor</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>GMap</td>\r\n                    <td>Google Maps</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Charts</td>\r\n                    <td>Charts.js 2.7.x</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Captcha</td>\r\n                    <td>Google Recaptcha</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <h3>Animations</h3>\r\n    <p>Various components utilize angular animations to improve the user experience, starting with Angular 4 animations have their own module so you need\r\n    to import <i>BrowserAnimationsModule</i> to your application. If you prefer to disable animations globally, import <i>NoopAnimationsModule</i> instead.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install @angular/animations --save\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;BrowserModule&#125; from '@angular/platform-browser';\r\nimport &#123;BrowserAnimationsModule&#125; from '@angular/platform-browser/animations';\r\n\r\n@NgModule(&#123;\r\n    imports: [\r\n        BrowserModule,\r\n        BrowserAnimationsModule,\r\n        //...\r\n    ],\r\n    //...\r\n&#125;)\r\nexport class YourAppModule &#123; &#125;\r\n</code>\r\n</pre>\r\n\r\n    <h3>Angular CLI Integration</h3>\r\n    <p>Angular CLI is the official CLI tool for Angular. We strongly suggest using Angular CLI when starting an Angular project.</p>\r\n\r\n    <h4>Dependencies</h4>\r\n    <p>Add PrimeNG and PrimeIcons as dependencies.</p>\r\n<pre>\r\n<code class=\"language-js\" pCode ngNonBindable>\r\n\"dependencies\": &#123;\r\n  //...\r\n  \"primeng\": \"^7.0.0\",\r\n  \"primeicons\": \"^1.0.0\"\r\n&#125;,\r\n</code>\r\n</pre>\r\n\r\n    <h4>Styles Configuration</h4>\r\n    <p>Configure required styles at the styles section, example below uses the Nova Light theme.</p>\r\n<pre>\r\n<code class=\"language-js\" pCode ngNonBindable>\r\n\"styles\": [\r\n  \"node_modules/primeicons/primeicons.css\",\r\n  \"node_modules/primeng/resources/themes/nova-light/theme.css\",\r\n  \"node_modules/primeng/resources/primeng.min.css\",\r\n  //...\r\n],\r\n</code>\r\n</pre>\r\n\r\n    <p>That is all, you may now import PrimeNG components, for a working example visit the <a href=\"https://github.com/primefaces/primeng-quickstart-cli\">PrimeNG CLI QuickStart</a> sample at GitHub.</p>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let CodeHighlighter = class CodeHighlighter {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
        }
    }
};
CodeHighlighter.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
CodeHighlighter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[pCode]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], CodeHighlighter);

let CodeHighlighterModule = class CodeHighlighterModule {
};
CodeHighlighterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [CodeHighlighter],
        declarations: [CodeHighlighter]
    })
], CodeHighlighterModule);



/***/ }),

/***/ "./src/app/showcase/components/setup/setup-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/setup/setup-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupRoutingModule", function() { return SetupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup.component */ "./src/app/showcase/components/setup/setup.component.ts");




let SetupRoutingModule = class SetupRoutingModule {
};
SetupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], SetupRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/setup/setup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/setup/setup.component.ts ***!
  \**************************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SetupComponent = class SetupComponent {
};
SetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./setup.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/setup/setup.component.html")
    })
], SetupComponent);



/***/ }),

/***/ "./src/app/showcase/components/setup/setup.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/showcase/components/setup/setup.module.ts ***!
  \***********************************************************/
/*! exports provided: SetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup.component */ "./src/app/showcase/components/setup/setup.component.ts");
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup-routing.module */ "./src/app/showcase/components/setup/setup-routing.module.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");






let SetupModule = class SetupModule {
};
SetupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_5__["CodeHighlighterModule"],
            _setup_routing_module__WEBPACK_IMPORTED_MODULE_4__["SetupRoutingModule"]
        ],
        declarations: [
            _setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"]
        ]
    })
], SetupModule);



/***/ })

}]);
//# sourceMappingURL=components-setup-setup-module-es2015.js.map