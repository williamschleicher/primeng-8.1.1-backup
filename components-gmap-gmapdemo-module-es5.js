(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-gmap-gmapdemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/gmap/gmapdemo.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/gmap/gmapdemo.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">GMap</span>\r\n        <span>GMap component provides integration with Google Maps API. This sample demontrates\r\n        various uses cases like binding, overlays and events. Click the map to add a new item.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <p-gmap #gmap [style]=\"{'width':'100%','height':'320px', 'margin-bottom': '1em'}\" [options]=\"options\" [overlays]=\"overlays\"\r\n       (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"></p-gmap>\r\n\r\n    <button type=\"button\" pButton label=\"Clear\" icon=\"pi pi-times\" (click)=\"clear()\" style=\"margin-right:.25em\"></button>\r\n    <button type=\"button\" pButton label=\"Zoom In\" icon=\"pi pi-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-right:.25em\"></button>\r\n    <button type=\"button\" pButton label=\"Zoom Out\" icon=\"pi pi-minus\" (click)=\"zoomOut(gmap.getMap())\"></button>\r\n\r\n    <p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\" [width]=\"300\">\r\n        <div class=\"ui-g ui-fluid\" *ngIf=\"selectedPosition\">\r\n            <div class=\"ui-g-2\"><label for=\"title\">Label</label></div>\r\n            <div class=\"ui-g-10\"><input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"></div>\r\n\r\n            <div class=\"ui-g-2\"><label for=\"lat\">Lat</label></div>\r\n            <div class=\"ui-g-10\"><input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"></div>\r\n\r\n            <div class=\"ui-g-2\"><label for=\"lng\">Lng</label></div>\r\n            <div class=\"ui-g-10\"><input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"></div>\r\n\r\n            <div class=\"ui-g-2\"><label for=\"drg\">Drag</label></div>\r\n            <div class=\"ui-g-10\"><p-checkbox [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"{'margin-top':'.25em'}\"></p-checkbox></div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button type=\"button\" pButton label=\"Add Marker\" icon=\"pi pi-plus\" (click)=\"addMarker()\"></button>\r\n            </div>\r\n        </p-footer>\r\n    </p-dialog>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;GMapModule&#125; from 'primeng/gmap';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>A map is initialized with options and dimensions. Refer to the google maps api for the list of available options.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap [options]=\"options\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\" &gt;&lt;/p-gmap&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n\r\n    overlays: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Overlays</h3>\r\n            <p>GMap can display any type of overlay such as markers, polygons and circles. Overlay instances are bound using the overlays property array. Overlays are aware\r\n            of one-way binding so whenever the array changes, gmap updates itself.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\" &gt;&lt;/p-gmap&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n\r\n    overlays: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n\r\n        this.overlays = [\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\r\n            new google.maps.Polygon(&#123;paths: [\r\n                &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\r\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\r\n            &#125;),\r\n            new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\r\n            new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Events</h3>\r\n            <p>GMap provides common callbacks to hook into events including map click, overlay click and overlay dragging.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\"\r\n            (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\"&gt;&lt;/p-gmap&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n\r\n    overlays: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n\r\n        this.overlays = [\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\r\n            new google.maps.Polygon(&#123;paths: [\r\n                &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\r\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\r\n            &#125;),\r\n            new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\r\n            new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\r\n        ];\r\n    &#125;\r\n\r\n    handleMapClick(event) &#123;\r\n        //event: MouseEvent of Google Maps api\r\n    &#125;\r\n\r\n    handleOverlayClick(event) &#123;\r\n        //event.originalEvent: MouseEvent of Google Maps api\r\n        //event.overlay: Clicked overlay\r\n        //event.map: Map instance\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Google Maps API</h3>\r\n            <p>In case you need to access the map instance directly, use the getMap() method.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap #gmap [options]=\"options\"&gt;&lt;/p-gmap&gt;\r\n\r\n&lt;button type=\"button\" pButton label=\"Zoom In\" icon=\"fa-search-plus\" (click)=\"zoomIn(gmap.getMap())\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n\r\n    overlays: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n    &#125;\r\n\r\n    zoomIn(map) &#123;\r\n        map.setZoom(map.getZoom()+1);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>Another option is to to get the map object directly after init via (onMapReady) event.\r\n               In the example below, google.maps.Map is used for adjusting map bounds to markers.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap #gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"mapStyle\"\r\n    (onMapReady)=\"setMap($event)\"&gt;&lt;/p-gmap&gt;\r\n</code>\r\n</pre>\r\n            <p>Then from your component you would write</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n\r\n    overlays: any[];\r\n\r\n    map: google.maps.Map;\r\n\r\n    setMap(event) &#123;\r\n        this.map = event.map;\r\n    &#125;\r\n\r\n    ngOnInit() &#123;\r\n        let bounds = new google.maps.LatLngBounds();\r\n        this.overlays = [\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\r\n        ]\r\n        // ... extend bounds\r\n        this.overlays.forEach(marker => &#123;\r\n            bounds.extend(marker.getPosition());\r\n        &#125;);\r\n\r\n        setTimeout(()=> &#123; // map will need some time to load\r\n            this.map.fitBounds(bounds); // Map object used directly\r\n        &#125;, 1000);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>options</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Google Maps API configuration object.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>overlays</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of overlays to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onMapClick</td>\r\n                            <td>event: Google Maps MouseEvent</td>\r\n                            <td>Callback to invoke when map is clicked except markers.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onMapDragEnd</td>\r\n                            <td>originalEvent: Google Maps dragend<br></td>\r\n                            <td>Callback to invoke when map drag (i.e. pan) has ended.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onMapReady</td>\r\n                            <td>event.map: Google Maps Instance</td>\r\n                            <td>Callback to invoke when the map is ready to be used.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayClick</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayDblClick</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay is double clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayDrag</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay is being dragged.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayDragEnd</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay drag ends.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayDragStart</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay drag starts.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onZoomChanged</td>\r\n                            <td>originalEvent: Google Maps zoom_changed</td>\r\n                            <td>Callback to invoke when zoom level has changed.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>Google Maps API.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/gmap\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-gmap #gmap [style]=\"&#123;'width':'100%','height':'320px', 'margin-bottom': '1em'&#125;\" [options]=\"options\" [overlays]=\"overlays\"\r\n       (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"&gt;&lt;/p-gmap&gt;\r\n\r\n&lt;button type=\"button\" pButton label=\"Clear\" icon=\"pi pi-times\" (click)=\"clear()\" style=\"margin-right:.25em\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton label=\"Zoom In\" icon=\"pi pi-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-right:.25em\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton label=\"Zoom Out\" icon=\"pi pi-minus\" (click)=\"zoomOut(gmap.getMap())\"&gt;&lt;/button&gt;\r\n\r\n&lt;p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\"&gt;\r\n    &lt;div class=\"ui-g ui-fluid\" *ngIf=\"selectedPosition\"&gt;\r\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"title\"&gt;Label&lt;/label&gt;&lt;/div&gt;\r\n        &lt;div class=\"ui-g-10\"&gt;&lt;input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"&gt;&lt;/div&gt;\r\n\r\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"lat\"&gt;Lat&lt;/label&gt;&lt;/div&gt;\r\n        &lt;div class=\"ui-g-10\"&gt;&lt;input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"&gt;&lt;/div&gt;\r\n\r\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"lng\"&gt;Lng&lt;/label&gt;&lt;/div&gt;\r\n        &lt;div class=\"ui-g-10\"&gt;&lt;input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"&gt;&lt;/div&gt;\r\n\r\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"drg\"&gt;Drag&lt;/label&gt;&lt;/div&gt;\r\n        &lt;div class=\"ui-g-10\"&gt;&lt;p-checkbox [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"&#123;'margin-top':'.25em'&#125;\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\r\n            &lt;button type=\"button\" pButton label=\"Add Marker\" icon=\"fa-plus\" (click)=\"addMarker()\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class GMapDemo implements OnInit &#123;\r\n\r\n    options: any;\r\n\r\n    overlays: any[];\r\n\r\n    dialogVisible: boolean;\r\n\r\n    markerTitle: string;\r\n\r\n    selectedPosition: any;\r\n\r\n    infoWindow: any;\r\n\r\n    draggable: boolean;\r\n\r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n\r\n        this.initOverlays();\r\n\r\n        this.infoWindow = new google.maps.InfoWindow();\r\n    &#125;\r\n\r\n    handleMapClick(event) &#123;\r\n        this.dialogVisible = true;\r\n        this.selectedPosition = event.latLng;\r\n    &#125;\r\n\r\n    handleOverlayClick(event) &#123;\r\n        let isMarker = event.overlay.getTitle != undefined;\r\n\r\n        if(isMarker) &#123;\r\n            let title = event.overlay.getTitle();\r\n            this.infoWindow.setContent('<div>' + title + '</div>');\r\n            this.infoWindow.open(event.map, event.overlay);\r\n            event.map.setCenter(event.overlay.getPosition());\r\n\r\n            this.messageService.add(&#123;severity:'info', summary:'Marker Selected', detail: title&#125;);\r\n        &#125;\r\n        else &#123;\r\n            this.messageService.add(&#123;severity:'info', summary:'Shape Selected', detail: ''&#125;);\r\n        &#125;\r\n    &#125;\r\n\r\n    addMarker() &#123;\r\n        this.overlays.push(new google.maps.Marker(&#123;position:&#123;lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()&#125;, title:this.markerTitle, draggable: this.draggable&#125;));\r\n        this.markerTitle = null;\r\n        this.dialogVisible = false;\r\n    &#125;\r\n\r\n    handleDragEnd(event) &#123;\r\n        this.messageService.add(&#123;severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()&#125;);\r\n    &#125;\r\n\r\n    initOverlays() &#123;\r\n        if(!this.overlays||!this.overlays.length) &#123;\r\n            this.overlays = [\r\n                new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\r\n                new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\r\n                new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\r\n                new google.maps.Polygon(&#123;paths: [\r\n                    &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\r\n                ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\r\n                &#125;),\r\n                new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\r\n                new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\r\n            ];\r\n        &#125;\r\n    &#125;\r\n\r\n    zoomIn(map) &#123;\r\n        map.setZoom(map.getZoom()+1);\r\n    &#125;\r\n\r\n    zoomOut(map) &#123;\r\n        map.setZoom(map.getZoom()-1);\r\n    &#125;\r\n\r\n    clear() &#123;\r\n        this.overlays = [];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gmap/gmap.ts":
/*!*****************************************!*\
  !*** ./src/app/components/gmap/gmap.ts ***!
  \*****************************************/
/*! exports provided: GMap, GMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMap", function() { return GMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMapModule", function() { return GMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var GMap = /** @class */ (function () {
    function GMap(el, differs, cd, zone) {
        this.el = el;
        this.cd = cd;
        this.zone = zone;
        this.onMapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOverlayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOverlayDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOverlayDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOverlayDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOverlayDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMapDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onZoomChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.differ = differs.find([]).create(null);
    }
    GMap.prototype.ngAfterViewChecked = function () {
        if (!this.map && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    };
    GMap.prototype.initialize = function () {
        var _this = this;
        this.map = new google.maps.Map(this.el.nativeElement.children[0], this.options);
        this.onMapReady.emit({
            map: this.map
        });
        if (this.overlays) {
            for (var _i = 0, _a = this.overlays; _i < _a.length; _i++) {
                var overlay = _a[_i];
                overlay.setMap(this.map);
                this.bindOverlayEvents(overlay);
            }
        }
        this.map.addListener('click', function (event) {
            _this.zone.run(function () {
                _this.onMapClick.emit(event);
            });
        });
        this.map.addListener('dragend', function (event) {
            _this.zone.run(function () {
                _this.onMapDragEnd.emit(event);
            });
        });
        this.map.addListener('zoom_changed', function (event) {
            _this.zone.run(function () {
                _this.onZoomChanged.emit(event);
            });
        });
    };
    GMap.prototype.bindOverlayEvents = function (overlay) {
        var _this = this;
        overlay.addListener('click', function (event) {
            _this.zone.run(function () {
                _this.onOverlayClick.emit({
                    originalEvent: event,
                    'overlay': overlay,
                    map: _this.map
                });
            });
        });
        overlay.addListener('dblclick', function (event) {
            _this.zone.run(function () {
                _this.onOverlayDblClick.emit({
                    originalEvent: event,
                    'overlay': overlay,
                    map: _this.map
                });
            });
        });
        if (overlay.getDraggable()) {
            this.bindDragEvents(overlay);
        }
    };
    GMap.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.overlays);
        if (changes && this.map) {
            changes.forEachRemovedItem(function (record) {
                google.maps.event.clearInstanceListeners(record.item);
                record.item.setMap(null);
            });
            changes.forEachAddedItem(function (record) {
                record.item.setMap(_this.map);
                record.item.addListener('click', function (event) {
                    _this.zone.run(function () {
                        _this.onOverlayClick.emit({
                            originalEvent: event,
                            overlay: record.item,
                            map: _this.map
                        });
                    });
                });
                if (record.item.getDraggable()) {
                    _this.bindDragEvents(record.item);
                }
            });
        }
    };
    GMap.prototype.bindDragEvents = function (overlay) {
        var _this = this;
        overlay.addListener('dragstart', function (event) {
            _this.zone.run(function () {
                _this.onOverlayDragStart.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: _this.map
                });
            });
        });
        overlay.addListener('drag', function (event) {
            _this.zone.run(function () {
                _this.onOverlayDrag.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: _this.map
                });
            });
        });
        overlay.addListener('dragend', function (event) {
            _this.zone.run(function () {
                _this.onOverlayDragEnd.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: _this.map
                });
            });
        });
    };
    GMap.prototype.getMap = function () {
        return this.map;
    };
    GMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GMap.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GMap.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GMap.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GMap.prototype, "overlays", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onMapClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onOverlayClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onOverlayDblClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onOverlayDragStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onOverlayDrag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onOverlayDragEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onMapReady", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onMapDragEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GMap.prototype, "onZoomChanged", void 0);
    GMap = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-gmap',
            template: "<div [ngStyle]=\"style\" [class]=\"styleClass\"></div>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], GMap);
    return GMap;
}());

