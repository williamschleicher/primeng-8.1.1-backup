(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputmask-inputmaskdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/inputmask/inputmaskdemo.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/inputmask/inputmaskdemo.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">InputMask</span>\r\n        <span>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n            <span>Basic</span>\r\n            <p-inputMask mask=\"99-999999\" [(ngModel)]=\"val1\" placeholder=\"99-999999\"></p-inputMask>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n            <span>SSN</span>\r\n            <p-inputMask mask=\"999-99-9999\" [(ngModel)]=\"val2\" placeholder=\"999-99-9999\"></p-inputMask>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n            <span>Date</span>\r\n            <p-inputMask mask=\"99/99/9999\" [(ngModel)]=\"val3\" placeholder=\"99/99/9999\" slotChar=\"mm/dd/yyyy\"></p-inputMask>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n            <span>Phone</span>\r\n            <p-inputMask mask=\"(999) 999-9999\" [(ngModel)]=\"val4\" placeholder=\"(999) 999-9999\"></p-inputMask>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n            <span>Phone Ext</span>\r\n            <p-inputMask mask=\"(999) 999-9999? x99999\" [(ngModel)]=\"val5\" placeholder=\"(999) 999-9999? x99999\"></p-inputMask>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\r\n            <span>Serial Number</span>\r\n            <p-inputMask mask=\"a*-999-a999\" [(ngModel)]=\"val6\" placeholder=\"a*-999-a999\"></p-inputMask>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;InputMaskModule&#125; from 'primeng/inputmask';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Component is defined using p-inputMask element with a mask and two-way value binding is enabled with standard ngModel directive.</p>   \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"99-9999\"&gt;&lt;/p-inputMask&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Mask</h3>\r\n            <p>Mask format can be a combination of the the following built-in definitions.</p>\r\n            <ul>\r\n                <li>a - Alpha character (defaut: A-Z,a-z)</li>\r\n                <li>9 - Numeric character (0-9)</li>\r\n                <li>* - Alpha numberic character (A-Z,a-z,0-9)</li>\r\n            </ul>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"a*-999-a999\"&gt;&lt;/p-inputMask&gt;\r\n</code>\r\n</pre>\r\n            <p>You can also define your own regex pattern for alpha character</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"99-aa\" characterPattern=\"[А-Яа-я]\"&gt;&lt;/p-inputMask&gt;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>SlotChar</h3>\r\n            <p>Underscore is the default placeholder for a mask and this can be customized using slotChart option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"99-9999\" slotChar=\" \"&gt;&lt;/p-inputMask&gt;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Optional Values</h3>\r\n            <p>If the input does not complete the mask definition, it is cleared by default. Use autoClear property to control this behavior. In addition,\r\n            certain part of a mask can be made optional by using ? symbol where anything after the question mark becomes optional.</p>\r\n                        \r\n            <h3>Model Driven Forms</h3>\r\n            <p>InputMask can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inputMask formControlName=\"username\" mask=\"(999) 999-9999? x99999\"&gt;&lt;/p-inputMask&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>text</td>\r\n                            <td>HTML5 input type</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>mask</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Mask pattern.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>slotChar</td>\r\n                            <td>string</td>\r\n                            <td>_</td>\r\n                            <td>Placeholder character in mask, default is underscore.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoClear</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Clears the incomplete value on blur.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>unmask</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>placeholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Advisory information to display on input.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>size</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Size of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>maxlength</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Maximum number of character allows in the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Specifies tab order of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element value cannot be altered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that an input field is read-only.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>name</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>required</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>characterPattern</td>\r\n                            <td>string</td>\r\n                            <td>[A-Za-z]</td>\r\n                            <td>Regex pattern for alpha characters</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoFocus</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, the input gets a focus automatically on load.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autocomplete</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Used to define a string that autocomplete attribute the current element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ariaLabel</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Used to define a string that labels the current element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ariaRequired</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Used to indicate that user input is required on an element before a form can be submitted.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>title</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Title text of the input text.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onFocus</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when input receives focus.</td>\r\n                        </tr> \r\n                        <tr>\r\n                            <td>onBlur</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when input loses focus.</td>\r\n                        </tr>   \r\n                        <tr>\r\n                            <td>onComplete</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke on when user completes the mask pattern.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onInput</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke on when the input field value is altered.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>focus</td>\r\n                            <td>-</td>\r\n                            <td>Applies focus to the input.</td>\r\n                        </tr> \r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Styling is same as <a href=\"#\" [routerLink]=\"['/inputtext']\">inputtext component</a>, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputmask\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\r\n        &lt;span&gt;Basic&lt;/span&gt;\r\n        &lt;p-inputMask mask=\"99-999999\" [(ngModel)]=\"val1\" placeholder=\"99-999999\"&gt;&lt;/p-inputMask&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\r\n        &lt;span&gt;SSN&lt;/span&gt;\r\n        &lt;p-inputMask mask=\"999-99-9999\" [(ngModel)]=\"val2\" placeholder=\"999-99-9999\"&gt;&lt;/p-inputMask&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\r\n        &lt;span&gt;Date&lt;/span&gt;\r\n        &lt;p-inputMask mask=\"99/99/9999\" [(ngModel)]=\"val3\" placeholder=\"99/99/9999\" slotChar=\"mm/dd/yyyy\"&gt;&lt;/p-inputMask&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\r\n        &lt;span&gt;Phone&lt;/span&gt;\r\n        &lt;p-inputMask mask=\"(999) 999-9999\" [(ngModel)]=\"val4\" placeholder=\"(999) 999-9999\"&gt;&lt;/p-inputMask&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\r\n        &lt;span&gt;Phone Ext&lt;/span&gt;\r\n        &lt;p-inputMask mask=\"(999) 999-9999? x99999\" [(ngModel)]=\"val5\" placeholder=\"(999) 999-9999? x99999\"&gt;&lt;/p-inputMask&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\r\n        &lt;span&gt;Serial Number&lt;/span&gt;\r\n        &lt;p-inputMask mask=\"a*-999-a999\" [(ngModel)]=\"val6\" placeholder=\"a*-999-a999\"&gt;&lt;/p-inputMask&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class InputMaskDemo &#123;\r\n\r\n    val1: string;\r\n\r\n    val2: string;\r\n\r\n    val3: string;\r\n\r\n    val4: string;\r\n\r\n    val5: string;\r\n    \r\n    val6: string;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/components/inputmask/inputmask.ts":
/*!***************************************************!*\
  !*** ./src/app/components/inputmask/inputmask.ts ***!
  \***************************************************/
/*! exports provided: INPUTMASK_VALUE_ACCESSOR, InputMask, InputMaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUTMASK_VALUE_ACCESSOR", function() { return INPUTMASK_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMask", function() { return InputMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskModule", function() { return InputMaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/*
    Port of jQuery MaskedInput by DigitalBush as a Native Angular2 Component in Typescript without jQuery
    https://github.com/digitalBush/jquery.maskedinput/

    Copyright (c) 2007-2014 Josh Bush (digitalbush.com)

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
*/





var INPUTMASK_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputMask; }),
    multi: true
};
var InputMask = /** @class */ (function () {
    function InputMask(el) {
        this.el = el;
        this.type = 'text';
        this.slotChar = '_';
        this.autoClear = true;
        this.characterPattern = '[A-Za-z]';
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    InputMask.prototype.ngOnInit = function () {
        var ua = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getUserAgent();
        this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
        this.initMask();
    };
    Object.defineProperty(InputMask.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (val) {
            this._mask = val;
            this.initMask();
            this.writeValue('');
            this.onModelChange(this.value);
        },
        enumerable: true,
        configurable: true
    });
    InputMask.prototype.initMask = function () {
        this.tests = [];
        this.partialPosition = this.mask.length;
        this.len = this.mask.length;
        this.firstNonMaskPos = null;
        this.defs = {
            '9': '[0-9]',
            'a': this.characterPattern,
            '*': this.characterPattern + "|[0-9]"
        };
        var maskTokens = this.mask.split('');
        for (var i = 0; i < maskTokens.length; i++) {
            var c = maskTokens[i];
            if (c == '?') {
                this.len--;
                this.partialPosition = i;
            }
            else if (this.defs[c]) {
                this.tests.push(new RegExp(this.defs[c]));
                if (this.firstNonMaskPos === null) {
                    this.firstNonMaskPos = this.tests.length - 1;
                }
                if (i < this.partialPosition) {
                    this.lastRequiredNonMaskPos = this.tests.length - 1;
                }
            }
            else {
                this.tests.push(null);
            }
        }
        this.buffer = [];
        for (var i = 0; i < maskTokens.length; i++) {
            var c = maskTokens[i];
            if (c != '?') {
                if (this.defs[c])
                    this.buffer.push(this.getPlaceholder(i));
                else
                    this.buffer.push(c);
            }
        }
        this.defaultBuffer = this.buffer.join('');
    };
    InputMask.prototype.writeValue = function (value) {
        this.value = value;
        if (this.inputViewChild && this.inputViewChild.nativeElement) {
            if (this.value == undefined || this.value == null)
                this.inputViewChild.nativeElement.value = '';
            else
                this.inputViewChild.nativeElement.value = this.value;
            this.checkVal();
            this.focusText = this.inputViewChild.nativeElement.value;
            this.updateFilledState();
        }
    };
    InputMask.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    InputMask.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    InputMask.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    InputMask.prototype.caret = function (first, last) {
        var range, begin, end;
        if (!this.inputViewChild.nativeElement.offsetParent || this.inputViewChild.nativeElement !== document.activeElement) {
            return;
        }
        if (typeof first == 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (this.inputViewChild.nativeElement.setSelectionRange) {
                this.inputViewChild.nativeElement.setSelectionRange(begin, end);
            }
            else if (this.inputViewChild.nativeElement['createTextRange']) {
                range = this.inputViewChild.nativeElement['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (this.inputViewChild.nativeElement.setSelectionRange) {
                begin = this.inputViewChild.nativeElement.selectionStart;
                end = this.inputViewChild.nativeElement.selectionEnd;
            }
            else if (document['selection'] && document['selection'].createRange) {
                range = document['selection'].createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }
            return { begin: begin, end: end };
        }
    };
    InputMask.prototype.isCompleted = function () {
        var completed;
        for (var i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
            if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
                return false;
            }
        }
        return true;
    };
    InputMask.prototype.getPlaceholder = function (i) {
        if (i < this.slotChar.length) {
            return this.slotChar.charAt(i);
        }
        return this.slotChar.charAt(0);
    };
    InputMask.prototype.seekNext = function (pos) {
        while (++pos < this.len && !this.tests[pos])
            ;
        return pos;
    };
    InputMask.prototype.seekPrev = function (pos) {
        while (--pos >= 0 && !this.tests[pos])
            ;
        return pos;
    };
    InputMask.prototype.shiftL = function (begin, end) {
        var i, j;
        if (begin < 0) {
            return;
        }
        for (i = begin, j = this.seekNext(end); i < this.len; i++) {
            if (this.tests[i]) {
                if (j < this.len && this.tests[i].test(this.buffer[j])) {
                    this.buffer[i] = this.buffer[j];
                    this.buffer[j] = this.getPlaceholder(j);
                }
                else {
                    break;
                }
                j = this.seekNext(j);
            }
        }
        this.writeBuffer();
        this.caret(Math.max(this.firstNonMaskPos, begin));
    };
    InputMask.prototype.shiftR = function (pos) {
        var i, c, j, t;
        for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
            if (this.tests[i]) {
                j = this.seekNext(i);
                t = this.buffer[i];
                this.buffer[i] = c;
                if (j < this.len && this.tests[j].test(t)) {
                    c = t;
                }
                else {
                    break;
                }
            }
        }
    };
    InputMask.prototype.handleAndroidInput = function (e) {
        var _this = this;
        var curVal = this.inputViewChild.nativeElement.value;
        var pos = this.caret();
        if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
            // a deletion or backspace happened
            this.checkVal(true);
            while (pos.begin > 0 && !this.tests[pos.begin - 1])
                pos.begin--;
            if (pos.begin === 0) {
                while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin])
                    pos.begin++;
            }
            setTimeout(function () {
                _this.caret(pos.begin, pos.begin);
                _this.updateModel(e);
                if (_this.isCompleted()) {
                    _this.onComplete.emit();
                }
            }, 0);
        }
        else {
            this.checkVal(true);
            while (pos.begin < this.len && !this.tests[pos.begin])
                pos.begin++;
            setTimeout(function () {
                _this.caret(pos.begin, pos.begin);
                _this.updateModel(e);
                if (_this.isCompleted()) {
                    _this.onComplete.emit();
                }
            }, 0);
        }
    };
    InputMask.prototype.onInputBlur = function (e) {
        this.focused = false;
        this.onModelTouched();
        this.checkVal();
        this.updateFilledState();
        this.onBlur.emit(e);
        if (this.inputViewChild.nativeElement.value != this.focusText || this.inputViewChild.nativeElement.value != this.value) {
            this.updateModel(e);
            var event_1 = document.createEvent('HTMLEvents');
            event_1.initEvent('change', true, false);
            this.inputViewChild.nativeElement.dispatchEvent(event_1);
        }
    };
    InputMask.prototype.onKeyDown = function (e) {
        if (this.readonly) {
            return;
        }
        var k = e.which || e.keyCode, pos, begin, end;
        var iPhone = /iphone/i.test(_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getUserAgent());
        this.oldVal = this.inputViewChild.nativeElement.value;
        //backspace, delete, and escape get special treatment
        if (k === 8 || k === 46 || (iPhone && k === 127)) {
            pos = this.caret();
            begin = pos.begin;
            end = pos.end;
            if (end - begin === 0) {
                begin = k !== 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1));
                end = k === 46 ? this.seekNext(end) : end;
            }
            this.clearBuffer(begin, end);
            this.shiftL(begin, end - 1);
            this.updateModel(e);
            e.preventDefault();
        }
        else if (k === 13) { // enter
            this.onInputBlur(e);
            this.updateModel(e);
        }
        else if (k === 27) { // escape
            this.inputViewChild.nativeElement.value = this.focusText;
            this.caret(0, this.checkVal());
            this.updateModel(e);
            e.preventDefault();
        }
    };
    InputMask.prototype.onKeyPress = function (e) {
        var _this = this;
        if (this.readonly) {
            return;
        }
        var k = e.which || e.keyCode, pos = this.caret(), p, c, next, completed;
        if (e.ctrlKey || e.altKey || e.metaKey || k < 32 || (k > 34 && k < 41)) { //Ignore
            return;
        }
        else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
                this.clearBuffer(pos.begin, pos.end);
                this.shiftL(pos.begin, pos.end - 1);
            }
            p = this.seekNext(pos.begin - 1);
            if (p < this.len) {
                c = String.fromCharCode(k);
                if (this.tests[p].test(c)) {
                    this.shiftR(p);
                    this.buffer[p] = c;
                    this.writeBuffer();
                    next = this.seekNext(p);
                    if (/android/i.test(_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getUserAgent())) {
                        //Path for CSP Violation on FireFox OS 1.1
                        var proxy = function () {
                            _this.caret(next);
                        };
                        setTimeout(proxy, 0);
                    }
                    else {
                        this.caret(next);
                    }
                    if (pos.begin <= this.lastRequiredNonMaskPos) {
                        completed = this.isCompleted();
                    }
                }
            }
            e.preventDefault();
        }
        this.updateModel(e);
        this.updateFilledState();
        if (completed) {
            this.onComplete.emit();
        }
    };
    InputMask.prototype.clearBuffer = function (start, end) {
        var i;
        for (i = start; i < end && i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
            }
        }
    };
    InputMask.prototype.writeBuffer = function () {
        this.inputViewChild.nativeElement.value = this.buffer.join('');
    };
    InputMask.prototype.checkVal = function (allow) {
        //try to place characters where they belong
        var test = this.inputViewChild.nativeElement.value, lastMatch = -1, i, c, pos;
        for (i = 0, pos = 0; i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
                while (pos++ < test.length) {
                    c = test.charAt(pos - 1);
                    if (this.tests[i].test(c)) {
                        this.buffer[i] = c;
                        lastMatch = i;
                        break;
                    }
                }
                if (pos > test.length) {
                    this.clearBuffer(i + 1, this.len);
                    break;
                }
            }
            else {
                if (this.buffer[i] === test.charAt(pos)) {
                    pos++;
                }
                if (i < this.partialPosition) {
                    lastMatch = i;
                }
            }
        }
        if (allow) {
            this.writeBuffer();
        }
        else if (lastMatch + 1 < this.partialPosition) {
            if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
                // Invalid value. Remove it and replace it with the
                // mask, which is the default behavior.
                if (this.inputViewChild.nativeElement.value)
                    this.inputViewChild.nativeElement.value = '';
                this.clearBuffer(0, this.len);
            }
            else {
                // Invalid value, but we opt to show the value to the
                // user and allow them to correct their mistake.
                this.writeBuffer();
            }
        }
        else {
            this.writeBuffer();
            this.inputViewChild.nativeElement.value = this.inputViewChild.nativeElement.value.substring(0, lastMatch + 1);
        }
        return (this.partialPosition ? i : this.firstNonMaskPos);
    };
    InputMask.prototype.onInputFocus = function (event) {
        var _this = this;
        if (this.readonly) {
            return;
        }
        this.focused = true;
        clearTimeout(this.caretTimeoutId);
        var pos;
        this.focusText = this.inputViewChild.nativeElement.value;
        pos = this.checkVal();
        this.caretTimeoutId = setTimeout(function () {
            if (_this.inputViewChild.nativeElement !== document.activeElement) {
                return;
            }
            _this.writeBuffer();
            if (pos == _this.mask.replace("?", "").length) {
                _this.caret(0, pos);
            }
            else {
                _this.caret(pos);
            }
        }, 10);
        this.onFocus.emit(event);
    };
    InputMask.prototype.onInputChange = function (event) {
        if (this.androidChrome)
            this.handleAndroidInput(event);
        else
            this.handleInputChange(event);
        this.onInput.emit(event);
    };
    InputMask.prototype.handleInputChange = function (event) {
        var _this = this;
        if (this.readonly) {
            return;
        }
        setTimeout(function () {
            var pos = _this.checkVal(true);
            _this.caret(pos);
            _this.updateModel(event);
            if (_this.isCompleted()) {
                _this.onComplete.emit();
            }
        }, 0);
    };
    InputMask.prototype.getUnmaskedValue = function () {
        var unmaskedBuffer = [];
        for (var i = 0; i < this.buffer.length; i++) {
            var c = this.buffer[i];
            if (this.tests[i] && c != this.getPlaceholder(i)) {
                unmaskedBuffer.push(c);
            }
        }
        return unmaskedBuffer.join('');
    };
    InputMask.prototype.updateModel = function (e) {
        var updatedValue = this.unmask ? this.getUnmaskedValue() : e.target.value;
        if (updatedValue !== null || updatedValue !== undefined) {
            this.value = updatedValue;
            this.onModelChange(this.value);
        }
    };
    InputMask.prototype.updateFilledState = function () {
        this.filled = this.inputViewChild.nativeElement && this.inputViewChild.nativeElement.value != '';
    };
    InputMask.prototype.focus = function () {
        this.inputViewChild.nativeElement.focus();
    };
    InputMask.prototype.ngOnDestroy = function () {
    };
    InputMask.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "slotChar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMask.prototype, "autoClear", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputMask.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "inputId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputMask.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputMask.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "ariaLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMask.prototype, "ariaRequired", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMask.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMask.prototype, "readonly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMask.prototype, "unmask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMask.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "characterPattern", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputMask.prototype, "autoFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputMask.prototype, "autocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputMask.prototype, "inputViewChild", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputMask.prototype, "onComplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputMask.prototype, "onFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputMask.prototype, "onBlur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputMask.prototype, "onInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], InputMask.prototype, "mask", null);
    InputMask = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-inputMask',
            template: "<input #input pInputText [attr.id]=\"inputId\" [attr.type]=\"type\" [attr.name]=\"name\" [ngStyle]=\"style\" [ngClass]=\"styleClass\" [attr.placeholder]=\"placeholder\" [attr.title]=\"title\"\n        [attr.size]=\"size\" [attr.autocomplete]=\"autocomplete\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [attr.aria-label]=\"ariaLabel\" [attr.aria-required]=\"ariaRequired\" [disabled]=\"disabled\" [readonly]=\"readonly\" [attr.required]=\"required\"\n        (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeyDown($event)\" (keypress)=\"onKeyPress($event)\" [attr.autofocus]=\"autoFocus\"\n        (input)=\"onInputChange($event)\" (paste)=\"handleInputChange($event)\">",
            host: {
                '[class.ui-inputwrapper-filled]': 'filled',
                '[class.ui-inputwrapper-focus]': 'focus'
            },
            providers: [INPUTMASK_VALUE_ACCESSOR]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], InputMask);
    return InputMask;
}());

