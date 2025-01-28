(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tabmenu-tabmenudemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/tabmenu/tabmenudemo.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/tabmenu/tabmenudemo.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TabMenu</span>\r\n        <span>Menu is a navigation/command component that displays items as tab headers.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <p-tabMenu [model]=\"items1\" [activeItem]=\"items1[0]\"></p-tabMenu>\r\n\r\n    <h3>Templating</h3>\r\n    <p-tabMenu [model]=\"items2\" [activeItem]=\"activeItem\">\r\n        <ng-template pTemplate=\"item\" let-item let-i=\"index\">\r\n            <div style=\"position: relative; text-align: center; min-width: 10em\">\r\n                <div class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\" style=\"font-size: 2em\"></div>\r\n                <div class=\"ui-menuitem-text\">\r\n                    {{item.label}}\r\n                </div>\r\n                <a tabindex=\"0\" class=\"ui-menuitem-icon\" (click)=\"closeItem($event, i)\" style=\"position: absolute; right: -1em; top: -.5em; padding: 0\" *ngIf=\"i !== 0\">\r\n                    <span class=\"pi pi-times\"></span>\r\n                </a>\r\n            </div>\r\n        </ng-template>\r\n    </p-tabMenu>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TabMenuModule&#125; from 'primeng/tabmenu';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>TabMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>TabMenu requires a collection of menuitems as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tabMenu [model]=\"items\"&gt;&lt;/p-tabMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TabMenuDemo &#123;\r\n    \r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label: 'Stats', icon: 'fa fa-fw fa-bar-chart'&#125;,\r\n            &#123;label: 'Calendar', icon: 'fa fa-fw fa-calendar'&#125;,\r\n            &#123;label: 'Documentation', icon: 'fa fa-fw fa-book'&#125;,\r\n            &#123;label: 'Support', icon: 'fa fa-fw fa-support'&#125;,\r\n            &#123;label: 'Social', icon: 'fa fa-fw fa-twitter'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>ActiveItem</h3>\r\n            <p>By default item that matches the active route is highlighted, alternatively activeItem property can be used choose the initial active item.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\"&gt;&lt;/p-tabMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TabMenuDemo &#123;\r\n    \r\n    items: MenuItem[];\r\n    \r\n    activeItem: MenuItem;\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label: 'Stats', icon: 'fa fa-fw fa-bar-chart'&#125;,\r\n            &#123;label: 'Calendar', icon: 'fa fa-fw fa-calendar'&#125;,\r\n            &#123;label: 'Documentation', icon: 'fa fa-fw fa-book'&#125;,\r\n            &#123;label: 'Support', icon: 'fa fa-fw fa-support'&#125;,\r\n            &#123;label: 'Social', icon: 'fa fa-fw fa-twitter'&#125;\r\n        ];\r\n        \r\n        this.activeItem = this.items[2];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Templating</h3>\r\n            <p>Menuitem content supports templating via the \"item\" template which gets the menuitem instance and the index.</p>\r\n            <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n&lt;p-tabMenu [model]=\"items\"&gt;\r\n    &lt;ng-template pTemplate=\"item\" let-item let-i=\"index\"&gt;\r\n        //item content\r\n    &lt;/ng-template&gt;\r\n&lt;/p-tabMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>activeItem</td>\r\n                            <td>MenuItem</td>\r\n                            <td>null</td>\r\n                            <td>Defines the default active menuitem</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-tabmenu</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-tabmenu-nav</td>\r\n                            <td>List element of headers.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-tabmenuitem</td>\r\n                            <td>Menuitem element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-link</td>\r\n                            <td>Link inside a menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-text</td>\r\n                            <td>Label of a menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-icon</td>\r\n                            <td>Icon of a menuitem.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tabmenu\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\r\n&lt;p-tabMenu [model]=\"items1\" [activeItem]=\"items1[0]\"&gt;&lt;/p-tabMenu&gt;\r\n\r\n&lt;h3&gt;Templating&lt;/h3&gt;\r\n&lt;p-tabMenu [model]=\"items2\" [activeItem]=\"activeItem\"&gt;\r\n    &lt;ng-template pTemplate=\"item\" let-item let-i=\"index\"&gt;\r\n        &lt;div style=\"position: relative; text-align: center; min-width: 10em\"&gt;\r\n            &lt;div class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\" style=\"font-size: 2em\"&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-menuitem-text\"&gt;\r\n                &#123;&#123;item.label&#125;&#125;\r\n            &lt;/div&gt;\r\n            &lt;a tabindex=\"0\" class=\"ui-menuitem-icon\" (click)=\"closeItem($event, i)\" style=\"position: absolute; right: -1em; top: -.5em; padding: 0\" *ngIf=\"i !== 0\"&gt;\r\n                &lt;span class=\"pi pi-times\"&gt;&lt;/span&gt;\r\n            &lt;/a&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-tabMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TabMenuDemo &#123;\r\n    \r\n    items1: MenuItem[];\r\n\r\n    items2: MenuItem[];\r\n\r\n    activeItem: MenuItem;\r\n\r\n    ngOnInit() &#123;\r\n        this.items1 = [\r\n            &#123;label: 'Stats', icon: 'fa fa-fw fa-bar-chart'&#125;,\r\n            &#123;label: 'Calendar', icon: 'fa fa-fw fa-calendar'&#125;,\r\n            &#123;label: 'Documentation', icon: 'fa fa-fw fa-book'&#125;,\r\n            &#123;label: 'Support', icon: 'fa fa-fw fa-support'&#125;,\r\n            &#123;label: 'Social', icon: 'fa fa-fw fa-twitter'&#125;\r\n        ];\r\n\r\n        this.items2 = [\r\n            &#123;label: 'Stats', icon: 'fa fa-fw fa-bar-chart'&#125;,\r\n            &#123;label: 'Calendar', icon: 'fa fa-fw fa-calendar'&#125;,\r\n            &#123;label: 'Documentation', icon: 'fa fa-fw fa-book'&#125;,\r\n            &#123;label: 'Support', icon: 'fa fa-fw fa-support'&#125;,\r\n            &#123;label: 'Social', icon: 'fa fa-fw fa-twitter'&#125;\r\n        ];\r\n\r\n        this.activeItem = this.items2[0];\r\n    &#125;\r\n\r\n    closeItem(event, index) &#123;\r\n        this.items2 = this.items2.filter((item, i) => i !== index);\r\n        event.preventDefault();\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/tabmenu/tabmenu.ts":
/*!***********************************************!*\
  !*** ./src/app/components/tabmenu/tabmenu.ts ***!
  \***********************************************/
/*! exports provided: TabMenu, TabMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenu", function() { return TabMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuModule", function() { return TabMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TabMenu = class TabMenu {
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    itemClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        this.activeItem = item;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TabMenu.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TabMenu.prototype, "activeItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TabMenu.prototype, "popup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TabMenu.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TabMenu.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], TabMenu.prototype, "templates", void 0);
TabMenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-tabMenu',
        template: `
        <div [ngClass]="'ui-tabmenu ui-widget ui-widget-content ui-corner-all'" [ngStyle]="style" [class]="styleClass">
            <ul class="ui-tabmenu-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                <li *ngFor="let item of model; let i = index"
                    [ngClass]="{'ui-tabmenuitem ui-state-default ui-corner-top':true,'ui-state-disabled':item.disabled,
                        'ui-tabmenuitem-hasicon':item.icon,'ui-state-active':activeItem==item,'ui-helper-hidden': item.visible === false}"
                        [routerLinkActive]="'ui-state-active'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}">
                    <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link ui-corner-all" (click)="itemClick($event,item)" [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                        [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id">
                        <ng-container *ngIf="!itemTemplate">
                            <span class="ui-menuitem-icon " [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="ui-menuitem-text">{{item.label}}</span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, index: i}"></ng-container>
                    </a>
                    <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" class="ui-menuitem-link ui-corner-all" (click)="itemClick($event,item)" [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                        [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id">
                        <ng-container *ngIf="!itemTemplate">
                            <span class="ui-menuitem-icon " [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="ui-menuitem-text">{{item.label}}</span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, index: i}"></ng-container>
                    </a>
                </li>
            </ul>
        </div>
    `
    })
], TabMenu);

let TabMenuModule = class TabMenuModule {
};
TabMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _common_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [TabMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _common_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        declarations: [TabMenu]
    })
], TabMenuModule);



/***/ }),

