(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-fileupload-fileuploaddemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/fileupload/fileuploaddemo.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/fileupload/fileuploaddemo.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">FileUpload</span>\r\n        <span>FileUpload is an advanced uploader with drag and drop support, multi file uploads, auto uploading, progress tracking and\r\n            validations.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <h3 class=\"first\">Advanced</h3>\r\n    <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\"\r\n            multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\">\r\n            <ng-template pTemplate=\"content\">\r\n                <ul *ngIf=\"uploadedFiles.length\">\r\n                    <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\r\n                </ul>\r\n            </ng-template>\r\n    </p-fileUpload>\r\n\r\n    <h3>Basic</h3>\r\n    <p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\r\n\r\n    <h3>Basic with Auto</h3>\r\n    <p-fileUpload #fubauto mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUploadAuto($event)\" [auto]=\"true\" chooseLabel=\"Browse\"></p-fileUpload>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;FileUploadModule&#125; from 'primeng/fileupload';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>FileUpload requires a url property as the upload target and a name to identify the files at backend.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\"&gt;&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Multiple Uploads</h3>\r\n            <p>Only one file can be selected at a time, to allow selecting multiples enable multiple option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"&gt;&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>DragDrop</h3>\r\n            <p>File selection can also be done by dragging and dropping one or more files to the content section of the component.</p>\r\n\r\n            <h3>Auto Uploads</h3>\r\n            <p>When auto property is enabled, upload begins as soon as file selection is completed or a file is dropped on the drop area.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"\r\n        accept=\"image/*\" [auto]=\"true\"&gt;&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>File Types</h3>\r\n            <p>Selectable file types can be restricted with accept property, example below only allows images to be uploaded.\r\n            Read more about other possible values <a href=\"http://www.w3schools.com/tags/att_input_accept.asp\">here</a>.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"\r\n        accept=\"image/*\"&gt;&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>File Size</h3>\r\n            <p>Maximum file size can be restricted using maxFileSize property defined in bytes.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"\r\n        accept=\"image/*\" maxFileSize=\"1000000\"&gt;&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In order to customize the default messages use invalidFileSizeMessageSummary and invalidFileSizeMessageDetail options.\r\n            In summary &#123;0&#125; placeholder refers to the filename and in detail, file size.</p>\r\n            <ul>\r\n                <li>invalidFileSizeMessageSummary: '&#123;0&#125;: Invalid file size, '</li>\r\n                <li>invalidFileSizeMessageDetail: string = 'maximum upload size is &#123;0&#125;.'</li>\r\n            </ul>\r\n\r\n            <h3>Templating</h3>\r\n            <p>File list UI is customizable using a ng-template called \"file\" that gets the <a href=\"https://www.w3.org/TR/FileAPI/\">File</a> instance as the implicit variable.\r\n                Second ng-template named \"content\" can be used to place custom content inside the content section which would be useful to implement a user interface to manage the uploaded files such as removing them.\r\n                Third and final ng-template option is \"toolbar\" to display custom content at toolbar.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fileUpload name=\"myfile[]\" url=\"./upload.php\" multiple=\"multiple\"\r\n        accept=\"image/*\" maxFileSize=\"1000000\"&gt;\r\n        &lt;ng-template pTemplate=\"toolbar\"&gt;\r\n            &lt;div&gt;Upload 3 Files&lt;/div&gt;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template let-file pTemplate=\"file\"&gt;\r\n            &lt;div&gt;Custom UI to display a file&lt;/div&gt;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template pTemplate=\"content\"&gt;\r\n            &lt;div&gt;Custom UI to manage uploaded files&lt;/div&gt;\r\n        &lt;/ng-template&gt;\r\n&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Request Customization</h3>\r\n            <p>Internally, FileUpload uses Angular's HttpClient module so you may take advantage of the built-in features such interceptors and header customization.</p>\r\n\r\n            <h3>Basic UI</h3>\r\n            <p>FileUpload basic mode provides a simpler UI as an alternative to advanced mode.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\" [auto]=\"true\"&gt;&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n            <h3>Custom Upload</h3>\r\n            <p>Uploading implementation can be overridden by enabling customMode property and defining a custom upload handler event.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fileUpload name=\"myfile[]\" customUpload=\"true\" (uploadHandler)=\"myUploader($event)\"&gt;&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nmyUploader(event) &#123;\r\n    //event.files == files to upload\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>name</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the request parameter to identify the files at backend.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>url</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Remote url to upload the files.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>method</td>\r\n                            <td>string</td>\r\n                            <td>POST</td>\r\n                            <td>HTTP method to send the files to the url.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>multiple</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Used to select multiple files at once from file dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>accept</td>\r\n                            <td>string</td>\r\n                            <td>false</td>\r\n                            <td>Pattern to restrict the allowed file types such as \"image/*\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Disables the upload functionality.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>auto</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, upload begins automatically after selection is completed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>maxFileSize</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Maximum file size allowed in bytes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>fileLimit</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Maximum number of files that can be uploaded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>invalidFileSizeMessageSummary</td>\r\n                            <td>string</td>\r\n                            <td>\"&#123;0&#125;: Invalid file size, \"</td>\r\n                            <td>Summary message of the invalid file size.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>invalidFileSizeMessageDetail</td>\r\n                            <td>string</td>\r\n                            <td>\"maximum upload size is &#123;0&#125;.\"</td>\r\n                            <td>Detail message of the invalid file size.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>invalidFileTypeMessageSummary</td>\r\n                            <td>string</td>\r\n                            <td>\"&#123;0&#125;: Invalid file type, \"</td>\r\n                            <td>Summary message of the invalid file type.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>invalidFileLimitMessageDetail</td>\r\n                            <td>string</td>\r\n                            <td>\"limit is &#123;0&#125; at most.\"</td>\r\n                            <td>Detail message of the invalid file type.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>invalidFileLimitMessageSummary</td>\r\n                            <td>string</td>\r\n                            <td>\"Maximum number of files exceeded, \"</td>\r\n                            <td>Summary message of the invalid file type.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>invalidFileTypeMessageDetail</td>\r\n                            <td>string</td>\r\n                            <td>\"allowed file types: &#123;0&#125;.\"</td>\r\n                            <td>Detail message of the invalid file type.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>previewWidth</td>\r\n                            <td>number</td>\r\n                            <td>50</td>\r\n                            <td>Width of the image thumbnail in pixels.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>chooseLabel</td>\r\n                            <td>string</td>\r\n                            <td>Choose</td>\r\n                            <td>Label of the choose button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>uploadLabel</td>\r\n                            <td>string</td>\r\n                            <td>Upload</td>\r\n                            <td>Label of the upload button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>cancelLabel</td>\r\n                            <td>string</td>\r\n                            <td>Cancel</td>\r\n                            <td>Label of the cancel button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>withCredentials</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>mode</td>\r\n                            <td>string</td>\r\n                            <td>advanced</td>\r\n                            <td>Defines the UI of the component, possible values are \"advanced\" and \"basic\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>customUpload</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to use the default upload or a manual implementation defined in uploadHandler callback.</td>\r\n                        </tr>\r\n                      <tr>\r\n                            <td>showUploadButton</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines the visibility of upload button for Client-side FileUpload.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showCancelButton</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines the visibility of cancel button for Client-side FileUpload.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>files</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>List of files to be provide to the FileUpload externally.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>headers</td>\r\n                            <td>HttpHeaders</td>\r\n                            <td>null</td>\r\n                            <td>HttpHeaders class represents the header configuration options for an HTTP request.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onBeforeUpload</td>\r\n                            <td>event.formData: FormData object.</td>\r\n                            <td>Callback to invoke before file upload is initialized.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSend</td>\r\n                            <td>event.originalEvent: Http Event <br>\r\n                                event.formData: FormData object.</td>\r\n                            <td>An event indicating that the request was sent to the server. Useful when a request may be retried multiple times, to distinguish between retries on the final event stream.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onUpload</td>\r\n                            <td>event.originalEvent: Http Event<br />\r\n                                event.files: Uploaded files.</td>\r\n                            <td>Callback to invoke when file upload is complete.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onError</td>\r\n                            <td>event.files: Files that are not uploaded.<br />\r\n                                event.error: Request Error.</td>\r\n                            <td>Callback to invoke if file upload fails.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onClear</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke when files in queue are removed without uploading using clear all button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRemove</td>\r\n                            <td>event.originalEvent: Original browser event. <br />\r\n                                event.file: Selected file.</td>\r\n                            <td>Callback to invoke when a file is removed without uploading using clear button of a file.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSelect</td>\r\n                            <td>event.originalEvent: Original browser event. <br />\r\n                                event.files: List of selected files.</td>\r\n                            <td>Callback to invoke when files are selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onProgress</td>\r\n                            <td>event.originalEvent: Original browser event. <br />\r\n                                event.progress: Calculated progress value.</td>\r\n                            <td>Callback to invoke when files are being uploaded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>uploadHandler</td>\r\n                            <td>event.files: List of selected files.</td>\r\n                            <td>Callback to invoke in custom upload mode to upload the files manually.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>upload</td>\r\n                            <td>-</td>\r\n                            <td>Uploads the selected files.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>clear</td>\r\n                            <td>-</td>\r\n                            <td>Clears the files list.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-fileupload</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-fileupload-buttonbar</td>\r\n                            <td>Header containing the buttons</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-fileupload-content</td>\r\n                            <td>Content section</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/fileupload\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Advanced&lt;/h3&gt;\r\n&lt;p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\"\r\n        multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\"&gt;\r\n    &lt;ng-template pTemplate=\"content\"&gt;\r\n        &lt;ul *ngIf=\"uploadedFiles.length\"&gt;\r\n            &lt;li *ngFor=\"let file of uploadedFiles\"&gt;&#123;&#123;file.name&#125;&#125; - &#123;&#123;file.size&#125;&#125; bytes&lt;/li&gt;\r\n        &lt;/ul&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-fileUpload&gt;\r\n\r\n&lt;h3&gt;Basic&lt;/h3&gt;\r\n&lt;p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"&gt;&lt;/p-fileUpload&gt;\r\n\r\n&lt;h3&gt;Basic with Auto&lt;/h3&gt;\r\n&lt;p-fileUpload #fubauto mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUploadAuto($event)\" [auto]=\"true\" chooseLabel=\"Browse\"&gt;&lt;/p-fileUpload&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class FileUploadDemo &#123;\r\n\r\n    uploadedFiles: any[] = [];\r\n\r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    onUpload(event) &#123;\r\n        for(let file of event.files) &#123;\r\n            this.uploadedFiles.push(file);\r\n        &#125;\r\n\r\n        this.messageService.add(&#123;severity: 'info', summary: 'File Uploaded', detail: ''&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/fileupload/fileupload.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/fileupload/fileupload.ts ***!
  \*****************************************************/
/*! exports provided: FileUpload, FileUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _messages_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages/messages */ "./src/app/components/messages/messages.ts");
/* harmony import */ var _progressbar_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../progressbar/progressbar */ "./src/app/components/progressbar/progressbar.ts");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var FileUpload = /** @class */ (function () {
    function FileUpload(el, sanitizer, zone, http) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.http = http;
        this.method = 'POST';
        this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
        this.invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
        this.invalidFileTypeMessageDetail = 'allowed file types: {0}.';
        this.invalidFileLimitMessageDetail = 'limit is {0} at most.';
        this.invalidFileLimitMessageSummary = 'Maximum number of files exceeded, ';
        this.previewWidth = 50;
        this.chooseLabel = 'Choose';
        this.uploadLabel = 'Upload';
        this.cancelLabel = 'Cancel';
        this.showUploadButton = true;
        this.showCancelButton = true;
        this.mode = 'advanced';
        this.onBeforeUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._files = [];
        this.progress = 0;
        this.uploadedFileCount = 0;
    }
    Object.defineProperty(FileUpload.prototype, "files", {
        get: function () {
            return this._files;
        },
        set: function (files) {
            this._files = [];
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                    }
                    this._files.push(files[i]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    FileUpload.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'file':
                    _this.fileTemplate = item.template;
                    break;
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                case 'toolbar':
                    _this.toolbarTemplate = item.template;
                    break;
                default:
                    _this.fileTemplate = item.template;
                    break;
            }
        });
    };
    FileUpload.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.mode === 'advanced') {
            this.zone.runOutsideAngular(function () {
                if (_this.content)
                    _this.content.nativeElement.addEventListener('dragover', _this.onDragOver.bind(_this));
            });
        }
    };
    FileUpload.prototype.onFileSelect = function (event) {
        if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
            this.duplicateIEEvent = false;
            return;
        }
        this.msgs = [];
        if (!this.multiple) {
            this.files = [];
        }
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!this.isFileSelected(file)) {
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                    }
                    this.files.push(files[i]);
                }
            }
        }
        this.onSelect.emit({ originalEvent: event, files: files });
        if (this.fileLimit && this.mode == "advanced") {
            this.checkFileLimit();
        }
        if (this.hasFiles() && this.auto && (!(this.mode === "advanced") || !this.isFileLimitExceeded())) {
            this.upload();
        }
        if (event.type !== 'drop' && this.isIE11()) {
            this.clearIEInput();
        }
        else {
            this.clearInputElement();
        }
    };
    FileUpload.prototype.isFileSelected = function (file) {
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var sFile = _a[_i];
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size)) {
                return true;
            }
        }
        return false;
    };
    FileUpload.prototype.isIE11 = function () {
        return !!window['MSInputMethodContext'] && !!document['documentMode'];
    };
    FileUpload.prototype.validate = function (file) {
        if (this.accept && !this.isFileTypeValid(file)) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
            });
            return false;
        }
        if (this.maxFileSize && file.size > this.maxFileSize) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
            });
            return false;
        }
        return true;
    };
    FileUpload.prototype.isFileTypeValid = function (file) {
        var acceptableTypes = this.accept.split(',').map(function (type) { return type.trim(); });
        for (var _i = 0, acceptableTypes_1 = acceptableTypes; _i < acceptableTypes_1.length; _i++) {
            var type = acceptableTypes_1[_i];
            var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)
                : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
            if (acceptable) {
                return true;
            }
        }
        return false;
    };
    FileUpload.prototype.getTypeClass = function (fileType) {
        return fileType.substring(0, fileType.indexOf('/'));
    };
    FileUpload.prototype.isWildcard = function (fileType) {
        return fileType.indexOf('*') !== -1;
    };
    FileUpload.prototype.getFileExtension = function (file) {
        return '.' + file.name.split('.').pop();
    };
    FileUpload.prototype.isImage = function (file) {
        return /^image\//.test(file.type);
    };
    FileUpload.prototype.onImageLoad = function (img) {
        window.URL.revokeObjectURL(img.src);
    };
    FileUpload.prototype.upload = function () {
        var _this = this;
        if (this.customUpload) {
            if (this.fileLimit) {
                this.uploadedFileCount += this.files.length;
            }
            this.uploadHandler.emit({
                files: this.files
            });
        }
        else {
            this.uploading = true;
            this.msgs = [];
            var formData_1 = new FormData();
            this.onBeforeUpload.emit({
                'formData': formData_1
            });
            for (var i = 0; i < this.files.length; i++) {
                formData_1.append(this.name, this.files[i], this.files[i].name);
            }
            this.http.post(this.url, formData_1, {
                headers: this.headers, reportProgress: true, observe: 'events', withCredentials: this.withCredentials
            }).subscribe(function (event) {
                switch (event.type) {
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Sent:
                        _this.onSend.emit({
                            originalEvent: event,
                            'formData': formData_1
                        });
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Response:
                        _this.uploading = false;
                        _this.progress = 0;
                        if (event['status'] >= 200 && event['status'] < 300) {
                            if (_this.fileLimit) {
                                _this.uploadedFileCount += _this.files.length;
                            }
                            _this.onUpload.emit({ originalEvent: event, files: _this.files });
                        }
                        else {
                            _this.onError.emit({ files: _this.files });
                        }
                        _this.clear();
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].UploadProgress: {
                        if (event['loaded']) {
                            _this.progress = Math.round((event['loaded'] * 100) / event['total']);
                        }
                        _this.onProgress.emit({ originalEvent: event, progress: _this.progress });
                        break;
                    }
                }
            }, function (error) {
                _this.uploading = false;
                _this.onError.emit({ files: _this.files, error: error });
            });
        }
    };
    FileUpload.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
        this.clearInputElement();
    };
    FileUpload.prototype.remove = function (event, index) {
        this.clearInputElement();
        this.onRemove.emit({ originalEvent: event, file: this.files[index] });
        this.files.splice(index, 1);
    };
    FileUpload.prototype.isFileLimitExceeded = function () {
        if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focus) {
            this.focus = false;
        }
        return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
    };
    FileUpload.prototype.isChooseDisabled = function () {
        return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    };
    FileUpload.prototype.checkFileLimit = function () {
        if (this.isFileLimitExceeded()) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileLimitMessageSummary.replace('{0}', this.fileLimit.toString()),
                detail: this.invalidFileLimitMessageDetail.replace('{0}', this.fileLimit.toString())
            });
        }
    };
    FileUpload.prototype.clearInputElement = function () {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.advancedFileInput.nativeElement.value = '';
        }
        if (this.basicFileInput && this.basicFileInput.nativeElement) {
            this.basicFileInput.nativeElement.value = '';
        }
    };
    FileUpload.prototype.clearIEInput = function () {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
            this.advancedFileInput.nativeElement.value = '';
        }
    };
    FileUpload.prototype.hasFiles = function () {
        return this.files && this.files.length > 0;
    };
    FileUpload.prototype.onDragEnter = function (e) {
        if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragOver = function (e) {
        if (!this.disabled) {
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].addClass(this.content.nativeElement, 'ui-fileupload-highlight');
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragLeave = function (event) {
        if (!this.disabled) {
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
        }
    };
    FileUpload.prototype.onDrop = function (event) {
        if (!this.disabled) {
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            var allowDrop = this.multiple || (files && files.length === 1);
            if (allowDrop) {
                this.onFileSelect(event);
            }
        }
    };
    FileUpload.prototype.onFocus = function () {
        this.focus = true;
    };
    FileUpload.prototype.onBlur = function () {
        this.focus = false;
    };
    FileUpload.prototype.formatSize = function (bytes) {
        if (bytes == 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    FileUpload.prototype.onSimpleUploaderClick = function (event) {
        if (this.hasFiles()) {
            this.upload();
        }
    };
    FileUpload.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    FileUpload.prototype.ngOnDestroy = function () {
        if (this.content && this.content.nativeElement) {
            this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
        }
    };
    FileUpload.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "method", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FileUpload.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "accept", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FileUpload.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FileUpload.prototype, "auto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FileUpload.prototype, "withCredentials", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FileUpload.prototype, "maxFileSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "invalidFileSizeMessageSummary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "invalidFileSizeMessageDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "invalidFileTypeMessageSummary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "invalidFileTypeMessageDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "invalidFileLimitMessageDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "invalidFileLimitMessageSummary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUpload.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FileUpload.prototype, "previewWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "chooseLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "uploadLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "cancelLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FileUpload.prototype, "showUploadButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FileUpload.prototype, "showCancelButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUpload.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"])
    ], FileUpload.prototype, "headers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FileUpload.prototype, "customUpload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FileUpload.prototype, "fileLimit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "onBeforeUpload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "onSend", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "onUpload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "onError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "onClear", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "onRemove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "onProgress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FileUpload.prototype, "uploadHandler", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], FileUpload.prototype, "templates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('advancedfileinput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FileUpload.prototype, "advancedFileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicfileinput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FileUpload.prototype, "basicFileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FileUpload.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], FileUpload.prototype, "files", null);
    FileUpload = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-fileUpload',
            template: "\n        <div [ngClass]=\"'ui-fileupload ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"mode === 'advanced'\">\n            <div class=\"ui-fileupload-buttonbar ui-widget-header ui-corner-top\">\n                <span class=\"ui-fileupload-choose\" [label]=\"chooseLabel\" icon=\"pi pi-plus\" pButton [ngClass]=\"{'ui-state-focus': focus, 'ui-state-disabled':disabled || isChooseDisabled()}\"> \n                    <input #advancedfileinput type=\"file\" (change)=\"onFileSelect($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled || isChooseDisabled()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n                </span>\n\n                <p-button *ngIf=\"!auto&&showUploadButton\" type=\"button\" [label]=\"uploadLabel\" icon=\"pi pi-upload\" (onClick)=\"upload()\" [disabled]=\"!hasFiles() || isFileLimitExceeded()\"></p-button>\n                <p-button *ngIf=\"!auto&&showCancelButton\" type=\"button\" [label]=\"cancelLabel\" icon=\"pi pi-times\" (onClick)=\"clear()\" [disabled]=\"!hasFiles() ||\u00A0uploading\"></p-button>\n\n                <ng-container *ngTemplateOutlet=\"toolbarTemplate\"></ng-container>\n            </div>\n            <div #content [ngClass]=\"{'ui-fileupload-content ui-widget-content ui-corner-bottom':true}\"\n                 (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event)\">\n                <p-progressBar [value]=\"progress\" [showValue]=\"false\" *ngIf=\"hasFiles()\"></p-progressBar>\n\n                <p-messages [value]=\"msgs\" [enableService]=\"false\"></p-messages>\n\n                <div class=\"ui-fileupload-files\" *ngIf=\"hasFiles()\">\n                    <div *ngIf=\"!fileTemplate\">\n                        <div class=\"ui-fileupload-row\" *ngFor=\"let file of files; let i = index;\">\n                            <div><img [src]=\"file.objectURL\" *ngIf=\"isImage(file)\" [width]=\"previewWidth\" /></div>\n                            <div>{{file.name}}</div>\n                            <div>{{formatSize(file.size)}}</div>\n                            <div>\n                                <button type=\"button\" icon=\"pi pi-times\" pButton (click)=\"remove($event,i)\" [disabled]=\"uploading\"></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"fileTemplate\">\n                        <ng-template ngFor [ngForOf]=\"files\" [ngForTemplate]=\"fileTemplate\"></ng-template>\n                    </div>\n                </div>\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </div>\n        </div>\n        <span *ngIf=\"mode === 'basic'\" [ngClass]=\"{'ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left': true, \n                'ui-fileupload-choose-selected': hasFiles(),'ui-state-focus': focus, 'ui-state-disabled':disabled}\"\n              [ngStyle]=\"style\" [class]=\"styleClass\" (mouseup)=\"onSimpleUploaderClick($event)\">\n            <span class=\"ui-button-icon-left pi\" [ngClass]=\"{'pi-plus': !hasFiles()||auto, 'pi-upload': hasFiles()&&!auto}\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>\n            <input #basicfileinput type=\"file\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\"\n                   (change)=\"onFileSelect($event)\" *ngIf=\"!hasFiles()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n        </span>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], FileUpload);
    return FileUpload;
}());

