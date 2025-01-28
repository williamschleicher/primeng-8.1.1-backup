(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tieredmenu-tieredmenudemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/tieredmenu/tieredmenudemo.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/tieredmenu/tieredmenudemo.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Tiered Menu</span>\r\n        <span>TieredMenu displays submenus in nested overlays.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <p-tieredMenu [model]=\"items\"></p-tieredMenu>\r\n\r\n    <h3>Popup</h3>\r\n    <button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\r\n    <p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"></p-tieredMenu>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TieredMenuModule&#125; from 'primeng/tieredmenu';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>TieredMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>TieredMenu requires nested menuitems as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tieredMenu [model]=\"items\"&gt;&lt;/p-tieredMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TieredMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Popup Mode</h3>\r\n            <p>Menu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \r\n                    from the anchor element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"fa fa fa-fw fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n                example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tieredMenu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"fa fa fa-fw fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>popup</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if menu would displayed as a popup.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable\r\n                                of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>225ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>195ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>toggle</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Toggles the visibility of the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>show</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Displays the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hide</td>\r\n                            <td>-</td>\r\n                            <td>Hides the popup menu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>ui-tieredmenu</td>\r\n                        <td>Container element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menu-list</td>\r\n                        <td>List element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem</td>\r\n                        <td>Menuitem element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-text</td>\r\n                        <td>Label of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-icon</td>\r\n                        <td>Icon of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-submenu-icon</td>\r\n                        <td>Arrow icon of a submenu.</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tieredmenu\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\r\n&lt;p-tieredMenu [model]=\"items\"&gt;&lt;/p-tieredMenu&gt;\r\n\r\n&lt;h3&gt;Popup&lt;/h3&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n&lt;p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TieredMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                icon: 'pi pi-fw pi-file',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;separator:true&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Help',\r\n                icon: 'pi pi-fw pi-question',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Contents'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Search', \r\n                        icon: 'pi pi-fw pi-search', \r\n                        items: [\r\n                            &#123;\r\n                                label: 'Text', \r\n                                items: [\r\n                                    &#123;\r\n                                        label: 'Workspace'\r\n                                    &#125;\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'File'\r\n                            &#125;\r\n                    ]&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Actions',\r\n                icon: 'pi pi-fw pi-cog',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Edit',\r\n                        icon: 'pi pi-fw pi-pencil',\r\n                        items: [\r\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\r\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Other',\r\n                        icon: 'pi pi-fw pi-tags',\r\n                        items: [\r\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;separator:true&#125;,\r\n            &#123;\r\n                label: 'Quit', icon: 'pi pi-fw pi-times'\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/components/tieredmenu/tieredmenu.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tieredmenu/tieredmenu.ts ***!
  \*****************************************************/
/*! exports provided: TieredMenuSub, TieredMenu, TieredMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuSub", function() { return TieredMenuSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenu", function() { return TieredMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuModule", function() { return TieredMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TieredMenuSub = class TieredMenuSub {
    constructor(tieredMenu, cf, renderer) {
        this.cf = cf;
        this.renderer = renderer;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.tieredMenu = tieredMenu;
    }
    get parentActive() {
        return this._parentActive;
    }
    set parentActive(value) {
        this._parentActive = value;
        if (!value) {
            this.activeItem = null;
        }
    }
    ngAfterViewInit() {
        if (this.root && !this.tieredMenu.popup) {
            this.bindDocumentClickListener();
        }
    }
    onItemMouseEnter(event, item, menuitem) {
        if (this.tieredMenu.popup || (!this.root || this.activeItem)) {
            if (menuitem.disabled) {
                return;
            }
            this.activeItem = item;
            let nextElement = item.children[0].nextElementSibling;
            if (nextElement) {
                let sublist = nextElement.children[0];
                if (this.autoZIndex) {
                    sublist.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex));
                }
                sublist.style.zIndex = String(++_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
                sublist.style.top = '0px';
                sublist.style.left = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(item.children[0]) + 'px';
            }
        }
    }
    itemClick(event, item, menuitem) {
        if (menuitem.disabled) {
            event.preventDefault();
            return true;
        }
        if (!menuitem.url) {
            event.preventDefault();
        }
        if (menuitem.command) {
            menuitem.command({
                originalEvent: event,
                item: item
            });
        }
        if (this.root && !this.activeItem && !this.tieredMenu.popup) {
            this.activeItem = item;
            let nextElement = item.children[0].nextElementSibling;
            if (nextElement) {
                let sublist = nextElement.children[0];
                if (this.autoZIndex) {
                    sublist.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex));
                }
                sublist.style.zIndex = String(++_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
                sublist.style.top = '0px';
                sublist.style.left = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(item.children[0]) + 'px';
                this.rootItemClick = true;
            }
        }
        if (!menuitem.items && this.tieredMenu.popup) {
            this.tieredMenu.hide();
        }
    }
    listClick(event) {
        if (!this.rootItemClick) {
            this.activeItem = null;
        }
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (!this.rootItemClick) {
                    this.parentActive = false;
                    this.activeItem = null;
                }
                this.rootItemClick = false;
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    ngOnDestroy() {
        if (this.root && !this.tieredMenu.popup) {
            this.unbindDocumentClickListener();
        }
    }
};
TieredMenuSub.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TieredMenu),] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TieredMenuSub.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TieredMenuSub.prototype, "root", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TieredMenuSub.prototype, "autoZIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TieredMenuSub.prototype, "baseZIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], TieredMenuSub.prototype, "parentActive", null);
TieredMenuSub = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-tieredMenuSub',
        template: `
        <ul [ngClass]="{'ui-widget-content ui-corner-all ui-shadow ui-submenu-list': !root}" (click)="listClick($event)">
            <ng-template ngFor let-child [ngForOf]="(root ? item : item.items)">
                <li *ngIf="child.separator" class="ui-menu-separator ui-widget-content" [ngClass]="{'ui-helper-hidden': child.visible === false}">
                <li *ngIf="!child.separator" #listItem [ngClass]="{'ui-menuitem ui-widget ui-corner-all':true,'ui-menuitem-active':listItem==activeItem,'ui-helper-hidden': child.visible === false}"
                    [class]="child.styleClass" [ngStyle]="child.style"
                    (mouseenter)="onItemMouseEnter($event, listItem, child)">
                    <a *ngIf="!child.routerLink" [attr.href]="child.url" class="ui-menuitem-link ui-corner-all" [attr.target]="child.target" [attr.tabindex]="child.tabindex ? child.tabindex : '0'" [attr.title]="child.title" [attr.id]="child.id" 
                        [ngClass]="{'ui-state-disabled':child.disabled}" (click)="itemClick($event, listItem, child)">
                        <span class="ui-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                        <span class="ui-submenu-icon pi pi-fw pi-caret-right" *ngIf="child.items"></span>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [queryParams]="child.queryParams" [routerLinkActive]="'ui-state-active'" [attr.tabindex]="child.tabindex ? child.tabindex : '0'"
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}"
                        class="ui-menuitem-link ui-corner-all" [attr.target]="child.target" [attr.title]="child.title" [attr.id]="child.id"
                        [ngClass]="{'ui-state-disabled':child.disabled}" (click)="itemClick($event, listItem, child)">
                        
                        <span class="ui-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                        <span class="ui-submenu-icon pi pi-fw pi-caret-right" *ngIf="child.items"></span>
                    </a>
                    <p-tieredMenuSub class="ui-submenu" [item]="child" *ngIf="child.items" [baseZIndex]="baseZIndex" [parentActive]="listItem==activeItem" [autoZIndex]="autoZIndex"></p-tieredMenuSub>
                </li>
            </ng-template>
        </ul>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TieredMenu))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], TieredMenuSub);

let TieredMenu = class TieredMenu {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
    }
    toggle(event) {
        if (this.visible)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    }
    show(event) {
        this.target = event.currentTarget;
        this.visible = true;
        this.parentActive = true;
        this.preventDocumentDefault = true;
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                if (this.popup) {
                    this.container = event.element;
                    this.moveOnTop();
                    this.appendOverlay();
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].absolutePosition(this.container, this.target);
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                }
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.container, this.appendTo);
        }
    }
    restoreOverlayAppend() {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    }
    moveOnTop() {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex));
        }
    }
    hide() {
        this.visible = false;
        this.parentActive = false;
    }
    onWindowResize() {
        this.hide();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if (!this.preventDocumentDefault && this.popup) {
                    this.hide();
                }
                this.preventDocumentDefault = false;
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.preventDocumentDefault = false;
        this.target = null;
    }
    ngOnDestroy() {
        if (this.popup) {
            this.restoreOverlayAppend();
            this.onOverlayHide();
        }
    }
};
TieredMenu.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TieredMenu.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TieredMenu.prototype, "popup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TieredMenu.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TieredMenu.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TieredMenu.prototype, "appendTo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TieredMenu.prototype, "autoZIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TieredMenu.prototype, "baseZIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TieredMenu.prototype, "showTransitionOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TieredMenu.prototype, "hideTransitionOptions", void 0);
TieredMenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-tieredMenu',
        template: `
        <div [ngClass]="{'ui-tieredmenu ui-widget ui-widget-content ui-corner-all':true, 'ui-tieredmenu-dynamic ui-shadow':popup}" [class]="styleClass" [ngStyle]="style"
            [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" [@.disabled]="popup !== true" (@overlayAnimation.start)="onOverlayAnimationStart($event)" *ngIf="!popup || visible">
            <p-tieredMenuSub [item]="model" root="root" [parentActive]="parentActive" [baseZIndex]="baseZIndex" [autoZIndex]="autoZIndex"></p-tieredMenuSub>
        </div>
    `,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateY(5%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))
            ])
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], TieredMenu);

let TieredMenuModule = class TieredMenuModule {
};
TieredMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [TieredMenu, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        declarations: [TieredMenu, TieredMenuSub]
    })
], TieredMenuModule);



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TieredMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemoRoutingModule", function() { return TieredMenuDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tieredmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tieredmenudemo */ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts");




let TieredMenuDemoRoutingModule = class TieredMenuDemoRoutingModule {
};
TieredMenuDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _tieredmenudemo__WEBPACK_IMPORTED_MODULE_3__["TieredMenuDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], TieredMenuDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: TieredMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemoModule", function() { return TieredMenuDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tieredmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tieredmenudemo */ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts");
/* harmony import */ var _tieredmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tieredmenudemo-routing.module */ "./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts");
/* harmony import */ var _components_tieredmenu_tieredmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tieredmenu/tieredmenu */ "./src/app/components/tieredmenu/tieredmenu.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");









let TieredMenuDemoModule = class TieredMenuDemoModule {
};
TieredMenuDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tieredmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["TieredMenuDemoRoutingModule"],
            _components_tieredmenu_tieredmenu__WEBPACK_IMPORTED_MODULE_5__["TieredMenuModule"],
            _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _tieredmenudemo__WEBPACK_IMPORTED_MODULE_3__["TieredMenuDemo"]
        ]
    })
], TieredMenuDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo.ts ***!
  \******************************************************************/
/*! exports provided: TieredMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemo", function() { return TieredMenuDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TieredMenuDemo = class TieredMenuDemo {
    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [{
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { separator: true },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            },
            { separator: true },
            {
                label: 'Quit', icon: 'pi pi-fw pi-times'
            }
        ];
    }
};
TieredMenuDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./tieredmenudemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/tieredmenu/tieredmenudemo.html")
    })
], TieredMenuDemo);



/***/ })

}]);
//# sourceMappingURL=components-tieredmenu-tieredmenudemo-module-es2015.js.map