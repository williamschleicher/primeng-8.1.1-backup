(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-confirmdialog-confirmdialogdemo-module~components-dynamicdialog-dynamicdialogdemo~9110c38f"],{

/***/ "./src/app/components/common/api.ts":
/*!******************************************!*\
  !*** ./src/app/components/common/api.ts ***!
  \******************************************/
/*! exports provided: DomHandler, TreeDragDropService, ConfirmationService, MessageService, DialogService, DynamicDialogConfig, DynamicDialogRef, FilterUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomHandler", function() { return _dom_domhandler__WEBPACK_IMPORTED_MODULE_0__["DomHandler"]; });

/* harmony import */ var _treedragdropservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treedragdropservice */ "./src/app/components/common/treedragdropservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return _treedragdropservice__WEBPACK_IMPORTED_MODULE_1__["TreeDragDropService"]; });

/* harmony import */ var _confirmationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmationservice */ "./src/app/components/common/confirmationservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return _confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]; });

/* harmony import */ var _messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messageservice */ "./src/app/components/common/messageservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]; });

/* harmony import */ var _dynamicdialog_dialogservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamicdialog/dialogservice */ "./src/app/components/dynamicdialog/dialogservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dynamicdialog_dialogservice__WEBPACK_IMPORTED_MODULE_4__["DialogService"]; });

/* harmony import */ var _dynamicdialog_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogConfig", function() { return _dynamicdialog_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogConfig"]; });

/* harmony import */ var _dynamicdialog_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogRef", function() { return _dynamicdialog_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogRef"]; });

/* harmony import */ var _utils_filterutils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/filterutils */ "./src/app/components/utils/filterutils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterUtils", function() { return _utils_filterutils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"]; });











/***/ }),

/***/ "./src/app/components/common/confirmationservice.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/common/confirmationservice.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ConfirmationService = class ConfirmationService {
    constructor() {
        this.requireConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.acceptConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
    }
    confirm(confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    }
    onAccept() {
        this.acceptConfirmationSource.next();
    }
};
ConfirmationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConfirmationService);



/***/ }),

/***/ "./src/app/components/common/treedragdropservice.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/common/treedragdropservice.ts ***!
  \**********************************************************/
/*! exports provided: TreeDragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return TreeDragDropService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TreeDragDropService = class TreeDragDropService {
    constructor() {
        this.dragStartSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dragStopSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    startDrag(event) {
        this.dragStartSource.next(event);
    }
    stopDrag(event) {
        this.dragStopSource.next(event);
    }
};
TreeDragDropService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TreeDragDropService);



/***/ }),

/***/ "./src/app/components/dynamicdialog/dialogservice.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dynamicdialog/dialogservice.ts ***!
  \***********************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicdialog */ "./src/app/components/dynamicdialog/dynamicdialog.ts");
/* harmony import */ var _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicdialog-injector */ "./src/app/components/dynamicdialog/dynamicdialog-injector.ts");
/* harmony import */ var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony import */ var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");






