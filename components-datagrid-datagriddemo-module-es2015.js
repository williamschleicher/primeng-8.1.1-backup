(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-datagrid-datagriddemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/datagrid/datagriddemo.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/datagrid/datagriddemo.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataGrid</span>\r\n        <span>DataGrid is deprecated, use <a href=\"#\" [routerLink]=\"['/dataview']\">DataView</a> instead.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataGrid [value]=\"cars\" [paginator]=\"true\" [rows]=\"20\">\r\n        <p-header>\r\n            List of Cars\r\n        </p-header>\r\n        <ng-template let-car pTemplate=\"item\">\r\n            <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\r\n                <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\">\r\n                    <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\r\n                    <hr class=\"ui-widget-content\" style=\"border-top:0\">\r\n                    <i class=\"pi pi-search\" (click)=\"selectCar(car)\" style=\"cursor:pointer\"></i>\r\n                </p-panel>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataGrid>\r\n\r\n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [minY]=\"70\" [modal]=\"true\" [style]=\"{width: '225px'}\" (onAfterHide)=\"onDialogHide()\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\" style=\"font-size:16px;text-align:center;padding:20px\">\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-12\" style=\"text-align:center\"><img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\"></div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\">Vin: </div>\r\n                <div class=\"ui-grid-col-8\">{{selectedCar.vin}}</div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\">Year: </div>\r\n                <div class=\"ui-grid-col-8\">{{selectedCar.year}}</div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\">Brand: </div>\r\n                <div class=\"ui-grid-col-8\">{{selectedCar.brand}}</div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\">Color: </div>\r\n                <div class=\"ui-grid-col-8\">{{selectedCar.color}}</div>\r\n            </div>\r\n        </div>\r\n    </p-dialog>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DataGridModule&#125; from 'primeng/datagrid';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>DataGrid requires a collection of items as its value and a ng-template to display each item. ng-template should contain a div element as a wrapper with <a [routerLink]=\"['/grid']\">Grid CSS</a> style class of your choice to\r\n                define the grid layout.\r\n            </p><p>Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the datagrid. Cars are loaded by a CarService that connects to a server to fetch the cars with a Promise.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport interface Car &#123;\r\n    vin;\r\n    year;\r\n    brand;\r\n    color;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Injectable&#125; from 'angular2/core';\r\nimport &#123;Http, Response&#125; from 'angular2/http';\r\nimport &#123;Car&#125; from '../domain/car';\r\n\r\n@Injectable()\r\nexport class CarService &#123;\r\n\r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getCarsLarge() &#123;\r\n        return this.http.get('/showcase/resources/data/cars-large.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;Car[]&gt; res.json().data)\r\n                    .then(data => &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Here is a sample DataGrid that displays a list of cars where each row contains 3 cars.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataGridDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataGrid [value]=\"cars\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            Car content\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataGrid&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Index of the row is available at the ng-template.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataGrid [value]=\"cars\"&gt;\r\n    &lt;ng-template let-car let-i=\"index\" pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            Car content for {{i}}\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataGrid&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Change Detection</h3>\r\n            <p>DataGrid either uses setter based checking or ngDoCheck to realize if the underlying data has changed to update the UI. This is configured using the immutable\r\n                property, when enabled (default) setter based detection is utilized so your data changes such as adding or removing a record\r\n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change.\r\n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\r\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\r\n                both methods can be used depending on your preference.\r\n            </p>\r\n\r\n            <h3>Facets</h3>\r\n            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataGrid [value]=\"cars\"&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            Car content\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataGrid&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Paginator</h3>\r\n            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number\r\n                of page links to display.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataGrid [value]=\"cars\" [paginator]=\"true\" [rows]=\"9\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            Car content\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataGrid&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n             onLazyLoad callback everytime paging happens. To implement lazy loading,\r\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object\r\n            that contains information about what to load. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator\r\n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataGrid [value]=\"cars\" [paginator]=\"true\" [rows]=\"9\" [lazy]=\"true\" (onLazyLoad)=\"loadData($event)\" [totalRecords]=\"totalRecords\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n            Car content\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataGrid&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nloadData(event) &#123;\r\n    //event.first = First row offset\r\n    //event.rows = Number of rows per page\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Responsive</h3>\r\n            <p>DataGrid is responsive by default, when the screen gets smaller than a certain value, items are displayed as stacked.</p>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rows</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of rows to display per page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginator</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specified as true, enables the pagination.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>totalRecords</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of total records, defaults to length of value when not defined.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pageLinks</td>\r\n                            <td>number</td>\r\n                            <td>5</td>\r\n                            <td>Number of page links to display in paginator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowsPerPageOptions</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Array of integer/object values to display inside rows per page dropdown of paginator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>alwaysShowPaginator</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show it even there is only one page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lazy</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorPosition</td>\r\n                            <td>string</td>\r\n                            <td>bottom</td>\r\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>emptyMessage</td>\r\n                            <td>string</td>\r\n                            <td>No records found.</td>\r\n                            <td>Text to display when there is no data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>trackBy</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>immutable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how the data should be manipulated.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorDropdownAppendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the paginator dropdown overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onLazyLoad</td>\r\n                            <td>event.first = First row offset <br>\r\n                                event.rows = Number of rows per page <br></td>\r\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onPage</td>\r\n                            <td>event.first: Index of first record in page<br>\r\n                                event.rows: Number of rows on the page</td>\r\n                            <td>Callback to invoke when pagination occurs.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-datagrid</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datagrid-header</td>\r\n                            <td>Header section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datagrid-footer</td>\r\n                            <td>Footer section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datagrid-content</td>\r\n                            <td>Container of items.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datagrid\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataGrid [value]=\"cars\" [paginator]=\"true\" [rows]=\"20\"&gt;\r\n    &lt;p-header&gt;\r\n        List of Cars\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\"&gt;\r\n            &lt;p-panel [header]=\"car.vin\" [style]=\"&#123;'text-align':'center'&#125;\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\"&gt;\r\n                &lt;div class=\"car-detail\"&gt;{{car.year}} - {{car.color}}&lt;/div&gt;\r\n                &lt;hr class=\"ui-widget-content\" style=\"border-top:0\"&gt;\r\n                &lt;i class=\"pi pi-search\" (click)=\"selectCar(car)\" style=\"cursor:pointer\"&gt;&lt;/i&gt;\r\n            &lt;/p-panel&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataGrid&gt;\r\n\r\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [style]=\"&#123;width: '225px'&#125;\"  (onAfterHide)=\"onDialogHide()\"&gt;\r\n    &lt;div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\" style=\"font-size:16px;text-align:center;padding:20px\"&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-12\" style=\"text-align:center\"&gt;&lt;img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\"&gt;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;Vin: &lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.vin}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;Year: &lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.year}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;Brand: &lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.brand}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;Color: &lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.color}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataGridDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    selectedCar: Car;\r\n\r\n    displayDialog: boolean;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n    selectCar(car: Car) &#123;\r\n        this.selectedCar = car;\r\n        this.displayDialog = true;\r\n    &#125;\r\n\r\n    onDialogHide() &#123;\r\n        this.selectedCar = null;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datagrid/datagriddemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/datagrid/datagriddemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DataGridDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridDemoRoutingModule", function() { return DataGridDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _datagriddemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datagriddemo */ "./src/app/showcase/components/datagrid/datagriddemo.ts");




let DataGridDemoRoutingModule = class DataGridDemoRoutingModule {
};
DataGridDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _datagriddemo__WEBPACK_IMPORTED_MODULE_3__["DataGridDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], DataGridDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/datagrid/datagriddemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/datagrid/datagriddemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: DataGridDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridDemoModule", function() { return DataGridDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _datagriddemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datagriddemo */ "./src/app/showcase/components/datagrid/datagriddemo.ts");
/* harmony import */ var _datagriddemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datagriddemo-routing.module */ "./src/app/showcase/components/datagrid/datagriddemo-routing.module.ts");
/* harmony import */ var _components_datagrid_datagrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/datagrid/datagrid */ "./src/app/components/datagrid/datagrid.ts");
/* harmony import */ var _components_panel_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel/panel */ "./src/app/components/panel/panel.ts");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/dialog/dialog */ "./src/app/components/dialog/dialog.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");










let DataGridDemoModule = class DataGridDemoModule {
};
DataGridDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _datagriddemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["DataGridDemoRoutingModule"],
            _components_datagrid_datagrid__WEBPACK_IMPORTED_MODULE_5__["DataGridModule"],
            _components_panel_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
            _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _datagriddemo__WEBPACK_IMPORTED_MODULE_3__["DataGridDemo"]
        ]
    })
], DataGridDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/datagrid/datagriddemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/datagrid/datagriddemo.ts ***!
  \**************************************************************/
/*! exports provided: DataGridDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridDemo", function() { return DataGridDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");



let DataGridDemo = class DataGridDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsLarge().then(cars => this.cars = cars);
    }
    selectCar(car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }
    onDialogHide() {
        this.selectedCar = null;
    }
};
DataGridDemo.ctorParameters = () => [
    { type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"] }
];
DataGridDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./datagriddemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/datagrid/datagriddemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])
], DataGridDemo);



/***/ })

}]);
//# sourceMappingURL=components-datagrid-datagriddemo-module-es2015.js.map