var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _common_shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _button_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], _progressbar_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"], _messages_messages__WEBPACK_IMPORTED_MODULE_5__["MessagesModule"]],
            exports: [FileUpload, _common_shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _button_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], _progressbar_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"], _messages_messages__WEBPACK_IMPORTED_MODULE_5__["MessagesModule"]],
            declarations: [FileUpload]
        })
    ], FileUploadModule);
    return FileUploadModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/fileupload/fileuploaddemo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/showcase/components/fileupload/fileuploaddemo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FileUploadDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadDemoRoutingModule", function() { return FileUploadDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fileuploaddemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fileuploaddemo */ "./src/app/showcase/components/fileupload/fileuploaddemo.ts");




var FileUploadDemoRoutingModule = /** @class */ (function () {
    function FileUploadDemoRoutingModule() {
    }
    FileUploadDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _fileuploaddemo__WEBPACK_IMPORTED_MODULE_3__["FileUploadDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], FileUploadDemoRoutingModule);
    return FileUploadDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/fileupload/fileuploaddemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/fileupload/fileuploaddemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: FileUploadDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadDemoModule", function() { return FileUploadDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fileuploaddemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fileuploaddemo */ "./src/app/showcase/components/fileupload/fileuploaddemo.ts");
/* harmony import */ var _fileuploaddemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fileuploaddemo-routing.module */ "./src/app/showcase/components/fileupload/fileuploaddemo-routing.module.ts");
/* harmony import */ var _components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/fileupload/fileupload */ "./src/app/components/fileupload/fileupload.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");










var FileUploadDemoModule = /** @class */ (function () {
    function FileUploadDemoModule() {
    }
    FileUploadDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _fileuploaddemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["FileUploadDemoRoutingModule"],
                _components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
            ],
            declarations: [
                _fileuploaddemo__WEBPACK_IMPORTED_MODULE_3__["FileUploadDemo"]
            ]
        })
    ], FileUploadDemoModule);
    return FileUploadDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/fileupload/fileuploaddemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/fileupload/fileuploaddemo.ts ***!
  \******************************************************************/
/*! exports provided: FileUploadDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadDemo", function() { return FileUploadDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");



var FileUploadDemo = /** @class */ (function () {
    function FileUploadDemo(messageService) {
        this.messageService = messageService;
        this.uploadedFiles = [];
    }
    FileUploadDemo.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
    FileUploadDemo.prototype.onBasicUpload = function (event) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    };
    FileUploadDemo.prototype.onBasicUploadAuto = function (event) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    };
    FileUploadDemo.ctorParameters = function () { return [
        { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
    ]; };
    FileUploadDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./fileuploaddemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/fileupload/fileuploaddemo.html"),
            providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], FileUploadDemo);
    return FileUploadDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-fileupload-fileuploaddemo-module-es5.js.map