var GMapModule = /** @class */ (function () {
    function GMapModule() {
    }
    GMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [GMap],
            declarations: [GMap]
        })
    ], GMapModule);
    return GMapModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/gmap/gmapdemo-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/gmap/gmapdemo-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: GMapDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMapDemoRoutingModule", function() { return GMapDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gmapdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gmapdemo */ "./src/app/showcase/components/gmap/gmapdemo.ts");




var GMapDemoRoutingModule = /** @class */ (function () {
    function GMapDemoRoutingModule() {
    }
    GMapDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _gmapdemo__WEBPACK_IMPORTED_MODULE_3__["GMapDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], GMapDemoRoutingModule);
    return GMapDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/gmap/gmapdemo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/showcase/components/gmap/gmapdemo.module.ts ***!
  \*************************************************************/
/*! exports provided: GMapDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMapDemoModule", function() { return GMapDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gmapdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gmapdemo */ "./src/app/showcase/components/gmap/gmapdemo.ts");
/* harmony import */ var _gmapdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gmapdemo-routing.module */ "./src/app/showcase/components/gmap/gmapdemo-routing.module.ts");
/* harmony import */ var _components_gmap_gmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/gmap/gmap */ "./src/app/components/gmap/gmap.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/checkbox/checkbox */ "./src/app/components/checkbox/checkbox.ts");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/dialog/dialog */ "./src/app/components/dialog/dialog.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");














var GMapDemoModule = /** @class */ (function () {
    function GMapDemoModule() {
    }
    GMapDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _gmapdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["GMapDemoRoutingModule"],
                _components_gmap_gmap__WEBPACK_IMPORTED_MODULE_6__["GMapModule"],
                _components_toast_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
                _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8__["CheckboxModule"],
                _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"]
            ],
            declarations: [
                _gmapdemo__WEBPACK_IMPORTED_MODULE_4__["GMapDemo"]
            ]
        })
    ], GMapDemoModule);
    return GMapDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/gmap/gmapdemo.ts":
