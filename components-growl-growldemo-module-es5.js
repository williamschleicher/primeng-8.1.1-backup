(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-growl-growldemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/growl/growldemo.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/growl/growldemo.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Growl</span>\r\n        <span>Growl is used to display messages in an overlay.</span>\r\n        <span>Growl is deprecated, use <a [routerLink]=\"['/toast']\">Toast</a> instead.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n    <h3 class=\"first\">Basic</h3>\r\n    <div>\r\n        <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"></button>\r\n        <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"></button>\r\n        <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"></button>\r\n        <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"></button>\r\n        <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"></button>\r\n        <button type=\"button\" pButton (click)=\"clear()\" icon=\"pi pi-times\" style=\"float:right\" label=\"Clear\"></button>\r\n    </div>\r\n    \r\n    <h3>Message Service</h3>\r\n    <button type=\"button\" pButton (click)=\"showViaService()\" label=\"Add with Service\"></button>\r\n    <button type=\"button\" pButton (click)=\"clearViaService()\" label=\"Clear with Service\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;GrowlModule&#125; from 'primeng/growl';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>A single message is specified by the Message interface in PrimeNG that defines the id, severity, summary and detail as properties.\r\n            Messages to display on growl can either be defined using the value property which should be an array of Message instances or using \r\n            a MessageService.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Message&#125; from 'primeng/api';\r\n\r\nexport class MyModel &#123;\r\n\r\n    msgs: Message[] = [];\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Message Service</h3>\r\n            <p>MessageService allows having one growl in the entire application instead of having separate ones in each component that uses it.\r\n            In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as the application instance itself \r\n            so that descandant components can have it injected. If there are multiple growl components having the same message service, you may use key property of the component\r\n            to match the key of the message to implement scoping.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;Message&#125; from 'primeng/components/common/api';\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n\r\n@Component(&#123;\r\n    templateUrl: './growldemo.html'\r\n&#125;)\r\nexport class MessageServiceDemo &#123;\r\n    \r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n    \r\n    addSingle() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n    &#125;\r\n    \r\n    addMultiple() &#123;\r\n        this.messageService.addAll([&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;,\r\n                                    &#123;severity:'info', summary:'Info Message', detail:'Via MessageService'&#125;]);\r\n    &#125;\r\n    \r\n    clear() &#123;\r\n        this.messageService.clear();\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        \r\n            <h3>Change Detection</h3>\r\n            <p>In case messages are provided via the value property instead of service, growl either uses setter based checking or ngDoCheck to realize if the messages has changed to update the UI. This is configured using the immutable\r\n                property, when enabled (default) setter based detection is utilized so your changes such as adding or removing a record \r\n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change. \r\n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\r\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\r\n                both methods can be used depending on your preference. Note that immutable property also defines how Growl treats the value, for example\r\n                when immutable is enabled removing a message does not mutate the original value but creates a new array.\r\n            </p>\r\n\r\n            <h3>Severities</h3>\r\n            <p>Here are the possible values for the severity of a message.</p>\r\n            <ul>\r\n                <li>success</li>\r\n                <li>info</li>\r\n                <li>warn</li>\r\n                <li>error</li>\r\n            </ul>\r\n\r\n            <h3>Showing Messages</h3>\r\n            <p>Adding messages to the array is enough to display them via growl. Similary removing a message\r\n            from the array is also removed by growl.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n    \r\n&lt;button type=\"button\" (click)=\"show()\"&gt;Show&lt;/button&gt;\r\n&lt;button type=\"button\" (click)=\"clear()\"&gt;Clear&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nshow() &#123;\r\n    this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\r\n&#125;\r\n\r\nclear() &#123;\r\n    this.msgs = [];\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of messages to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sticky</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When defined, growl messages are not removed automatically after a period defined by life option.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>life</td>\r\n                            <td>number</td>\r\n                            <td>3000</td>\r\n                            <td>Time to display a message in milliseconds before removing it.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>immutable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how the messages data should be manipulated.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Id to match the key of the message to enable scoping in service based messaging.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onClose</td>\r\n                            <td>event.message: Removed message</td>\r\n                            <td>Callback to invoke when a message is closed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onClick</td>\r\n                            <td>event.message: Clicked message</td>\r\n                            <td>Callback to invoke when a message is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHover</td>\r\n                            <td>event.message: Hovered message</td>\r\n                            <td>Callback to invoke when mouse enters a message.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-growl</td>\r\n                            <td>Main container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-container</td>\r\n                            <td>Container of a message item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-item</td>\r\n                            <td>Message element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-icon-close</td>\r\n                            <td>Close icon of a message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-image</td>\r\n                            <td>Severity icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-message</td>\r\n                            <td>Container of message texts.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-title</td>\r\n                            <td>Summary of the message.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/growl\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;div&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"clear()\" icon=\"pi pi-times\" style=\"float:right\" label=\"Clear\"&gt;&lt;/button&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Message Service&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showViaService()\" label=\"Add with Service\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton (click)=\"clearViaService()\" label=\"Clear with Service\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;SelectItem&#125; from 'primeng/components/common/api';\r\nimport &#123;Message&#125; from 'primeng/components/common/api';\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n\r\n@Component(&#123;\r\n    templateUrl: './growldemo.html',\r\n    providers: [MessageService]\r\n&#125;)\r\nexport class GrowlDemo &#123;\r\n\r\n    msgs: Message[] = [];\r\n    \r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    showSuccess() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'success', summary:'Success Message', detail:'Order submitted'&#125;);\r\n    &#125;\r\n\r\n    showInfo() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\r\n    &#125;\r\n\r\n    showWarn() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'&#125;);\r\n    &#125;\r\n\r\n    showError() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'error', summary:'Error Message', detail:'Validation failed'&#125;);\r\n    &#125;\r\n\r\n    showMultiple() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 1', detail:'PrimeNG rocks'&#125;);\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 2', detail:'PrimeUI rocks'&#125;);\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'&#125;);\r\n    &#125;\r\n    \r\n    showViaService() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n    &#125;\r\n    \r\n    clearViaService() &#123;\r\n        this.messageService.clear();\r\n    &#125;\r\n\r\n    clear() &#123;\r\n        this.msgs = [];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/common/messageservice.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/common/messageservice.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.clearSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageObserver = this.messageSource.asObservable();
        this.clearObserver = this.clearSource.asObservable();
    }
    MessageService.prototype.add = function (message) {
        if (message) {
            this.messageSource.next(message);
        }
    };
    MessageService.prototype.addAll = function (messages) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    };
    MessageService.prototype.clear = function (key) {
        this.clearSource.next(key || null);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/components/growl/growl.ts":
/*!*******************************************!*\
  !*** ./src/app/components/growl/growl.ts ***!
  \*******************************************/
/*! exports provided: Growl, GrowlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Growl", function() { return Growl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlModule", function() { return GrowlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/messageservice */ "./src/app/components/common/messageservice.ts");





