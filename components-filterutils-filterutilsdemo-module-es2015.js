(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-filterutils-filterutilsdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/filterutils/filterutilsdemo.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/filterutils/filterutilsdemo.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">FilterUtils</span>\r\n        <span>FilterUtils is a helper to filter collections against constraints. Examples below demonstrate use-cases with AutoComplete and DataTable.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation ui-fluid\">\r\n    <h3>Basic</h3>\r\n    <p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterWithContains($event)\" [size]=\"30\"\r\n    [minLength]=\"1\" placeholder=\"Hint: type 'a' or 'o'\" [dropdown]=\"true\" field=\"label\" [style]=\"{'width':'250px'}\">\r\n        <ng-template let-brand pTemplate=\"item\">\r\n            <div class=\"ui-helper-clearfix\">\r\n                <img src=\"assets/showcase/images/demo/car/{{brand.value}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\r\n                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand.value}}</div>\r\n            </div>\r\n        </ng-template>\r\n    </p-autoComplete>\r\n    \r\n    <h3>Custom</h3>\r\n    <p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n                    <input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                    <input *ngSwitchCase=\"'year'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                    <input *ngSwitchCase=\"'brand'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                    <input *ngSwitchCase=\"'color'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;FilterUtils&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>FilterUtils consists of static functions that implement various constraints.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nconst value = 'PrimeNG';\r\n\r\nFilterUtils.equals(value, 'NG');                            //false\r\nFilterUtils.equals(value, 8);                               //false\r\nFilterUtils.equals(value, new Date());                      //false\r\nFilterUtils.contains(value, 'NG');                          //true\r\nFilterUtils.startsWith(value, 'NG');                        //false\r\nFilterUtils.endsWith(value, 'NG');                          //true\r\nFilterUtils.lt(10, 20);                                     //true\r\nFilterUtils.gte(50, 20);                                    //true\r\nFilterUtils.in(value, ['PrimeFaces', 'PrimeNG']);           //true\r\n</code>\r\n</pre>\r\n\r\n            <h3>Custom Constraint</h3>\r\n            <p>FilterUtils can be extended by adding new constraints.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nFilterUtils['isPrimeNumber'] = (value): boolean => &#123;\r\n    for(var i = 2; i &lt; num; i++)\r\n        if(num % i === 0) return false;\r\n    return num > 1;\r\n&#125;\r\n\r\nFilterUtils['isPrimeNumber'](3);                      //true\r\nFilterUtils['isPrimeNumber'](5);                      //true\r\nFilterUtils['isPrimeNumber'](568985673);              //false\r\n</code>\r\n</pre>\r\n\r\n            <h3>FilterUtils API</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>startsWith</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value starts with the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contains</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value contains the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>endsWith</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value ends with the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>equals</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value equals the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>notEquals</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value does not equal the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>in</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter[]: An array of filter values</td>\r\n                            <td>Whether the value contains the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lt</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value is less than the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lte</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value is less than or equals to the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>gt</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value is greater than the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>gte</td>\r\n                            <td>value: Value to filter<br />\r\n                                filter: Filter value</td>\r\n                            <td>Whether the value is greater than or equals to the filter value</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filter</td>\r\n                            <td>value[]: An array of values to filter<br />\r\n                                fields[]: An array of properties in the value object<br />\r\n                                filterValue: Filter value<br />\r\n                                filterMatchMode: Constraint</td>\r\n                            <td>Whether the property values of the given value collection matches the filter.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>            \r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/menu\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;Basic&lt;/h3&gt;\r\n&lt;p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterWithContains($event)\" [size]=\"30\"\r\n[minLength]=\"1\" placeholder=\"Hint: type 'a' or 'o'\" [dropdown]=\"true\" field=\"label\" [style]=\"&#123;'width':'250px'&#125;\"&gt;\r\n    &lt;ng-template let-brand pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;brand.value&#125;&#125;.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/&gt;\r\n            &lt;div style=\"font-size:18px;float:right;margin:10px 10px 0 0\"&gt;&#123;&#123;brand.value&#125;&#125;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-autoComplete&gt;\r\n\r\n&lt;h3&gt;Custom&lt;/h3&gt;\r\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\"&gt;\r\n                &lt;input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\r\n                &lt;input *ngSwitchCase=\"'year'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\r\n                &lt;input *ngSwitchCase=\"'brand'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\r\n                &lt;input *ngSwitchCase=\"'color'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class FilterUtilsDemo &#123;\r\n\r\n    brands: any[] = [\r\n        &#123;label: 'Audi', value: 'Audi'&#125;,\r\n        &#123;label: 'BMW', value: 'BMW'&#125;,\r\n        &#123;label: 'Fiat', value: 'Fiat'&#125;,\r\n        &#123;label: 'Ford', value: 'Ford'&#125;,\r\n        &#123;label: 'Honda', value: 'Honda'&#125;,\r\n        &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\r\n        &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\r\n        &#123;label: 'Renault', value: 'Renault'&#125;,\r\n        &#123;label: 'VW', value: 'VW'&#125;,\r\n        &#123;label: 'Volvo', value: 'Volvo'&#125;\r\n    ];\r\n\r\n    filteredBrands: any[];\r\n\r\n    brand:any;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService:CarService) &#123;\r\n        FilterUtils['custom-equals'] = (value, filter): boolean => &#123;\r\n            if (filter === undefined || filter === null || filter.trim() === '') &#123;\r\n                return true;\r\n            &#125;\r\n    \r\n            if (value === undefined || value === null) &#123;\r\n                return false;\r\n            &#125;\r\n            \r\n            return value.toString() === filter.toString();\r\n        &#125;\r\n\r\n        this.cols = [\r\n            &#123; field: 'year', header: 'Year', filterMatchMode:'custom-equals' &#125;,\r\n            &#123; field: 'brand', header: 'Brand', filterMatchMode:'custom-equals' &#125;,\r\n            &#123; field: 'color', header: 'Color', filterMatchMode:'custom-equals' &#125;,\r\n            &#123; field: 'vin', header: 'Vin', filterMatchMode:'custom-equals' &#125;\r\n        ];\r\n\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n    filterWithContains(event) &#123;\r\n        this.filteredBrands = FilterUtils.filter(this.brands, ['value'], event.query, \"contains\");\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/filterutils/filterutils-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/filterutils/filterutils-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FilterUtilsDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtilsDemoRoutingModule", function() { return FilterUtilsDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _filterutilsdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterutilsdemo */ "./src/app/showcase/components/filterutils/filterutilsdemo.ts");




let FilterUtilsDemoRoutingModule = class FilterUtilsDemoRoutingModule {
};
FilterUtilsDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _filterutilsdemo__WEBPACK_IMPORTED_MODULE_3__["FilterUtilsDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], FilterUtilsDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/filterutils/filterutilsdemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/filterutils/filterutilsdemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: FilterUtilsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtilsDemoModule", function() { return FilterUtilsDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony import */ var _filterutilsdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filterutilsdemo */ "./src/app/showcase/components/filterutils/filterutilsdemo.ts");
/* harmony import */ var _filterutils_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filterutils-routing.module */ "./src/app/showcase/components/filterutils/filterutils-routing.module.ts");
/* harmony import */ var _components_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/autocomplete/autocomplete */ "./src/app/components/autocomplete/autocomplete.ts");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var src_app_components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");





