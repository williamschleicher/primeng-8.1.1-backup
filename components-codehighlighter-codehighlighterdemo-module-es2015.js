(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-codehighlighter-codehighlighterdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/codehighlighter/codehighlighterdemo.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/codehighlighter/codehighlighterdemo.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">CodeHighlighter</span>\r\n        <span>CodeHighlighter is an attribute directive to highlight code blocks using PrismJS</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">CSS</h3>\r\n<pre>\r\n<code class=\"language-css\" pCode ngNonBindable>\r\n.ui-table table &#123;\r\n    border-collapse:collapse;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n&#125;\r\n</code>\r\n</pre>\r\n    \r\n    <h3>HTML</h3>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div id=\"pm\" style=\"width:300px\"&gt;\r\n&lt;div&gt;\r\n&lt;div&gt;&lt;a data-icon=\"fa-file-o\"&gt;File&lt;/a&gt;&lt;/div&gt;\r\n&lt;div&gt;\r\n    &lt;ul&gt;\r\n        &lt;li&gt;&lt;a data-icon=\"fa-plus\"&gt;New&lt;/a&gt;\r\n            &lt;ul&gt;\r\n                &lt;li&gt;&lt;a&gt;Project&lt;/a&gt;&lt;/li&gt;\r\n                &lt;li&gt;&lt;a&gt;Other&lt;/a&gt;&lt;/li&gt;\r\n            &lt;/ul&gt;\r\n        &lt;/li&gt;\r\n        &lt;li&gt;&lt;a&gt;Open&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a&gt;Quit&lt;/a&gt;&lt;/li&gt;\r\n    &lt;/ul&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n    \r\n    <h3>Javascript</h3>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\nvar map;\r\n    function initMap() &#123;\r\n        map = new google.maps.Map(document.getElementById('map'), &#123;\r\n        center: &#123;lat: -34.397, lng: 150.644&#125;,\r\n        zoom: 8\r\n    &#125;);\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n    <h3>Typescript</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Directive, ElementRef, OnInit&#125; from '@angular/core';\r\n\r\ndeclare var Prism: any;\r\n\r\n@Directive(&#123;\r\n    selector: '[pCode]'\r\n&#125;)\r\nexport class CodeHighlighter implements OnInit &#123;\r\n\r\n    constructor(private el: ElementRef) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        Prism.highlightElement(this.el.nativeElement);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                <h3>PrismJS</h3>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install prismjs --save\r\n</code>\r\n</pre>\r\n\r\n                <p>Include the javascript and a theme css from Prism. Example for angular.json configuration of a CLI project would be as follows. Refer to the PrismJS <a href=\"https://prismjs.com/#basic-usage\">documentation</a> for the list of available languages.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n\"styles\": [\r\n    \"node_modules/prismjs/themes/prism.css\",\r\n    //...\r\n],\r\n\"scripts\": [\r\n    \"node_modules/prismjs/prism.js\",\r\n    //...\r\n]\r\n</code>\r\n</pre>\r\n\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;CodeHighlighterModule&#125; from 'primeng/codehighlighter';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>CodeHighlighter is applied to a code element with [pCode] directive. The &lt;code&gt; should have\r\n            a style class having language- prefix to specify the language to highlight. See Prismjs docs for the list of available languages.\r\n            An example block with css code would be as follows.</p>\r\n            \r\n            <p> It is important to note that in order to use any of the the non-default languages ( markup, css, clike and javascript) you \r\n                add an import statement for the specific language, for most in the app module.</p>\r\n            \r\n            <h3>Language Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n/* Import the language you need to highlight */\r\nimport &#x27;prismjs/components/prism-sql.js&#x27;;\r\n</code>\r\n</pre> \r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;pre&gt;\r\n&lt;code class=\"language-css\" pCode&gt;\r\n.ui-table table &#123;\r\n    border-collapse:collapse;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n&#125;\r\n&lt;/code&gt;\r\n&lt;/pre&gt;\r\n</code>\r\n</pre>                        \r\n            <h3>Dependencies</h3>\r\n            <p>Prismjs</p>\r\n        </p-tabPanel>\r\n        \r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/codehighlighter\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n        </p-tabPanel>\r\n     </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CodeHighlighterDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterDemoRoutingModule", function() { return CodeHighlighterDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _codehighlighterdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codehighlighterdemo */ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.ts");




let CodeHighlighterDemoRoutingModule = class CodeHighlighterDemoRoutingModule {
};
CodeHighlighterDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _codehighlighterdemo__WEBPACK_IMPORTED_MODULE_3__["CodeHighlighterDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], CodeHighlighterDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/codehighlighter/codehighlighterdemo.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CodeHighlighterDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterDemoModule", function() { return CodeHighlighterDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _codehighlighterdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codehighlighterdemo */ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.ts");
/* harmony import */ var _codehighlighterdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codehighlighterdemo-routing.module */ "./src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");







let CodeHighlighterDemoModule = class CodeHighlighterDemoModule {
};
CodeHighlighterDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _codehighlighterdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["CodeHighlighterDemoRoutingModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_5__["CodeHighlighterModule"]
        ],
        declarations: [
            _codehighlighterdemo__WEBPACK_IMPORTED_MODULE_3__["CodeHighlighterDemo"]
        ]
    })
], CodeHighlighterDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/codehighlighter/codehighlighterdemo.ts ***!
  \****************************************************************************/
/*! exports provided: CodeHighlighterDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterDemo", function() { return CodeHighlighterDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CodeHighlighterDemo = class CodeHighlighterDemo {
};
CodeHighlighterDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./codehighlighterdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/codehighlighter/codehighlighterdemo.html")
    })
], CodeHighlighterDemo);



/***/ })

}]);
//# sourceMappingURL=components-codehighlighter-codehighlighterdemo-module-es2015.js.map