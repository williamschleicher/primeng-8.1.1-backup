(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-contextmenu-contextmenudemo-module~components-table-tabledemo-module~components-t~d4a9e60c"],{

/***/ "./src/app/components/contextmenu/contextmenu.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/contextmenu/contextmenu.ts ***!
  \*******************************************************/
/*! exports provided: ContextMenuSub, ContextMenu, ContextMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuSub", function() { return ContextMenuSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return ContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModule", function() { return ContextMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContextMenuSub = /** @class */ (function () {
    function ContextMenuSub(contextMenu) {
        this.contextMenu = contextMenu;
    }
    Object.defineProperty(ContextMenuSub.prototype, "parentActive", {
        get: function () {
            return this._parentActive;
        },
        set: function (value) {
            this._parentActive = value;
            if (!value) {
                this.activeItem = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    ContextMenuSub.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        this.activeItem = item;
        if (menuitem.disabled) {
            return;
        }
        var nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            var sublist = nextElement.children[0];
            sublist.style.zIndex = ++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex;
            this.position(sublist, item);
        }
    };
    ContextMenuSub.prototype.itemClick = function (event, item) {
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
    };
    ContextMenuSub.prototype.listClick = function (event) {
        this.activeItem = null;
    };
    ContextMenuSub.prototype.position = function (sublist, item) {
        this.containerOffset = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOffset(item.parentElement);
        var viewport = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getViewport();
        var sublistWidth = sublist.offsetParent ? sublist.offsetWidth : _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getHiddenElementOuterWidth(sublist);
        var itemOuterWidth = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(item.children[0]);
        var itemOuterHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(item.children[0]);
        var sublistHeight = sublist.offsetHeight ? sublist.offsetHeight : _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getHiddenElementOuterHeight(sublist);
        if ((parseInt(this.containerOffset.top) + itemOuterHeight + sublistHeight) > (viewport.height - _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].calculateScrollbarHeight())) {
            sublist.style.bottom = '0px';
        }
        else {
            sublist.style.top = '0px';
        }
        if ((parseInt(this.containerOffset.left) + itemOuterWidth + sublistWidth) > (viewport.width - _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].calculateScrollbarWidth())) {
            sublist.style.left = -sublistWidth + 'px';
        }
        else {
            sublist.style.left = itemOuterWidth + 'px';
        }
    };
    ContextMenuSub.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ContextMenu; }),] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenuSub.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContextMenuSub.prototype, "root", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ContextMenuSub.prototype, "parentActive", null);
    ContextMenuSub = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-contextMenuSub',
            template: "\n        <ul [ngClass]=\"{'ui-widget-content ui-corner-all ui-submenu-list ui-shadow':!root}\" class=\"ui-menu-list\" (click)=\"listClick($event)\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #item [ngClass]=\"{'ui-menuitem ui-corner-all':true,'ui-menuitem-active':item==activeItem,'ui-helper-hidden': child.visible === false}\"\n                    (mouseenter)=\"onItemMouseEnter($event,item,child)\">\n                    <a *ngIf=\"!child.routerLink\" [href]=\"child.url||'#'\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.tabindex ? child.tabindex : '0'\" (click)=\"itemClick($event, child)\"\n                        [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\">\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-state-active'\"\n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.tabindex ? child.tabindex : '0'\"\n                        (click)=\"itemClick($event, child)\" [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\"\n                        [ngStyle]=\"child.style\" [class]=\"child.styleClass\">\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <p-contextMenuSub class=\"ui-submenu\" [parentActive]=\"item==activeItem\" [item]=\"child\" *ngIf=\"child.items\"></p-contextMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ContextMenu; }))),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ContextMenuSub);
    return ContextMenuSub;
}());

