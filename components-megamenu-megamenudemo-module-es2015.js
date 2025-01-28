(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-megamenu-megamenudemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/megamenu/megamenudemo.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/megamenu/megamenudemo.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">MegaMenu</span>\r\n        <span>MegaMenu displays submenus of root items together.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <p-megaMenu [model]=\"items\"></p-megaMenu>\r\n    \r\n    <h3>Vertical</h3>\r\n    <p-megaMenu [model]=\"items\" orientation=\"vertical\"></p-megaMenu>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MegaMenuModule&#125; from 'primeng/megamenu';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>MegaMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>MegaMenu requires nested menuitems as its model where the items of a root menuitem is a two dimensional array to define columns in an overlay submenu.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-megaMenu [model]=\"items\"&gt;&lt;/p-megaMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n    export class MegaMenuDemo &#123;\r\n\r\n        items: MenuItem[];\r\n\r\n        ngOnInit() &#123;\r\n            this.items = [\r\n                &#123;\r\n                    label: 'TV', icon: 'fa fa-fw fa-check',\r\n                    items: [\r\n                        [\r\n                            &#123;\r\n                                label: 'TV 1',\r\n                                items: [&#123;label: 'TV 1.1'&#125;,&#123;label: 'TV 1.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'TV 2',\r\n                                items: [&#123;label: 'TV 2.1'&#125;,&#123;label: 'TV 2.2'&#125;]\r\n                            &#125;\r\n                        ],\r\n                        [\r\n                            &#123;\r\n                                label: 'TV 3',\r\n                                items: [&#123;label: 'TV 3.1'&#125;,&#123;label: 'TV 3.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'TV 4',\r\n                                items: [&#123;label: 'TV 4.1'&#125;,&#123;label: 'TV 4.2'&#125;]\r\n                            &#125;    \r\n                        ]\r\n                    ]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',\r\n                    items: [\r\n                        [\r\n                            &#123;\r\n                                label: 'Sports 1',\r\n                                items: [&#123;label: 'Sports 1.1'&#125;,&#123;label: 'Sports 1.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Sports 2',\r\n                                items: [&#123;label: 'Sports 2.1'&#125;,&#123;label: 'Sports 2.2'&#125;]\r\n                            &#125;,\r\n\r\n                        ],\r\n                        [\r\n                            &#123;\r\n                                label: 'Sports 3',\r\n                                items: [&#123;label: 'Sports 3.1'&#125;,&#123;label: 'Sports 3.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Sports 4',\r\n                                items: [&#123;label: 'Sports 4.1'&#125;,&#123;label: 'Sports 4.2'&#125;]\r\n                            &#125;\r\n                        ],\r\n                        [\r\n                            &#123;\r\n                                label: 'Sports 5',\r\n                                items: [&#123;label: 'Sports 5.1'&#125;,&#123;label: 'Sports 5.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Sports 6',\r\n                                items: [&#123;label: 'Sports 6.1'&#125;,&#123;label: 'Sports 6.2'&#125;]\r\n                            &#125;\r\n                        ]\r\n                    ]\r\n                &#125;\r\n            ];\r\n        &#125;\r\n    &#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Custom Content</h3>\r\n            <p>Custom content can be placed between p-megaMenu tags. Megamenu should be horizontal for custom content.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-megaMenu [model]=\"items\"&gt;\r\n    &lt;input type=\"text\" pInputText placeholder=\"Search\"&gt;\r\n    &lt;button pButton label=\"Logout\" icon=\"fa fa-sign-out\"&gt;&lt;/button&gt;\r\n&lt;/p-megaMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>orientation</td>\r\n                            <td>string</td>\r\n                            <td>horizontal</td>\r\n                            <td>Defines the orientation, valid values are horizontal and vertical.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>ui-megamenu</td>\r\n                        <td>Container element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menu-list</td>\r\n                        <td>List element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem</td>\r\n                        <td>Menuitem element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-text</td>\r\n                        <td>Label of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-icon</td>\r\n                        <td>Icon of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-submenu-icon</td>\r\n                        <td>Arrow icon of a submenu.</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<h3>Dependencies</h3>\r\n<p>None.</p>\r\n</p-tabPanel>\r\n\r\n<p-tabPanel header=\"Source\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/megamenu\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-megaMenu [model]=\"items\"&gt;&lt;/p-megaMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MegaMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'TV', icon: 'fa fa-fw fa-check',\r\n                items: [\r\n                    [\r\n                        &#123;\r\n                            label: 'TV 1',\r\n                            items: [&#123;label: 'TV 1.1'&#125;,&#123;label: 'TV 1.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'TV 2',\r\n                            items: [&#123;label: 'TV 2.1'&#125;,&#123;label: 'TV 2.2'&#125;]\r\n                        &#125;\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'TV 3',\r\n                            items: [&#123;label: 'TV 3.1'&#125;,&#123;label: 'TV 3.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'TV 4',\r\n                            items: [&#123;label: 'TV 4.1'&#125;,&#123;label: 'TV 4.2'&#125;]\r\n                        &#125;    \r\n                    ]\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',\r\n                items: [\r\n                    [\r\n                        &#123;\r\n                            label: 'Sports 1',\r\n                            items: [&#123;label: 'Sports 1.1'&#125;,&#123;label: 'Sports 1.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Sports 2',\r\n                            items: [&#123;label: 'Sports 2.1'&#125;,&#123;label: 'Sports 2.2'&#125;]\r\n                        &#125;,\r\n\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'Sports 3',\r\n                            items: [&#123;label: 'Sports 3.1'&#125;,&#123;label: 'Sports 3.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Sports 4',\r\n                            items: [&#123;label: 'Sports 4.1'&#125;,&#123;label: 'Sports 4.2'&#125;]\r\n                        &#125;\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'Sports 5',\r\n                            items: [&#123;label: 'Sports 5.1'&#125;,&#123;label: 'Sports 5.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Sports 6',\r\n                            items: [&#123;label: 'Sports 6.1'&#125;,&#123;label: 'Sports 6.2'&#125;]\r\n                        &#125;\r\n                    ]\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Entertainment', icon: 'fa fa-fw fa-child',\r\n                items: [\r\n                    [\r\n                        &#123;\r\n                            label: 'Entertainment 1',\r\n                            items: [&#123;label: 'Entertainment 1.1'&#125;,&#123;label: 'Entertainment 1.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Entertainment 2',\r\n                            items: [&#123;label: 'Entertainment 2.1'&#125;,&#123;label: 'Entertainment 2.2'&#125;]\r\n                        &#125;\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'Entertainment 3',\r\n                            items: [&#123;label: 'Entertainment 3.1'&#125;,&#123;label: 'Entertainment 3.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Entertainment 4',\r\n                            items: [&#123;label: 'Entertainment 4.1'&#125;,&#123;label: 'Entertainment 4.2'&#125;]\r\n                        &#125;    \r\n                    ]\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Technology', icon: 'fa fa-fw fa-gears',\r\n                items: [\r\n                    [\r\n                        &#123;\r\n                            label: 'Technology 1',\r\n                            items: [&#123;label: 'Technology 1.1'&#125;,&#123;label: 'Technology 1.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Technology 2',\r\n                            items: [&#123;label: 'Technology 2.1'&#125;,&#123;label: 'Technology 2.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Technology 3',\r\n                            items: [&#123;label: 'Technology 3.1'&#125;,&#123;label: 'Technology 3.2'&#125;]\r\n                        &#125;\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'Technology 4',\r\n                            items: [&#123;label: 'Technology 4.1'&#125;,&#123;label: 'Technology 4.2'&#125;]\r\n                        &#125;  \r\n                    ]\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n</p-tabPanel>\r\n</p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/components/megamenu/megamenu.ts":
/*!*************************************************!*\
  !*** ./src/app/components/megamenu/megamenu.ts ***!
  \*************************************************/
/*! exports provided: MegaMenu, MegaMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenu", function() { return MegaMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuModule", function() { return MegaMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MegaMenu = class MegaMenu {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.orientation = 'horizontal';
        this.autoZIndex = true;
        this.baseZIndex = 0;
    }
    onItemMouseEnter(event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        this.activeItem = item;
        if (menuitem.items) {
            let submenu = item.children[0].nextElementSibling;
            if (submenu) {
                if (this.autoZIndex) {
                    submenu.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
                }
                if (this.orientation === 'horizontal') {
                    submenu.style.top = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(item.children[0]) + 'px';
                    submenu.style.left = '0px';
                }
                else if (this.orientation === 'vertical') {
                    submenu.style.top = '0px';
                    submenu.style.left = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(item.children[0]) + 'px';
                }
            }
        }
    }
    onItemMouseLeave(event, link) {
        this.hideTimeout = setTimeout(() => {
            this.activeItem = null;
        }, 1000);
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
        this.activeItem = null;
    }
    getColumnClass(menuitem) {
        let length = menuitem.items ? menuitem.items.length : 0;
        let columnClass;
        switch (length) {
            case 2:
                columnClass = 'ui-g-6';
                break;
            case 3:
                columnClass = 'ui-g-4';
                break;
            case 4:
                columnClass = 'ui-g-3';
                break;
            case 6:
                columnClass = 'ui-g-2';
                break;
            default:
                columnClass = 'ui-g-12';
                break;
        }
        return columnClass;
    }
};
MegaMenu.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MegaMenu.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MegaMenu.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MegaMenu.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MegaMenu.prototype, "orientation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MegaMenu.prototype, "autoZIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MegaMenu.prototype, "baseZIndex", void 0);
MegaMenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-megaMenu',
        template: `
        <div [class]="styleClass" [ngStyle]="style"
            [ngClass]="{'ui-megamenu ui-widget ui-widget-content ui-corner-all':true,'ui-megamenu-horizontal': orientation == 'horizontal','ui-megamenu-vertical': orientation == 'vertical'}">
            <ul class="ui-megamenu-root-list">
                <ng-template ngFor let-category [ngForOf]="model">
                    <li *ngIf="category.separator" class="ui-menu-separator ui-widget-content" [ngClass]="{'ui-helper-hidden': category.visible === false}">
                    <li *ngIf="!category.separator" #item [ngClass]="{'ui-menuitem ui-corner-all':true,'ui-menuitem-active':item==activeItem, 'ui-helper-hidden': category.visible === false}"
                        (mouseenter)="onItemMouseEnter($event, item, category)" (mouseleave)="onItemMouseLeave($event, item)">
   
                        <a *ngIf="!category.routerLink" [href]="category.url||'#'" [attr.target]="category.target" [attr.title]="category.title" [attr.id]="category.id" (click)="itemClick($event, category)" [attr.tabindex]="category.tabindex ? category.tabindex : '0'"
                            [ngClass]="{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':category.disabled}" [ngStyle]="category.style" [class]="category.styleClass">
                            <span class="ui-menuitem-icon" *ngIf="category.icon" [ngClass]="category.icon"></span>
                            <span class="ui-menuitem-text">{{category.label}}</span>
                            <span *ngIf="category.items" class="ui-submenu-icon pi pi-fw" [ngClass]="{'pi-caret-down':orientation=='horizontal','pi-caret-right':orientation=='vertical'}"></span>
                        </a>
                        <a *ngIf="category.routerLink" [routerLink]="category.routerLink" [queryParams]="category.queryParams" [routerLinkActive]="'ui-state-active'" [routerLinkActiveOptions]="category.routerLinkActiveOptions||{exact:false}" [attr.tabindex]="category.tabindex ? category.tabindex : '0'" 
                            [attr.target]="category.target" [attr.title]="category.title" [attr.id]="category.id"
                            (click)="itemClick($event, category)" [ngClass]="{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':category.disabled}" [ngStyle]="category.style" [class]="category.styleClass">
                            <span class="ui-menuitem-icon" *ngIf="category.icon" [ngClass]="category.icon"></span>
                            <span class="ui-menuitem-text">{{category.label}}</span>
                        </a>

                        <div class="ui-megamenu-panel ui-widget-content ui-corner-all ui-shadow" *ngIf="category.items">
                            <div class="ui-g">
                                <ng-template ngFor let-column [ngForOf]="category.items">
                                    <div [class]="getColumnClass(category)">
                                        <ng-template ngFor let-submenu [ngForOf]="column">
                                            <ul class="ui-megamenu-submenu">
                                                <li class="ui-widget-header ui-megamenu-submenu-header ui-corner-all">{{submenu.label}}</li>
                                                <ng-template ngFor let-item [ngForOf]="submenu.items">
                                                    <li *ngIf="item.separator" class="ui-menu-separator ui-widget-content" [ngClass]="{'ui-helper-hidden': item.visible === false}">
                                                    <li *ngIf="!item.separator" class="ui-menuitem ui-corner-all" [ngClass]="{'ui-helper-hidden': item.visible === false}">
                                                        <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link ui-corner-all" [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                                                            [ngClass]="{'ui-state-disabled':item.disabled}" (click)="itemClick($event, item)">
                                                            <span class="ui-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
                                                            <span class="ui-menuitem-text">{{item.label}}</span>
                                                        </a>
                                                        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'ui-state-active'" [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                                                            [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link ui-corner-all" 
                                                             [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id"
                                                            [ngClass]="{'ui-state-disabled':item.disabled}" (click)="itemClick($event, item)">
                                                            <span class="ui-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
                                                            <span class="ui-menuitem-text">{{item.label}}</span>
                                                        </a>
                                                    </li>
                                                </ng-template>
                                            </ul>
                                        </ng-template>
                                    </div>
                                </ng-template>
                            </div>
                        </div>
                    </li>
                </ng-template>
                <li class="ui-menuitem ui-menuitem-custom ui-corner-all" *ngIf="orientation === 'horizontal'">
                    <ng-content></ng-content>
                </li>
            </ul>
        </div>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], MegaMenu);

let MegaMenuModule = class MegaMenuModule {
};
MegaMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [MegaMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: [MegaMenu]
    })
], MegaMenuModule);



/***/ }),

