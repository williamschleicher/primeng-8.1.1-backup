(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-panel-paneldemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/panel/paneldemo.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/panel/paneldemo.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Panel</span>\r\n        <span>Panel is a grouping component with the optional content toggle feature.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <p-panel header=\"Godfather I\" [toggleable]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    </p-panel>\r\n\r\n    <p-panel>\r\n        <p-header>\r\n            <div class=\"ui-helper-clearfix\">\r\n                <span class=\"ui-panel-title\" style=\"display:inline-block;margin-top:.4em\">Custom Header</span>\r\n\r\n                <p-splitButton [style]=\"{'float':'right'}\" label=\"Save\" icon=\"pi pi-check\" (onClick)=\"save()\" [model]=\"items\"></p-splitButton>\r\n            </div>\r\n        </p-header>\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n        <p-footer>\r\n            <button pButton type=\"button\" icon=\"pi pi-plus\" label=\"New\" class=\"ui-button-info\" style=\"margin-right: .25em\"></button>\r\n            <button pButton type=\"button\" icon=\"pi pi-search\" label=\"View\" class=\"ui-button-success\"></button>\r\n        </p-footer>\r\n    </p-panel>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;PanelModule&#125; from 'primeng/panel';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Panel is defined with p-panel element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panel header=\"Title\"&gt;\r\n    Content\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n            <h3>Toggleable</h3>\r\n            <p>Content of the panel can be expanded and collapsed using toggleable option, default state is defined with collapsed option. By default, toggle icon\r\n                is used to toggle the contents whereas setting toggler to \"header\" enables clicking anywhere in the header to trigger a toggle.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panel header=\"Title\" [toggleable]=\"true\"&gt;\r\n    Content\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Header and Footer Content</h3>\r\n            <p>Header and Footers sections can be customized using p-header and p-footer components.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panel &gt;\r\n    &lt;p-header&gt;\r\n        Header content here\r\n    &lt;/p-header&gt;\r\n    Body Content\r\n    &lt;p-footer&gt;\r\n        Footer content here\r\n    &lt;/p-footer&gt;\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the toggle animation can be customized using the transitionOptions property with a default value as <b>400ms cubic-bezier(0.86, 0, 0.07, 1)</b>, \r\n                example below disables the animation altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panel [transitionOptions]=\"'0ms'\"&gt;\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of the panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>toggleable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if content of panel can be expanded and collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapsed</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines the initial state of panel content, supports one or two-way binding as well.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandIcon</td>\r\n                            <td>string</td>\r\n                            <td>pi pi-plus</td>\r\n                            <td>Expand icon of the toggle button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapseIcon</td>\r\n                            <td>string</td>\r\n                            <td>pi pi-minus</td>\r\n                            <td>Collapsed icon of the toggle button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showHeader</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Specifies if header of panel cannot be displayed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>transitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>400ms cubic-bezier(0.86, 0, 0.07, 1)</td>\r\n                            <td>Transition options of the animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>toggler</td>\r\n                            <td>string</td>\r\n                            <td>icon</td>\r\n                            <td>Specifies the toggler element to toggle the panel content, valid values are \"icon\" and \"header\".</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onBeforeToggle</td>\r\n                            <td>event.originalEvent: browser event<br>\r\n                                event.collapsed: state as a boolean</td>\r\n                            <td>Callback to invoke before content toggle.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onAfterToggle</td>\r\n                            <td>event.originalEvent: browser event<br>\r\n                                event.collapsed: state as a boolean</td>\r\n                            <td>Callback to invoke after content toggle.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-panel</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panel-titlebar</td>\r\n                            <td>Header section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panel-title</td>\r\n                            <td>Title text of panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panel-titlebar-toggler</td>\r\n                            <td>Toggle icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panel-content</td>\r\n                            <td>Content of panel.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n        <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panel\" class=\"btn-viewsource\" target=\"_blank\">\r\n            <i class=\"fa fa-github\"></i>\r\n            <span>View on GitHub</span>\r\n        </a>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-panel header=\"Godfather I\" [toggleable]=\"true\" [style]=\"&#123;'margin-bottom':'20px'&#125;\"&gt;\r\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n&lt;/p-panel&gt;\r\n\r\n&lt;p-panel&gt;\r\n    &lt;p-header&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px\"&gt;Custom Header&lt;/span&gt;\r\n            &lt;p-splitButton [style]=\"&#123;'float':'right'&#125;\" label=\"Save\" icon=\"pi pi-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-header&gt;\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    &lt;p-footer&gt;\r\n        &lt;button pButton type=\"button\" icon=\"pi pi-plus\" label=\"New\" class=\"ui-button-info\" style=\"margin-right: .25em\"&gt;&lt;/button&gt;\r\n        &lt;button pButton type=\"button\" icon=\"pi pi-search\" label=\"View\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/panel/panel.ts":
/*!*******************************************!*\
  !*** ./src/app/components/panel/panel.ts ***!
  \*******************************************/
/*! exports provided: Panel, PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let idx = 0;
let Panel = class Panel {
    constructor(el) {
        this.el = el;
        this.collapsed = false;
        this.expandIcon = 'pi pi-plus';
        this.collapseIcon = 'pi pi-minus';
        this.showHeader = true;
        this.toggler = "icon";
        this.collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = `ui-panel-${idx++}`;
    }
    onHeaderClick(event) {
        if (this.toggler === 'header') {
            this.toggle(event);
        }
    }
    onIconClick(event) {
        if (this.toggler === 'icon') {
            this.toggle(event);
        }
    }
    toggle(event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.toggleable) {
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
        }
        event.preventDefault();
    }
    expand(event) {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    }
    collapse(event) {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onToggleDone(event) {
        this.animating = false;
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
    }
};
Panel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Panel.prototype, "toggleable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Panel.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Panel.prototype, "collapsed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Panel.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Panel.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Panel.prototype, "expandIcon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Panel.prototype, "collapseIcon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Panel.prototype, "showHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Panel.prototype, "toggler", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Panel.prototype, "collapsedChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Panel.prototype, "onBeforeToggle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Panel.prototype, "onAfterToggle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Panel.prototype, "transitionOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_common_shared__WEBPACK_IMPORTED_MODULE_3__["Footer"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Panel.prototype, "footerFacet", void 0);
Panel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-panel',
        template: `
        <div [attr.id]="id" [ngClass]="'ui-panel ui-widget ui-widget-content ui-corner-all'" [ngStyle]="style" [class]="styleClass">
            <div [ngClass]="{'ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all': true, 'ui-panel-titlebar-clickable': (toggleable && toggler === 'header')}" 
                *ngIf="showHeader" (click)="onHeaderClick($event)">
                <span class="ui-panel-title" *ngIf="header">{{header}}</span>
                <ng-content select="p-header"></ng-content>
                <a *ngIf="toggleable" [attr.id]="id + '-label'" class="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" tabindex="0"
                    (click)="onIconClick($event)" (keydown.enter)="onIconClick($event)" [attr.aria-controls]="id + '-content'" role="tab" [attr.aria-expanded]="!collapsed">
                    <span [class]="collapsed ? expandIcon : collapseIcon"></span>
                </a>
            </div>
            <div [attr.id]="id + '-content'" class="ui-panel-content-wrapper" [@panelContent]="collapsed ? {value: 'hidden', params: {transitionParams: animating ? transitionOptions : '0ms', height: '0', opacity:'0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*', opacity: '1'}}" (@panelContent.done)="onToggleDone($event)"
                [ngClass]="{'ui-panel-content-wrapper-overflown': collapsed||animating}"
                role="region" [attr.aria-hidden]="collapsed" [attr.aria-labelledby]="id + '-label'">
                <div class="ui-panel-content ui-widget-content">
                    <ng-content></ng-content>
                </div>
                
                <div class="ui-panel-footer ui-widget-content" *ngIf="footerFacet">
                    <ng-content select="p-footer"></ng-content>
                </div>
            </div>
        </div>
    `,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('panelContent', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    height: '0',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    height: '{{height}}',
                    opacity: '{{opacity}}'
                }), { params: { height: '0', opacity: '0' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    height: '*',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}'))
            ])
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], Panel);

let PanelModule = class PanelModule {
};
PanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [Panel, _common_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        declarations: [Panel]
    })
], PanelModule);



/***/ }),

