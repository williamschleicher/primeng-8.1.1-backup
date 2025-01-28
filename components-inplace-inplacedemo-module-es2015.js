(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inplace-inplacedemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/inplace/inplacedemo.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/inplace/inplacedemo.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Inplace</span>\r\n        <span>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-inplace closable=\"closable\" [style]=\"{'min-height':'30px'}\">\r\n        <span pInplaceDisplay>\r\n            Click to Edit\r\n        </span>\r\n        <span pInplaceContent>\r\n            <input type=\"text\" value=\"PrimeNG\" pInputText>\r\n        </span>\r\n    </p-inplace>\r\n\r\n    <h3>Image</h3>\r\n    <p-inplace>\r\n        <span pInplaceDisplay>\r\n            <span class=\"fa fa-picture-o\"></span><span style=\"margin-left:8px\">View Picture</span>\r\n        </span>\r\n        <span pInplaceContent>\r\n            <img src=\"assets/showcase/images/demo/galleria/galleria5.jpg\" alt=\"Nature\">\r\n        </span>\r\n    </p-inplace>\r\n\r\n    <h3>Data</h3>\r\n    <p-inplace>\r\n        <span pInplaceDisplay>\r\n            <span class=\"fa fa-table\"></span><span style=\"margin-left:8px\">View Data</span>\r\n        </span>\r\n        <span pInplaceContent>\r\n            <p-table [value]=\"cars\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Vin</th>\r\n                        <th>Year</th>\r\n                        <th>Brand</th>\r\n                        <th>Color</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-car>\r\n                    <tr>\r\n                        <td>{{car.vin}}</td>\r\n                        <td>{{car.year}}</td>\r\n                        <td>{{car.brand}}</td>\r\n                        <td>{{car.color}}</td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n        </span>\r\n    </p-inplace>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;InplaceModule&#125; from 'primeng/inplace';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Inplace requires two child components having <i>pInplaceDisplay</i> and <i>pInplaceOutput</i> attributes to define the content of each state.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inplace&gt;\r\n    &lt;span pInplaceDisplay&gt;\r\n        Click to Edit\r\n    &lt;/span&gt;\r\n    &lt;span pInplaceContent&gt;\r\n        &lt;input type=\"text\" value=\"PrimeNG\" pInputText&gt;\r\n    &lt;/span&gt;\r\n&lt;/p-inplace&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>active</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the content is displayed or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a button to switch back to display mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onActivate</td>\r\n                            <td>event.originalEvent: Click event</td>\r\n                            <td>Activates the content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDeactivate</td>\r\n                            <td>event.originalEvent: Click event</td>\r\n                            <td>Deactivates the content.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>activate</td>\r\n                            <td>-</td>\r\n                            <td>Activates the content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>deactive</td>\r\n                            <td>-</td>\r\n                            <td>Deactivates the content.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-inplace</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-inplace-display</td>\r\n                            <td>Display container</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-inplace-content</td>\r\n                            <td>Content container</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inplace\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-inplace closable=\"closable\"&gt;\r\n    &lt;span pInplaceDisplay&gt;\r\n        Click to Edit\r\n    &lt;/span&gt;\r\n    &lt;span pInplaceContent&gt;\r\n        &lt;input type=\"text\" value=\"PrimeNG\" pInputText&gt;\r\n    &lt;/span&gt;\r\n&lt;/p-inplace&gt;\r\n\r\n&lt;h3&gt;Image&lt;/h3&gt;\r\n&lt;p-inplace&gt;\r\n    &lt;span pInplaceDisplay&gt;\r\n        &lt;span class=\"fa fa-picture-o\"&gt;&lt;/span&gt;&lt;span style=\"margin-left:8px\"&gt;View Picture&lt;/span&gt;\r\n    &lt;/span&gt;\r\n    &lt;span pInplaceContent&gt;\r\n        &lt;img src=\"assets/showcase/images/demo/galleria/galleria5.jpg\" alt=\"Nature\"&gt;\r\n    &lt;/span&gt;\r\n&lt;/p-inplace&gt;\r\n\r\n&lt;h3&gt;Data&lt;/h3&gt;\r\n&lt;p-inplace&gt;\r\n    &lt;span pInplaceDisplay&gt;\r\n        &lt;span class=\"fa fa-table\"&gt;&lt;/span&gt;&lt;span style=\"margin-left:8px\"&gt;View Data&lt;/span&gt;\r\n    &lt;/span&gt;\r\n    &lt;span pInplaceContent&gt;\r\n        &lt;p-table [value]=\"cars\"&gt;\r\n            &lt;ng-template pTemplate=\"header\"&gt;\r\n                &lt;tr&gt;\r\n                    &lt;th&gt;Vin&lt;/th&gt;\r\n                    &lt;th&gt;Year&lt;/th&gt;\r\n                    &lt;th&gt;Brand&lt;/th&gt;\r\n                    &lt;th&gt;Color&lt;/th&gt;\r\n                &lt;/tr&gt;\r\n            &lt;/ng-template&gt;\r\n            &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n                &lt;tr&gt;\r\n                    &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n                &lt;/tr&gt;\r\n            &lt;/ng-template&gt;\r\n        &lt;/p-table&gt;\r\n    &lt;/span&gt;\r\n&lt;/p-inplace&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/inplace/inplace.ts":
/*!***********************************************!*\
  !*** ./src/app/components/inplace/inplace.ts ***!
  \***********************************************/
/*! exports provided: InplaceDisplay, InplaceContent, Inplace, InplaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InplaceDisplay", function() { return InplaceDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InplaceContent", function() { return InplaceContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inplace", function() { return Inplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InplaceModule", function() { return InplaceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button */ "./src/app/components/button/button.ts");