/*!******************************************************!*\
  !*** ./src/app/showcase/components/gmap/gmapdemo.ts ***!
  \******************************************************/
/*! exports provided: GMapDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMapDemo", function() { return GMapDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");



var GMapDemo = /** @class */ (function () {
    function GMapDemo(messageService) {
        this.messageService = messageService;
    }
    GMapDemo.prototype.ngOnInit = function () {
        this.options = {
            center: { lat: 36.890257, lng: 30.707417 },
            zoom: 12
        };
        this.initOverlays();
        this.infoWindow = new google.maps.InfoWindow();
    };
    GMapDemo.prototype.handleMapClick = function (event) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    };
    GMapDemo.prototype.handleOverlayClick = function (event) {
        var isMarker = event.overlay.getTitle != undefined;
        if (isMarker) {
            var title = event.overlay.getTitle();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
            this.messageService.add({ severity: 'info', summary: 'Marker Selected', detail: title });
        }
        else {
            this.messageService.add({ severity: 'info', summary: 'Shape Selected', detail: '' });
        }
    };
    GMapDemo.prototype.addMarker = function () {
        this.overlays.push(new google.maps.Marker({ position: { lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng() }, title: this.markerTitle, draggable: this.draggable }));
        this.markerTitle = null;
        this.dialogVisible = false;
    };
    GMapDemo.prototype.handleDragEnd = function (event) {
        this.messageService.add({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
    };
    GMapDemo.prototype.initOverlays = function () {
        if (!this.overlays || !this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: "Konyaalti" }),
                new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: "Ataturk Park" }),
                new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: "Oldtown" }),
                new google.maps.Polygon({ paths: [
                        { lat: 36.9177, lng: 30.7854 }, { lat: 36.8851, lng: 30.7802 }, { lat: 36.8829, lng: 30.8111 }, { lat: 36.9177, lng: 30.8159 }
                    ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
                new google.maps.Polyline({ path: [{ lat: 36.86149, lng: 30.63743 }, { lat: 36.86341, lng: 30.72463 }], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
            ];
        }
    };
    GMapDemo.prototype.zoomIn = function (map) {
        map.setZoom(map.getZoom() + 1);
    };
    GMapDemo.prototype.zoomOut = function (map) {
        map.setZoom(map.getZoom() - 1);
    };
    GMapDemo.prototype.clear = function () {
        this.overlays = [];
    };
    GMapDemo.ctorParameters = function () { return [
        { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
    ]; };
    GMapDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./gmapdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/gmap/gmapdemo.html"),
            providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: ["\n        .ui-g-2 {\n            padding-top: .75em;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], GMapDemo);
    return GMapDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-gmap-gmapdemo-module-es5.js.map