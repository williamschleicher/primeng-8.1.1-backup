(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-steps-stepsdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/steps/stepsdemo.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/steps/stepsdemo.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Steps</span>\r\n        <span>Steps components is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-steps [model]=\"items\"></p-steps>\r\n\r\n    <h3>Clickable</h3>\r\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\"></p-steps>\r\n\r\n    <h3>Custom Style</h3>\r\n    <p-steps [model]=\"items\" styleClass=\"steps-custom\"></p-steps>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;StepsModule&#125; from 'primeng/steps';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>Steps uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Steps requires a collection of menuitems as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-steps [model]=\"items\"&gt;&lt;/p-steps&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label: 'Step 1'&#125;,\r\n            &#123;label: 'Step 2'&#125;,\r\n            &#123;label: 'Step 3'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Readonly</h3>\r\n            <p>Items are readonly by default, if you'd like to make them interactive then disable readonly.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-steps [model]=\"items\" [readonly]=\"false\"&gt;&lt;/p-steps&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>activeIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the active item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether the items are clickable or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>activeIndexChange</td>\r\n                            <td>index: Index of the active step item</td>\r\n                            <td>Callback to invoke when the new step is selected.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-steps</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-item</td>\r\n                            <td>Menuitem element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-current</td>\r\n                            <td>Active item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-incomplete</td>\r\n                            <td>Inactive item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-complete</td>\r\n                            <td>Completed item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-number</td>\r\n                            <td>Number of menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-title</td>\r\n                            <td>Label of menuitem.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/steps\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-steps [model]=\"items\"&gt;&lt;/p-steps&gt;\r\n\r\n&lt;h3&gt;Clickable&lt;/h3&gt;\r\n&lt;p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\"&gt;&lt;/p-steps&gt;\r\n\r\n&lt;h3&gt;Custom Style&lt;/h3&gt;\r\n&lt;p-steps [model]=\"items\" styleClass=\"steps-custom\"&gt;&lt;/p-steps&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: 'showcase/demo/steps/stepsdemo.html',\r\n    providers: [MessageService],\r\n    styles: [`\r\n        .ui-steps .ui-steps-item &#123;\r\n            width: 25%;\r\n        &#125;\r\n\r\n        .ui-steps.steps-custom &#123;\r\n            margin-bottom: 30px;\r\n        &#125;\r\n\r\n        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link &#123;\r\n            height: 10px;\r\n            padding: 0 1em;\r\n        &#125;\r\n\r\n        .ui-steps.steps-custom .ui-steps-item .ui-steps-number &#123;\r\n            background-color: #0081c2;\r\n            color: #FFFFFF;\r\n            display: inline-block;\r\n            width: 36px;\r\n            border-radius: 50%;\r\n            margin-top: -14px;\r\n            margin-bottom: 10px;\r\n        &#125;\r\n\r\n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title &#123;\r\n            color: #555555;\r\n        &#125;\r\n    `],\r\n    encapsulation: ViewEncapsulation.None\r\n&#125;)\r\nexport class StepsDemo implements OnInit &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    activeIndex: number = 1;\r\n\r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [&#123;\r\n                label: 'Personal',\r\n                command: (event: any) => &#123;\r\n                    this.activeIndex = 0;\r\n                    this.messageService.add(&#123;severity:'info', summary:'First Step', detail: event.item.label&#125;);\r\n                &#125;\r\n            &#125;,\r\n            &#123;\r\n                label: 'Seat',\r\n                command: (event: any) => &#123;\r\n                    this.activeIndex = 1;\r\n                    this.messageService.add(&#123;severity:'info', summary:'Seat Selection', detail: event.item.label&#125;);\r\n                &#125;\r\n            &#125;,\r\n            &#123;\r\n                label: 'Payment',\r\n                command: (event: any) => &#123;\r\n                    this.activeIndex = 2;\r\n                    this.messageService.add(&#123;severity:'info', summary:'Pay with CC', detail: event.item.label&#125;);\r\n                &#125;\r\n            &#125;,\r\n            &#123;\r\n                label: 'Confirmation',\r\n                command: (event: any) => &#123;\r\n                    this.activeIndex = 3;\r\n                    this.messageService.add(&#123;severity:'info', summary:'Last Step', detail: event.item.label&#125;);\r\n                &#125;\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/steps/steps.ts":
/*!*******************************************!*\
  !*** ./src/app/components/steps/steps.ts ***!
  \*******************************************/
/*! exports provided: Steps, StepsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return Steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsModule", function() { return StepsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Steps = class Steps {
    constructor() {
        this.activeIndex = 0;
        this.readonly = true;
        this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    itemClick(event, item, i) {
        if (this.readonly || item.disabled) {
            event.preventDefault();
            return;
        }
        this.activeIndexChange.emit(i);
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
                index: i
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Steps.prototype, "activeIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], Steps.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Steps.prototype, "readonly", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Steps.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Steps.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Steps.prototype, "activeIndexChange", void 0);
Steps = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-steps',
        template: `
        <div [ngClass]="{'ui-steps ui-widget ui-helper-clearfix':true,'ui-steps-readonly':readonly}" [ngStyle]="style" [class]="styleClass">
            <ul role="tablist">
                <li *ngFor="let item of model; let i = index" class="ui-steps-item" #menuitem [ngStyle]="item.style" [class]="item.styleClass"
                    [ngClass]="{'ui-state-highlight ui-steps-current':(i === activeIndex),
                        'ui-state-default':(i !== activeIndex),
                        'ui-state-complete':(i < activeIndex),
                        'ui-state-disabled ui-steps-incomplete':item.disabled||(i !== activeIndex && readonly)}">
                    <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link" (click)="itemClick($event, item, i)" [attr.target]="item.target" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : '0'">
                        <span class="ui-steps-number">{{i + 1}}</span>
                        <span class="ui-steps-title">{{item.label}}</span>
                    </a>
                    <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'ui-state-active'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link" (click)="itemClick($event, item, i)" [attr.target]="item.target" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : '0'">
                        <span class="ui-steps-number">{{i + 1}}</span>
                        <span class="ui-steps-title">{{item.label}}</span>
                    </a>
                </li>
            </ul>
        </div>
    `
    })
], Steps);

let StepsModule = class StepsModule {
};
StepsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [Steps, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [Steps]
    })
], StepsModule);



/***/ }),