var ContextMenu = /** @class */ (function () {
    function ContextMenu(el, renderer, zone) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.triggerEvent = 'contextmenu';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ContextMenu.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.global) {
            this.triggerEventListener = this.renderer.listen('document', this.triggerEvent, function (event) {
                _this.show(event);
                event.preventDefault();
            });
        }
        else if (this.target) {
            this.triggerEventListener = this.renderer.listen(this.target, this.triggerEvent, function (event) {
                _this.show(event);
                event.preventDefault();
                event.stopPropagation();
            });
        }
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.containerViewChild.nativeElement);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.containerViewChild.nativeElement, this.appendTo);
        }
    };
    ContextMenu.prototype.show = function (event) {
        this.position(event);
        this.moveOnTop();
        this.containerViewChild.nativeElement.style.display = 'block';
        this.parentActive = true;
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].fadeIn(this.containerViewChild.nativeElement, 250);
        this.bindGlobalListeners();
        if (event) {
            event.preventDefault();
        }
        this.onShow.emit();
    };
    ContextMenu.prototype.hide = function () {
        this.containerViewChild.nativeElement.style.display = 'none';
        this.parentActive = false;
        this.unbindGlobalListeners();
        this.onHide.emit();
    };
    ContextMenu.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
        }
    };
    ContextMenu.prototype.toggle = function (event) {
        if (this.containerViewChild.nativeElement.offsetParent)
            this.hide();
        else
            this.show(event);
    };
    ContextMenu.prototype.position = function (event) {
        if (event) {
            var left = event.pageX + 1;
            var top_1 = event.pageY + 1;
            var width = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetWidth : _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getHiddenElementOuterWidth(this.containerViewChild.nativeElement);
            var height = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetHeight : _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getHiddenElementOuterHeight(this.containerViewChild.nativeElement);
            var viewport = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getViewport();
            //flip
            if (left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }
            //flip
            if (top_1 + height - document.body.scrollTop > viewport.height) {
                top_1 -= height;
            }
            //fit
            if (left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }
            //fit
            if (top_1 < document.body.scrollTop) {
                top_1 = document.body.scrollTop;
            }
            this.containerViewChild.nativeElement.style.left = left + 'px';
            this.containerViewChild.nativeElement.style.top = top_1 + 'px';
        }
    };
    ContextMenu.prototype.bindGlobalListeners = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
                if (_this.containerViewChild.nativeElement.offsetParent && event.button !== 2) {
                    _this.hide();
                }
            });
        }
        this.zone.runOutsideAngular(function () {
            if (!_this.windowResizeListener) {
                _this.windowResizeListener = _this.onWindowResize.bind(_this);
                window.addEventListener('resize', _this.windowResizeListener);
            }
        });
    };
    ContextMenu.prototype.unbindGlobalListeners = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
        if (this.windowResizeListener) {
            window.removeEventListener('resize', this.windowResizeListener);
            this.windowResizeListener = null;
        }
    };
    ContextMenu.prototype.onWindowResize = function (event) {
        if (this.containerViewChild.nativeElement.offsetParent) {
            this.hide();
        }
    };
    ContextMenu.prototype.ngOnDestroy = function () {
        this.unbindGlobalListeners();
        if (this.triggerEventListener) {
            this.triggerEventListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
        }
    };
    ContextMenu.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ContextMenu.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContextMenu.prototype, "global", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenu.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenu.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ContextMenu.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenu.prototype, "appendTo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContextMenu.prototype, "autoZIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ContextMenu.prototype, "baseZIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ContextMenu.prototype, "triggerEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ContextMenu.prototype, "onShow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ContextMenu.prototype, "onHide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContextMenu.prototype, "containerViewChild", void 0);
    ContextMenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-contextMenu',
            template: "\n        <div #container [ngClass]=\"'ui-contextmenu ui-widget ui-widget-content ui-corner-all ui-shadow'\"\n            [class]=\"styleClass\" [ngStyle]=\"style\">\n            <p-contextMenuSub [item]=\"model\" [parentActive]=\"parentActive\" root=\"root\"></p-contextMenuSub>\n        </div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ContextMenu);
    return ContextMenu;
}());

var ContextMenuModule = /** @class */ (function () {
    function ContextMenuModule() {
    }
    ContextMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            exports: [ContextMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [ContextMenu, ContextMenuSub]
        })
    ], ContextMenuModule);
    return ContextMenuModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-contextmenu-contextmenudemo-module~components-table-tabledemo-module~components-t~d4a9e60c-es5.js.map