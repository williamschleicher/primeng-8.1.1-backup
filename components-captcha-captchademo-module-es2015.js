(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-captcha-captchademo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/captcha/captchademo.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/captcha/captchademo.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Captcha</span>\r\n        <span>Captcha is a form validation component based on Recaptcha.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <p-captcha siteKey=\"6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA\" (onResponse)=\"showResponse($event)\"></p-captcha>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;CaptchaModule&#125; from 'primeng/captcha';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Captcha is used with a siteKey and a callback to verify the response.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-captcha siteKey=\"YOUR_SITE_KEY\" (onResponse)=\"showResponse($event)\"&gt;&lt;/p-captcha&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In addition include the captcha widget resource to your page.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha\" async defer>&lt;/script&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Global callback name is initRecaptcha by default and it can be changed using initCallback property .</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=loadCaptcha\" async defer>&lt;/script&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-captcha siteKey=\"YOUR_SITE_KEY\" (onResponse)=\"showResponse($event)\" initCallback=\"loadCaptcha\"&gt;&lt;/p-captcha&gt;\r\n</code>\r\n</pre>\r\n\r\n\r\n            <h3>Verification</h3>\r\n            <p>In order to ensure if a response token is valid, verification against recaptcha api needs to be done at backend. <a href=\"https://developers.google.com/recaptcha/docs/verify\">Read more</a> at\r\n            official documentation.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nshowResponse(response) &#123;\r\n    //call to a backend to verify against recaptcha with private key\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>sitekey</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Public sitekey.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>theme</td>\r\n                            <td>string</td>\r\n                            <td>light</td>\r\n                            <td>The color scheme of the widget.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>image</td>\r\n                            <td>The type of CAPTCHA to serve.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>size</td>\r\n                            <td>string</td>\r\n                            <td>normal</td>\r\n                            <td>The size of the widget.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>The tabindex of the widget and challenge.\r\n                                If other elements in your page use tabindex,\r\n                                it should be set to make user navigation easier.\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>language</td>\r\n                            <td>string</td>\r\n                            <td>en</td>\r\n                            <td>Language of the widget.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>initCallback</td>\r\n                            <td>string</td>\r\n                            <td>initRecaptcha</td>\r\n                            <td>Name of global callback to initialize recaptcha.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onResponse</td>\r\n                            <td>event.response: The user response token.</td>\r\n                            <td>The callback function to be executed when the user submits a successful CAPTCHA response.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onExpire</td>\r\n                            <td>-</td>\r\n                            <td>The callback function to be executed when the recaptcha response expires and the user needs to solve a new CAPTCHA.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>reset</td>\r\n                            <td>-</td>\r\n                            <td>Resets the reCAPTCHA widget.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>getResponse</td>\r\n                            <td>-</td>\r\n                            <td>Gets the response for the reCAPTCHA widget.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Official Documentation</h3>\r\n            <a href=\"https://developers.google.com/recaptcha/docs/display\">Here</a>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>Google Recaptcha V2</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/captcha\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-captcha siteKey=\"6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA\" (onResponse)=\"showResponse($event)\"&gt;&lt;/p-captcha&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class CaptchaDemo &#123;\r\n\r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    showResponse(event) &#123;\r\n        this.messageService.add(&#123;severity:'info', summary:'Succees', detail: 'User Responded', sticky: true&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/captcha/captcha.ts":
/*!***********************************************!*\
  !*** ./src/app/components/captcha/captcha.ts ***!
  \***********************************************/
/*! exports provided: Captcha, CaptchaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Captcha", function() { return Captcha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaModule", function() { return CaptchaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let Captcha = class Captcha {
    constructor(el, _zone) {
        this.el = el;
        this._zone = _zone;
        this.siteKey = null;
        this.theme = 'light';
        this.type = 'image';
        this.size = 'normal';
        this.tabindex = 0;
        this.language = null;
        this.initCallback = "initRecaptcha";
        this.onResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onExpire = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._instance = null;
    }
    ngAfterViewInit() {
        if (window.grecaptcha) {
            if (!window.grecaptcha.render) {
                setTimeout(() => {
                    this.init();
                }, 100);
            }
            else {
                this.init();
            }
        }
        else {
            window[this.initCallback] = () => {
                this.init();
            };
        }
    }
    init() {
        this._instance = window.grecaptcha.render(this.el.nativeElement.children[0], {
            'sitekey': this.siteKey,
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabindex,
            'hl': this.language,
            'callback': (response) => { this._zone.run(() => this.recaptchaCallback(response)); },
            'expired-callback': () => { this._zone.run(() => this.recaptchaExpiredCallback()); }
        });
    }
    reset() {
        if (this._instance === null)
            return;
        window.grecaptcha.reset(this._instance);
    }
    getResponse() {
        if (this._instance === null)
            return null;
        return window.grecaptcha.getResponse(this._instance);
    }
    recaptchaCallback(response) {
        this.onResponse.emit({
            response: response
        });
    }
    recaptchaExpiredCallback() {
        this.onExpire.emit();
    }
    ngOnDestroy() {
        if (this._instance != null) {
            window.grecaptcha.reset(this._instance);
        }
    }
};
Captcha.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Captcha.prototype, "siteKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Captcha.prototype, "theme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Captcha.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Captcha.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Captcha.prototype, "tabindex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Captcha.prototype, "language", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Captcha.prototype, "initCallback", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Captcha.prototype, "onResponse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Captcha.prototype, "onExpire", void 0);
Captcha = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-captcha',
        template: `<div></div>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], Captcha);

let CaptchaModule = class CaptchaModule {
};
CaptchaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [Captcha],
        declarations: [Captcha]
    })
], CaptchaModule);



/***/ }),