var Growl = /** @class */ (function () {
    function Growl(el, differs, messageService, zone) {
        var _this = this;
        this.el = el;
        this.differs = differs;
        this.messageService = messageService;
        this.zone = zone;
        this.life = 3000;
        this.immutable = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.differ = differs.find([]).create(null);
        if (messageService) {
            this.subscription = messageService.messageObserver.subscribe(function (messages) {
                if (messages) {
                    if (messages instanceof Array) {
                        var filteredMessages = messages.filter(function (m) { return _this.key === m.key; });
                        _this.value = _this.value ? _this.value.concat(filteredMessages) : filteredMessages.slice();
                    }
                    else if (_this.key === messages.key) {
                        _this.value = _this.value ? _this.value.concat([messages]) : [messages];
                    }
                }
                else {
                    _this.value = null;
                }
            });
        }
    }
    Growl.prototype.ngAfterViewInit = function () {
        if (!this.sticky) {
            this.initTimeout();
        }
    };
    Object.defineProperty(Growl.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.containerViewChild && this.containerViewChild.nativeElement && this.immutable) {
                this.handleValueChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Growl.prototype, "sticky", {
        get: function () {
            return this._sticky;
        },
        set: function (value) {
            if (value && this.timeout) {
                clearTimeout(this.timeout);
            }
            this._sticky = value;
        },
        enumerable: true,
        configurable: true
    });
    Growl.prototype.ngDoCheck = function () {
        if (!this.immutable && this.containerViewChild && this.containerViewChild.nativeElement) {
            var changes = this.differ.diff(this.value);
            if (changes) {
                this.handleValueChange();
            }
        }
    };
    Growl.prototype.handleValueChange = function () {
        if (this.preventRerender) {
            this.preventRerender = false;
            return;
        }
        if (this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
        }
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].fadeIn(this.containerViewChild.nativeElement, 250);
        if (!this.sticky) {
            this.initTimeout();
        }
    };
    Growl.prototype.initTimeout = function () {
        var _this = this;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.zone.runOutsideAngular(function () {
            _this.timeout = setTimeout(function () {
                _this.zone.run(function () {
                    _this.removeAll();
                });
            }, _this.life);
        });
    };
    Growl.prototype.remove = function (index, msgel) {
        var _this = this;
        this.closeIconClick = true;
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].fadeOut(msgel, 250);
        setTimeout(function () {
            _this.preventRerender = true;
            _this.onClose.emit({ message: _this.value[index] });
            if (_this.immutable) {
                _this._value = _this.value.filter(function (val, i) { return i != index; });
                _this.valueChange.emit(_this._value);
            }
            else {
                _this._value.splice(index, 1);
            }
        }, 250);
    };
    Growl.prototype.removeAll = function () {
        var _this = this;
        if (this.value && this.value.length) {
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].fadeOut(this.containerViewChild.nativeElement, 250);
            setTimeout(function () {
                _this.value.forEach(function (msg, index) { return _this.onClose.emit({ message: _this.value[index] }); });
                if (_this.immutable) {
                    _this.value = [];
                    _this.valueChange.emit(_this.value);
                }
                else {
                    _this.value.splice(0, _this.value.length);
                }
            }, 250);
        }
    };
    Growl.prototype.onMessageClick = function (i) {
        if (this.closeIconClick)
            this.closeIconClick = false;
        else
            this.onClick.emit({ message: this.value[i] });
    };
    Growl.prototype.onMessageHover = function (i) {
        this.onHover.emit({ message: this.value[i] });
    };
    Growl.prototype.ngOnDestroy = function () {
        if (!this.sticky) {
            clearTimeout(this.timeout);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    Growl.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
        { type: _common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Growl.prototype, "life", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Growl.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Growl.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Growl.prototype, "immutable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Growl.prototype, "autoZIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Growl.prototype, "baseZIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Growl.prototype, "key", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Growl.prototype, "onClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Growl.prototype, "onHover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Growl.prototype, "onClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Growl.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Growl.prototype, "containerViewChild", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], Growl.prototype, "value", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], Growl.prototype, "sticky", null);
    Growl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-growl',
            template: "\n        <div #container [ngClass]=\"'ui-growl ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div #msgel *ngFor=\"let msg of value;let i = index\" class=\"ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow\" aria-live=\"polite\"\n                [ngClass]=\"{'ui-growl-message-info':msg.severity == 'info','ui-growl-message-warn':msg.severity == 'warn',\n                    'ui-growl-message-error':msg.severity == 'error','ui-growl-message-success':msg.severity == 'success'}\"\n                    (click)=\"onMessageClick(i)\" (mouseenter)=\"onMessageHover(i)\">\n                <div class=\"ui-growl-item\">\n                     <div class=\"ui-growl-icon-close pi pi-times\" (click)=\"remove(i,msgel)\"></div>\n                     <span class=\"ui-growl-image pi\"\n                        [ngClass]=\"{'pi-info-circle':msg.severity == 'info','pi-exclamation-triangle':msg.severity == 'warn',\n                                'pi-times':msg.severity == 'error','pi-check':msg.severity == 'success'}\"></span>\n                     <div class=\"ui-growl-message\">\n                        <span class=\"ui-growl-title\">{{msg.summary}}</span>\n                        <p [innerHTML]=\"msg.detail||''\"></p>\n                     </div>\n                     <div style=\"clear: both;\"></div>\n                </div>\n            </div>\n        </div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], Growl);
    return Growl;
}());

