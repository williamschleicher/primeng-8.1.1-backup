(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-orderlist-orderlistdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/orderlist/orderlistdemo.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/orderlist/orderlistdemo.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">OrderList</span>\r\n        <span>OrderList is used to sort a collection. When the position of an item changes, the backend array is updated as well.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    \r\n    <p-orderList [value]=\"cars\" [listStyle]=\"{'height':'350px'}\" header=\"Cars\" filterBy=\"brand\" filterPlaceholder=\"Filter by brand\"\r\n        dragdrop=\"true\">\r\n        <ng-template let-car pTemplate=\"item\">\r\n            <div class=\"ui-helper-clearfix\">\r\n                <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\">\r\n                <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\r\n            </div>\r\n        </ng-template>\r\n    </p-orderList>\r\n    \r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;OrderListModule&#125; from 'primeng/orderlist';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>OrderList requires an array as its value and a ng-template for its content where each item in the array\r\n                 can be accessed inside the ng-template using a local ng-template variable.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-orderList [value]=\"cars\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\"&gt;\r\n            &lt;div style=\"font-size:14px;float:right;margin:15px 5px 0 0\"&gt;{{car.brand}} - {{car.year}} - {{car.color}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-orderList&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyComponent &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.cars = //initialize cars\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Multiple Selection</h3>\r\n            <p>Multiple items can either be selected using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\r\n            devices metaKeySelection is turned off automatically.</p>\r\n\r\n            <h3>Selection Binding</h3>\r\n            <p>The optional <b>selection</b> property is provided in case you'd like to a two-way binding to the selections.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-orderList [value]=\"cars\" [(selection)]=\"selectedCars\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\"&gt;\r\n            &lt;div style=\"font-size:14px;float:right;margin:15px 5px 0 0\"&gt;{{car.brand}} - {{car.year}} - {{car.color}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-orderList&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyComponent &#123;\r\n\r\n    cars: Car[];\r\n\r\n    selectedCars: Car[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.cars = //initialize cars\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Filtering</h3>\r\n            <p>Items can be filtered using an input field by enabling the filterBy property that specifies the fields to use in filtering.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-orderList [value]=\"cars\" filterBy=\"brand\"&gt;&lt;/p-orderList&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Multiple fields can be defines using a comma separates list.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-orderList [value]=\"cars\" filterBy=\"brand,color,address.city\"&gt;&lt;/p-orderList&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>DragDrop</h3>\r\n            <p>Items can be reordered using drag and drop by enabling dragdrop property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-orderList [value]=\"cars\" dragdrop=\"true\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Buttons Location</h3>\r\n            <p>Buttons that control the ordering are displayed at the left side of the list by default, controlsPosition property enables customizing the location. Currently\r\n                right is the available alternative.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-orderList [value]=\"cars\" controlsPosition=\"right\"&gt;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to reorder.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selection</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to bind the selections.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text for the caption</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>listStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the list element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterBy</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>When specified displays an input field to filter the items on keyup and decides which fields to search against.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterMatchMode</td>\r\n                            <td>string</td>\r\n                            <td>contains</td>\r\n                            <td>Defines how the items are filtered, valid values are \"contains\" (default) \"startsWith\", \"endsWith\", \"equals\", \"notEquals\", \"in\", \"lt\", \"lte\", \"gt\" and \"gte\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>metaKeySelection</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\r\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dragdrop</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to enable dragdrop based reordering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterPlaceHolder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Placeholder text on filter input.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>trackBy</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>controlsPosition</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Defines the location of the buttons with respect to the list, valid values are \"left\" or \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ariaFilterLabel</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines a string that labels the filter input.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onReorder</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Callback to invoke when list is reordered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSelectionChange</td>\r\n                            <td>originalEvent: browser event<br/>\r\n                                value: Current selection</td>\r\n                            <td>Callback to invoke when selection changes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFilterEvent</td>\r\n                            <td>originalEvent: browser event<br/>\r\n                                value: Current filter values</td>\r\n                            <td>Callback to invoke when filtering occurs.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-orderlist</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-orderlist-list</td>\r\n                            <td>List container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-orderlist-item</td>\r\n                            <td>An item in the list.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/orderlist\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-orderList [value]=\"cars\" [listStyle]=\"&#123;'height':'250px'&#125;\" header=\"Cars\" \r\n    filter=\"filter\" filterBy=\"brand\" filterPlaceholder=\"Filter by brand\" dragdrop=\"true\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\"&gt;\r\n            &lt;div style=\"font-size:14px;float:right;margin:15px 5px 0 0\"&gt;{{car.brand}} - {{car.year}} - {{car.color}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-orderList&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class OrderListDemo &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/utils/filterutils.ts":
/*!*************************************************!*\
  !*** ./src/app/components/utils/filterutils.ts ***!
  \*************************************************/
/*! exports provided: FilterUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtils", function() { return FilterUtils; });
/* harmony import */ var _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/objectutils */ "./src/app/components/utils/objectutils.ts");