/***/ "./src/app/showcase/components/tabmenu/tabmenudemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/tabmenu/tabmenudemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TabMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuDemoRoutingModule", function() { return TabMenuDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabmenudemo */ "./src/app/showcase/components/tabmenu/tabmenudemo.ts");




let TabMenuDemoRoutingModule = class TabMenuDemoRoutingModule {
};
TabMenuDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__["TabMenuDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], TabMenuDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/tabmenu/tabmenudemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/tabmenu/tabmenudemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: TabMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuDemoModule", function() { return TabMenuDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabmenudemo */ "./src/app/showcase/components/tabmenu/tabmenudemo.ts");
/* harmony import */ var _tabmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabmenudemo-routing.module */ "./src/app/showcase/components/tabmenu/tabmenudemo-routing.module.ts");
/* harmony import */ var _components_tabmenu_tabmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabmenu/tabmenu */ "./src/app/components/tabmenu/tabmenu.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");








let TabMenuDemoModule = class TabMenuDemoModule {
};
TabMenuDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tabmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["TabMenuDemoRoutingModule"],
            _components_tabmenu_tabmenu__WEBPACK_IMPORTED_MODULE_5__["TabMenuModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
        ],
        declarations: [
            _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__["TabMenuDemo"]
        ]
    })
], TabMenuDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/tabmenu/tabmenudemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/tabmenu/tabmenudemo.ts ***!
  \************************************************************/
/*! exports provided: TabMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuDemo", function() { return TabMenuDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabMenuDemo = class TabMenuDemo {
    ngOnInit() {
        this.items1 = [
            { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
            { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
            { label: 'Documentation', icon: 'fa fa-fw fa-book' },
            { label: 'Support', icon: 'fa fa-fw fa-support' },
            { label: 'Social', icon: 'fa fa-fw fa-twitter' }
        ];
        this.items2 = [
            { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
            { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
            { label: 'Documentation', icon: 'fa fa-fw fa-book' },
            { label: 'Support', icon: 'fa fa-fw fa-support' },
            { label: 'Social', icon: 'fa fa-fw fa-twitter' }
        ];
        this.activeItem = this.items2[0];
    }
    closeItem(event, index) {
        this.items2 = this.items2.filter((item, i) => i !== index);
        event.preventDefault();
    }
};
TabMenuDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./tabmenudemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/tabmenu/tabmenudemo.html")
    })
], TabMenuDemo);



/***/ })

}]);
//# sourceMappingURL=components-tabmenu-tabmenudemo-module-es2015.js.map