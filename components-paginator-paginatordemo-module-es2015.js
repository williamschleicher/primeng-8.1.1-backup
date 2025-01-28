(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-paginator-paginatordemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/paginator/paginatordemo.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/paginator/paginatordemo.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Paginator</span>\r\n        <span>Paginator is a generic widget to display content in paged format.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation ui-fluid\">\r\n    <p-paginator [rows]=\"10\" [totalRecords]=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"></p-paginator>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;PaginatorModule&#125; from 'primeng/paginator';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Paginator is defined using p-paginator element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-paginator&gt;&lt;/p-paginator&gt;\r\n</code>\r\n</pre>\r\n            <h3>Rows and TotalRecords</h3>\r\n            <p>Rows and TotalRecords define how many pages the paginator should display. Paginator below will have 10 pages.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-paginator [rows]=\"10\" [totalRecords]=\"100\"&gt;&lt;/p-paginator&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>PageLinks</h3>\r\n            <p>PageLinks provide shortcuts to jump to a specific page, use pageLinkSize property to define the number of links to display. Default is 5.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-paginator [rows]=\"10\" [totalRecords]=\"100\" pageLinkSize=\"3\"&gt;&lt;/p-paginator&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Rows Per Page</h3>\r\n            <p>Number of items per page can be changed by the user using a dropdown if you define rowsPerPageOptions as an array of possible values.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-paginator [rows]=\"10\" [totalRecords]=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"&gt;&lt;/p-paginator&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>totalRecords</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Number of total records.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rows</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Data count to display per page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>first</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Zero-relative number of the first row to be displayed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pageLinkSize</td>\r\n                            <td>number</td>\r\n                            <td>5</td>\r\n                            <td>Number of page links to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowsPerPageOptions</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Array of integer/object values to display inside rows per page dropdown.\r\n                                A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,&#123;showAll:'All'&#125;] </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>alwaysShow</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show it even there is only one page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>templateLeft</td>\r\n                            <td>TemplateRef</td>\r\n                            <td>null</td>\r\n                            <td>Template instance to inject into the left side of the paginator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>templateRight</td>\r\n                            <td>TemplateRef</td>\r\n                            <td>null</td>\r\n                            <td>Template instance to inject into the right side of the paginator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dropdownAppendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the dropdown overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dropdownScrollHeight</td>\r\n                            <td>string</td>\r\n                            <td>200px</td>\r\n                            <td>Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>currentPageReportTemplate</td>\r\n                            <td>string</td>\r\n                            <td>&#123;currentPage&#125; of &#123;totalPages&#125;</td>\r\n                            <td>Text to display the current page information.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showCurrentPageReport</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to display current page report.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onPageChange</td>\r\n                            <td>event.first: Index of first record <br>\r\n                                event.rows: Number of rows to display in new page <br>\r\n                                event.page: Index of the new page <br>\r\n                                event.pageCount: Total number of pages <br></td>\r\n                            <td>Callback to invoke when page changes, the event object contains information about the new state.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-paginator [rows]=\"10\" totalRecords=\"100\" (onPageChange)=\"paginate($event)\"&gt;&lt;/p-paginator&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyComponent &#123;\r\n\r\n    paginate(event) &#123;\r\n        //event.first = Index of the first record\r\n        //event.rows = Number of rows to display in new page\r\n        //event.page = Index of the new page\r\n        //event.pageCount = Total number of pages\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-paginator</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-paginator-first</td>\r\n                            <td>First page element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-paginator-prev</td>\r\n                            <td>Previous page element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-paginator-pages</td>\r\n                            <td>Container of page links.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-paginator-page</td>\r\n                            <td>A page link.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-paginator-next</td>\r\n                            <td>Next page element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-paginator-last</td>\r\n                            <td>Last page element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-paginator-rpp-options</td>\r\n                            <td>Rows per page dropdown.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/paginator\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-paginator [rows]=\"10\" [totalRecords]=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"&gt;&lt;/p-paginator&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/paginator/paginatordemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/paginator/paginatordemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PaginatorDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorDemoRoutingModule", function() { return PaginatorDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _paginatordemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginatordemo */ "./src/app/showcase/components/paginator/paginatordemo.ts");




let PaginatorDemoRoutingModule = class PaginatorDemoRoutingModule {
};
PaginatorDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _paginatordemo__WEBPACK_IMPORTED_MODULE_3__["PaginatorDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], PaginatorDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/paginator/paginatordemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/paginator/paginatordemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaginatorDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorDemoModule", function() { return PaginatorDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _paginatordemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginatordemo */ "./src/app/showcase/components/paginator/paginatordemo.ts");
/* harmony import */ var _paginatordemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginatordemo-routing.module */ "./src/app/showcase/components/paginator/paginatordemo-routing.module.ts");
/* harmony import */ var _components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/paginator/paginator */ "./src/app/components/paginator/paginator.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");








let PaginatorDemoModule = class PaginatorDemoModule {
};
PaginatorDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _paginatordemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["PaginatorDemoRoutingModule"],
            _components_paginator_paginator__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
        ],
        declarations: [
            _paginatordemo__WEBPACK_IMPORTED_MODULE_3__["PaginatorDemo"]
        ]
    })
], PaginatorDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/paginator/paginatordemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/paginator/paginatordemo.ts ***!
  \****************************************************************/
/*! exports provided: PaginatorDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorDemo", function() { return PaginatorDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginatorDemo = class PaginatorDemo {
};
PaginatorDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./paginatordemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/paginator/paginatordemo.html")
    })
], PaginatorDemo);



/***/ })

}]);
//# sourceMappingURL=components-paginator-paginatordemo-module-es2015.js.map