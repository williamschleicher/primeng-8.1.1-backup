(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-datagrid-datagriddemo-module~components-datalist-datalistdemo-module~components-d~ebbb699b"],{

/***/ "./src/app/components/paginator/paginator.ts":
/*!***************************************************!*\
  !*** ./src/app/components/paginator/paginator.ts ***!
  \***************************************************/
/*! exports provided: Paginator, PaginatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorModule", function() { return PaginatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dropdown/dropdown */ "./src/app/components/dropdown/dropdown.ts");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");






let Paginator = class Paginator {
    constructor(cd) {
        this.cd = cd;
        this.pageLinkSize = 5;
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alwaysShow = true;
        this.dropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this._totalRecords = 0;
        this._first = 0;
        this._rows = 0;
    }
    ngOnInit() {
        this.updatePaginatorState();
    }
    get totalRecords() {
        return this._totalRecords;
    }
    set totalRecords(val) {
        this._totalRecords = val;
        this.updatePageLinks();
        this.updatePaginatorState();
        this.updateFirst();
        this.updateRowsPerPageOptions();
    }
    get first() {
        return this._first;
    }
    set first(val) {
        this._first = val;
        this.updatePageLinks();
        this.updatePaginatorState();
    }
    get rows() {
        return this._rows;
    }
    set rows(val) {
        this._rows = val;
        this.updatePageLinks();
        this.updatePaginatorState();
    }
    get rowsPerPageOptions() {
        return this._rowsPerPageOptions;
    }
    set rowsPerPageOptions(val) {
        this._rowsPerPageOptions = val;
        this.updateRowsPerPageOptions();
    }
    updateRowsPerPageOptions() {
        if (this.rowsPerPageOptions) {
            this.rowsPerPageItems = [];
            for (let opt of this.rowsPerPageOptions) {
                if (typeof opt == 'object' && opt['showAll']) {
                    this.rowsPerPageItems.push({ label: opt['showAll'], value: this.totalRecords });
                }
                else {
                    this.rowsPerPageItems.push({ label: String(opt), value: opt });
                }
            }
        }
    }
    isFirstPage() {
        return this.getPage() === 0;
    }
    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }
    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }
    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    }
    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    }
    changePage(p) {
        var pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this.first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            this.updatePaginatorState();
        }
    }
    updateFirst() {
        const page = this.getPage();
        if (page > 0 && (this.first >= this.totalRecords)) {
            Promise.resolve(null).then(() => this.changePage(page - 1));
        }
    }
    getPage() {
        return Math.floor(this.first / this.rows);
    }
    changePageToFirst(event) {
        if (!this.isFirstPage()) {
            this.changePage(0);
        }
        event.preventDefault();
    }
    changePageToPrev(event) {
        this.changePage(this.getPage() - 1);
        event.preventDefault();
    }
    changePageToNext(event) {
        this.changePage(this.getPage() + 1);
        event.preventDefault();
    }
    changePageToLast(event) {
        if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
        }
        event.preventDefault();
    }
    onPageLinkClick(event, page) {
        this.changePage(page);
        event.preventDefault();
    }
    onRppChange(event) {
        this.changePage(this.getPage());
    }
    updatePaginatorState() {
        this.paginatorState = {
            page: this.getPage(),
            pageCount: this.getPageCount(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
        };
    }
    get currentPageReport() {
        return this.currentPageReportTemplate
            .replace("{currentPage}", (this.getPage() + 1).toString())
            .replace("{totalPages}", this.getPageCount().toString());
    }
};
Paginator.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Paginator.prototype, "pageLinkSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Paginator.prototype, "onPageChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Paginator.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Paginator.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Paginator.prototype, "alwaysShow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], Paginator.prototype, "templateLeft", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], Paginator.prototype, "templateRight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Paginator.prototype, "dropdownAppendTo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Paginator.prototype, "dropdownScrollHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Paginator.prototype, "currentPageReportTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], Paginator.prototype, "showCurrentPageReport", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], Paginator.prototype, "totalRecords", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], Paginator.prototype, "first", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], Paginator.prototype, "rows", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], Paginator.prototype, "rowsPerPageOptions", null);
Paginator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-paginator',
        template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix'"
            *ngIf="alwaysShow ? true : (pageLinks && pageLinks.length > 1)">
            <div class="ui-paginator-left-content" *ngIf="templateLeft">
                <ng-container *ngTemplateOutlet="templateLeft; context: {$implicit: paginatorState}"></ng-container>
            </div>
            <span class="ui-paginator-current" *ngIf="showCurrentPageReport">{{currentPageReport}}</span>
            <a [attr.tabindex]="isFirstPage() ? null : '0'" class="ui-paginator-first ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToFirst($event)" (keydown.enter)="changePageToFirst($event)" [ngClass]="{'ui-state-disabled':isFirstPage()}" [tabindex]="isFirstPage() ? -1 : null">
                <span class="ui-paginator-icon pi pi-step-backward"></span>
            </a>
            <a tabindex="0" [attr.tabindex]="isFirstPage() ? null : '0'" class="ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToPrev($event)" (keydown.enter)="changePageToPrev($event)" [ngClass]="{'ui-state-disabled':isFirstPage()}" [tabindex]="isFirstPage() ? -1 : null">
                <span class="ui-paginator-icon pi pi-caret-left"></span>
            </a>
            <span class="ui-paginator-pages">
                <a tabindex="0" *ngFor="let pageLink of pageLinks" class="ui-paginator-page ui-paginator-element ui-state-default ui-corner-all"
                    (click)="onPageLinkClick($event, pageLink - 1)" (keydown.enter)="onPageLinkClick($event, pageLink - 1)" [ngClass]="{'ui-state-active': (pageLink-1 == getPage())}">{{pageLink}}</a>
            </span>
            <a [attr.tabindex]="isLastPage() ? null : '0'" class="ui-paginator-next ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToNext($event)" (keydown.enter)="changePageToNext($event)" [ngClass]="{'ui-state-disabled':isLastPage()}" [tabindex]="isLastPage() ? -1 : null">
                <span class="ui-paginator-icon pi pi-caret-right"></span>
            </a>
            <a [attr.tabindex]="isLastPage() ? null : '0'" class="ui-paginator-last ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToLast($event)" (keydown.enter)="changePageToLast($event)" [ngClass]="{'ui-state-disabled':isLastPage()}" [tabindex]="isLastPage() ? -1 : null">
                <span class="ui-paginator-icon pi pi-step-forward"></span>
            </a>
            <p-dropdown [options]="rowsPerPageItems" [(ngModel)]="rows" *ngIf="rowsPerPageOptions" 
                (onChange)="onRppChange($event)" [appendTo]="dropdownAppendTo" [scrollHeight]="dropdownScrollHeight"></p-dropdown>
            <div class="ui-paginator-right-content" *ngIf="templateRight">
                <ng-container *ngTemplateOutlet="templateRight; context: {$implicit: paginatorState}"></ng-container>
            </div>
        </div>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], Paginator);

let PaginatorModule = class PaginatorModule {
};
PaginatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _common_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [Paginator, _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _common_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        declarations: [Paginator]
    })
], PaginatorModule);



/***/ })

}]);
//# sourceMappingURL=default~components-datagrid-datagriddemo-module~components-datalist-datalistdemo-module~components-d~ebbb699b-es2015.js.map