var GrowlModule = /** @class */ (function () {
    function GrowlModule() {
    }
    GrowlModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [Growl],
            declarations: [Growl]
        })
    ], GrowlModule);
    return GrowlModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/growl/growldemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/growl/growldemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GrowlDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlDemoRoutingModule", function() { return GrowlDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _growldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./growldemo */ "./src/app/showcase/components/growl/growldemo.ts");




var GrowlDemoRoutingModule = /** @class */ (function () {
    function GrowlDemoRoutingModule() {
    }
    GrowlDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _growldemo__WEBPACK_IMPORTED_MODULE_3__["GrowlDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], GrowlDemoRoutingModule);
    return GrowlDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/growl/growldemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/growl/growldemo.module.ts ***!
  \***************************************************************/
/*! exports provided: GrowlDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlDemoModule", function() { return GrowlDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _growldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./growldemo */ "./src/app/showcase/components/growl/growldemo.ts");
/* harmony import */ var _growldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./growldemo-routing.module */ "./src/app/showcase/components/growl/growldemo-routing.module.ts");
/* harmony import */ var _components_growl_growl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/growl/growl */ "./src/app/components/growl/growl.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");









var GrowlDemoModule = /** @class */ (function () {
    function GrowlDemoModule() {
    }
    GrowlDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _growldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["GrowlDemoRoutingModule"],
                _components_growl_growl__WEBPACK_IMPORTED_MODULE_5__["GrowlModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _growldemo__WEBPACK_IMPORTED_MODULE_3__["GrowlDemo"]
            ]
        })
    ], GrowlDemoModule);
    return GrowlDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/growl/growldemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/growl/growldemo.ts ***!
  \********************************************************/
/*! exports provided: GrowlDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlDemo", function() { return GrowlDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");



var GrowlDemo = /** @class */ (function () {
    function GrowlDemo(messageService) {
        this.messageService = messageService;
        this.msgs = [];
    }
    GrowlDemo.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    };
    GrowlDemo.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    GrowlDemo.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    GrowlDemo.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    GrowlDemo.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    GrowlDemo.prototype.showViaService = function () {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    };
    GrowlDemo.prototype.clearViaService = function () {
        this.messageService.clear();
    };
    GrowlDemo.prototype.clear = function () {
        this.msgs = [];
    };
    GrowlDemo.ctorParameters = function () { return [
        { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
    ]; };
    GrowlDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./growldemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/growl/growldemo.html"),
            providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], GrowlDemo);
    return GrowlDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-growl-growldemo-module-es5.js.map