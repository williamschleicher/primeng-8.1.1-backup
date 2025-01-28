(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-defer-deferdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/defer/deferdemo.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/defer/deferdemo.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Defer</span>\r\n        <span>Defer directive postpones the loading the content that is initially not in viewport until it becomes visible on scroll. Think of\r\n        pDefer as a smart ngIf that lazily loads content when it becomes visible after page scroll. Scroll down to load the Table\r\n        which initiates a query that is not executed on initial page load to speed up load performance.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <div style=\"height:800px\">\r\n        Table is not loaded yet, scroll down to initialize it.\r\n    </div>\r\n\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <div pDefer (onLoad)=\"initData()\">\r\n        <ng-template>\r\n            <p-table [value]=\"cars\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Vin</th>\r\n                        <th>Year</th>\r\n                        <th>Brand</th>\r\n                        <th>Color</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-car>\r\n                    <tr>\r\n                        <td>{{car.vin}}</td>\r\n                        <td>{{car.year}}</td>\r\n                        <td>{{car.brand}}</td>\r\n                        <td>{{car.color}}</td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n        </ng-template>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DeferModule&#125; from 'primeng/defer';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pDefer&gt;\r\n    &lt;ng-template&gt;\r\n       deferred content\r\n   &lt;/ng-template&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Callback</h3>\r\n            <p>onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pDefer (onLoad)=\"initData()\"&gt;\r\n    &lt;ng-template&gt;\r\n        &lt;p-table [value]=\"cars\"&gt;\r\n        &lt;ng-template pTemplate=\"header\"&gt;\r\n            &lt;tr&gt;\r\n                &lt;th&gt;Vin&lt;/th&gt;\r\n                &lt;th&gt;Year&lt;/th&gt;\r\n                &lt;th&gt;Brand&lt;/th&gt;\r\n                &lt;th&gt;Color&lt;/th&gt;\r\n            &lt;/tr&gt;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n            &lt;tr&gt;\r\n                &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n                &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n                &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n                &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n            &lt;/tr&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-table&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nthis.cars = //initialize\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <p>Directive has no attributes.</p>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onLoad</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke when deferred content is loaded.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Directive does not apply any styling to host.</p>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/defer\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pDefer (onLoad)=\"initData()\"&gt;\r\n    &lt;ng-template&gt;\r\n        &lt;p-table [value]=\"cars\"&gt;\r\n            &lt;ng-template pTemplate=\"header\"&gt;\r\n                &lt;tr&gt;\r\n                    &lt;th&gt;Vin&lt;/th&gt;\r\n                    &lt;th&gt;Year&lt;/th&gt;\r\n                    &lt;th&gt;Brand&lt;/th&gt;\r\n                    &lt;th&gt;Color&lt;/th&gt;\r\n                &lt;/tr&gt;\r\n            &lt;/ng-template&gt;\r\n            &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n                &lt;tr&gt;\r\n                    &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n                &lt;/tr&gt;\r\n            &lt;/ng-template&gt;\r\n        &lt;/p-table&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DeferDemo &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService, private messageService: MessageService)  &#123;&#125;\r\n\r\n    initData()  &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Data Initialized', detail:'Render Completed'&#125;);\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n     &#125;\r\n &#125;\r\n</code>\r\n</pre>\r\n\r\n        </p-tabPanel>\r\n     </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/defer/defer.ts":
/*!*******************************************!*\
  !*** ./src/app/components/defer/defer.ts ***!
  \*******************************************/
/*! exports provided: DeferredLoader, DeferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredLoader", function() { return DeferredLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferModule", function() { return DeferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let DeferredLoader = class DeferredLoader {
    constructor(el, renderer, viewContainer) {
        this.el = el;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.onLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewInit() {
        if (this.shouldLoad()) {
            this.load();
        }
        if (!this.isLoaded()) {
            this.documentScrollListener = this.renderer.listen('window', 'scroll', () => {
                if (this.shouldLoad()) {
                    this.load();
                    this.documentScrollListener();
                    this.documentScrollListener = null;
                }
            });
        }
    }
    shouldLoad() {
        if (this.isLoaded()) {
            return false;
        }
        else {
            let rect = this.el.nativeElement.getBoundingClientRect();
            let docElement = document.documentElement;
            let winHeight = docElement.clientHeight;
            return (winHeight >= rect.top);
        }
    }
    load() {
        this.view = this.viewContainer.createEmbeddedView(this.template);
        this.onLoad.emit();
    }
    isLoaded() {
        return this.view != null;
    }
    ngOnDestroy() {
        this.view = null;
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
    }
};
DeferredLoader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], DeferredLoader.prototype, "onLoad", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], DeferredLoader.prototype, "template", void 0);
DeferredLoader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[pDefer]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], DeferredLoader);

let DeferModule = class DeferModule {
};
DeferModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [DeferredLoader],
        declarations: [DeferredLoader]
    })
], DeferModule);



/***/ }),

/***/ "./src/app/showcase/components/defer/deferdemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/defer/deferdemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: DeferDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferDemoRoutingModule", function() { return DeferDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deferdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deferdemo */ "./src/app/showcase/components/defer/deferdemo.ts");




let DeferDemoRoutingModule = class DeferDemoRoutingModule {
};
DeferDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _deferdemo__WEBPACK_IMPORTED_MODULE_3__["DeferDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], DeferDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/defer/deferdemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/defer/deferdemo.module.ts ***!
  \***************************************************************/
/*! exports provided: DeferDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferDemoModule", function() { return DeferDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _deferdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deferdemo */ "./src/app/showcase/components/defer/deferdemo.ts");
/* harmony import */ var _deferdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deferdemo-routing.module */ "./src/app/showcase/components/defer/deferdemo-routing.module.ts");
/* harmony import */ var _components_defer_defer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/defer/defer */ "./src/app/components/defer/defer.ts");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");










let DeferDemoModule = class DeferDemoModule {
};
DeferDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _deferdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["DeferDemoRoutingModule"],
            _components_defer_defer__WEBPACK_IMPORTED_MODULE_5__["DeferModule"],
            _components_toast_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            _components_table_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _deferdemo__WEBPACK_IMPORTED_MODULE_3__["DeferDemo"]
        ]
    })
], DeferDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/defer/deferdemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/defer/deferdemo.ts ***!
  \********************************************************/
/*! exports provided: DeferDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferDemo", function() { return DeferDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");




let DeferDemo = class DeferDemo {
    constructor(carService, messageService) {
        this.carService = carService;
        this.messageService = messageService;
    }
    initData() {
        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
};
DeferDemo.ctorParameters = () => [
    { type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"] },
    { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
DeferDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./deferdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/defer/deferdemo.html"),
        providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], DeferDemo);



/***/ })

}]);
//# sourceMappingURL=components-defer-deferdemo-module-es2015.js.map