/***/ "./src/app/showcase/components/steps/stepsdemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/steps/stepsdemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: StepsDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsDemoRoutingModule", function() { return StepsDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stepsdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stepsdemo */ "./src/app/showcase/components/steps/stepsdemo.ts");




let StepsDemoRoutingModule = class StepsDemoRoutingModule {
};
StepsDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _stepsdemo__WEBPACK_IMPORTED_MODULE_3__["StepsDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], StepsDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/steps/stepsdemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/steps/stepsdemo.module.ts ***!
  \***************************************************************/
/*! exports provided: StepsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsDemoModule", function() { return StepsDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _stepsdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stepsdemo */ "./src/app/showcase/components/steps/stepsdemo.ts");
/* harmony import */ var _stepsdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stepsdemo-routing.module */ "./src/app/showcase/components/steps/stepsdemo-routing.module.ts");
/* harmony import */ var _components_steps_steps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/steps/steps */ "./src/app/components/steps/steps.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");









let StepsDemoModule = class StepsDemoModule {
};
StepsDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _stepsdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["StepsDemoRoutingModule"],
            _components_steps_steps__WEBPACK_IMPORTED_MODULE_5__["StepsModule"],
            _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _stepsdemo__WEBPACK_IMPORTED_MODULE_3__["StepsDemo"]
        ]
    })
], StepsDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/steps/stepsdemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/steps/stepsdemo.ts ***!
  \********************************************************/
/*! exports provided: StepsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsDemo", function() { return StepsDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");



let StepsDemo = class StepsDemo {
    constructor(messageService) {
        this.messageService = messageService;
        this.activeIndex = 1;
    }
    ngOnInit() {
        this.items = [{
                label: 'Personal',
                command: (event) => {
                    this.activeIndex = 0;
                    this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: (event) => {
                    this.activeIndex = 1;
                    this.messageService.add({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: (event) => {
                    this.activeIndex = 2;
                    this.messageService.add({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: (event) => {
                    this.activeIndex = 3;
                    this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    }
};
StepsDemo.ctorParameters = () => [
    { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
StepsDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./stepsdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/steps/stepsdemo.html"),
        providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: ["\n        .ui-steps .ui-steps-item {\n            width: 25%;\n        }\n        \n        .ui-steps.steps-custom {\n            margin-bottom: 30px;\n        }\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {\n            height: 10px;\n            padding: 0 1em;\n            overflow: visible;\n        }\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {\n            background-color: #0081c2;\n            color: #FFFFFF;\n            display: inline-block;\n            width: 36px;\n            border-radius: 50%;\n            margin-top: -14px;\n            margin-bottom: 10px;\n        }\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n            color: #555555;\n        }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], StepsDemo);



/***/ })

}]);
//# sourceMappingURL=components-steps-stepsdemo-module-es2015.js.map