var FilterUtils = /** @class */ (function () {
    function FilterUtils() {
    }
    FilterUtils.filter = function (value, fields, filterValue, filterMatchMode) {
        var filteredItems = [];
        var filterText = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filterValue).toLowerCase();
        if (value) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                for (var _a = 0, fields_1 = fields; _a < fields_1.length; _a++) {
                    var field = fields_1[_a];
                    var fieldValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(String(_utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].resolveFieldData(item, field))).toLowerCase();
                    if (FilterUtils[filterMatchMode](fieldValue, filterText)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }
        return filteredItems;
    };
    FilterUtils.startsWith = function (value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        var filterValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
        var stringValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase();
        return stringValue.slice(0, filterValue.length) === filterValue;
    };
    FilterUtils.contains = function (value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        var filterValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
        var stringValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase();
        return stringValue.indexOf(filterValue) !== -1;
    };
    FilterUtils.endsWith = function (value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        var filterValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
        var stringValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase();
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    };
    FilterUtils.equals = function (value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase() == _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
    };
    FilterUtils.notEquals = function (value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }
        if (value === undefined || value === null) {
            return true;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
        else
            return _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase() != _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
    };
    FilterUtils.in = function (value, filter) {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        for (var i = 0; i < filter.length; i++) {
            if (filter[i] === value || (value.getTime && filter[i].getTime && value.getTime() === filter[i].getTime())) {
                return true;
            }
        }
        return false;
    };
    FilterUtils.lt = function (value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
        else
            return value < filter;
    };
    FilterUtils.lte = function (value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
        else
            return value <= filter;
    };
    FilterUtils.gt = function (value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
        else
            return value > filter;
    };
    FilterUtils.gte = function (value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
        else
            return value >= filter;
    };
    return FilterUtils;
}());



/***/ }),

/***/ "./src/app/showcase/components/orderlist/orderlistdemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/orderlist/orderlistdemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderListDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListDemoRoutingModule", function() { return OrderListDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orderlistdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderlistdemo */ "./src/app/showcase/components/orderlist/orderlistdemo.ts");




var OrderListDemoRoutingModule = /** @class */ (function () {
    function OrderListDemoRoutingModule() {
    }
    OrderListDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _orderlistdemo__WEBPACK_IMPORTED_MODULE_3__["OrderListDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], OrderListDemoRoutingModule);
    return OrderListDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/orderlist/orderlistdemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/orderlist/orderlistdemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: OrderListDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListDemoModule", function() { return OrderListDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orderlistdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderlistdemo */ "./src/app/showcase/components/orderlist/orderlistdemo.ts");
/* harmony import */ var _orderlistdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderlistdemo-routing.module */ "./src/app/showcase/components/orderlist/orderlistdemo-routing.module.ts");
/* harmony import */ var _components_orderlist_orderlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/orderlist/orderlist */ "./src/app/components/orderlist/orderlist.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");








var OrderListDemoModule = /** @class */ (function () {
    function OrderListDemoModule() {
    }
    OrderListDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _orderlistdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderListDemoRoutingModule"],
                _components_orderlist_orderlist__WEBPACK_IMPORTED_MODULE_5__["OrderListModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _orderlistdemo__WEBPACK_IMPORTED_MODULE_3__["OrderListDemo"]
            ]
        })
    ], OrderListDemoModule);
    return OrderListDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/orderlist/orderlistdemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/orderlist/orderlistdemo.ts ***!
  \****************************************************************/
/*! exports provided: OrderListDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListDemo", function() { return OrderListDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");



var OrderListDemo = /** @class */ (function () {
    function OrderListDemo(carService) {
        this.carService = carService;
    }
    OrderListDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    OrderListDemo.ctorParameters = function () { return [
        { type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"] }
    ]; };
    OrderListDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./orderlistdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/orderlist/orderlistdemo.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])
    ], OrderListDemo);
    return OrderListDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-orderlist-orderlistdemo-module-es5.js.map