/***/ "./src/app/showcase/components/panel/paneldemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/panel/paneldemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PanelDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemoRoutingModule", function() { return PanelDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _paneldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paneldemo */ "./src/app/showcase/components/panel/paneldemo.ts");




let PanelDemoRoutingModule = class PanelDemoRoutingModule {
};
PanelDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _paneldemo__WEBPACK_IMPORTED_MODULE_3__["PanelDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], PanelDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/panel/paneldemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/panel/paneldemo.module.ts ***!
  \***************************************************************/
/*! exports provided: PanelDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemoModule", function() { return PanelDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _paneldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paneldemo */ "./src/app/showcase/components/panel/paneldemo.ts");
/* harmony import */ var _paneldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paneldemo-routing.module */ "./src/app/showcase/components/panel/paneldemo-routing.module.ts");
/* harmony import */ var _components_panel_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/panel/panel */ "./src/app/components/panel/panel.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_splitbutton_splitbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/splitbutton/splitbutton */ "./src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");










let PanelDemoModule = class PanelDemoModule {
};
PanelDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _paneldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["PanelDemoRoutingModule"],
            _components_panel_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"],
            _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            _components_splitbutton_splitbutton__WEBPACK_IMPORTED_MODULE_7__["SplitButtonModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _paneldemo__WEBPACK_IMPORTED_MODULE_3__["PanelDemo"]
        ]
    })
], PanelDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/panel/paneldemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/panel/paneldemo.ts ***!
  \********************************************************/
/*! exports provided: PanelDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemo", function() { return PanelDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");



let PanelDemo = class PanelDemo {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
        this.items = [
            { label: 'Update', icon: 'fa fa-fw fa-refresh', command: () => {
                    this.update();
                } },
            { label: 'Delete', icon: 'fa fa-fw fa-close', command: () => {
                    this.delete();
                } },
            { label: 'Angular.io', icon: 'fa fa-fw fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa fa-fw fa-paint-brush', routerLink: ['/theming'] }
        ];
    }
    save() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    }
    update() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    }
    delete() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    }
};
PanelDemo.ctorParameters = () => [
    { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
PanelDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./paneldemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/panel/paneldemo.html"),
        providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], PanelDemo);



/***/ })

}]);
//# sourceMappingURL=components-panel-paneldemo-module-es2015.js.map