(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-breadcrumb-breadcrumbdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/breadcrumb/breadcrumbdemo.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/breadcrumb/breadcrumbdemo.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Breadcrumb</span>\r\n        <span>Breadcrumb provides contextual information about page hierarchy.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-breadcrumb [model]=\"items\" [home]=\"home\"></p-breadcrumb>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;BreadcrumbModule&#125; from 'primeng/breadcrumb';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>Breadcrumb uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Breadcrumb requires a collection of menuitems connected to its model property.</p>\r\n            \r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class BreadcrumbDemo implements OnInit &#123;\r\n\r\n    private items: MenuItem[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label:'Categories'&#125;,\r\n            &#123;label:'Sports'&#125;,\r\n            &#123;label:'Football'&#125;,\r\n            &#123;label:'Countries'&#125;,\r\n            &#123;label:'Spain'&#125;,\r\n            &#123;label:'F.C. Barcelona'&#125;,\r\n            &#123;label:'Squad'&#125;,\r\n            &#123;label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-breadcrumb [model]=\"items\"&gt;&lt;/p-breadcrumb&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>home</td>\r\n                            <td>MenuItem</td>\r\n                            <td>null</td>\r\n                            <td>MenuItem configuration for the home icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-breadcrumb</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem</td>\r\n                            <td>Menuitem element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-text</td>\r\n                            <td>Label of a menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-breadcrumb-chevron</td>\r\n                            <td>Chevron element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/breadcrumb\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class BreadcrumbDemo implements OnInit &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    home: MenuItem;\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label:'Categories'&#125;,\r\n            &#123;label:'Sports'&#125;,\r\n            &#123;label:'Football'&#125;,\r\n            &#123;label:'Countries'&#125;,\r\n            &#123;label:'Spain'&#125;,\r\n            &#123;label:'F.C. Barcelona'&#125;,\r\n            &#123;label:'Squad'&#125;,\r\n            &#123;label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link'&#125;\r\n        ];\r\n        \r\n        this.home = &#123;icon: 'pi pi-home'&#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-breadcrumb [model]=\"items\" [home]=\"home\"&gt;&lt;/p-breadcrumb&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.ts ***!
  \*****************************************************/
/*! exports provided: Breadcrumb, BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Breadcrumb = class Breadcrumb {
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
    }
    onHomeClick(event) {
        if (this.home) {
            this.itemClick(event, this.home);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], Breadcrumb.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Breadcrumb.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Breadcrumb.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Breadcrumb.prototype, "home", void 0);
Breadcrumb = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-breadcrumb',
        template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all'">
            <ul>
                <li class="ui-breadcrumb-home" *ngIf="home">
                    <a *ngIf="!home.routerLink" [href]="home.url||'#'" class="ui-menuitem-link" (click)="itemClick($event, home)" 
                        [ngClass]="{'ui-state-disabled':home.disabled}" [attr.target]="home.target" [attr.title]="home.title" [attr.id]="home.id"[attr.tabindex]="home.tabindex ? home.tabindex : '0'">
                        <span [ngClass]="home.icon||'pi pi-home'"></span>
                    </a>
                    <a *ngIf="home.routerLink" [routerLink]="home.routerLink" [queryParams]="home.queryParams" [routerLinkActive]="'ui-state-active'" [routerLinkActiveOptions]="home.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link" (click)="itemClick($event, home)" 
                        [ngClass]="{'ui-state-disabled':home.disabled}" [attr.target]="home.target" [attr.title]="home.title" [attr.id]="home.id" [attr.tabindex]="home.tabindex ? home.tabindex : '0'">
                        <span [ngClass]="home.icon||'pi pi-home'"></span>
                    </a>
                </li>
                <li class="ui-breadcrumb-chevron pi pi-chevron-right" *ngIf="model&&home"></li>
                <ng-template ngFor let-item let-end="last" [ngForOf]="model">
                    <li role="menuitem">
                        <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link" (click)="itemClick($event, item)" 
                            [ngClass]="{'ui-state-disabled':item.disabled}" [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : '0'">
                            <span *ngIf="item.icon" class="ui-menuitem-icon" [ngClass]="item.icon"></span>
                            <span class="ui-menuitem-text">{{item.label}}</span>
                        </a>
                        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'ui-state-active'"  [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link" (click)="itemClick($event, item)" 
                            [ngClass]="{'ui-state-disabled':item.disabled}" [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : '0'">
                            <span *ngIf="item.icon" class="ui-menuitem-icon" [ngClass]="item.icon"></span>
                            <span class="ui-menuitem-text">{{item.label}}</span>
                        </a>
                    </li>
                    <li class="ui-breadcrumb-chevron pi pi-chevron-right" *ngIf="!end"></li>
                </ng-template>
            </ul>
        </div>
    `
    })
], Breadcrumb);

let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [Breadcrumb, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [Breadcrumb]
    })
], BreadcrumbModule);



/***/ }),

/***/ "./src/app/showcase/components/breadcrumb/breadcrumbdemo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/showcase/components/breadcrumb/breadcrumbdemo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BreadcrumbDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemoRoutingModule", function() { return BreadcrumbDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _breadcrumbdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumbdemo */ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.ts");




let BreadcrumbDemoRoutingModule = class BreadcrumbDemoRoutingModule {
};
BreadcrumbDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _breadcrumbdemo__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], BreadcrumbDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/breadcrumb/breadcrumbdemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemoModule", function() { return BreadcrumbDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _breadcrumbdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumbdemo */ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.ts");
/* harmony import */ var _breadcrumbdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbdemo-routing.module */ "./src/app/showcase/components/breadcrumb/breadcrumbdemo-routing.module.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/breadcrumb/breadcrumb */ "./src/app/components/breadcrumb/breadcrumb.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");








let BreadcrumbDemoModule = class BreadcrumbDemoModule {
};
BreadcrumbDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _breadcrumbdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbDemoRoutingModule"],
            _components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
        ],
        declarations: [
            _breadcrumbdemo__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbDemo"]
        ]
    })
], BreadcrumbDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/breadcrumb/breadcrumbdemo.ts ***!
  \******************************************************************/
/*! exports provided: BreadcrumbDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemo", function() { return BreadcrumbDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BreadcrumbDemo = class BreadcrumbDemo {
    ngOnInit() {
        this.items = [
            { label: 'Categories' },
            { label: 'Sports' },
            { label: 'Football' },
            { label: 'Countries' },
            { label: 'Spain' },
            { label: 'F.C. Barcelona' },
            { label: 'Squad' },
            { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link' }
        ];
        this.home = { icon: 'pi pi-home' };
    }
};
BreadcrumbDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./breadcrumbdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/breadcrumb/breadcrumbdemo.html")
    })
], BreadcrumbDemo);



/***/ })

}]);
//# sourceMappingURL=components-breadcrumb-breadcrumbdemo-module-es2015.js.map