let InplaceDisplay = class InplaceDisplay {
};
InplaceDisplay = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-inplaceDisplay',
        template: '<ng-content></ng-content>'
    })
], InplaceDisplay);

let InplaceContent = class InplaceContent {
};
InplaceContent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-inplaceContent',
        template: '<ng-content></ng-content>'
    })
], InplaceContent);

let Inplace = class Inplace {
    constructor() {
        this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    activate(event) {
        if (!this.disabled) {
            this.active = true;
            this.onActivate.emit(event);
        }
    }
    deactivate(event) {
        if (!this.disabled) {
            this.active = false;
            this.hover = false;
            this.onDeactivate.emit(event);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Inplace.prototype, "active", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Inplace.prototype, "closable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Inplace.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Inplace.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Inplace.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Inplace.prototype, "onActivate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Inplace.prototype, "onDeactivate", void 0);
Inplace = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-inplace',
        template: `
        <div [ngClass]="{'ui-inplace ui-widget': true, 'ui-inplace-closable': closable}" [ngStyle]="style" [class]="styleClass">
            <div class="ui-inplace-display" (click)="activate($event)"
                [ngClass]="{'ui-state-disabled':disabled}" *ngIf="!active">
                <ng-content select="[pInplaceDisplay]"></ng-content>
            </div>
            <div class="ui-inplace-content" *ngIf="active">
                <ng-content select="[pInplaceContent]"></ng-content>
                <button type="button" icon="pi pi-times" pButton (click)="deactivate($event)" *ngIf="closable"></button>
            </div>
        </div>
    `
    })
], Inplace);

let InplaceModule = class InplaceModule {
};
InplaceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _button_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]],
        exports: [Inplace, InplaceDisplay, InplaceContent, _button_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]],
        declarations: [Inplace, InplaceDisplay, InplaceContent]
    })
], InplaceModule);



/***/ }),

/***/ "./src/app/showcase/components/inplace/inplacedemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/inplace/inplacedemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: InplaceDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InplaceDemoRoutingModule", function() { return InplaceDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inplacedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inplacedemo */ "./src/app/showcase/components/inplace/inplacedemo.ts");




let InplaceDemoRoutingModule = class InplaceDemoRoutingModule {
};
InplaceDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _inplacedemo__WEBPACK_IMPORTED_MODULE_3__["InplaceDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], InplaceDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/inplace/inplacedemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/inplace/inplacedemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: InplaceDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InplaceDemoModule", function() { return InplaceDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inplacedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inplacedemo */ "./src/app/showcase/components/inplace/inplacedemo.ts");
/* harmony import */ var _inplacedemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inplacedemo-routing.module */ "./src/app/showcase/components/inplace/inplacedemo-routing.module.ts");
/* harmony import */ var _components_inplace_inplace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/inplace/inplace */ "./src/app/components/inplace/inplace.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");










let InplaceDemoModule = class InplaceDemoModule {
};
InplaceDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inplacedemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["InplaceDemoRoutingModule"],
            _components_inplace_inplace__WEBPACK_IMPORTED_MODULE_5__["InplaceModule"],
            _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            _components_table_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _inplacedemo__WEBPACK_IMPORTED_MODULE_3__["InplaceDemo"]
        ]
    })
], InplaceDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/inplace/inplacedemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/inplace/inplacedemo.ts ***!
  \************************************************************/
/*! exports provided: InplaceDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InplaceDemo", function() { return InplaceDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");



let InplaceDemo = class InplaceDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
};
InplaceDemo.ctorParameters = () => [
    { type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"] }
];
InplaceDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./inplacedemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/inplace/inplacedemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])
], InplaceDemo);



/***/ })

}]);
//# sourceMappingURL=components-inplace-inplacedemo-module-es2015.js.map