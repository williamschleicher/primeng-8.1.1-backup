(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-accordion-accordiondemo-module~components-focustrap-focustrapdemo-module~componen~e6169b29"],{

/***/ "./src/app/components/accordion/accordion.ts":
/*!***************************************************!*\
  !*** ./src/app/components/accordion/accordion.ts ***!
  \***************************************************/
/*! exports provided: AccordionTab, Accordion, AccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTab", function() { return AccordionTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");





var idx = 0;
var AccordionTab = /** @class */ (function () {
    function AccordionTab(accordion, changeDetector) {
        this.changeDetector = changeDetector;
        this.cache = true;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = "ui-accordiontab-" + idx++;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionTab.prototype, "animating", {
        get: function () {
            return this._animating;
        },
        set: function (val) {
            this._animating = val;
            if (!this.changeDetector.destroyed) {
                this.changeDetector.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionTab.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                default:
                    _this.contentTemplate = item.template;
                    break;
            }
        });
    };
    AccordionTab.prototype.toggle = function (event) {
        if (this.disabled || this.animating) {
            return false;
        }
        this.animating = true;
        var index = this.findTabIndex();
        if (this.selected) {
            this.selected = false;
            this.accordion.onClose.emit({ originalEvent: event, index: index });
        }
        else {
            if (!this.accordion.multiple) {
                for (var i = 0; i < this.accordion.tabs.length; i++) {
                    this.accordion.tabs[i].selected = false;
                    this.accordion.tabs[i].selectedChange.emit(false);
                }
            }
            this.selected = true;
            this.loaded = true;
            this.accordion.onOpen.emit({ originalEvent: event, index: index });
        }
        this.selectedChange.emit(this.selected);
        event.preventDefault();
    };
    AccordionTab.prototype.findTabIndex = function () {
        var index = -1;
        for (var i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    };
    Object.defineProperty(AccordionTab.prototype, "hasHeaderFacet", {
        get: function () {
            return this.headerFacet && this.headerFacet.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    AccordionTab.prototype.onToggleDone = function (event) {
        this.animating = false;
    };
    AccordionTab.prototype.onKeydown = function (event) {
        if (event.which === 32 || event.which === 13) {
            this.toggle(event);
            event.preventDefault();
        }
    };
    AccordionTab.prototype.ngOnDestroy = function () {
        this.accordion.tabs.splice(this.findTabIndex(), 1);
    };
    AccordionTab.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return Accordion; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionTab.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AccordionTab.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AccordionTab.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AccordionTab.prototype, "cache", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AccordionTab.prototype, "selectedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionTab.prototype, "transitionOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_4__["Header"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AccordionTab.prototype, "headerFacet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AccordionTab.prototype, "templates", void 0);
    AccordionTab = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-accordionTab',
            template: "\n        <div class=\"ui-accordion-header ui-state-default ui-corner-all\" [ngClass]=\"{'ui-state-active': selected,'ui-state-disabled':disabled}\">\n            <a [attr.tabindex]=\"disabled ? -1 : 0\" [attr.id]=\"id\" [attr.aria-controls]=\"id + '-content'\" role=\"tab\" [attr.aria-expanded]=\"selected\" (click)=\"toggle($event)\" \n                (keydown)=\"onKeydown($event)\">\n                <span class=\"ui-accordion-toggle-icon\" [ngClass]=\"selected ? accordion.collapseIcon : accordion.expandIcon\"></span>\n                <span class=\"ui-accordion-header-text\" *ngIf=\"!hasHeaderFacet\">\n                    {{header}}\n                </span>\n                <ng-content select=\"p-header\" *ngIf=\"hasHeaderFacet\"></ng-content>\n            </a>\n        </div>\n        <div [attr.id]=\"id + '-content'\" class=\"ui-accordion-content-wrapper\" [@tabContent]=\"selected ? {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}\" (@tabContent.done)=\"onToggleDone($event)\"\n            [ngClass]=\"{'ui-accordion-content-wrapper-overflown': !selected||animating}\" \n            role=\"tabpanel\" [attr.aria-hidden]=\"!selected\" [attr.aria-labelledby]=\"id\">\n            <div class=\"ui-accordion-content ui-widget-content\">\n                <ng-content></ng-content>\n                <ng-container *ngIf=\"contentTemplate && (cache ? loaded : selected)\">\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </ng-container>\n            </div>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('tabContent', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '{{height}}'
                    }), { params: { height: '0' } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}'))
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return Accordion; }))),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AccordionTab);
    return AccordionTab;
}());

var Accordion = /** @class */ (function () {
    function Accordion(el, changeDetector) {
        this.el = el;
        this.changeDetector = changeDetector;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.expandIcon = 'pi pi-fw pi-chevron-right';
        this.collapseIcon = 'pi pi-fw pi-chevron-down';
        this.tabs = [];
    }
    Accordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initTabs();
        this.tabListSubscription = this.tabList.changes.subscribe(function (_) {
            _this.initTabs();
            _this.changeDetector.markForCheck();
        });
    };
    Accordion.prototype.initTabs = function () {
        this.tabs = this.tabList.toArray();
        this.updateSelectionState();
    };
    Accordion.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Object.defineProperty(Accordion.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (val) {
            this._activeIndex = val;
            this.updateSelectionState();
        },
        enumerable: true,
        configurable: true
    });
    Accordion.prototype.updateSelectionState = function () {
        if (this.tabs && this.tabs.length && this._activeIndex != null) {
            for (var i = 0; i < this.tabs.length; i++) {
                var selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
                var changed = selected !== this.tabs[i].selected;
                if (changed) {
                    this.tabs[i].animating = true;
                    this.tabs[i].selected = selected;
                    this.tabs[i].selectedChange.emit(selected);
                }
            }
        }
    };
    Accordion.prototype.ngOnDestroy = function () {
        if (this.tabListSubscription) {
            this.tabListSubscription.unsubscribe();
        }
    };
    Accordion.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Accordion.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Accordion.prototype, "onClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Accordion.prototype, "onOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Accordion.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Accordion.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Accordion.prototype, "expandIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Accordion.prototype, "collapseIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AccordionTab),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], Accordion.prototype, "tabList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], Accordion.prototype, "activeIndex", null);
    Accordion = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-accordion',
            template: "\n        <div [ngClass]=\"'ui-accordion ui-widget ui-helper-reset'\" [ngStyle]=\"style\" [class]=\"styleClass\" role=\"tablist\">\n            <ng-content></ng-content>\n        </div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], Accordion);
    return Accordion;
}());

var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: [Accordion, AccordionTab, _common_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            declarations: [Accordion, AccordionTab]
        })
    ], AccordionModule);
    return AccordionModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-accordion-accordiondemo-module~components-focustrap-focustrapdemo-module~componen~e6169b29-es5.js.map