/***/ "./src/app/showcase/components/megamenu/megamenudemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/megamenu/megamenudemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MegaMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuDemoRoutingModule", function() { return MegaMenuDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _megamenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./megamenudemo */ "./src/app/showcase/components/megamenu/megamenudemo.ts");




let MegaMenuDemoRoutingModule = class MegaMenuDemoRoutingModule {
};
MegaMenuDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _megamenudemo__WEBPACK_IMPORTED_MODULE_3__["MegaMenuDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], MegaMenuDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/megamenu/megamenudemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/megamenu/megamenudemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: MegaMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuDemoModule", function() { return MegaMenuDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _megamenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./megamenudemo */ "./src/app/showcase/components/megamenu/megamenudemo.ts");
/* harmony import */ var _megamenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./megamenudemo-routing.module */ "./src/app/showcase/components/megamenu/megamenudemo-routing.module.ts");
/* harmony import */ var _components_megamenu_megamenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/megamenu/megamenu */ "./src/app/components/megamenu/megamenu.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");








let MegaMenuDemoModule = class MegaMenuDemoModule {
};
MegaMenuDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _megamenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["MegaMenuDemoRoutingModule"],
            _components_megamenu_megamenu__WEBPACK_IMPORTED_MODULE_5__["MegaMenuModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
        ],
        declarations: [
            _megamenudemo__WEBPACK_IMPORTED_MODULE_3__["MegaMenuDemo"]
        ]
    })
], MegaMenuDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/megamenu/megamenudemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/megamenu/megamenudemo.ts ***!
  \**************************************************************/
/*! exports provided: MegaMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuDemo", function() { return MegaMenuDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MegaMenuDemo = class MegaMenuDemo {
    ngOnInit() {
        this.items = [
            {
                label: 'TV', icon: 'fa fa-fw fa-check',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                        },
                        {
                            label: 'TV 2',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                        },
                        {
                            label: 'TV 4',
                            items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                        },
                        {
                            label: 'Sports 2',
                            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                        },
                        {
                            label: 'Sports 4',
                            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                        },
                        {
                            label: 'Sports 6',
                            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'fa fa-fw fa-child',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'fa fa-fw fa-gears',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                        },
                        {
                            label: 'Technology 2',
                            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                        },
                        {
                            label: 'Technology 3',
                            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
                        }
                    ]
                ]
            }
        ];
    }
};
MegaMenuDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./megamenudemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/megamenu/megamenudemo.html")
    })
], MegaMenuDemo);



/***/ })

}]);
//# sourceMappingURL=components-megamenu-megamenudemo-module-es2015.js.map