let DialogService = class DialogService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    open(componentType, config) {
        const dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return dialogRef;
    }
    appendDialogComponentToBody(config) {
        const map = new WeakMap();
        map.set(_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"], config);
        const dialogRef = new _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogRef"]();
        map.set(_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogRef"], dialogRef);
        const sub = dialogRef.onClose.subscribe(() => {
            this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogComponent"]);
        const componentRef = componentFactory.create(new _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogInjector"](this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        const domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        return dialogRef;
    }
    removeDialogComponentFromBody() {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    }
};
DialogService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], DialogService);



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-config.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-config.ts ***!
  \******************************************************************/
/*! exports provided: DynamicDialogConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogConfig", function() { return DynamicDialogConfig; });
class DynamicDialogConfig {
}


/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-injector.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-injector.ts ***!
  \********************************************************************/
/*! exports provided: DynamicDialogInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogInjector", function() { return DynamicDialogInjector; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class DynamicDialogInjector {
    constructor(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    get(token, notFoundValue, flags) {
        const value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    }
}
DynamicDialogInjector.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: WeakMap }
];


/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-ref.ts ***!
  \***************************************************************/
/*! exports provided: DynamicDialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogRef", function() { return DynamicDialogRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class DynamicDialogRef {
    constructor() {
        this._onClose = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onClose = this._onClose.asObservable();
    }
    close(result) {
        this._onClose.next(result);
    }
}


/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog.ts ***!
  \***********************************************************/
/*! exports provided: DynamicDialogComponent, DynamicDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogComponent", function() { return DynamicDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogModule", function() { return DynamicDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicdialogcontent */ "./src/app/components/dynamicdialog/dynamicdialogcontent.ts");
/* harmony import */ var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");








let DynamicDialogComponent = class DynamicDialogComponent {
    constructor(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.renderer = renderer;
        this.config = config;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.visible = true;
    }
    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }
    onOverlayClicked(evt) {
        this.dialogRef.close();
    }
    onDialogClicked(evt) {
        evt.stopPropagation();
    }
    loadChildComponent(componentType) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        let viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }
    moveOnTop() {
        if (this.config.autoZIndex !== false) {
            const zIndex = this.config.baseZIndex || 0 + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex);
            this.container.style.zIndex = String(zIndex);
            this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
        }
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.moveOnTop();
                this.bindGlobalListeners();
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
                break;
            case 'void':
                this.onContainerDestroy();
                break;
        }
    }
    onAnimationEnd(event) {
        if (event.toState === 'void') {
            this.dialogRef.close();
        }
    }
    onContainerDestroy() {
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
        this.unbindGlobalListeners();
        this.container = null;
    }
    close() {
        this.visible = false;
    }
    onMaskClick() {
        if (this.config.dismissableMask) {
            this.close();
        }
    }
    bindGlobalListeners() {
        if (this.config.closeOnEscape !== false && this.config.closable !== false) {
            this.bindDocumentEscapeListener();
        }
    }
    unbindGlobalListeners() {
        this.unbindDocumentEscapeListener();
    }
    bindDocumentEscapeListener() {
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', (event) => {
            if (event.which == 27) {
                if (parseInt(this.container.style.zIndex) == _dom_domhandler__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex) {
                    this.close();
                }
            }
        });
    }
    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    }
    ngOnDestroy() {
        this.onContainerDestroy();
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
};
DynamicDialogComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"] },
    { type: _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__["DynamicDialogRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"])
], DynamicDialogComponent.prototype, "insertionPoint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mask', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DynamicDialogComponent.prototype, "maskViewChild", void 0);
DynamicDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-dynamicDialog',
        template: `
		<div #mask class="ui-widget-overlay ui-dialog-mask ui-dialog-mask-scrollblocker" *ngIf="visible" (click)="onMaskClick()"></div>
		<div [ngClass]="{'ui-dialog ui-dynamicdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl': config.rtl}" [ngStyle]="config.style" [class]="config.styleClass"
			[@animation]="{value: 'visible', params: {transitionParams: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}" 
			(@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)" role="dialog" *ngIf="visible"
			[style.width]="config.width" [style.height]="config.height">
            <div class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top" *ngIf="config.showHeader === false ? false: true">
                <span class="ui-dialog-title">{{config.header}}</span>
                <a [ngClass]="'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all'" tabindex="0" role="button" (click)="close()" (keydown.enter)="close()" *ngIf="config.closable === false ? false : true">
                    <span class="pi pi-times"></span>
                </a>
            </div>
            <div class="ui-dialog-content ui-widget-content" [ngStyle]="config.contentStyle">
				<ng-template pDynamicDialogContent></ng-template>
			</div>
			<div class="ui-dialog-footer ui-widget-content" *ngIf="config.footer">
				{{config.footer}}
            </div>
		</div>
	`,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-50%) translateY(-50%) scale(0.7)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-50%) translateY(-50%) scale(1)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}'))
            ])
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"], _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__["DynamicDialogRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], DynamicDialogComponent);

let DynamicDialogModule = class DynamicDialogModule {
};
DynamicDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        declarations: [DynamicDialogComponent, _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"]],
        entryComponents: [DynamicDialogComponent]
    })
], DynamicDialogModule);



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialogcontent.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialogcontent.ts ***!
  \******************************************************************/
/*! exports provided: DynamicDialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogContent", function() { return DynamicDialogContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DynamicDialogContent = class DynamicDialogContent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
DynamicDialogContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
DynamicDialogContent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[pDynamicDialogContent]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], DynamicDialogContent);



/***/ })

}]);
//# sourceMappingURL=default~components-confirmdialog-confirmdialogdemo-module~components-dynamicdialog-dynamicdialogdemo~9110c38f-es2015.js.map