var InputMaskModule = /** @class */ (function () {
    function InputMaskModule() {
    }
    InputMaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"]],
            exports: [InputMask],
            declarations: [InputMask]
        })
    ], InputMaskModule);
    return InputMaskModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputmask/inputmaskdemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/inputmask/inputmaskdemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InputMaskDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDemoRoutingModule", function() { return InputMaskDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inputmaskdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputmaskdemo */ "./src/app/showcase/components/inputmask/inputmaskdemo.ts");




var InputMaskDemoRoutingModule = /** @class */ (function () {
    function InputMaskDemoRoutingModule() {
    }
    InputMaskDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _inputmaskdemo__WEBPACK_IMPORTED_MODULE_3__["InputMaskDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], InputMaskDemoRoutingModule);
    return InputMaskDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputmask/inputmaskdemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/inputmask/inputmaskdemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: InputMaskDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDemoModule", function() { return InputMaskDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inputmaskdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputmaskdemo */ "./src/app/showcase/components/inputmask/inputmaskdemo.ts");
/* harmony import */ var _inputmaskdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputmaskdemo-routing.module */ "./src/app/showcase/components/inputmask/inputmaskdemo-routing.module.ts");
/* harmony import */ var _components_inputmask_inputmask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/inputmask/inputmask */ "./src/app/components/inputmask/inputmask.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");









var InputMaskDemoModule = /** @class */ (function () {
    function InputMaskDemoModule() {
    }
    InputMaskDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _inputmaskdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputMaskDemoRoutingModule"],
                _components_inputmask_inputmask__WEBPACK_IMPORTED_MODULE_6__["InputMaskModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _inputmaskdemo__WEBPACK_IMPORTED_MODULE_4__["InputMaskDemo"]
            ]
        })
    ], InputMaskDemoModule);
    return InputMaskDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputmask/inputmaskdemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/inputmask/inputmaskdemo.ts ***!
  \****************************************************************/
/*! exports provided: InputMaskDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDemo", function() { return InputMaskDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputMaskDemo = /** @class */ (function () {
    function InputMaskDemo() {
    }
    InputMaskDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./inputmaskdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/inputmask/inputmaskdemo.html"),
            styles: ["\n        .ui-g-12 > span {\n            display: block;\n            margin-bottom: 4px;\n        }\n    "]
        })
    ], InputMaskDemo);
    return InputMaskDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-inputmask-inputmaskdemo-module-es5.js.map