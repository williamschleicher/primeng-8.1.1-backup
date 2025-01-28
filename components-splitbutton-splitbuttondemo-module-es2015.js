(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-splitbutton-splitbuttondemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/splitbutton/splitbuttondemo.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/splitbutton/splitbuttondemo.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">SplitButton</span>\r\n        <span>SplitButton groups a set of commands in an overlay with a default command.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\"></p-splitButton>\r\n\r\n    <h3>Severities</h3>\r\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" styleClass=\"ui-button-secondary\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('success')\" [model]=\"items\" styleClass=\"ui-button-success\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" styleClass=\"ui-button-info\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('warn')\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('error')\" [model]=\"items\" styleClass=\"ui-button-danger\"></p-splitButton>\r\n\r\n    <h3>RTL</h3>\r\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" dir=\"rtl\"></p-splitButton>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SplitButtonModule&#125; from 'primeng/splitbutton';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>SplitButton has a default command button and a collection of menuitems to be displayed in an overlay.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n                example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-splitButton [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" label=\"Save\" icon=\"pi pi-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n            <h3>MenuModel API</h3>\r\n            <p>SplitButton uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>iconPos</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>menuStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the overlay menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>menuStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the overlay menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dir</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Indicates the direction of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>225ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>195ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onClick</td>\r\n                            <td>event: browser event<br></td>\r\n                            <td>Callback to invoke when default command button is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDropdownClick</td>\r\n                            <td>event: browser event<br></td>\r\n                            <td>Callback to invoke when dropdown button is clicked.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          <h3>Severity</h3>\r\n          <p>Different color options are available to define severity levels.</p>\r\n\r\n          <ul>\r\n            <li>.ui-button-secondary</li>\r\n            <li>.ui-button-success</li>\r\n            <li>.ui-button-info</li>\r\n            <li>.ui-button-warning</li>\r\n            <li>.ui-button-danger</li>\r\n          </ul>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>. SplitButton uses\r\n            button and menu components internally, refer to their documentation for the detailed style list.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-splitbutton</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-splitbutton-button</td>\r\n                            <td>Dropdown button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menu</td>\r\n                            <td>Overlay menu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/splitbutton\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n\r\n&lt;h3&gt;Severities&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" styleClass=\"ui-button-secondary\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('success')\" [model]=\"items\" styleClass=\"ui-button-success\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" styleClass=\"ui-button-info\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('warn')\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('error')\" [model]=\"items\" styleClass=\"ui-button-danger\"&gt;&lt;/p-splitButton&gt;\r\n\r\n&lt;h3&gt;RTL&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" dir=\"rtl\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SplitButtonDemo implements OnInit &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label: 'Update', icon: 'pi pi-refresh', command: () => &#123;\r\n                this.update();\r\n            &#125;&#125;,\r\n            &#123;label: 'Delete', icon: 'pi pi-times', command: () => &#123;\r\n                this.delete();\r\n            &#125;&#125;,\r\n            &#123;label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'&#125;,\r\n            &#123;label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']&#125;\r\n        ];\r\n    &#125;\r\n\r\n    save(severity: string) &#123;\r\n        this.messageService.add(&#123;severity:severity, summary:'Success', detail:'Data Saved'&#125;);\r\n    &#125;\r\n\r\n    update() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Success', detail:'Data Updated'&#125;);\r\n    &#125;\r\n\r\n    delete() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Success', detail:'Data Deleted'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n     </p-tabView >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SplitButtonDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemoRoutingModule", function() { return SplitButtonDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _splitbuttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splitbuttondemo */ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts");




let SplitButtonDemoRoutingModule = class SplitButtonDemoRoutingModule {
};
SplitButtonDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _splitbuttondemo__WEBPACK_IMPORTED_MODULE_3__["SplitButtonDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], SplitButtonDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: SplitButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemoModule", function() { return SplitButtonDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _splitbuttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splitbuttondemo */ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts");
/* harmony import */ var _splitbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splitbuttondemo-routing.module */ "./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts");
/* harmony import */ var _components_splitbutton_splitbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/splitbutton/splitbutton */ "./src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");









let SplitButtonDemoModule = class SplitButtonDemoModule {
};
SplitButtonDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _splitbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["SplitButtonDemoRoutingModule"],
            _components_splitbutton_splitbutton__WEBPACK_IMPORTED_MODULE_5__["SplitButtonModule"],
            _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _splitbuttondemo__WEBPACK_IMPORTED_MODULE_3__["SplitButtonDemo"]
        ]
    })
], SplitButtonDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo.ts ***!
  \********************************************************************/
/*! exports provided: SplitButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemo", function() { return SplitButtonDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");



let SplitButtonDemo = class SplitButtonDemo {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
        this.items = [
            { label: 'Update', icon: 'pi pi-refresh', command: () => {
                    this.update();
                } },
            { label: 'Delete', icon: 'pi pi-times', command: () => {
                    this.delete();
                } },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
        ];
    }
    save(severity) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }
    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }
    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
};
SplitButtonDemo.ctorParameters = () => [
    { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
SplitButtonDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./splitbuttondemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/splitbutton/splitbuttondemo.html"),
        providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
        styles: ["\n        :host ::ng-deep .ui-splitbutton {\n            margin-right: .25em;\n        }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], SplitButtonDemo);



/***/ })

}]);
//# sourceMappingURL=components-splitbutton-splitbuttondemo-module-es2015.js.map