;







let FilterUtilsDemoModule = class FilterUtilsDemoModule {
};
FilterUtilsDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _filterutils_routing_module__WEBPACK_IMPORTED_MODULE_8__["FilterUtilsDemoRoutingModule"],
            _components_button_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"],
            _components_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutoCompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_table_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
            src_app_components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"]
        ],
        declarations: [
            _filterutilsdemo__WEBPACK_IMPORTED_MODULE_7__["FilterUtilsDemo"]
        ]
    })
], FilterUtilsDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/filterutils/filterutilsdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/filterutils/filterutilsdemo.ts ***!
  \********************************************************************/
/*! exports provided: FilterUtilsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtilsDemo", function() { return FilterUtilsDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_utils_filterutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/utils/filterutils */ "./src/app/components/utils/filterutils.ts");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");




let FilterUtilsDemo = class FilterUtilsDemo {
    constructor(carService) {
        this.carService = carService;
        this.brands = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        _components_utils_filterutils__WEBPACK_IMPORTED_MODULE_2__["FilterUtils"]['custom-equals'] = (value, filter) => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            return value.toString() === filter.toString();
        };
        this.cols = [
            { field: 'year', header: 'Year', filterMatchMode: 'custom-equals' },
            { field: 'brand', header: 'Brand', filterMatchMode: 'custom-equals' },
            { field: 'color', header: 'Color', filterMatchMode: 'custom-equals' },
            { field: 'vin', header: 'Vin', filterMatchMode: 'custom-equals' }
        ];
        this.carService.getCarsMedium().then(cars => this.cars = cars);
    }
    filterWithContains(event) {
        this.filteredBrands = _components_utils_filterutils__WEBPACK_IMPORTED_MODULE_2__["FilterUtils"].filter(this.brands, ['value'], event.query, "contains");
    }
};
FilterUtilsDemo.ctorParameters = () => [
    { type: _service_carservice__WEBPACK_IMPORTED_MODULE_3__["CarService"] }
];
FilterUtilsDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./filterutilsdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/filterutils/filterutilsdemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_3__["CarService"]])
], FilterUtilsDemo);



/***/ })

}]);
//# sourceMappingURL=components-filterutils-filterutilsdemo-module-es2015.js.map