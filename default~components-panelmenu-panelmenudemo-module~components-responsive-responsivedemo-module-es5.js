(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-panelmenu-panelmenudemo-module~components-responsive-responsivedemo-module"],{

/***/ "./src/app/components/panelmenu/panelmenu.ts":
/*!***************************************************!*\
  !*** ./src/app/components/panelmenu/panelmenu.ts ***!
  \***************************************************/
/*! exports provided: BasePanelMenuItem, PanelMenuSub, PanelMenu, PanelMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePanelMenuItem", function() { return BasePanelMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMenuSub", function() { return PanelMenuSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMenu", function() { return PanelMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMenuModule", function() { return PanelMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BasePanelMenuItem = /** @class */ (function () {
    function BasePanelMenuItem(ref) {
        this.ref = ref;
    }
    BasePanelMenuItem.prototype.handleClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        item.expanded = !item.expanded;
        this.ref.detectChanges();
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    };
    BasePanelMenuItem.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    return BasePanelMenuItem;
}());

var PanelMenuSub = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PanelMenuSub, _super);
    function PanelMenuSub(ref) {
        return _super.call(this, ref) || this;
    }
    PanelMenuSub.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelMenuSub.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PanelMenuSub.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PanelMenuSub.prototype, "transitionOptions", void 0);
    PanelMenuSub = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-panelMenuSub',
            template: "\n        <ul class=\"ui-submenu-list\" [@submenu]=\"expanded ? {value: 'visible', params: {transitionParams: transitionOptions, height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}\">\n            <ng-template ngFor let-child [ngForOf]=\"item.items\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\">\n                <li *ngIf=\"!child.separator\" class=\"ui-menuitem ui-corner-all\" [ngClass]=\"child.styleClass\" [class.ui-helper-hidden]=\"child.visible === false\" [ngStyle]=\"child.style\">\n                    <a *ngIf=\"!child.routerLink\" [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.tabindex]=\"item.expanded ? null : child.tabindex ? child.tabindex : '-1'\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled, 'ui-state-active': child.expanded}\" \n                        (click)=\"handleClick($event,child)\" [attr.target]=\"child.target\" [attr.title]=\"child.title\">\n                        <span class=\"ui-panelmenu-icon pi pi-fw\" [ngClass]=\"{'pi-caret-right':!child.expanded,'pi-caret-down':child.expanded}\" *ngIf=\"child.items\"></span\n                        ><span class=\"ui-menuitem-icon\" [ngClass]=\"child.icon\" *ngIf=\"child.icon\"></span\n                        ><span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link ui-corner-all\" \n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" [attr.tabindex]=\"item.expanded ? null : child.tabindex ? child.tabindex : '-1'\" [attr.id]=\"child.id\"\n                        (click)=\"handleClick($event,child)\" [attr.target]=\"child.target\" [attr.title]=\"child.title\">\n                        <span class=\"ui-panelmenu-icon pi pi-fw\" [ngClass]=\"{'pi-caret-right':!child.expanded,'pi-caret-down':child.expanded}\" *ngIf=\"child.items\"></span\n                        ><span class=\"ui-menuitem-icon\" [ngClass]=\"child.icon\" *ngIf=\"child.icon\"></span\n                        ><span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <p-panelMenuSub [item]=\"child\" [expanded]=\"child.expanded\" [transitionOptions]=\"transitionOptions\" *ngIf=\"child.items\"></p-panelMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('submenu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '{{height}}'
                    }), { params: { height: '0' } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}'))
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PanelMenuSub);
    return PanelMenuSub;
}(BasePanelMenuItem));

var PanelMenu = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PanelMenu, _super);
    function PanelMenu(ref) {
        var _this = _super.call(this, ref) || this;
        _this.multiple = true;
        _this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        return _this;
    }
    PanelMenu.prototype.collapseAll = function () {
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.expanded) {
                item.expanded = false;
            }
        }
    };
    PanelMenu.prototype.handleClick = function (event, item) {
        if (!this.multiple) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var modelItem = _a[_i];
                if (item !== modelItem && modelItem.expanded) {
                    modelItem.expanded = false;
                }
            }
        }
        this.animating = true;
        _super.prototype.handleClick.call(this, event, item);
    };
    PanelMenu.prototype.onToggleDone = function () {
        this.animating = false;
    };
    PanelMenu.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PanelMenu.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelMenu.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PanelMenu.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PanelMenu.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PanelMenu.prototype, "transitionOptions", void 0);
    PanelMenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-panelMenu',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-panelmenu ui-widget'\">\n            <ng-container *ngFor=\"let item of model;let f=first;let l=last;\">\n                <div class=\"ui-panelmenu-panel\" [ngClass]=\"{'ui-helper-hidden': item.visible === false}\">\n                    <div [ngClass]=\"{'ui-widget ui-panelmenu-header ui-state-default':true,'ui-corner-top':f,'ui-corner-bottom':l&&!item.expanded,\n                    'ui-state-active':item.expanded,'ui-state-disabled':item.disabled}\" [class]=\"item.styleClass\" [ngStyle]=\"item.style\">\n                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" (click)=\"handleClick($event,item)\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\"\n                           [attr.target]=\"item.target\" [attr.title]=\"item.title\" class=\"ui-panelmenu-header-link\">\n                        <span *ngIf=\"item.items\" class=\"ui-panelmenu-icon pi pi-fw\" [ngClass]=\"{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}\"></span\n                        ><span class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span\n                        ><span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\"\n                           (click)=\"handleClick($event,item)\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" class=\"ui-panelmenu-header-link\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\">\n                        <span *ngIf=\"item.items\" class=\"ui-panelmenu-icon pi pi-fw\" [ngClass]=\"{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}\"></span\n                        ><span class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span\n                        ><span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </div>\n                    <div *ngIf=\"item.items\" class=\"ui-panelmenu-content-wrapper\" [@rootItem]=\"item.expanded ? {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}\"  (@rootItem.done)=\"onToggleDone()\"\n                         [ngClass]=\"{'ui-panelmenu-content-wrapper-overflown': !item.expanded||animating}\">\n                        <div class=\"ui-panelmenu-content ui-widget-content\">\n                            <p-panelMenuSub [item]=\"item\" [expanded]=\"true\" [transitionOptions]=\"transitionOptions\" class=\"ui-panelmenu-root-submenu\"></p-panelMenuSub>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rootItem', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '{{height}}'
                    }), { params: { height: '0' } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}'))
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PanelMenu);
    return PanelMenu;
}(BasePanelMenuItem));

var PanelMenuModule = /** @class */ (function () {
    function PanelMenuModule() {
    }
    PanelMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            exports: [PanelMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [PanelMenu, PanelMenuSub]
        })
    ], PanelMenuModule);
    return PanelMenuModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-panelmenu-panelmenudemo-module~components-responsive-responsivedemo-module-es5.js.map