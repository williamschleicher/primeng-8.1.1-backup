(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-panel-paneldemo-module~components-responsive-responsivedemo-module~components-spl~befe5fcf"],{

/***/ "./src/app/components/splitbutton/splitbutton.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/splitbutton/splitbutton.ts ***!
  \*******************************************************/
/*! exports provided: SplitButton, SplitButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButton", function() { return SplitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonModule", function() { return SplitButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SplitButton = /** @class */ (function () {
    function SplitButton(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.iconPos = 'left';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropdownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.overlayVisible = false;
    }
    SplitButton.prototype.onDefaultButtonClick = function (event) {
        this.onClick.emit(event);
    };
    SplitButton.prototype.itemClick = function (event, item) {
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
        this.overlayVisible = false;
    };
    SplitButton.prototype.show = function () {
        this.overlayVisible = !this.overlayVisible;
    };
    SplitButton.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.appendOverlay();
                this.overlay.style.zIndex = String(++_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    SplitButton.prototype.onDropdownButtonClick = function (event) {
        this.onDropdownClick.emit(event);
        this.dropdownClick = true;
        this.show();
    };
    SplitButton.prototype.alignOverlay = function () {
        if (this.appendTo)
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);
        else
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
    };
    SplitButton.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.overlay, this.appendTo);
            this.overlay.style.minWidth = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWidth(this.el.nativeElement.children[0]) + 'px';
        }
    };
    SplitButton.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    SplitButton.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (_this.dropdownClick) {
                    _this.dropdownClick = false;
                }
                else {
                    _this.overlayVisible = false;
                    _this.unbindDocumentClickListener();
                    _this.cd.markForCheck();
                }
            });
        }
    };
    SplitButton.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    SplitButton.prototype.bindDocumentResizeListener = function () {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    };
    SplitButton.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    SplitButton.prototype.onWindowResize = function () {
        this.overlayVisible = false;
    };
    SplitButton.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.overlay = null;
    };
    SplitButton.prototype.ngOnDestroy = function () {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    SplitButton.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SplitButton.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SplitButton.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SplitButton.prototype, "iconPos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SplitButton.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SplitButton.prototype, "onClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SplitButton.prototype, "onDropdownClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SplitButton.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SplitButton.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SplitButton.prototype, "menuStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SplitButton.prototype, "menuStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SplitButton.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SplitButton.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SplitButton.prototype, "appendTo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SplitButton.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SplitButton.prototype, "showTransitionOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SplitButton.prototype, "hideTransitionOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SplitButton.prototype, "containerViewChild", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultbtn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SplitButton.prototype, "buttonViewChild", void 0);
    SplitButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-splitButton',
            template: "\n        <div #container [ngClass]=\"{'ui-splitbutton ui-buttonset ui-widget':true,'ui-state-disabled':disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <button #defaultbtn type=\"button\" pButton [icon]=\"icon\" [iconPos]=\"iconPos\" [label]=\"label\" [cornerStyleClass]=\"dir === 'rtl' ? 'ui-corner-right': 'ui-corner-left'\" (click)=\"onDefaultButtonClick($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\">\n            </button><button type=\"button\" pButton class=\"ui-splitbutton-menubutton\" icon=\"pi pi-chevron-down\" [cornerStyleClass]=\"dir === 'rtl' ? 'ui-corner-left': 'ui-corner-right'\" (click)=\"onDropdownButtonClick($event)\" [disabled]=\"disabled\"></button>\n            <div #overlay [ngClass]=\"'ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-shadow'\" *ngIf=\"overlayVisible\"\n                    [ngStyle]=\"menuStyle\" [class]=\"menuStyleClass\"\n                    [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\">\n                <ul class=\"ui-menu-list ui-helper-reset\">\n                    <ng-template ngFor let-item [ngForOf]=\"model\">\n                        <li class=\"ui-menuitem ui-widget ui-corner-all\" role=\"menuitem\" *ngIf=\"item.visible !== false\">\n                            <a *ngIf=\"!item.routerLink\" [attr.href]=\"item.url\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\"\n                                [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                <span [ngClass]=\"'ui-menuitem-icon'\" [class]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                                <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                            </a>\n                            <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\"\n                                class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                <span [ngClass]=\"'ui-menuitem-icon'\" [class]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                                <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                            </a>\n                        </li>\n                    </ng-template>\n                </ul>\n            </div>\n        </div>\n    ",
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SplitButton);
    return SplitButton;
}());

var SplitButtonModule = /** @class */ (function () {
    function SplitButtonModule() {
    }
    SplitButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            exports: [SplitButton, _button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            declarations: [SplitButton]
        })
    ], SplitButtonModule);
    return SplitButtonModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-panel-paneldemo-module~components-responsive-responsivedemo-module~components-spl~befe5fcf-es5.js.map