/***/ "./src/app/showcase/components/captcha/captchademo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/captcha/captchademo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CaptchaDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaDemoRoutingModule", function() { return CaptchaDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _captchademo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captchademo */ "./src/app/showcase/components/captcha/captchademo.ts");




let CaptchaDemoRoutingModule = class CaptchaDemoRoutingModule {
};
CaptchaDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _captchademo__WEBPACK_IMPORTED_MODULE_3__["CaptchaDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], CaptchaDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/captcha/captchademo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/captcha/captchademo.module.ts ***!
  \*******************************************************************/
/*! exports provided: CaptchaDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaDemoModule", function() { return CaptchaDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _captchademo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captchademo */ "./src/app/showcase/components/captcha/captchademo.ts");
/* harmony import */ var _captchademo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./captchademo-routing.module */ "./src/app/showcase/components/captcha/captchademo-routing.module.ts");
/* harmony import */ var _components_captcha_captcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/captcha/captcha */ "./src/app/components/captcha/captcha.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");









let CaptchaDemoModule = class CaptchaDemoModule {
};
CaptchaDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _captchademo_routing_module__WEBPACK_IMPORTED_MODULE_4__["CaptchaDemoRoutingModule"],
            _components_captcha_captcha__WEBPACK_IMPORTED_MODULE_5__["CaptchaModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _captchademo__WEBPACK_IMPORTED_MODULE_3__["CaptchaDemo"]
        ]
    })
], CaptchaDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/captcha/captchademo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/captcha/captchademo.ts ***!
  \************************************************************/
/*! exports provided: CaptchaDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaDemo", function() { return CaptchaDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");



let CaptchaDemo = class CaptchaDemo {
    constructor(messageService) {
        this.messageService = messageService;
    }
    showResponse(event) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'User Responsed', sticky: true });
    }
};
CaptchaDemo.ctorParameters = () => [
    { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
CaptchaDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./captchademo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/captcha/captchademo.html"),
        providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], CaptchaDemo);



/***/ })

}]);
//# sourceMappingURL=components-captcha-captchademo-module-es2015.js.map