(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-treetable-treetabledemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablecolgroupdemo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablecolgroupdemo.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Column Group</span></span>\r\n        <span>Columns can be grouped using rowspan and colspan properties.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"sales\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th rowspan=\"3\">Brand</th>\r\n                <th colspan=\"4\">Sale Rate</th>\r\n            </tr>\r\n            <tr>\r\n                <th colspan=\"2\">Sales</th>\r\n                <th colspan=\"2\">Profits</th>\r\n            </tr>\r\n            <tr>\r\n                <th>Last Year</th>\r\n                <th>This Year</th>\r\n                <th>Last Year</th>\r\n                <th>This Year</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\">\r\n            <tr>\r\n                <td>\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                    {{rowData.brand}}\r\n                </td>\r\n                <td>{{rowData.lastYearSale}}</td>\r\n                <td>{{rowData.thisYearSale}}</td>\r\n                <td>{{rowData.lastYearProfit}}</td>\r\n                <td>{{rowData.thisYearProfit}}</td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"footer\">\r\n            <tr>\r\n                <td colspan=\"3\">Totals</td>\r\n                <td>$3,283,772</td>\r\n                <td>$2,126,925</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablecolgroupdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecolgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableColGroupDemo implements OnInit &#123;\r\n\r\n    sales: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.sales = [\r\n            &#123;\r\n                data: &#123; brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'&#125;,\r\n                expanded: true,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' &#125;,\r\n                        expanded: true,\r\n                        children: [\r\n                            &#123;\r\n                                data: &#123; brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' &#125;, \r\n                            &#125;,\r\n                            &#123;\r\n                                data: &#123; brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' &#125;, \r\n                            &#125;\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data:  &#123; brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' &#125;, \r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' &#125;, \r\n                    &#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablecolgroupdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecolgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"sales\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th rowspan=\"3\"&gt;Brand&lt;/th&gt;\r\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\r\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.brand&#125;&#125;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.lastYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.thisYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.lastYearProfit&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.thisYearProfit&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"footer\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td colspan=\"3\"&gt;Totals&lt;/td&gt;\r\n            &lt;td&gt;$3,283,772&lt;/td&gt;\r\n            &lt;td&gt;$2,126,925&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablecolresizedemo.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablecolresizedemo.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Column Resize</span></span>\r\n        <span>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and \r\n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Fit Mode</h3>\r\n    <p-treeTable [value]=\"files1\" [columns]=\"cols\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" ttResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Expand Mode</h3>\r\n    <p-treeTable [value]=\"files2\" [columns]=\"cols\" [resizableColumns]=\"true\" columnResizeMode=\"expand\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" ttResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Scrollable</h3>\r\n    <p-treeTable [value]=\"files3\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" >\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" ttResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Scrollable with Variable Width</h3>\r\n    <p-treeTable [value]=\"files3\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" ttResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablecolresize.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecolresize.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableColResizeDemo &#123;\r\n\r\n    files1: TreeNode[];\r\n\r\n    files2: TreeNode[];\r\n\r\n    files3: TreeNode[];\r\n\r\n    files4: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files1 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files2 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files3 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files4 = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name', width: '50%' &#125;,\r\n            &#123; field: 'size', header: 'Size', width: '30%' &#125;,\r\n            &#123; field: 'type', header: 'Type', width: '20%' &#125;,\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablecolresize.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecolresize.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Fit Mode&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files1\" [columns]=\"cols\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" ttResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Expand Mode&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files2\" [columns]=\"cols\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" ttResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Scrollable&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files3\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" &gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" ttResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Scrollable with Variable Width&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files3\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" [style.width]=\"col.width\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" ttResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablecoltoggledemo.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablecoltoggledemo.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Column Toggle</span></span>\r\n        <span>This demo uses a multiselect component to implement toggleable columns.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"files\" [columns]=\"selectedColumns\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align:left\">\r\n                <p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\r\n                            selectedItemsLabel=\"{0} columns selected\" [style]=\"{minWidth: '200px'}\" defaultLabel=\"Choose Columns\"></p-multiSelect>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablecoltoggle.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecoltoggle.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableColToggleDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    selectedColumns: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n\r\n        this.selectedColumns = this.cols;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablecoltoggle.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecoltoggle.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"selectedColumns\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div style=\"text-align:left\"&gt;\r\n            &lt;p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\r\n                        selectedItemsLabel=\"&#123;0&#125; columns selected\" [style]=\"&#123;minWidth: '200px'&#125;\" defaultLabel=\"Choose Columns\"&gt;&lt;/p-multiSelect&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablecontextmenudemo.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablecontextmenudemo.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">ContextMenu</span></span>\r\n        <span>TreeTable has exclusive integration with ContextMenu.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <p-treeTable [value]=\"files\" [columns]=\"cols\" dataKey=\"name\" [(contextMenuSelection)]=\"selectedNode\" [contextMenu]=\"cm\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr [ttContextMenuRow]=\"rowNode\">\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablecontextmenudemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecontextmenudemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableContextMenuDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    selectedNode: TreeNode;\r\n\r\n    cols: any[];\r\n\r\n    items: MenuItem[];\r\n\r\n    constructor(private nodeService: NodeService, private messageService: MessageService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n\r\n        this.items = [\r\n            &#123; label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) &#125;,\r\n            &#123; label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) &#125;\r\n        ];\r\n    &#125;\r\n\r\n    viewFile(node) &#123;\r\n        this.messageService.add(&#123; severity: 'info', summary: 'File Selected', detail: node.data.name + ' - ' + node.data.size &#125;);\r\n    &#125;\r\n\r\n    toggleFile(node) &#123;\r\n        node.expanded = !node.expanded;\r\n        this.files = [...this.files];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablecontextmenudemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecontextmenudemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" dataKey=\"name\" [(contextMenuSelection)]=\"selectedNode\" [contextMenu]=\"cm\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ttContextMenuRow]=\"rowNode\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetabledemo.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetabledemo.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable</span>\r\n        <span>TreeTable is used to display hierarchical data in tabular format.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-treeTable [value]=\"files1\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Size</th>\r\n                <th>Type</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowNodeIndex=\"rowNodeIndex\"  let-rowData=\"rowData\">\r\n            <tr [ttRow]=\"rowNode\">\r\n                <td>\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                    {{rowData.name}}\r\n                </td>\r\n                <td>{{rowData.size}}</td>\r\n                <td>{{rowData.type}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Dynamic Columns</h3>\r\n    <p-treeTable [value]=\"files2\" [columns]=\"cols\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr [ttRow]=\"rowNode\">\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TreeTableModule&#125; from 'primeng/treetable';\r\nimport &#123;TreeNode&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>TreeTable component requires a collection of TreeNode objects as its value and templates for the presentation. TreeNode API represents a node with various properties, here is the list of properties utilized by the TreeTable.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport interface TreeNode &#123;\r\n    data?: any;\r\n    children?: TreeNode[];\r\n    leaf?: boolean;\r\n    expanded?: boolean;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Usually nodes will be loaded from a remote datasoure, an example NodeService that fetches the data from a json file would be;</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Injectable()\r\nexport class NodeService &#123;\r\n\r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getFilesystem() &#123;\r\n        return this.http.get('showcase/resources/data/filesystem.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;TreeNode[]&gt; res.json().data);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <p>The filesystem.json file consists of sample data. In a real application, this should be a dynamic response generated from the remote call.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n&#123;\r\n    \"data\":\r\n    [\r\n        &#123;\r\n            \"data\":&#123;\r\n                \"name\":\"Documents\",\r\n                \"size\":\"75kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"children\":[\r\n                &#123;\r\n                    \"data\":&#123;\r\n                        \"name\":\"Work\",\r\n                        \"size\":\"55kb\",\r\n                        \"type\":\"Folder\"\r\n                    &#125;,\r\n                    \"children\":[\r\n                        &#123;\r\n                            \"data\":&#123;\r\n                                \"name\":\"Expenses.doc\",\r\n                                \"size\":\"30kb\",\r\n                                \"type\":\"Document\"\r\n                            &#125;\r\n                        &#125;,\r\n                        &#123;\r\n                            \"data\":&#123;\r\n                                \"name\":\"Resume.doc\",\r\n                                \"size\":\"25kb\",\r\n                                \"type\":\"Resume\"\r\n                            &#125;\r\n                        &#125;\r\n                    ]\r\n                &#125;,\r\n                &#123;\r\n                    \"data\":&#123;\r\n                        \"name\":\"Home\",\r\n                        \"size\":\"20kb\",\r\n                        \"type\":\"Folder\"\r\n                    &#125;,\r\n                    \"children\":[\r\n                        &#123;\r\n                            \"data\":&#123;\r\n                                \"name\":\"Invoices\",\r\n                                \"size\":\"20kb\",\r\n                                \"type\":\"Text\"\r\n                            &#125;\r\n                        &#125;\r\n                    ]\r\n                &#125;\r\n            ]\r\n        &#125;,\r\n        &#123;\r\n            \"data\":&#123;\r\n                \"name\":\"Pictures\",\r\n                \"size\":\"150kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"children\":[\r\n                &#123;\r\n                    \"data\":&#123;\r\n                        \"name\":\"barcelona.jpg\",\r\n                        \"size\":\"90kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;,\r\n                &#123;\r\n                    \"data\":&#123;\r\n                        \"name\":\"primeui.png\",\r\n                        \"size\":\"30kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;,\r\n                &#123;\r\n                    \"data\":&#123;\r\n                        \"name\":\"optimus.jpg\",\r\n                        \"size\":\"30kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    ]\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<p>Files get loaded from a service and then bound to the value property whereas <i>header</i> and <i>body</i> templates are used to define the content of these sections.</p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFileSystem().then(files => this.files = files);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <p>Body template gets the following parameters;</p>\r\n        <ul>\r\n            <li><strong>$implicit</strong>: Wrapper object of a node used to serialized a TreeNode.</li>\r\n            <li><strong>node</strong>: TreeNode instance.</li>\r\n            <li><strong>rowData</strong>: Data of the TreeNode instance.</li>\r\n            <li><strong>columns</strong>: Columns of the TreeTable.</li>\r\n        </ul>\r\n\r\n        <p>Toggle icon is configured using the p-treeTableToggler by binding the rowNode instance. Most of the time, toggler icon is added to the first column however there is no restriction on where the toggler should be located inside the row.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Name&lt;/th&gt;\r\n            &lt;th&gt;Size&lt;/th&gt;\r\n            &lt;th&gt;Type&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.name&#125;&#125;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.size&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.type&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n        <h3>Dynamic Columns</h3>\r\n        <p>Instead of configuring columns one by one, a simple ngFor can be used to implement dynamic columns. cols property below is an array of objects that represent a column,\r\n            only property that table component uses is field, rest of the properties like header depend on your choice.\r\n        </p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemo implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<p>There are two ways to render dynamic columns, since cols property is in the scope of component you can just simply bind it to ngFor directive to generate the structure.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of cols\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of cols; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Other alternative is binding the cols array to the columns property and then defining a template variable to access it within your templates.\r\n                There is only 1 case where this is required which is reorderable columns.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Tip: Use ngSwitch to customize the column content per dynamic column.</p>\r\n\r\n            <h3>Table Layout</h3>\r\n            <p>For performance reasons, default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents\r\n                set <i>autoLayout</i> property to true. Note that for scrollable tables or tables with resizable columns auto layout is not supported.\r\n            </p>\r\n\r\n            <h3>Templates</h3>\r\n            <p>TreeTable is a template driven component with named templates such as header and body that we've used so far. Templates grant a great level of customization and flexibility\r\n                where you have total control over the presentation while table handles the features such as paging, sorting and more. This speeds up development without sacrifing\r\n                flexibility. Here is the full list of available templates.</p>\r\n\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>caption</td>\r\n                            <td>-</td>\r\n                            <td>Caption content of the table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content of the thead element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>body</td>\r\n                            <td>$implicit: Wrapper object of a node used to serialized a TreeNode<br>\r\n                                node: TreeNode instance. <br>\r\n                                rowData: Data of the TreeNode instance <br>\r\n                                columns: Columns of the TreeTable\r\n                            </td>\r\n                            <td>Content of the tbody element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footer</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content of the tfoot element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>summary</td>\r\n                            <td>-</td>\r\n                            <td>Summary section to display below the table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>colgroup</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>ColGroup element of the table to customize columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenheader</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content of the thead element in frozen side.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenbody</td>\r\n                            <td>$implicit: Wrapper object of a node used to serialized a TreeNode<br>\r\n                                node: TreeNode instance. <br>\r\n                                rowData: Data of the TreeNode instance <br>\r\n                                columns: Columns of the TreeTable\r\n                            </td>\r\n                            <td>Content of the tbody element in frozen side.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenfooter</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content of the tfoot element in frozen side.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozencolgroup</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>ColGroup element of the table to customize frozen columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>emptymessage</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content to display when there is no value to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorleft</td>\r\n                            <td>state: $implicit\r\n                                state.page: Current page<br />\r\n                                state.rows: Rows per page<br />\r\n                                state.first: Index of the first records<br />\r\n                                state.totalRecords: Number of total records<br />\r\n                            </td>\r\n                            <td>Content to display when there is no value to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorright</td>\r\n                            <td>state: $implicit\r\n                                state.page: Current page<br />\r\n                                state.rows: Rows per page<br />\r\n                                state.first: Index of the first records<br />\r\n                                state.totalRecords: Number of total records<br />\r\n                            </td>\r\n                            <td>Content to display when there is no value to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loadingbody</td>\r\n                            <td>columns: Columns collection <br>\r\n                            </td>\r\n                            <td>Content of the tbody element to show when data is being loaded in virtual scroll mode.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Change Detection</h3>\r\n            <p>TreeTable may need to be aware of changes in its value in some cases. For the sake of performance, this is only done when the reference of the value changes meaning a\r\n                setter is used instead of ngDoCheck/IterableDiffers which can reduce performance. So when you manipulate the value such as removing a node, adding a node or changing children of a node, instead of using array methods such as push, splice\r\n                create a new array reference using a spread operator or similar.\r\n            </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nthis.value = [...this.value];\r\n</code>\r\n</pre>\r\n\r\n            <h3>Keyboard Navigation</h3>\r\n            <p>Nodes can be navigated and toggles using arrow keys if the optional ttRow directive is applied to the body row element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n    &lt;tr [ttRow]=\"rowNode\"&gt;\r\n        &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n            &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n            &#123;&#123;rowData[col.field]&#125;&#125;\r\n        &lt;/td&gt;\r\n    &lt;/tr&gt;\r\n&lt;/ng-template&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Sections</h3>\r\n            <p>Table offers various templates to display additional information about the data such as a caption, header, summary and footer.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        FileSystem\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"footer\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        There are &#123;&#123;files?.length&#125;&#125; Root Folders\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>See the <a [routerLink]=\"['/treetable/sections']\">live example.</a></p>\r\n\r\n            <h3>Column Grouping</h3>\r\n            <p>Columns can easily be grouped using templating. Let's start with sample data of sales of brands per year.</p>\r\n\r\n<div style=\"height:400px;overflow: auto\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableColGroupDemo implements OnInit &#123;\r\n\r\n    sales: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.sales = [\r\n            &#123;\r\n                data: &#123; brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'&#125;,\r\n                expanded: true,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' &#125;,\r\n                        expanded: true,\r\n                        children: [\r\n                            &#123;\r\n                                data: &#123; brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' &#125;,\r\n                            &#125;,\r\n                            &#123;\r\n                                data: &#123; brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' &#125;,\r\n                            &#125;\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data: &#123; brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                data:  &#123; brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123; brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' &#125;,\r\n                    &#125;,\r\n                    &#123;\r\n                        data: &#123; brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' &#125;,\r\n                    &#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n</div>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"sales\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th rowspan=\"3\"&gt;Brand&lt;/th&gt;\r\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\r\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.brand&#125;&#125;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.lastYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.thisYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.lastYearProfit&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.thisYearProfit&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"footer\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td colspan=\"3\"&gt;Totals&lt;/td&gt;\r\n            &lt;td&gt;$3,283,772&lt;/td&gt;\r\n            &lt;td&gt;$2,126,925&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/treetable/colgroup']\">live example.</a></p>\r\n\r\n            <h3>Paginator</h3>\r\n            <p>Pagination is enabled by setting paginator property to true, rows property defines the number of rows per page and pageLinks specify the the number\r\n                of page links to display. See <a [routerLink]=\"['/paginator']\">paginator</a> component for more information.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Paginator accepts custom content for the left and the right side via named templates.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"paginatorleft\" let-state&gt;\r\n        &#123;&#123;state.first&#125;&#125;\r\n        &lt;button type=\"button\" pButton icon=\"fa-refresh\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"paginatorright\"&gt;\r\n        &lt;button type=\"button\" pButton icon=\"fa-cloud-upload\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Paginator templates gets the paginator state as an implicit variable that provides the following properties</p>\r\n            <ul>\r\n                <li>first</li>\r\n                <li>rows</li>\r\n                <li>page</li>\r\n                <li>totalRecords</li>\r\n            </ul>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/page']\">live example.</a></p>\r\n\r\n            <h3>Sorting</h3>\r\n            <p>A column can be made sortable by adding the <strong>ttSortableColumn</strong> directive whose value is the field to sort against and a sort indicator via <strong>p-treeTableSortIcon</strong> component. For dynamic columns,\r\n                setting <strong>ttSortableColumnDisabled</strong> property as true disables sorting for that particular column.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ttSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-treeTableSortIcon [field]=\"col.field\"&gt;&lt;/p-treeTableSortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n            <p>Default sorting is executed on a single column, in order to enable multiple field sorting, set <strong>sortMode</strong> property to \"multiple\" and use metakey\r\n            when clicking on another column.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"cars\" sortMode=\"multiple\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In case you'd like to display the table as sorted by default initially on load, use the <strong>sortField</strong>-<strong>sortOrder</strong> properties in single mode.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" sortField=\"year\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ttSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-treeTableSortIcon [field]=\"col.field\"&gt;&lt;/p-treeTableSortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n            <p>In multiple mode, use the <strong>multiSortMeta</strong> property and bind an array of SortMeta objects.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" sortMode=\"multiple\" [multiSortMeta]=\"multiSortMeta\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ttSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-treeTableSortIcon [field]=\"col.field\"&gt;&lt;/p-treeTableSortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nthis.multiSortMeta = [];\r\nthis.multiSortMeta.push(&#123;field: 'year', order: 1&#125;);\r\nthis.multiSortMeta.push(&#123;field: 'brand', order: -1&#125;);\r\n</code>\r\n</pre>\r\n\r\n            <p>Instead of using the built-in sorting algorithm a custom sort can be attached by enabling <strong>customSort</strong> property and defining a <strong>sortFunction</strong> implementation. This function gets a SortEvent instance\r\n                that provides the data to sort, sortField, sortOrder and multiSortMeta.\r\n            </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableSortDemo implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n\r\n    customSort(event: SortEvent) &#123;\r\n        //event.data = Data to sort\r\n        //event.mode = 'single' or 'multiple' sort mode\r\n        //event.field = Sort field in single sort\r\n        //event.order = Sort order in single sort\r\n        //event.multiSortMeta = SortMeta array in multiple sort\r\n\r\n        event.data.sort((data1, data2) => &#123;\r\n            let value1 = data1[event.field];\r\n            let value2 = data2[event.field];\r\n            let result = null;\r\n\r\n            if (value1 == null && value2 != null)\r\n                result = -1;\r\n            else if (value1 != null && value2 == null)\r\n                result = 1;\r\n            else if (value1 == null && value2 == null)\r\n                result = 0;\r\n            else if (typeof value1 === 'string' && typeof value2 === 'string')\r\n                result = value1.localeCompare(value2);\r\n            else\r\n                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;\r\n\r\n            return (event.order * result);\r\n        &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ttSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-treeTableSortIcon [field]=\"col.field\"&gt;&lt;/p-treeTableSortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>For screen reader support of sortable headers, use ariaLabelDesc and ariaLabelAsc properties\r\n                on p-sortIcon directive.</p>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/sort']\">live example.</a></p>\r\n\r\n            <h3>Filtering</h3>\r\n            <p>Filtering is enabled by defining the filter elements and calling filter method on the local template variable of the table with value, column field and match mode parameters. Available match modes are\r\n            \"startsWith\", \"contains\", \"endsWith\", \"equals\", \"notEquals\", \"in\", \"lt\", \"lte\", \"gt\" and \"gte\".</p>\r\n\r\n            <p>An optional global filter feature is available to search all fields with the same query, to enable this place an input component and call the filterGlobal function with value and match mode properties on your event of choice.</p>\r\n\r\n            <p>In addition <b>filterMode</b> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, \r\n                in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable #tt [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div style=\"text-align: right\"&gt;\r\n            &lt;i class=\"pi pi-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\r\n            &lt;input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"tt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\"&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of cols\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of cols\"&gt;\r\n                &lt;input pInputText type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of cols; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './treetablefilterdemo.html'\r\n&#125;)\r\nexport class TreeTableFilterDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>If you have static columns and need to use global filtering, globalFilterFields property must be defined to configure which fields should be used in global filtering. Another\r\n                use case of this property is to change the fields to utilize in global filtering with dynamic columns.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable #tt [value]=\"files\" [columns]=\"cols\"&gt;\r\n    //content\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/filter']\">live example.</a></p>\r\n\r\n            <h3>Selection</h3>\r\n            <p>TreeTable provides built-in single, multiple and checkbox selection features where selected rows are bound to the selection property and onRowSelect-onRowUnselect events\r\n            are provided as optional callbacks. In order to enable this feature, define a <strong>selectionMode</strong>, bind a selection reference and add <strong>ttSelectableRow</strong> directive\r\n            whose value is the rowNode to the rows that can be selected. Additionally if you prefer double click use <strong>ttSelectableRowDblClick</strong> directive instead and\r\n            to disable selection events on a particular row use <strong>ttSelectableRowDisabled</strong> property.</p>\r\n\r\n            <p>By default each row click adds or removes the row from the selection, if you prefer a classic\r\n            metaKey based selection approach enable <strong>metaKeySelection</strong> true so that multiple selection or unselection of a row requires metaKey to be pressed. Note that, on touch enabled\r\n            devices, metaKey based selection is turned off automatically as there is no metaKey in devices such as mobile phones.</p>\r\n\r\n            <p>Alternative to the row click, checkbox elements can be used to implement row selection as well.</p>\r\n\r\n            <p>When resolving if a row is selected, by default TreeTable compares selection array with the datasource which may cause a performance issue with huge datasets that do not use pagination.\r\n                If available the fastest way is to use dataKey property that identifies a unique row so that Table can avoid comparing arrays as internally a map instance is used instead of looping arrays, on the other hand\r\n                if dataKey cannot be provided consider using compareSelectionBy property as \"equals\" which uses reference comparison instead of the default \"deepEquals\" comparison. Latter is slower since it checks all properties.\r\n            </p>\r\n\r\n            <p>In single mode, selection binding is an object reference.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableSelectionDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    selectedNode: TreeNode;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" selectionMode=\"single\" [(selection)]=\"selectedNode\" dataKey=\"name\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ttSelectableRow]=\"rowNode\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>In multiple mode, selection binding should be an array.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableSelectionDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    selectedNodes: TreeNode[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" selectionMode=\"multiple\" [(selection)]=\"selectedNodes\" dataKey=\"name\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ttSelectableRow]=\"rowNode\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n                <p>Checkbox selection utilizes p-treeTableCheckbox component whose value should be the rowNode. Optionally p-treeTableHeaderCheckbox is available to select or unselect all the nodes.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" selectionMode=\"checkbox\" [(selection)]=\"selectedNodes\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div style=\"text-align:left\"&gt;\r\n            &lt;p-treeTableHeaderCheckbox&gt;&lt;/p-treeTableHeaderCheckbox&gt;\r\n            &lt;span style=\"margin-left: .25em; vertical-align: middle\"&gt;Toggle All&lt;/span&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &lt;p-treeTableCheckbox [value]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableCheckbox&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/selection']\">live example.</a></p>\r\n\r\n            <h3>ContextMenu</h3>\r\n            <p>TreeTable has exclusive integration with contextmenu component. In order to attach a menu to a treetable, add ttContextMenuRow directive to the rows that can be selected with context menu, define a local template\r\n            variable for the menu and bind it to the contextMenu property of the treetable. This enables displaying the menu whenever a row is right clicked. A separate <strong>contextMenuSelection</strong>\r\n            property is used to get a hold of the right clicked row. For dynamic columns, setting <strong>ttContextMenuRowDisabled</strong> property as true disables context menu for that particular row.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" dataKey=\"name\" [(contextMenuSelection)]=\"selectedNode\" [contextMenu]=\"cm\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ttContextMenuRow]=\"rowNode\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/contextmenu']\">live example.</a></p>\r\n\r\n            <h3>Editing</h3>\r\n            <p>Incell editing is enabled by adding <strong>ttEditableColumn</strong> directive to an editable cell that has a p:treeTableCellEditor helper\r\n                component to define the input-output templates for the edit and view modes respectively.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                {{col.header}}\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\" ttEditableColumn&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &lt;p-treeTableCellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData[col.field]\"&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        &#123;&#123;rowData[col.field]&#125;&#125;\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-treeTableCellEditor&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>If you require the edited row data and the field at onEditComplete event, bind the data to the ttEditableColumn directive and the field to the ttEditableColumnField directive</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;td [ttEditableColumn]=\"rowData\" [ttEditableColumnField]=\"'year'\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/editable']\">live example.</a></p>\r\n\r\n            <h3>Column Resize</h3>\r\n            <p>Columns can be resized using drag drop by setting the <strong>resizableColumns</strong> to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and\r\n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width. <strong>onColumnResize</strong>\r\n            is a callback that passes the resized column header as a parameter. For dynamic columns, setting <strong>ttResizableColumnDisabled</strong> property as true disables resizing for that particular column.\r\n            When you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.\r\n            </p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" ttResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p><b>Note:</b> Scrollable tables require a column group to support resizing.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" &gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" ttResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/colresize']\">live example.</a></p>\r\n\r\n            <h3>Column Reordering</h3>\r\n            <p>Columns can be reordered using drag drop by setting the <strong>reorderableColumns</strong> to true and adding <strong>ttReorderableColumn</strong> directive to the columns that can be dragged. Note that\r\n                columns should be dynamic for reordering to work. For dynamic columns, setting <strong>ttReorderableColumnDisabled</strong> property as true disables reordering for that particular column.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [reorderableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" ttReorderableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/treetable/colreorder']\">live example.</a></p>\r\n\r\n            <h3>Scrolling</h3>\r\n            <p>TreeTable supports both horizontal and vertical scrolling as well as frozen columns. Additionally, virtualScroll mode enables dealing with large datasets by loading data on demand during scrolling.</p>\r\n\r\n            <p>Sample below uses vertical scrolling where headers are fixed and data is scrollable.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n            <p>In horizontal scrolling on the other hand, it is important to give fixed widths to columns. In general when customizing the column widths of scrollable tables,\r\n                use colgroup as below to avoid misalignment issues as it will apply both the header, body and footer sections which are different separate elements internally.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [scrollable]=\"true\" [style]=\"&#123;width:'600px'&#125;\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:350px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>Horizontal and Vertical scrolling can be combined as well on the same table.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\" [style]=\"&#123;width:'600px'&#125;\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:350px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>Particular columns can be made fixed where others remain scrollable, there are to ways to implement this functionality, either\r\n            define a frozenColumns property if your frozen columns are dynamic or use frozenbody template. The width of the frozen section also\r\n            must be defined with frozenWidth property. Templates including header, body and footer apply to the frozen section as well, however\r\n            if require different content for the frozen section use frozenheader, frozenbody and frozenfooter instead.\r\n        </p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"frozenbody\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.name&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>When frozen columns are enabled, frozen and scrollable cells may have content with varying height which leads to misalignment. To avoid a performance hit, TreeTable avoids expensive calculations\r\n                to align the row heights as it can be easily done with CSS manually.</p>\r\n<pre>\r\n<code class=\"language-css\" pCode ngNonBindable>\r\n.ui-treetable .ui-treetable-frozen-view .ui-treetable-tbody > tr > td,\r\n.ui-treetable .ui-treetable-unfrozen-view .ui-treetable-tbody > tr > td &#123;\r\n    height: 24px !important;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Virtual Scrolling is used with lazy loading to fetch data on demand during scrolling. For smooth scrolling twice the amount of rows property is loaded\r\n                on a lazy load event. In addition, to avoid performance problems row height is not calculated automatically and should be provided using virtualRowHeight\r\n                property which defaults to 28px, in your row template also assign the height of the row with the same value for smooth scrolling.\r\n                Note that variable row height is not supported due to the nature of the virtual scrolling behavior.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"virtualFiles\" [columns]=\"cols\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\"\r\n    [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadNodes($event)\" \r\n    [totalRecords]=\"totalRecords\" [loading]=\"loading\" (onNodeExpand)=\"onNodeExpand($event)\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Instead of using the built-in loading mask indicator, an special \"loadingbody\" template is available to provide feedback to the users\r\n                about the loading status of a scroll event.\r\n            </p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"virtualFiles\" [columns]=\"cols\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\"\r\n    [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadNodes($event)\" \r\n    [totalRecords]=\"totalRecords\" (onNodeExpand)=\"onNodeExpand($event)\" [loading]=\"true\" [showLoader]=\"showLoader\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"loadingbody\" let-columns=\"columns\"&gt;\r\n        &lt;tr style=\"height:34px\"&gt;\r\n            &lt;td *ngFor=\"let col of columns;\"&gt;\r\n                &lt;div class=\"loading-text\"&gt;&lt;/div&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/scroll']\">live example.</a></p>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n            onLazyLoad callback everytime paging and sorting. To implement lazy loading,\r\n            enable <strong>lazy</strong> attribute and provide a method callback using <strong>onLazyLoad</strong> that actually loads the data from a remote datasource. onLazyLoad gets an event object\r\n            that contains information about how the data should be loaded. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator\r\n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\r\n\r\n            <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [lazy]=\"true\"\r\n    (onLazyLoad)=\"loadNodes($event)\" [totalRecords]=\"totalRecords\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nloadNodes(event: LazyLoadEvent) &#123;\r\n    //event.first = First row offset\r\n    //event.rows = Number of rows per page\r\n    //event.sortField = Field name to sort in single sort mode\r\n    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode\r\n    //event.multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.\r\n    //event.filters: FilterMetadata object having field as key and filter value, filter matchMode as value\r\n    //event.globalFilter: Value of the global filter if available\r\n\r\n    this.files = //do a request to a remote datasource using a service and return the cars that match the lazy load criteria\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Lazy loading applies to the first level nodes in the tree hierarchy, instead if you need to lazy load the children of a node, set <strong>leaf</strong> as true on that node\r\n                and use onNodeExpand event to load children when a node is expanded only.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" (onNodeExpand)=\"onNodeExpand($event)\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nonNodeExpand(event) &#125;\r\n    //const node = event.node;\r\n    //populate node.children\r\n\r\n    //refresh the data\r\n    this.files = [...this.files];\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/lazy']\">live example.</a></p>\r\n\r\n            <h3>Responsive</h3>\r\n            <p>TreeTable does not provide a built-in responsive feature as it is easy to implement as you have full control over the presentation, here is an\r\n                example with media queries.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './treetableresponsivedemo.html',\r\n    styles: [`\r\n        :host ::ng-deep .priority-2,\r\n        :host ::ng-deep .priority-3,\r\n        :host ::ng-deep .visibility-sm &#123;\r\n            display: none;\r\n        &#125;\r\n\r\n        @media screen and (max-width: 39.938em) &#123;\r\n            :host ::ng-deep .visibility-sm &#123;\r\n                display: inline;\r\n            &#125;\r\n        &#125;\r\n\r\n        @media screen and (min-width: 40em) &#123;\r\n            :host ::ng-deep .priority-2 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n\r\n        @media screen and (min-width: 64em) &#123;\r\n            :host ::ng-deep .priority-3 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n    `]\r\n&#125;)\r\nexport class TreeTableResponsiveDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Name&lt;/th&gt;\r\n            &lt;th class=\"priority-2\"&gt;Size&lt;/th&gt;\r\n            &lt;th class=\"priority-3\"&gt;Type&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.name&#125;&#125;\r\n                &lt;span class=\"visibility-sm\"&gt;\r\n                    / &#123;&#123;rowData.size&#125;&#125; - &#123;&#123;rowData.type&#125;&#125;\r\n                &lt;/span&gt;\r\n            &lt;/td&gt;\r\n            &lt;td class=\"priority-2\"&gt;&#123;&#123;rowData.size&#125;&#125;&lt;/td&gt;\r\n            &lt;td class=\"priority-3\"&gt;&#123;&#123;rowData.type&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/treetable/responsive']\">live example.</a></p>\r\n\r\n            <h3>EmptyMessage</h3>\r\n            <p>When there is no data, emptymessage template can be used to display a message.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Name&lt;/th&gt;\r\n            &lt;th&gt;Size&lt;/th&gt;\r\n            &lt;th&gt;Type&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.name&#125;&#125;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.size&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.type&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"emptymessage\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;td [attr.colspan]=\"columns.length\"&gt;\r\n                No records found\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Loading Status</h3>\r\n            <p>TreeTable has a <strong>loading</strong> property, when enabled a spinner icon is displayed to indicate data load.\r\n                An optional <strong>loadingIcon</strong> property can be passed in case you'd like a different loading icon.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [loading]=\"loading\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemo implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    loading: boolean;\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.loading = true;\r\n        this.nodeService.getFilesystem().then(files => &#123;\r\n            this.files = files;\r\n            this.loading = false;\r\n        &#123;);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling Certain Rows and Columns</h3>\r\n            <p>Certain rows and cells can easily be styled using templating features. In example below, the row whose vin property is '123' will get the 'success' style class. Example here\r\n                paint the background of the last cell using a colgroup and highlights rows whose year is older than 2000.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ngClass]=\"&#123;'kb-row': rowData.size.endsWith('kb')&#125;\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\" [ngClass]=\"&#123;'kb-cell': col.field === 'size' && rowData.size.endsWith('kb')&#125;\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/treetable/style']\">live example.</a></p>\r\n\r\n            <h3>Performance Tips</h3>\r\n            <ul>\r\n                <li>When selection is enabled use dataKey to avoid deep checking when comparing objects.</li>\r\n                <li>Use rowTrackBy to avoid unnecessary dom operations.</li>\r\n                <li>Prefer lazy loading techniques for large datasets.</li>\r\n            </ul>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>columns</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to represent dynamic columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoLayout</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the cell widths scale according to their content or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lazy</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginator</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specified as true, enables the pagination.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rows</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of rows to display per page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>first</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the first row to be displayed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>totalRecords</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of total records, defaults to length of value when not defined.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pageLinks</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of page links to display in paginator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowsPerPageOptions</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Array of integer/object values to display inside rows per page dropdown of paginator</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>alwaysShowPaginator</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show it even there is only one page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorPosition</td>\r\n                            <td>string</td>\r\n                            <td>bottom</td>\r\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorDropdownAppendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the paginator dropdown overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>defaultSortOrder</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Sort order to use when an unsorted column gets sorted by user interaction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortMode</td>\r\n                            <td>string</td>\r\n                            <td>single</td>\r\n                            <td>Defines whether sorting works on single column or on multiple columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>resetPageOnSort</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>When true, resets paginator to first page after sorting.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>customSort</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to use the default sorting or a custom one using sortFunction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortField</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the field to sort data by default.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortOrder</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Order to sort when default sorting is enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>multiSortMeta</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortFunction</td>\r\n                            <td>function</td>\r\n                            <td>null</td>\r\n                            <td>An event emitter to invoke on custom sorting, refer to sorting section for details.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filters</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of FilterMetadata objects to provide external filters.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterDelay</td>\r\n                            <td>number</td>\r\n                            <td>300</td>\r\n                            <td>Delay in milliseconds before filtering the data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>globalFilterFields</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of fields as string to use in global filtering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterMode</td>\r\n                            <td>string</td>\r\n                            <td>lenient</td>\r\n                            <td>Mode for filtering valid values are \"lenient\" and \"strict\". Default is lenient.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectionMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Specifies the selection mode, valid values are \"single\" and \"multiple\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Selected row in single mode or an array of values in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contextMenuSelection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Selected row with a context menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dataKey</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>A property to uniquely identify a record in data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>metaKeySelection</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>compareSelectionBy</td>\r\n                            <td>string</td>\r\n                            <td>deepEquals</td>\r\n                            <td>Algorithm to define if a row is selected, valid values are \"equals\" that compares by reference and \"deepEquals\" that compares all fields.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowHover</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Adds hover effect to rows without the need for selectionMode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loading</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a loader to indicate data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loadingIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-circle-o-notch</td>\r\n                            <td>The icon to show while indicating data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showLoader</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show the loading mask when loading property is true.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specifies, enables horizontal and/or vertical scrolling.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollHeight</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Height of the scroll viewport in fixed pixels, percentage or a calc expression.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>virtualScroll</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the data should be loaded on demand during scroll.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>virtualScrollDelay</td>\r\n                            <td>number</td>\r\n                            <td>150</td>\r\n                            <td>Delay in virtual scroll before doing a call to lazy load.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>virtualRowHeight</td>\r\n                            <td>number</td>\r\n                            <td>28</td>\r\n                            <td>Height of a row to use in calculations of virtual scrolling.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenWidth</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Width of the frozen columns container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenColumns</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to represent dynamic columns that are frozen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>resizableColumns</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, columns can be resized using drag and drop.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>columnResizeMode</td>\r\n                            <td>string</td>\r\n                            <td>fit</td>\r\n                            <td>Defines whether the overall table width should change on column resize, valid values are \"fit\" and \"expand\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>reorderableColumns</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, columns can be reordered using drag and drop.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contextMenu</td>\r\n                            <td>ContextMenu</td>\r\n                            <td>null</td>\r\n                            <td>Local ng-template varilable of a ContextMenu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowTrackBy</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onNodeExpand</td>\r\n                            <td>event.originalEvent: Browser event<br>\r\n                                node: Expanded node.</td>\r\n                            <td>Callback to invoke when a node is expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeCollapse</td>\r\n                            <td>event.originalEvent: Browser event<br>\r\n                                node: Collapsed node.</td>\r\n                            <td>Callback to invoke when a node is collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onPage</td>\r\n                            <td>event.first: Index of first record in page<br>\r\n                                event.rows: Number of rows on the page</td>\r\n                            <td>Callback to invoke when pagination occurs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSort</td>\r\n                            <td>event.field: Field name of the sorted column<br>\r\n                                event.order: Sort order as 1 or -1<br>\r\n                                event.multisortmeta: Sort metadata in multi sort mode. See multiple sorting section for the structure of this object.</td>\r\n                            <td>Callback to invoke when a column gets sorted.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFilter</td>\r\n                            <td>event.filters: Filters object having a field as the property key and an object with value, matchMode as the property value.<br>\r\n                                event.filteredValue: Filtered data after running the filtering.</td>\r\n                            <td>Callback to invoke when data is filtered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onLazyLoad</td>\r\n                            <td>event.first = First row offset <br>\r\n                                event.rows = Number of rows per page <br>\r\n                                event.sortField = Field name to sort with <br>\r\n                                event.sortOrder = Sort order as number, 1 for asc and -1 for dec <br>\r\n                                event.multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.</td>\r\n                                event.filters: FilterMetadata object having field as key and filter value, filter matchMode as value<br>\r\n                                event.globalFilter: Value of the global filter if available\r\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onColResize</td>\r\n                            <td>event.element: Resized column header <br>\r\n                                event.delta: Change of width in number of pixels</td>\r\n                            <td>Callback to invoke when a column is resized.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onColReorder</td>\r\n                            <td>event.dragIndex: Index of the dragged column <br>\r\n                                event.dropIndex: Index of the dropped column <br>\r\n                                event.columns: Columns array after reorder.</td>\r\n                            <td>Callback to invoke when a column is reordered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeSelect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.nıde: Selected node\r\n                            </td>\r\n                            <td>Callback to invoke when a node is selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeUnselect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Unselected node</td>\r\n                            <td>Callback to invoke when a node is unselected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onContextMenuSelect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.node: Selected node</td>\r\n                            <td>Callback to invoke when a node is selected with right click.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHeaderCheckboxToggle</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.checked: State of the header checkbox</td>\r\n                            <td>Callback to invoke when state of header checkbox changes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditInit</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Node data</td>\r\n                            <td>Callback to invoke when a cell switches to edit mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditComplete</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Node data</td>\r\n                            <td>Callback to invoke when cell edit is completed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditCancel</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Node data</td>\r\n                            <td>Callback to invoke when cell edit is cancelled with escape key.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>reset</td>\r\n                            <td>-</td>\r\n                            <td>Clears the sort and paginator state.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-treetable</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-caption</td>\r\n                            <td>Caption element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-summary</td>\r\n                            <td>Section section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sortable-column</td>\r\n                            <td>Sortable column header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-scrollable-header</td>\r\n                            <td>Container of header in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-scrollable-body</td>\r\n                            <td>Container of body in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-scrollable-footer</td>\r\n                            <td>Container of footer in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-loading</td>\r\n                            <td>Loader mask.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-loading-content</td>\r\n                            <td>Loader content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-wrapper</td>\r\n                            <td>Loader content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-scrollable-wrapper</td>\r\n                            <td>Loader content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-resizer-helper</td>\r\n                            <td>Vertical resize indicator bar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-reorder-indicator-top</td>\r\n                            <td>Top indicator of column reordering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-reorder-indicator-top</td>\r\n                            <td>Bottom indicator of column reordering.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files1\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Name&lt;/th&gt;\r\n            &lt;th&gt;Size&lt;/th&gt;\r\n            &lt;th&gt;Type&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr [ttRow]=\"rowNode\"&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.name&#125;&#125;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.size&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.type&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Dynamic Columns&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files2\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr [ttRow]=\"rowNode\"&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemo implements OnInit &#123;\r\n\r\n    files1: TreeNode[];\r\n\r\n    files2: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files1 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files2 = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetableeditdemo.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetableeditdemo.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Edit</span></span>\r\n        <span>Incell editing provides a quick and user friendly way to manipulate data.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"files\" [columns]=\"cols\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\" ttEditableColumn [ngClass]=\"{'ui-toggler-column': i === 0}\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i === 0\"></p-treeTableToggler>\r\n                    <p-treeTableCellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData[col.field]\" [ngStyle]=\"{'width': i == 0 ? '90%': '100%'}\">\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">{{rowData[col.field]}}</ng-template>\r\n                    </p-treeTableCellEditor>\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetableeditdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetableeditdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './treetableeditdemo.html',\r\n    styles: [`\r\n        :host ::ng-deep .ui-editing-cell &#123;\r\n            padding: 0 !important;\r\n            &#125;\r\n\r\n        :host ::ng-deep .ui-toggler-column.ui-editing-cell &#123;\r\n            padding-left: 0.857em !important;\r\n            &#125;\r\n    `]\r\n&#125;)\r\nexport class TreeTableEditDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetableeditdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetableeditdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\" ttEditableColumn [ngClass]=\"&#123;'ui-toggler-column': i === 0&#125;\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i === 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &lt;p-treeTableCellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input pInputText type=\"text\" [(ngModel)]=\"rowData[col.field]\" [ngStyle]=\"&#123;'width': i == 0 ? '90%': '100%'&#125;\"&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/ng-template&gt;\r\n                &lt;/p-treeTableCellEditor&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablefilterdemo.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablefilterdemo.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Filter</span></span>\r\n        <span>Filtering reduces the data by running a search using column filters and an optional global filter.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable #tt [value]=\"files\" [columns]=\"cols\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align: right\">        \r\n                <i class=\"pi pi-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"tt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of cols\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n            <tr>\r\n                <th *ngFor=\"let col of cols\">\r\n                    <input pInputText type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\">\r\n            <tr>\r\n                <td *ngFor=\"let col of cols; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>        \r\n                <td [attr.colspan]=\"cols.length\">No data found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablefilterdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablefilterdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './treetablefilterdemo.html'\r\n&#125;)\r\nexport class TreeTableFilterDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablefilterdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablefilterdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable #tt [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div style=\"text-align: right\"&gt;        \r\n            &lt;i class=\"pi pi-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\r\n            &lt;input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"tt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\"&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of cols\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of cols\"&gt;\r\n                &lt;input pInputText type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of cols; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"emptymessage\"&gt;\r\n        &lt;tr&gt;        \r\n            &lt;td [attr.colspan]=\"cols.length\"&gt;No data found.&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablelazydemo.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablelazydemo.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Lazy</span></span>\r\n        <span>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n            onLazyLoad callback everytime paging or sorting happens. In addition, children of a node can be loaded on demand at onNodeExpand event as well.\r\n            Sample belows imitates lazy paging by using an in memory list.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"files\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [lazy]=\"true\" \r\n        (onLazyLoad)=\"loadNodes($event)\" [totalRecords]=\"1000\" [loading]=\"loading\" (onNodeExpand)=\"onNodeExpand($event)\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablelazydemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablelazydemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableLazyDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    totalRecords: number;\r\n\r\n    loading: boolean;\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n\r\n        //in a production application, retrieve the logical number of rows from a remote datasource\r\n        this.totalRecords = 1000;\r\n\r\n        this.loading = true;\r\n    &#125;\r\n\r\n    loadNodes(event) &#123;\r\n        this.loading = true;\r\n\r\n        //in a production application, make a remote request to load data using state metadata from event\r\n        //event.first = First row offset\r\n        //event.rows = Number of rows per page\r\n        //event.sortField = Field name to sort with\r\n        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec\r\n        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value\r\n\r\n        //imitate db connection over a network\r\n        setTimeout(() => &#123;\r\n            this.loading = false;\r\n            this.files = [];\r\n\r\n            for(let i = 0; i &lt; event.rows; i++) &#123;\r\n                let node = &#123;\r\n                    data: &#123;  \r\n                        name: 'Item ' + (event.first + i),\r\n                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',\r\n                        type: 'Type ' + (event.first + i)\r\n                    &#125;,\r\n                    leaf: false\r\n                &#125;;\r\n\r\n                this.files.push(node);\r\n            &#125;\r\n        &#125;, 1000);\r\n    &#125;\r\n\r\n    onNodeExpand(event) &#123;\r\n        this.loading = true;\r\n\r\n        setTimeout(() => &#123;\r\n            this.loading = false;\r\n            const node = event.node;\r\n\r\n            node.children = [\r\n                &#123;\r\n                    data: &#123;  \r\n                        name: node.data.name + ' - 0',\r\n                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',\r\n                        type: 'File'\r\n                    &#125;,\r\n                &#125;,\r\n                &#123;\r\n                    data: &#123;  \r\n                        name: node.data.name + ' - 1',\r\n                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',\r\n                        type: 'File'\r\n                    &#125;\r\n                &#125;\r\n            ];\r\n\r\n            this.files = [...this.files];\r\n        &#125;, 250);\r\n        \r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablelazydemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablelazydemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [lazy]=\"true\" \r\n    (onLazyLoad)=\"loadNodes($event)\" [totalRecords]=\"1000\" [loading]=\"loading\" (onNodeExpand)=\"onNodeExpand($event)\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablepagedemo.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablepagedemo.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Page</span></span>\r\n        <span>Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"files\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablepagedemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTablePageDemo implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.files = [];\r\n        for(let i = 0; i &lt; 50; i++) &#123;\r\n            let node = &#123;\r\n                data:&#123;  \r\n                    name: 'Item ' + i,\r\n                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',\r\n                    type: 'Type ' + i\r\n                &#125;,\r\n                children: [\r\n                    &#123;\r\n                        data: &#123;  \r\n                            name: 'Item ' + i + ' - 0',\r\n                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',\r\n                            type: 'Type ' + i\r\n                        &#125;\r\n                    &#125;\r\n                ]\r\n            &#125;;\r\n\r\n            this.files.push(node);\r\n        &#125;\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablepagedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablereorderdemo.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablereorderdemo.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Reorder</span></span>\r\n        <span>Order of the columns can be changed using drag and drop.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"files\" [columns]=\"cols\" [reorderableColumns]=\"true\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" ttReorderableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablecolreorder.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablecolreorder.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableReorderDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablecolreorder.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treeable/treetablecolreorder.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\" [reorderableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" ttReorderableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetableresponsivedemo.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetableresponsivedemo.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Responsive</span></span>\r\n        <span>This sample demonstrates how to implement a responsive TreeTable using media queries.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"files\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th class=\"priority-2\">Size</th>\r\n                <th class=\"priority-3\">Type</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\">\r\n            <tr>\r\n                <td>\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                    {{rowData.name}}\r\n                    <span class=\"visibility-sm\">\r\n                        / {{rowData.size}} - {{rowData.type}}\r\n                    </span>\r\n                </td>\r\n                <td class=\"priority-2\">{{rowData.size}}</td>\r\n                <td class=\"priority-3\">{{rowData.type}}</td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetableresponsivedemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './treetableresponsivedemo.html',\r\n    styles: [`\r\n        :host ::ng-deep .priority-2, \r\n        :host ::ng-deep .priority-3,\r\n        :host ::ng-deep .visibility-sm &#123;\r\n            display: none;\r\n        &#125;\r\n\r\n        @media screen and (max-width: 39.938em) &#123;\r\n            :host ::ng-deep .visibility-sm &#123;\r\n                display: inline;\r\n            &#125;\r\n        &#125;\r\n\r\n        @media screen and (min-width: 40em) &#123;\r\n            :host ::ng-deep .priority-2 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n\r\n        @media screen and (min-width: 64em) &#123;\r\n            :host ::ng-deep .priority-3 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n    `]\r\n&#125;)\r\nexport class TreeTableResponsiveDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetableresponsivedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Name&lt;/th&gt;\r\n            &lt;th class=\"priority-2\"&gt;Size&lt;/th&gt;\r\n            &lt;th class=\"priority-3\"&gt;Type&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.name&#125;&#125;\r\n                &lt;span class=\"visibility-sm\"&gt;\r\n                    / &#123;&#123;rowData.size&#125;&#125; - &#123;&#123;rowData.type&#125;&#125;\r\n                &lt;/span&gt;\r\n            &lt;/td&gt;\r\n            &lt;td class=\"priority-2\"&gt;&#123;&#123;rowData.size&#125;&#125;&lt;/td&gt;\r\n            &lt;td class=\"priority-3\"&gt;&#123;&#123;rowData.type&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablescrolldemo.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablescrolldemo.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"ubitem\">Scroll</span></span>\r\n        <span>Scrolling data is available horizontally, vertically or both with optional support for frozen columns.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Vertical</h3>\r\n    <p-treeTable [value]=\"files1\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Virtual Scroll - 250K Root Nodes X 2 Child Nodes</h3>\r\n    <p-treeTable [value]=\"virtualFiles\" [columns]=\"cols\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\"\r\n        [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadNodes($event)\"\r\n        [totalRecords]=\"totalRecords\" (onNodeExpand)=\"onNodeExpand($event)\" [loading]=\"true\" [showLoader]=\"showLoader\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"loadingbody\" let-columns=\"columns\">\r\n            <tr style=\"height:34px\">\r\n                <td *ngFor=\"let col of columns;\">\r\n                    <div class=\"loading-text\"></div>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Horizontal</h3>\r\n    <p-treeTable [value]=\"files2\" [columns]=\"cols\" [scrollable]=\"true\" [style]=\"{width:'600px'}\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" style=\"width:350px\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Horizontal and Vertical</h3>\r\n    <p-treeTable [value]=\"files3\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\" [style]=\"{width:'600px'}\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" style=\"width:350px\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Frozen Columns</h3>\r\n    <p-treeTable [value]=\"files4\" [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" style=\"width:250px\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n        <ng-template pTemplate=\"frozenbody\" let-rowNode let-rowData=\"rowData\">\r\n            <tr>\r\n                <td>\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                    {{rowData.name}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablescrolldemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablescrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './treetablescrolldemo.html',\r\n    styles: [`\r\n        .loading-text &#123;\r\n            display: block;\r\n            background-color: #f1f1f1;\r\n            min-height: 19px;\r\n            animation: pulse 1s infinite ease-in-out;\r\n            text-indent: -99999px;\r\n            overflow: hidden;\r\n        &#125;\r\n    `]\r\n5;)\r\nexport class TreeTableScrollDemo &#123;\r\n\r\n    files1: TreeNode[];\r\n\r\n    files2: TreeNode[];\r\n\r\n    files3: TreeNode[];\r\n\r\n    files4: TreeNode[];\r\n\r\n    virtualFiles: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    frozenCols: any[];\r\n\r\n    scrollableCols: any[];\r\n\r\n    totalRecords: number;\r\n\r\n    showLoader: boolean;\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files1 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files2 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files3 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files4 = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n\r\n        this.scrollableCols = [\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n\r\n        this.frozenCols = [\r\n            &#123; field: 'name', header: 'Name' &#125;\r\n        ];\r\n\r\n        //in a production application, retrieve the logical number of rows from a remote datasource\r\n        this.totalRecords = 250000;\r\n\r\n        this.showLoader = false;\r\n    &#125;\r\n\r\n    loadNodes(event) &#123;\r\n        //in a production application, make a remote request to load data using state metadata from event\r\n        //event.first = First row offset\r\n        //event.rows = Number of rows per page\r\n        //event.sortField = Field name to sort with\r\n        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec\r\n        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value\r\n\r\n        //imitate db connection over a network\r\n        setTimeout(() => &#123;\r\n            this.virtualFiles = [];\r\n\r\n            //last chunk\r\n            if (event.first === 249980)\r\n                this.createLazyNodes(event.first, 20);\r\n            else\r\n                this.createLazyNodes(event.first, event.rows);\r\n        &#125;, 250);\r\n    &#125;\r\n\r\n    createLazyNodes(index, length) &#123;\r\n        for(let i = 0; i < length; i++) &#123;\r\n            let node = &#123;\r\n                data: &#123;  \r\n                    name: 'Item ' + (index + i),\r\n                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',\r\n                    type: 'Type ' + (index + i)\r\n                &#125;,\r\n                leaf: false\r\n            &#125;;\r\n\r\n            this.virtualFiles.push(node);\r\n        &#125;\r\n    &#125;\r\n\r\n    onNodeExpand(event) &#123;\r\n        this.showLoader = true;\r\n\r\n        setTimeout(() => &#123;\r\n            this.showLoader = false;\r\n            const node = event.node;\r\n\r\n            node.children = [\r\n                &#123;\r\n                    data: &#123;  \r\n                        name: node.data.name + ' - 0',\r\n                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',\r\n                        type: 'File'\r\n                    &#125;,\r\n                &#125;,\r\n                &#123;\r\n                    data: &#123;  \r\n                        name: node.data.name + ' - 1',\r\n                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',\r\n                        type: 'File'\r\n                    &#125;\r\n                &#125;\r\n            ];\r\n\r\n            this.virtualFiles = [...this.virtualFiles];\r\n        &#125;, 250);\r\n        \r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablescrolldemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/treetablescrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Vertical&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files2\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Virtual Scroll - 250K Root Nodes X 2 Child Nodes&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"virtualFiles\" [columns]=\"cols\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\"\r\n    [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadNodes($event)\" \r\n    [totalRecords]=\"totalRecords\" (onNodeExpand)=\"onNodeExpand($event)\" [loading]=\"true\" [showLoader]=\"showLoader\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"loadingbody\" let-columns=\"columns\"&gt;\r\n        &lt;tr style=\"height:34px\"&gt;\r\n            &lt;td *ngFor=\"let col of columns;\"&gt;\r\n                &lt;div class=\"loading-text\"&gt;&lt;/div&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Horizontal&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files2\" [columns]=\"cols\" [scrollable]=\"true\" [style]=\"&#123;width:'600px'&#125;\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:350px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Horizontal and Vertical&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files3\" [columns]=\"cols\" [scrollable]=\"true\" scrollHeight=\"200px\" [style]=\"&#123;width:'600px'&#125;\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:350px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Frozen Columns&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files4\" [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"frozenbody\" let-rowNode let-rowData=\"rowData\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData.name&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablesectionsdemo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablesectionsdemo.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Sections</span></span>\r\n        <span>TreeTable provides templates to customize the content of various sections such as caption and summary.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"files\" [columns]=\"cols\">\r\n        <ng-template pTemplate=\"caption\">\r\n            FileSystem\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n        <ng-template pTemplate=\"footer\" let-columns>\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            There are {{files?.length}} Root Folders\r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablesectionsdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablesectionsdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableSectionsDemo implements OnInit &123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &123; &125;\r\n\r\n    ngOnInit() &123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &123; field: 'name', header: 'Name' &125;,\r\n            &123; field: 'size', header: 'Size' &125;,\r\n            &123; field: 'type', header: 'Type' &125;\r\n        ];\r\n    &125;\r\n&125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablesectionsdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablesectionsdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        FileSystem\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &123;&123;col.header&125;&125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &123;&123;rowData[col.field]&125;&125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"footer\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &123;&123;col.header&125;&125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        There are &123;&123;files?.length&125;&125; Root Folders\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetableselectiondemo.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetableselectiondemo.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Selection</span></span>\r\n        <span>TreeTable supports single, multiple and checkbox based selection modes.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <h3 class=\"first\">Single</h3>\r\n    <p-treeTable [value]=\"files1\" [columns]=\"cols\" selectionMode=\"single\" [(selection)]=\"selectedNode1\" dataKey=\"name\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr [ttRow]=\"rowNode\" [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\">\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            <div style=\"text-align: left\">\r\n                Selected Node: <span style=\"font-weight: normal\">{{selectedNode1 ? selectedNode1.data.name + ' - ' + selectedNode1.data.size + ' - ' + selectedNode1.data.type : 'none'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Multiple</h3>\r\n    <p-treeTable [value]=\"files2\" [columns]=\"cols\" selectionMode=\"multiple\" [(selection)]=\"selectedNodes1\" dataKey=\"name\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr [ttRow]=\"rowNode\" [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\">\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            <div style=\"text-align: left\">\r\n                Selected Nodes: <span *ngIf=\"!selectedNodes1 || selectedNodes1.length === 0\" style=\"font-weight: normal\">none</span>\r\n                <ul *ngIf=\"selectedNodes1 && selectedNodes1.length\">\r\n                    <li *ngFor=\"let node of selectedNodes1\">\r\n                        <span style=\"font-weight: normal\">{{node.data.name + ' - ' + node.data.size + ' - ' + node.data.type}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Multiple with MetaKey</h3>\r\n    <p-treeTable [value]=\"files3\" [columns]=\"cols\" selectionMode=\"multiple\" [(selection)]=\"selectedNodes2\" dataKey=\"name\" [metaKeySelection]=\"true\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr [ttRow]=\"rowNode\" [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\">\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            <div style=\"text-align: left\">\r\n                Selected Nodes: <span *ngIf=\"!selectedNodes2 || selectedNodes2.length === 0\" style=\"font-weight: normal\">none</span>\r\n                <ul *ngIf=\"selectedNodes2 && selectedNodes2.length\">\r\n                    <li *ngFor=\"let node of selectedNodes2\">\r\n                        <span style=\"font-weight: normal\">{{node.data.name + ' - ' + node.data.size + ' - ' + node.data.type}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Events</h3>\r\n    <p-treeTable [value]=\"files4\" [columns]=\"cols\" selectionMode=\"single\" [(selection)]=\"selectedNode2\" dataKey=\"name\"\r\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr [ttRow]=\"rowNode\" [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\">\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Checkbox</h3>\r\n    <p-treeTable [value]=\"files5\" [columns]=\"cols\" selectionMode=\"checkbox\" [(selection)]=\"selectedNodes3\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align:left\">\r\n                <p-treeTableHeaderCheckbox></p-treeTableHeaderCheckbox>\r\n                <span style=\"margin-left: .25em; vertical-align: middle\">Toggle All</span>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    <p-treeTableCheckbox [value]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableCheckbox>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            <div style=\"text-align: left\">\r\n                Selected Nodes: <span *ngIf=\"!selectedNodes3 || selectedNodes3.length === 0\" style=\"font-weight: normal\">none</span>\r\n                <ul *ngIf=\"selectedNodes3 && selectedNodes3.length\">\r\n                    <li *ngFor=\"let node of selectedNodes3\">\r\n                        <span style=\"font-weight: normal\">{{node.data.name + ' - ' + node.data.size + ' - ' + node.data.type}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetableselectiondemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetableselectiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableSelectionDemo &#123;\r\n\r\n    files1: TreeNode[];\r\n\r\n    files2: TreeNode[];\r\n\r\n    files3: TreeNode[];\r\n\r\n    files4: TreeNode[];\r\n\r\n    files5: TreeNode[];\r\n\r\n    selectedNode1: TreeNode;\r\n\r\n    selectedNode2: TreeNode;\r\n\r\n    selectedNodes1: TreeNode[];\r\n\r\n    selectedNodes2: TreeNode[];\r\n\r\n    selectedNodes3: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService, private messageService: MessageService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files1 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files2 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files3 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files4 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files5 = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n\r\n    nodeSelect(event) &#123;\r\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Selected', detail: event.node.data.name&#125;);\r\n    &#125;\r\n\r\n    nodeUnselect(event) &#123;\r\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Unselected', detail: event.node.data.name&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetableselectiondemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableselectiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files1\" [columns]=\"cols\" selectionMode=\"single\" [(selection)]=\"selectedNode1\" dataKey=\"name\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        &lt;div style=\"text-align: left\"&gt;\r\n            Selected Node: &lt;span style=\"font-weight: normal\"&gt;&#123;&#123;selectedNode1 ? selectedNode1.data.name + ' - ' + selectedNode1.data.size + ' - ' + selectedNode1.data.type : 'none'&#125;&#125;&lt;/span&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Multiple&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files2\" [columns]=\"cols\" selectionMode=\"multiple\" [(selection)]=\"selectedNodes1\" dataKey=\"name\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        &lt;div style=\"text-align: left\"&gt;\r\n            Selected Nodes: &lt;span *ngIf=\"!selectedNodes1 || selectedNodes1.length === 0\" style=\"font-weight: normal\"&gt;none&lt;/span&gt;\r\n            &lt;ul *ngIf=\"selectedNodes1 && selectedNodes1.length\"&gt;\r\n                &lt;li *ngFor=\"let node of selectedNodes1\"&gt;\r\n                    &lt;span style=\"font-weight: normal\"&gt;&#123;&#123;node.data.name + ' - ' + node.data.size + ' - ' + node.data.type&#125;&#125;&lt;/span&gt;\r\n                &lt;/li&gt;\r\n            &lt;/ul&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Multiple with MetaKey&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files3\" [columns]=\"cols\" selectionMode=\"multiple\" [(selection)]=\"selectedNodes2\" dataKey=\"name\" [metaKeySelection]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        &lt;div style=\"text-align: left\"&gt;\r\n            Selected Nodes: &lt;span *ngIf=\"!selectedNodes2 || selectedNodes2.length === 0\" style=\"font-weight: normal\"&gt;none&lt;/span&gt;\r\n            &lt;ul *ngIf=\"selectedNodes2 && selectedNodes2.length\"&gt;\r\n                &lt;li *ngFor=\"let node of selectedNodes2\"&gt;\r\n                    &lt;span style=\"font-weight: normal\"&gt;&#123;&#123;node.data.name + ' - ' + node.data.size + ' - ' + node.data.type&#125;&#125;&lt;/span&gt;\r\n                &lt;/li&gt;\r\n            &lt;/ul&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Events&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files4\" [columns]=\"cols\" selectionMode=\"single\" [(selection)]=\"selectedNode2\" dataKey=\"name\"\r\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Checkbox&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files5\" [columns]=\"cols\" selectionMode=\"checkbox\" [(selection)]=\"selectedNodes3\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div style=\"text-align:left\"&gt;\r\n            &lt;p-treeTableHeaderCheckbox&gt;&lt;/p-treeTableHeaderCheckbox&gt;\r\n            &lt;span style=\"margin-left: .25em; vertical-align: middle\"&gt;Toggle All&lt;/span&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &lt;p-treeTableCheckbox [value]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableCheckbox&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        &lt;div style=\"text-align: left\"&gt;\r\n            Selected Nodes: &lt;span *ngIf=\"!selectedNodes3 || selectedNodes3.length === 0\" style=\"font-weight: normal\"&gt;none&lt;/span&gt;\r\n            &lt;ul *ngIf=\"selectedNodes3 && selectedNodes3.length\"&gt;\r\n                &lt;li *ngFor=\"let node of selectedNodes3\"&gt;\r\n                    &lt;span style=\"font-weight: normal\"&gt;&#123;&#123;node.data.name + ' - ' + node.data.size + ' - ' + node.data.type&#125;&#125;&lt;/span&gt;\r\n                &lt;/li&gt;\r\n            &lt;/ul&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablesortdemo.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablesortdemo.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Sort</span></span>\r\n        <span>TreeTable supports both single column and multiple column sorting.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Single Sort</h3>\r\n    <p-treeTable [value]=\"files1\" [columns]=\"cols\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" [ttSortableColumn]=\"col.field\">\r\n                    {{col.header}}\r\n                    <p-treeTableSortIcon [field]=\"col.field\"></p-treeTableSortIcon>\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-treeTable>\r\n\r\n    <h3>Multiple Sort</h3>\r\n    <p-treeTable [value]=\"files2\" [columns]=\"cols\" sortMode=\"multiple\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" [ttSortableColumn]=\"col.field\">\r\n                    {{col.header}}\r\n                    <p-treeTableSortIcon [field]=\"col.field\"></p-treeTableSortIcon>\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns; let i = index\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablesortdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablesortdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableSortDemo implements OnInit &#123;\r\n\r\n    files1: TreeNode[];\r\n\r\n    files2: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files1 = files);\r\n        this.nodeService.getFilesystem().then(files => &#123;\r\n            this.files2 = files;\r\n            this.files2.push(&#123;\r\n                data: &#123;\r\n                    name: 'Documents',\r\n                    size: '100kb',\r\n                    type: 'Link'\r\n                &#125;\r\n            &#125;);\r\n        &#125;);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablesortdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablesortdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Single Sort&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files1\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ttSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-treeTableSortIcon [field]=\"col.field\"&gt;&lt;/p-treeTableSortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;h3&gt;Multiple Sort&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files2\" [columns]=\"cols\" sortMode=\"multiple\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ttSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-treeTableSortIcon [field]=\"col.field\"&gt;&lt;/p-treeTableSortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablestyledemo.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/treetable/treetablestyledemo.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<treetable-submenu></treetable-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable - <span class=\"subitem\">Style</span></span>\r\n        <span>Certain rows or cell can easily be styled based on conditions. In this example, nodes\r\n            whose size is in kilobytes are highlighted at row and cell level.\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-treeTable [value]=\"files\" [columns]=\"cols\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n            <tr [ngClass]=\"{'kb-row': rowData.size.endsWith('kb')}\">\r\n                <td *ngFor=\"let col of columns; let i = index\" [ngClass]=\"{'kb-cell': col.field === 'size' && rowData.size.endsWith('kb')}\">\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"treetablestyledemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablestyledemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './treetablestyledemo.html',\r\n    styles: [`\r\n        .kb-row &#123;\r\n            background-color: #1CA979 !important;\r\n            color: #ffffff !important;\r\n        &#125;\r\n\r\n        .kb-cell &#123;\r\n            background-color: #2CA8B1 !important;\r\n            color: #ffffff !important;\r\n        &#125;\r\n    `]\r\n&#125;)\r\nexport class TreeTableStyleDemo &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n            &#123; field: 'name', header: 'Name' &#125;,\r\n            &#123; field: 'size', header: 'Size' &#125;,\r\n            &#123; field: 'type', header: 'Type' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"treetablestyledemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable/treetablestyledemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" [columns]=\"cols\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\"&gt;\r\n        &lt;tr [ngClass]=\"&#123;'kb-row': rowData.size.endsWith('kb')&#125;\"&gt;\r\n            &lt;td *ngFor=\"let col of columns; let i = index\" [ngClass]=\"&#123;'kb-cell': col.field === 'size' && rowData.size.endsWith('kb')&#125;\"&gt;\r\n                &lt;p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"&gt;&lt;/p-treeTableToggler&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;            \r\n    &lt;/ng-template&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/components/treetable/treetable.ts":
/*!***************************************************!*\
  !*** ./src/app/components/treetable/treetable.ts ***!
  \***************************************************/
/*! exports provided: TreeTableService, TreeTable, TTBody, TTScrollableView, TTSortableColumn, TTSortIcon, TTResizableColumn, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, TTRow, TreeTableToggler, TreeTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableService", function() { return TreeTableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTable", function() { return TreeTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTBody", function() { return TTBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTScrollableView", function() { return TTScrollableView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTSortableColumn", function() { return TTSortableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTSortIcon", function() { return TTSortIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTResizableColumn", function() { return TTResizableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTReorderableColumn", function() { return TTReorderableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTSelectableRow", function() { return TTSelectableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTSelectableRowDblClick", function() { return TTSelectableRowDblClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTContextMenuRow", function() { return TTContextMenuRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTCheckbox", function() { return TTCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTHeaderCheckbox", function() { return TTHeaderCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTEditableColumn", function() { return TTEditableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableCellEditor", function() { return TreeTableCellEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTRow", function() { return TTRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableToggler", function() { return TreeTableToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableModule", function() { return TreeTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _paginator_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paginator/paginator */ "./src/app/components/paginator/paginator.ts");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
/* harmony import */ var _utils_objectutils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/objectutils */ "./src/app/components/utils/objectutils.ts");
/* harmony import */ var _utils_filterutils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/filterutils */ "./src/app/components/utils/filterutils.ts");









let TreeTableService = class TreeTableService {
    constructor() {
        this.sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.uiUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.uiUpdateSource$ = this.uiUpdateSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
    }
    onSort(sortMeta) {
        this.sortSource.next(sortMeta);
    }
    onSelectionChange() {
        this.selectionSource.next();
    }
    onContextMenu(node) {
        this.contextMenuSource.next(node);
    }
    onUIUpdate(value) {
        this.uiUpdateSource.next(value);
    }
    onTotalRecordsChange(value) {
        this.totalRecordsSource.next(value);
    }
};
TreeTableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TreeTableService);

let TreeTable = class TreeTable {
    constructor(el, zone, tableService) {
        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.lazy = false;
        this.first = 0;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contextMenuSelectionMode = "separate";
        this.compareSelectionBy = 'deepEquals';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.rowTrackBy = (index, item) => item;
        this.filters = {};
        this.filterDelay = 300;
        this.filterMode = 'lenient';
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._value = [];
        this._totalRecords = 0;
        this._sortOrder = 1;
        this.selectionKeys = {};
    }
    ngOnInit() {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.initialized = true;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'caption':
                    this.captionTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'body':
                    this.bodyTemplate = item.template;
                    break;
                case 'loadingbody':
                    this.loadingBodyTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'summary':
                    this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    this.colGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    this.paginatorRightTemplate = item.template;
                    break;
                case 'frozenheader':
                    this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    this.frozenColGroupTemplate = item.template;
                    break;
            }
        });
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        if (!this.lazy) {
            this.totalRecords = (this._value ? this._value.length : 0);
            if (this.sortMode == 'single' && this.sortField)
                this.sortSingle();
            else if (this.sortMode == 'multiple' && this.multiSortMeta)
                this.sortMultiple();
            else if (this.hasFilter()) //sort already filters
                this._filter();
        }
        if (this.virtualScroll && this.virtualScrollCallback) {
            this.virtualScrollCallback();
        }
        this.updateSerializedValue();
        this.tableService.onUIUpdate(this.value);
    }
    updateSerializedValue() {
        this.serializedValue = [];
        if (this.paginator)
            this.serializePageNodes();
        else
            this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
    }
    serializeNodes(parent, nodes, level, visible) {
        if (nodes && nodes.length) {
            for (let node of nodes) {
                node.parent = parent;
                const rowNode = {
                    node: node,
                    parent: parent,
                    level: level,
                    visible: visible && (parent ? parent.expanded : true)
                };
                this.serializedValue.push(rowNode);
                if (rowNode.visible && node.expanded) {
                    this.serializeNodes(node, node.children, level + 1, rowNode.visible);
                }
            }
        }
    }
    serializePageNodes() {
        let data = this.filteredNodes || this.value;
        this.serializedValue = [];
        if (data && data.length) {
            const first = this.lazy ? 0 : this.first;
            for (let i = first; i < (first + this.rows); i++) {
                let node = data[i];
                if (node) {
                    this.serializedValue.push({
                        node: node,
                        parent: null,
                        level: 0,
                        visible: true
                    });
                    this.serializeNodes(node, node.children, 1, true);
                }
            }
        }
    }
    get totalRecords() {
        return this._totalRecords;
    }
    set totalRecords(val) {
        this._totalRecords = val;
        this.tableService.onTotalRecordsChange(this._totalRecords);
    }
    get sortField() {
        return this._sortField;
    }
    set sortField(val) {
        this._sortField = val;
        //avoid triggering lazy load prior to lazy initialization at onInit
        if (!this.lazy || this.initialized) {
            if (this.sortMode === 'single') {
                this.sortSingle();
            }
        }
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(val) {
        this._sortOrder = val;
        //avoid triggering lazy load prior to lazy initialization at onInit
        if (!this.lazy || this.initialized) {
            if (this.sortMode === 'single') {
                this.sortSingle();
            }
        }
    }
    get multiSortMeta() {
        return this._multiSortMeta;
    }
    set multiSortMeta(val) {
        this._multiSortMeta = val;
        if (this.sortMode === 'multiple') {
            this.sortMultiple();
        }
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
        if (!this.preventSelectionSetterPropagation) {
            this.updateSelectionKeys();
            this.tableService.onSelectionChange();
        }
        this.preventSelectionSetterPropagation = false;
    }
    updateSelectionKeys() {
        if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
                for (let node of this._selection) {
                    this.selectionKeys[String(_utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey))] = 1;
                }
            }
            else {
                this.selectionKeys[String(_utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(this._selection.data, this.dataKey))] = 1;
            }
        }
    }
    onPageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy)
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        else
            this.serializePageNodes();
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
        this.tableService.onUIUpdate(this.value);
    }
    sort(event) {
        let originalEvent = event.originalEvent;
        if (this.sortMode === 'single') {
            this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
        }
        if (this.sortMode === 'multiple') {
            let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            let sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                }
                this.multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
    }
    sortSingle() {
        if (this.sortField && this.sortOrder) {
            if (this.resetPageOnSort) {
                this.first = 0;
            }
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.sortNodes(this.value);
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            let sortMeta = {
                field: this.sortField,
                order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
            this.updateSerializedValue();
        }
    }
    sortNodes(nodes) {
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (this.customSort) {
            this.sortFunction.emit({
                data: nodes,
                mode: this.sortMode,
                field: this.sortField,
                order: this.sortOrder
            });
        }
        else {
            nodes.sort((node1, node2) => {
                let value1 = _utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node1.data, this.sortField);
                let value2 = _utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node2.data, this.sortField);
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return (this.sortOrder * result);
            });
        }
        for (let node of nodes) {
            this.sortNodes(node.children);
        }
    }
    sortMultiple() {
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.sortMultipleNodes(this.value);
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
            this.updateSerializedValue();
        }
    }
    sortMultipleNodes(nodes) {
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (this.customSort) {
            this.sortFunction.emit({
                data: this.value,
                mode: this.sortMode,
                multiSortMeta: this.multiSortMeta
            });
        }
        else {
            this.value.sort((node1, node2) => {
                return this.multisortField(node1, node2, this.multiSortMeta, 0);
            });
        }
        for (let node of nodes) {
            this.sortMultipleNodes(node.children);
        }
    }
    multisortField(node1, node2, multiSortMeta, index) {
        let value1 = _utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node1.data, multiSortMeta[index].field);
        let value2 = _utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node2.data, multiSortMeta[index].field);
        let result = null;
        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(node1, node2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    }
    getSortMeta(field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (let i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    }
    isSorted(field) {
        if (this.sortMode === 'single') {
            return (this.sortField && this.sortField === field);
        }
        else if (this.sortMode === 'multiple') {
            let sorted = false;
            if (this.multiSortMeta) {
                for (let i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    }
    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.virtualScroll ? this.rows * 2 : this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
        };
    }
    handleVirtualScroll(event) {
        this.first = (event.page - 1) * this.rows;
        this.virtualScrollCallback = event.callback;
        this.zone.run(() => {
            if (this.virtualScrollTimer) {
                clearTimeout(this.virtualScrollTimer);
            }
            this.virtualScrollTimer = setTimeout(() => {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }, this.virtualScrollDelay);
        });
    }
    isEmpty() {
        let data = this.filteredNodes || this.value;
        return data == null || data.length == 0;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onColumnResizeBegin(event) {
        let containerLeft = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
        event.preventDefault();
    }
    onColumnResize(event) {
        let containerLeft = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    }
    onColumnResizeEnd(event, column) {
        let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        let columnWidth = column.offsetWidth;
        let newColumnWidth = columnWidth + delta;
        let minWidth = column.style.minWidth || 15;
        if (columnWidth + delta > parseInt(minWidth)) {
            if (this.columnResizeMode === 'fit') {
                let nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    let nextColumnWidth = nextColumn.offsetWidth - delta;
                    let nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            let scrollableView = this.findParentScrollableView(column);
                            let scrollableBodyTable = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-treetable-scrollable-body-table');
                            let scrollableHeaderTable = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-treetable-scrollable-header-table');
                            let scrollableFooterTable = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-treetable-scrollable-footer-table');
                            let resizeColumnIndex = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            column.style.width = newColumnWidth + 'px';
                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                if (this.scrollable) {
                    let scrollableView = this.findParentScrollableView(column);
                    let scrollableBodyTable = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-treetable-scrollable-body-table');
                    let scrollableHeaderTable = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-treetable-scrollable-header-table');
                    let scrollableFooterTable = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-treetable-scrollable-footer-table');
                    scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
                    scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    if (scrollableFooterTable) {
                        scrollableFooterTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    }
                    let resizeColumnIndex = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                    column.style.width = newColumnWidth + 'px';
                    let containerWidth = this.tableViewChild.nativeElement.style.width;
                    this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
    }
    findParentScrollableView(column) {
        if (column) {
            let parent = column.parentElement;
            while (parent && !_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(parent, 'ui-treetable-scrollable-view')) {
                parent = parent.parentElement;
            }
            return parent;
        }
        else {
            return null;
        }
    }
    resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        if (table) {
            let colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
                let col = colGroup.children[resizeColumnIndex];
                let nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw "Scrollable tables require a colgroup to support resizable columns";
            }
        }
    }
    onColumnDragStart(event, columnElement) {
        this.reorderIconWidth = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
        this.reorderIconHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    }
    onColumnDragEnter(event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            let containerOffset = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement);
            let dropHeaderOffset = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                let targetLeft = dropHeaderOffset.left - containerOffset.left;
                let targetTop = containerOffset.top - dropHeaderOffset.top;
                let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    }
    onColumnDragLeave(event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    }
    onColumnDrop(event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            let dragIndex = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'ttreorderablecolumn');
            let dropIndex = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropColumn, 'ttreorderablecolumn');
            let allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop && ((dropIndex < dragIndex && this.dropPosition === 1))) {
                dropIndex = dropIndex + 1;
            }
            if (allowDrop && ((dropIndex > dragIndex && this.dropPosition === -1))) {
                dropIndex = dropIndex - 1;
            }
            if (allowDrop) {
                _utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    }
    handleRowClick(event) {
        let targetNode = event.originalEvent.target.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || (_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.originalEvent.target, 'ui-clickable'))) {
            return;
        }
        if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            let rowNode = event.rowNode;
            let selected = this.isSelected(rowNode.node);
            let metaSelection = this.rowTouched ? false : this.metaKeySelection;
            let dataKeyValue = this.dataKey ? String(_utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(rowNode.node.data, this.dataKey)) : null;
            if (metaSelection) {
                let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                if (selected && metaKey) {
                    if (this.isSingleSelectionMode()) {
                        this._selection = null;
                        this.selectionKeys = {};
                        this.selectionChange.emit(null);
                    }
                    else {
                        let selectionIndex = this.findIndexInSelection(rowNode.node);
                        this._selection = this.selection.filter((val, i) => i != selectionIndex);
                        this.selectionChange.emit(this.selection);
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                    this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        this._selection = rowNode.node;
                        this.selectionChange.emit(rowNode.node);
                        if (dataKeyValue) {
                            this.selectionKeys = {};
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                    else if (this.isMultipleSelectionMode()) {
                        if (metaKey) {
                            this._selection = this.selection || [];
                        }
                        else {
                            this._selection = [];
                            this.selectionKeys = {};
                        }
                        this._selection = [...this.selection, rowNode.node];
                        this.selectionChange.emit(this.selection);
                        if (dataKeyValue) {
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                    this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                }
            }
            else {
                if (this.selectionMode === 'single') {
                    if (selected) {
                        this._selection = null;
                        this.selectionKeys = {};
                        this.selectionChange.emit(this.selection);
                        this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                    }
                    else {
                        this._selection = rowNode.node;
                        this.selectionChange.emit(this.selection);
                        this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                        if (dataKeyValue) {
                            this.selectionKeys = {};
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                }
                else if (this.selectionMode === 'multiple') {
                    if (selected) {
                        let selectionIndex = this.findIndexInSelection(rowNode.node);
                        this._selection = this.selection.filter((val, i) => i != selectionIndex);
                        this.selectionChange.emit(this.selection);
                        this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                    else {
                        this._selection = this.selection ? [...this.selection, rowNode.node] : [rowNode.node];
                        this.selectionChange.emit(this.selection);
                        this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                        if (dataKeyValue) {
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                }
            }
            this.tableService.onSelectionChange();
        }
        this.rowTouched = false;
    }
    handleRowTouchEnd(event) {
        this.rowTouched = true;
    }
    handleRowRightClick(event) {
        if (this.contextMenu) {
            const node = event.rowNode.node;
            if (this.contextMenuSelectionMode === 'separate') {
                this.contextMenuSelection = node;
                this.contextMenuSelectionChange.emit(node);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, node: node });
                this.contextMenu.show(event.originalEvent);
                this.tableService.onContextMenu(node);
            }
            else if (this.contextMenuSelectionMode === 'joint') {
                this.preventSelectionSetterPropagation = true;
                let selected = this.isSelected(node);
                let dataKeyValue = this.dataKey ? String(_utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey)) : null;
                if (!selected) {
                    if (this.isSingleSelectionMode()) {
                        this.selection = node;
                        this.selectionChange.emit(node);
                    }
                    else if (this.isMultipleSelectionMode()) {
                        this.selection = [node];
                        this.selectionChange.emit(this.selection);
                    }
                    if (dataKeyValue) {
                        this.selectionKeys[dataKeyValue] = 1;
                    }
                }
                this.contextMenu.show(event.originalEvent);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, node: node });
            }
        }
    }
    toggleNodeWithCheckbox(event) {
        this.selection = this.selection || [];
        this.preventSelectionSetterPropagation = true;
        let node = event.rowNode.node;
        let selected = this.isSelected(node);
        if (selected) {
            this.propagateSelectionDown(node, false);
            if (event.rowNode.parent) {
                this.propagateSelectionUp(node.parent, false);
            }
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({ originalEvent: event, node: node });
        }
        else {
            this.propagateSelectionDown(node, true);
            if (event.rowNode.parent) {
                this.propagateSelectionUp(node.parent, true);
            }
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({ originalEvent: event, node: node });
        }
        this.tableService.onSelectionChange();
    }
    toggleNodesWithCheckbox(event, check) {
        let data = this.filteredNodes || this.value;
        this._selection = check && data ? data.slice() : [];
        if (check) {
            if (data && data.length) {
                for (let node of data) {
                    this.propagateSelectionDown(node, true);
                }
            }
        }
        else {
            this._selection = [];
            this.selectionKeys = {};
        }
        this.preventSelectionSetterPropagation = true;
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
    }
    propagateSelectionUp(node, select) {
        if (node.children && node.children.length) {
            let selectedChildCount = 0;
            let childPartialSelected = false;
            let dataKeyValue = this.dataKey ? String(_utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey)) : null;
            for (let child of node.children) {
                if (this.isSelected(child))
                    selectedChildCount++;
                else if (child.partialSelected)
                    childPartialSelected = true;
            }
            if (select && selectedChildCount == node.children.length) {
                this._selection = [...this.selection || [], node];
                node.partialSelected = false;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
            }
            else {
                if (!select) {
                    let index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this._selection = this.selection.filter((val, i) => i != index);
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                }
                if (childPartialSelected || selectedChildCount > 0 && selectedChildCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        let parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    }
    propagateSelectionDown(node, select) {
        let index = this.findIndexInSelection(node);
        let dataKeyValue = this.dataKey ? String(_utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey)) : null;
        if (select && index == -1) {
            this._selection = [...this.selection || [], node];
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        else if (!select && index > -1) {
            this._selection = this.selection.filter((val, i) => i != index);
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (let child of node.children) {
                this.propagateSelectionDown(child, select);
            }
        }
    }
    isSelected(node) {
        if (node && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[_utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey)] !== undefined;
            }
            else {
                if (this.selection instanceof Array)
                    return this.findIndexInSelection(node) > -1;
                else
                    return this.equals(node, this.selection);
            }
        }
        return false;
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selection && this.selection.length) {
            for (let i = 0; i < this.selection.length; i++) {
                if (this.equals(node, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    isSingleSelectionMode() {
        return this.selectionMode === 'single';
    }
    isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
    }
    equals(node1, node2) {
        return this.compareSelectionBy === 'equals' ? (node1 === node2) : _utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].equals(node1.data, node2.data, this.dataKey);
    }
    filter(value, field, matchMode) {
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        if (!this.isFilterBlank(value)) {
            this.filters[field] = { value: value, matchMode: matchMode };
        }
        else if (this.filters[field]) {
            delete this.filters[field];
        }
        this.filterTimeout = setTimeout(() => {
            this._filter();
            this.filterTimeout = null;
        }, this.filterDelay);
    }
    filterGlobal(value, matchMode) {
        this.filter(value, 'global', matchMode);
    }
    isFilterBlank(filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    }
    _filter() {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            if (!this.value) {
                return;
            }
            if (!this.hasFilter()) {
                this.filteredNodes = null;
                if (this.paginator) {
                    this.totalRecords = this.value ? this.value.length : 0;
                }
            }
            else {
                let globalFilterFieldsArray;
                if (this.filters['global']) {
                    if (!this.columns && !this.globalFilterFields)
                        throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                    else
                        globalFilterFieldsArray = this.globalFilterFields || this.columns;
                }
                this.filteredNodes = [];
                const isStrictMode = this.filterMode === 'strict';
                let isValueChanged = false;
                for (let node of this.value) {
                    let copyNode = Object.assign({}, node);
                    let localMatch = true;
                    let globalMatch = false;
                    let paramsWithoutNode;
                    for (let prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            let filterMeta = this.filters[prop];
                            let filterField = prop;
                            let filterValue = filterMeta.value;
                            let filterMatchMode = filterMeta.matchMode || 'startsWith';
                            let filterConstraint = _utils_filterutils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"][filterMatchMode];
                            paramsWithoutNode = { filterField, filterValue, filterConstraint, isStrictMode };
                            if ((isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode))) ||
                                (!isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)))) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                            let copyNodeForGlobal = Object.assign({}, copyNode);
                            let filterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                            let filterValue = this.filters['global'].value;
                            let filterConstraint = _utils_filterutils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"][this.filters['global'].matchMode];
                            paramsWithoutNode = { filterField, filterValue, filterConstraint, isStrictMode };
                            if ((isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode))) ||
                                (!isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode)))) {
                                globalMatch = true;
                                copyNode = copyNodeForGlobal;
                            }
                        }
                    }
                    let matches = localMatch;
                    if (this.filters['global']) {
                        matches = localMatch && globalMatch;
                    }
                    if (matches) {
                        this.filteredNodes.push(copyNode);
                    }
                    isValueChanged = isValueChanged || !localMatch || globalMatch || (localMatch && this.filteredNodes.length > 0) || (!globalMatch && this.filteredNodes.length === 0);
                }
                if (!isValueChanged) {
                    this.filteredNodes = null;
                }
                if (this.paginator) {
                    this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
                }
            }
        }
        this.first = 0;
        const filteredValue = this.filteredNodes || this.value;
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: filteredValue
        });
        this.tableService.onUIUpdate(filteredValue);
        this.updateSerializedValue();
    }
    findFilteredNodes(node, paramsWithoutNode) {
        if (node) {
            let matched = false;
            if (node.children) {
                let childNodes = [...node.children];
                node.children = [];
                for (let childNode of childNodes) {
                    let copyChildNode = Object.assign({}, childNode);
                    if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                        matched = true;
                        node.children.push(copyChildNode);
                    }
                }
            }
            if (matched) {
                return true;
            }
        }
    }
    isFilterMatched(node, { filterField, filterValue, filterConstraint, isStrictMode }) {
        let matched = false;
        let dataFieldValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, filterField);
        if (filterConstraint(dataFieldValue, filterValue)) {
            matched = true;
        }
        if (!matched || (isStrictMode && !this.isNodeLeaf(node))) {
            matched = this.findFilteredNodes(node, { filterField, filterValue, filterConstraint, isStrictMode }) || matched;
        }
        return matched;
    }
    isNodeLeaf(node) {
        return node.leaf === false ? false : !(node.children && node.children.length);
    }
    hasFilter() {
        let empty = true;
        for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty;
    }
    reset() {
        this._sortField = null;
        this._sortOrder = 1;
        this._multiSortMeta = null;
        this.tableService.onSort(null);
        this.filteredNodes = null;
        this.filters = {};
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.totalRecords = (this._value ? this._value.length : 0);
        }
    }
    updateEditingCell(cell) {
        this.editingCell = cell;
        this.bindDocumentEditListener();
    }
    isEditingCellValid() {
        return (this.editingCell && _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.editingCell, '.ng-invalid.ng-dirty').length === 0);
    }
    bindDocumentEditListener() {
        if (!this.documentEditListener) {
            this.documentEditListener = (event) => {
                if (this.editingCell && !this.editingCellClick && this.isEditingCellValid()) {
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.editingCell, 'ui-editing-cell');
                    this.editingCell = null;
                    this.unbindDocumentEditListener();
                }
                this.editingCellClick = false;
            };
            document.addEventListener('click', this.documentEditListener);
        }
    }
    unbindDocumentEditListener() {
        if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
        }
    }
    ngOnDestroy() {
        this.unbindDocumentEditListener();
        this.editingCell = null;
        this.initialized = null;
    }
};
TreeTable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: TreeTableService }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TreeTable.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TreeTable.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "styleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "autoLayout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "lazy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TreeTable.prototype, "rows", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TreeTable.prototype, "first", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TreeTable.prototype, "pageLinks", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TreeTable.prototype, "rowsPerPageOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "alwaysShowPaginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "paginatorPosition", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TreeTable.prototype, "paginatorDropdownAppendTo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TreeTable.prototype, "defaultSortOrder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "sortMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "resetPageOnSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "customSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "selectionMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "selectionChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TreeTable.prototype, "contextMenuSelection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "contextMenuSelectionChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "contextMenuSelectionMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "dataKey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "metaKeySelection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "compareSelectionBy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "rowHover", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "loadingIcon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "showLoader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "scrollable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "scrollHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "virtualScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TreeTable.prototype, "virtualScrollDelay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TreeTable.prototype, "virtualRowHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "frozenWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TreeTable.prototype, "frozenColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "resizableColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "columnResizeMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TreeTable.prototype, "reorderableColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TreeTable.prototype, "contextMenu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], TreeTable.prototype, "rowTrackBy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TreeTable.prototype, "filters", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TreeTable.prototype, "globalFilterFields", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TreeTable.prototype, "filterDelay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TreeTable.prototype, "filterMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onFilter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onNodeExpand", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onNodeCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onLazyLoad", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "sortFunction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onColResize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onColReorder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onNodeSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onNodeUnselect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onContextMenuSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onHeaderCheckboxToggle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onEditInit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onEditComplete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeTable.prototype, "onEditCancel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TreeTable.prototype, "containerViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('resizeHelper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TreeTable.prototype, "resizeHelperViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reorderIndicatorUp', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TreeTable.prototype, "reorderIndicatorUpViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reorderIndicatorDown', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TreeTable.prototype, "reorderIndicatorDownViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TreeTable.prototype, "tableViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], TreeTable.prototype, "templates", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], TreeTable.prototype, "value", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], TreeTable.prototype, "totalRecords", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], TreeTable.prototype, "sortField", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], TreeTable.prototype, "sortOrder", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], TreeTable.prototype, "multiSortMeta", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], TreeTable.prototype, "selection", null);
TreeTable = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-treeTable',
        template: `
        <div #container [ngStyle]="style" [class]="styleClass"
                [ngClass]="{'ui-treetable ui-widget': true, 'ui-treetable-auto-layout': autoLayout, 'ui-treetable-hoverable-rows': (rowHover||(selectionMode === 'single' || selectionMode === 'multiple')),
                'ui-treetable-resizable': resizableColumns, 'ui-treetable-resizable-fit': (resizableColumns && columnResizeMode === 'fit')}">
            <div class="ui-treetable-loading ui-widget-overlay" *ngIf="loading && showLoader"></div>
            <div class="ui-treetable-loading-content" *ngIf="loading && showLoader">
                <i [class]="'ui-treetable-loading-icon pi-spin ' + loadingIcon"></i>
            </div>
            <div *ngIf="captionTemplate" class="ui-treetable-caption ui-widget-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="ui-paginator-top" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo"></p-paginator>
            
            <div class="ui-treetable-wrapper" *ngIf="!scrollable">
                <table #table class="ui-treetable-table">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="ui-treetable-thead">
                        <ng-container *ngTemplateOutlet="headerTemplate; context: {$implicit: columns}"></ng-container>
                    </thead>
                    <tfoot class="ui-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                    <tbody class="ui-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="bodyTemplate"></tbody>
                </table>
            </div>

            <div class="ui-treetable-scrollable-wrapper" *ngIf="scrollable">
               <div class="ui-treetable-scrollable-view ui-treetable-frozen-view" *ngIf="frozenColumns||frozenBodyTemplate" [ttScrollableView]="frozenColumns" [frozen]="true" [ngStyle]="{width: frozenWidth}" [scrollHeight]="scrollHeight"></div>
               <div class="ui-treetable-scrollable-view" [ttScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight"></div>
            </div>

            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="ui-paginator-bottom" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo"></p-paginator>
            <div *ngIf="summaryTemplate" class="ui-treetable-summary ui-widget-header">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="ui-column-resizer-helper ui-state-highlight" style="display:none" *ngIf="resizableColumns"></div>

            <span #reorderIndicatorUp class="pi pi-arrow-down ui-table-reorder-indicator-up" *ngIf="reorderableColumns"></span>
            <span #reorderIndicatorDown class="pi pi-arrow-up ui-table-reorder-indicator-down" *ngIf="reorderableColumns"></span>
        </div>
    `,
        providers: [TreeTableService]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], TreeTableService])
], TreeTable);

let TTBody = class TTBody {
    constructor(tt) {
        this.tt = tt;
    }
};
TTBody.ctorParameters = () => [
    { type: TreeTable }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pTreeTableBody"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TTBody.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pTreeTableBodyTemplate"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], TTBody.prototype, "template", void 0);
TTBody = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[pTreeTableBody]',
        template: `
        <ng-template ngFor let-serializedNode let-rowIndex="index" [ngForOf]="tt.serializedValue" [ngForTrackBy]="tt.rowTrackBy">
            <ng-container *ngIf="serializedNode.visible">
                <ng-container *ngTemplateOutlet="template; context: {$implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns}"></ng-container>
            </ng-container>
        </ng-template>
        <ng-container *ngIf="tt.isEmpty()">
            <ng-container *ngTemplateOutlet="tt.emptyMessageTemplate; context: {$implicit: columns}"></ng-container>
        </ng-container>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable])
], TTBody);

let TTScrollableView = class TTScrollableView {
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
        this.loadingArray = [];
        this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.alignScrollBar();
                    this.initialized = true;
                    if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                        this.scrollLoadingTableViewChild.nativeElement.style.display = 'none';
                    }
                }, 50);
            });
        });
        if (this.tt.virtualScroll) {
            this.totalRecordsSubscription = this.tt.tableService.totalRecordsSource$.subscribe(() => {
                this.zone.runOutsideAngular(() => {
                    setTimeout(() => {
                        this.setVirtualScrollerHeight();
                    }, 50);
                });
            });
        }
        this.loadingArray = Array(this.tt.rows).fill(1);
        this.initialized = false;
    }
    get scrollHeight() {
        return this._scrollHeight;
    }
    set scrollHeight(val) {
        this._scrollHeight = val;
        this.setScrollHeight();
    }
    ngAfterViewChecked() {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.initialized = true;
        }
    }
    ngAfterViewInit() {
        this.bindEvents();
        this.setScrollHeight();
        this.alignScrollBar();
        if (!this.frozen) {
            if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-treetable-unfrozen-view');
            }
            if (this.tt.frozenWidth) {
                this.el.nativeElement.style.left = this.tt.frozenWidth;
                this.el.nativeElement.style.width = 'calc(100% - ' + this.tt.frozenWidth + ')';
            }
            let frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                this.frozenSiblingBody = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-treetable-scrollable-body');
            }
        }
        else {
            this.scrollBodyViewChild.nativeElement.style.paddingBottom = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth() + 'px';
        }
        if (this.tt.virtualScroll) {
            this.setVirtualScrollerHeight();
            if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                this.scrollLoadingTableViewChild.nativeElement.style.display = 'table';
            }
        }
    }
    bindEvents() {
        this.zone.runOutsideAngular(() => {
            let scrollBarWidth = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth();
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.headerScrollListener = this.onHeaderScroll.bind(this);
                this.scrollHeaderBoxViewChild.nativeElement.addEventListener('scroll', this.headerScrollListener);
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.footerScrollListener = this.onFooterScroll.bind(this);
                this.scrollFooterViewChild.nativeElement.addEventListener('scroll', this.footerScrollListener);
            }
            if (!this.frozen) {
                this.bodyScrollListener = this.onBodyScroll.bind(this);
                this.scrollBodyViewChild.nativeElement.addEventListener('scroll', this.bodyScrollListener);
            }
        });
    }
    unbindEvents() {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
        }
        this.scrollBodyViewChild.nativeElement.addEventListener('scroll', this.bodyScrollListener);
    }
    onHeaderScroll(event) {
        this.scrollHeaderViewChild.nativeElement.scrollLeft = 0;
    }
    onFooterScroll(event) {
        this.scrollFooterViewChild.nativeElement.scrollLeft = 0;
    }
    onBodyScroll(event) {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = this.scrollBodyViewChild.nativeElement.scrollTop;
        }
        if (this.tt.virtualScroll) {
            let viewport = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
            let tableHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement);
            let pageHeight = this.tt.virtualRowHeight * this.tt.rows;
            let virtualTableHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.virtualScrollerViewChild.nativeElement);
            let pageCount = (virtualTableHeight / pageHeight) || 1;
            let scrollBodyTop = this.scrollTableViewChild.nativeElement.style.top || '0';
            if ((this.scrollBodyViewChild.nativeElement.scrollTop + viewport > parseFloat(scrollBodyTop) + tableHeight) || (this.scrollBodyViewChild.nativeElement.scrollTop < parseFloat(scrollBodyTop))) {
                if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                    this.scrollLoadingTableViewChild.nativeElement.style.display = 'table';
                    this.scrollLoadingTableViewChild.nativeElement.style.top = this.scrollBodyViewChild.nativeElement.scrollTop + 'px';
                }
                let page = Math.floor((this.scrollBodyViewChild.nativeElement.scrollTop * pageCount) / (this.scrollBodyViewChild.nativeElement.scrollHeight)) + 1;
                this.tt.handleVirtualScroll({
                    page: page,
                    callback: () => {
                        if (this.scrollLoadingTableViewChild && this.scrollLoadingTableViewChild.nativeElement) {
                            this.scrollLoadingTableViewChild.nativeElement.style.display = 'none';
                        }
                        this.scrollTableViewChild.nativeElement.style.top = ((page - 1) * pageHeight) + 'px';
                        if (this.frozenSiblingBody) {
                            this.frozenSiblingBody.children[0].style.top = this.scrollTableViewChild.nativeElement.style.top;
                        }
                    }
                });
            }
        }
    }
    setScrollHeight() {
        if (this.scrollHeight && this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            if (this.scrollHeight.indexOf('%') !== -1) {
                let relativeHeight;
                this.scrollBodyViewChild.nativeElement.style.visibility = 'hidden';
                this.scrollBodyViewChild.nativeElement.style.height = '100px'; //temporary height to calculate static height
                let containerHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.tt.el.nativeElement.children[0]);
                if (this.scrollHeight.includes("calc")) {
                    let percentHeight = parseInt(this.scrollHeight.slice(this.scrollHeight.indexOf("(") + 1, this.scrollHeight.indexOf("%")));
                    let diffValue = parseInt(this.scrollHeight.slice(this.scrollHeight.indexOf("-") + 1, this.scrollHeight.indexOf(")")));
                    relativeHeight = (_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.tt.el.nativeElement.parentElement) * percentHeight / 100) - diffValue;
                }
                else {
                    relativeHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.tt.el.nativeElement.parentElement) * parseInt(this.scrollHeight) / 100;
                }
                let staticHeight = containerHeight - 100; //total height of headers, footers, paginators
                let scrollBodyHeight = (relativeHeight - staticHeight);
                if (this.frozen) {
                    scrollBodyHeight -= _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth();
                }
                this.scrollBodyViewChild.nativeElement.style.height = 'auto';
                this.scrollBodyViewChild.nativeElement.style.maxHeight = scrollBodyHeight + 'px';
                this.scrollBodyViewChild.nativeElement.style.visibility = 'visible';
            }
            else {
                if (this.frozen)
                    this.scrollBodyViewChild.nativeElement.style.maxHeight = (parseInt(this.scrollHeight) - _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth()) + 'px';
                else
                    this.scrollBodyViewChild.nativeElement.style.maxHeight = this.scrollHeight;
            }
        }
    }
    setVirtualScrollerHeight() {
        if (this.virtualScrollerViewChild.nativeElement) {
            this.virtualScrollerViewChild.nativeElement.style.height = this.tt.totalRecords * this.tt.virtualRowHeight + 'px';
        }
    }
    hasVerticalOverflow() {
        return _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement) > _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
    }
    alignScrollBar() {
        if (!this.frozen) {
            let scrollBarWidth = this.hasVerticalOverflow() ? _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            }
        }
        this.initialized = false;
    }
    ngOnDestroy() {
        this.unbindEvents();
        this.frozenSiblingBody = null;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.totalRecordsSubscription) {
            this.totalRecordsSubscription.unsubscribe();
        }
        this.initialized = false;
    }
};
TTScrollableView.ctorParameters = () => [
    { type: TreeTable },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttScrollableView"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TTScrollableView.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTScrollableView.prototype, "frozen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollHeader', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTScrollableView.prototype, "scrollHeaderViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollHeaderBox', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollBody', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTScrollableView.prototype, "scrollBodyViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollTable', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTScrollableView.prototype, "scrollTableViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loadingTable', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTScrollableView.prototype, "scrollLoadingTableViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollFooter', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTScrollableView.prototype, "scrollFooterViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollFooterBox', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('virtualScroller', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTScrollableView.prototype, "virtualScrollerViewChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], TTScrollableView.prototype, "scrollHeight", null);
TTScrollableView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[ttScrollableView]',
        template: `
        <div #scrollHeader class="ui-treetable-scrollable-header ui-widget-header">
            <div #scrollHeaderBox class="ui-treetable-scrollable-header-box">
                <table class="ui-treetable-scrollable-header-table">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="ui-treetable-thead">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenHeaderTemplate||tt.headerTemplate : tt.headerTemplate; context {$implicit: columns}"></ng-container>
                    </thead>
                </table>
            </div>
        </div>
        <div #scrollBody class="ui-treetable-scrollable-body">
            <table #scrollTable [ngClass]="{'ui-treetable-scrollable-body-table': true, 'ui-treetable-virtual-table': tt.virtualScroll}">
                <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                <tbody class="ui-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="frozen ? tt.frozenBodyTemplate||tt.bodyTemplate : tt.bodyTemplate"></tbody>
            </table>
            <table #loadingTable *ngIf="tt.virtualScroll && tt.loadingBodyTemplate != null" [ngClass]="{'ui-treetable-scrollable-body-table ui-treetable-loading-virtual-table': true, 'ui-treetable-virtual-table': tt.virtualScroll}">
                <tbody class="ui-treetable-tbody">
                    <ng-template ngFor [ngForOf]="loadingArray">
                        <ng-container *ngTemplateOutlet="tt.loadingBodyTemplate; context: {columns: columns}"></ng-container>
                    </ng-template>
                </tbody>
            </table>
            <div #virtualScroller class="ui-treetable-virtual-scroller" *ngIf="tt.virtualScroll"></div>
        </div>
        <div #scrollFooter *ngIf="tt.footerTemplate" class="ui-treetable-scrollable-footer ui-widget-header">
            <div #scrollFooterBox class="ui-treetable-scrollable-footer-box">
                <table class="ui-treetable-scrollable-footer-table">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <tfoot class="ui-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenFooterTemplate||tt.footerTemplate : tt.footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], TTScrollableView);

let TTSortableColumn = class TTSortableColumn {
    constructor(tt) {
        this.tt = tt;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.sortSource$.subscribe(sortMeta => {
                this.updateSortState();
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.updateSortState();
        }
    }
    updateSortState() {
        this.sorted = this.tt.isSorted(this.field);
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.tt.sort({
                originalEvent: event,
                field: this.field
            });
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
    }
    onEnterKey(event) {
        this.onClick(event);
    }
    isEnabled() {
        return this.ttSortableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TTSortableColumn.ctorParameters = () => [
    { type: TreeTable }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttSortableColumn"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TTSortableColumn.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTSortableColumn.prototype, "ttSortableColumnDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTSortableColumn.prototype, "onClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.enter', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTSortableColumn.prototype, "onEnterKey", null);
TTSortableColumn = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ttSortableColumn]',
        host: {
            '[class.ui-sortable-column]': 'isEnabled()',
            '[class.ui-state-highlight]': 'sorted',
            '[attr.tabindex]': 'isEnabled() ? "0" : null'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable])
], TTSortableColumn);

let TTSortIcon = class TTSortIcon {
    constructor(tt) {
        this.tt = tt;
        this.subscription = this.tt.tableService.sortSource$.subscribe(sortMeta => {
            this.updateSortState();
        });
    }
    ngOnInit() {
        this.updateSortState();
    }
    onClick(event) {
        event.preventDefault();
    }
    updateSortState() {
        if (this.tt.sortMode === 'single') {
            this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
        }
        else if (this.tt.sortMode === 'multiple') {
            let sortMeta = this.tt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TTSortIcon.ctorParameters = () => [
    { type: TreeTable }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TTSortIcon.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TTSortIcon.prototype, "ariaLabelDesc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TTSortIcon.prototype, "ariaLabelAsc", void 0);
TTSortIcon = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-treeTableSortIcon',
        template: `
        <i class="ui-sortable-column-icon pi pi-fw" [ngClass]="{'pi-sort-up': sortOrder === 1, 'pi-sort-down': sortOrder === -1, 'pi-sort': sortOrder === 0}"></i>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable])
], TTSortIcon);

let TTResizableColumn = class TTResizableColumn {
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(() => {
                this.resizerMouseDownListener = this.onMouseDown.bind(this);
                this.resizer.addEventListener('mousedown', this.resizerMouseDownListener);
            });
        }
    }
    bindDocumentEvents() {
        this.zone.runOutsideAngular(() => {
            this.documentMouseMoveListener = this.onDocumentMouseMove.bind(this);
            document.addEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseUpListener = this.onDocumentMouseUp.bind(this);
            document.addEventListener('mouseup', this.documentMouseUpListener);
        });
    }
    unbindDocumentEvents() {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
        }
    }
    onMouseDown(event) {
        this.tt.onColumnResizeBegin(event);
        this.bindDocumentEvents();
    }
    onDocumentMouseMove(event) {
        this.tt.onColumnResize(event);
    }
    onDocumentMouseUp(event) {
        this.tt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    }
    isEnabled() {
        return this.ttResizableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    }
};
TTResizableColumn.ctorParameters = () => [
    { type: TreeTable },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTResizableColumn.prototype, "ttResizableColumnDisabled", void 0);
TTResizableColumn = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ttResizableColumn]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], TTResizableColumn);

let TTReorderableColumn = class TTReorderableColumn {
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            this.bindEvents();
        }
    }
    bindEvents() {
        this.zone.runOutsideAngular(() => {
            this.mouseDownListener = this.onMouseDown.bind(this);
            this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
            this.dragStartListener = this.onDragStart.bind(this);
            this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
            this.dragOverListener = this.onDragEnter.bind(this);
            this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
            this.dragEnterListener = this.onDragEnter.bind(this);
            this.el.nativeElement.addEventListener('dragenter', this.dragEnterListener);
            this.dragLeaveListener = this.onDragLeave.bind(this);
            this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
        });
    }
    unbindEvents() {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    }
    onMouseDown(event) {
        if (event.target.nodeName === 'INPUT' || _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-column-resizer'))
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    }
    onDragStart(event) {
        this.tt.onColumnDragStart(event, this.el.nativeElement);
    }
    onDragOver(event) {
        event.preventDefault();
    }
    onDragEnter(event) {
        this.tt.onColumnDragEnter(event, this.el.nativeElement);
    }
    onDragLeave(event) {
        this.tt.onColumnDragLeave(event);
    }
    onDrop(event) {
        if (this.isEnabled()) {
            this.tt.onColumnDrop(event, this.el.nativeElement);
        }
    }
    isEnabled() {
        return this.ttReorderableColumnDisabled !== true;
    }
    ngOnDestroy() {
        this.unbindEvents();
    }
};
TTReorderableColumn.ctorParameters = () => [
    { type: TreeTable },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTReorderableColumn.prototype, "ttReorderableColumnDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTReorderableColumn.prototype, "onDrop", null);
TTReorderableColumn = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ttReorderableColumn]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], TTReorderableColumn);

let TTSelectableRow = class TTSelectableRow {
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.tt.isSelected(this.rowNode.node);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.tt.isSelected(this.rowNode.node);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.tt.handleRowClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
    }
    onEnterKey(event) {
        this.onClick(event);
    }
    onTouchEnd(event) {
        if (this.isEnabled()) {
            this.tt.handleRowTouchEnd(event);
        }
    }
    isEnabled() {
        return this.ttSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TTSelectableRow.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttSelectableRow"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TTSelectableRow.prototype, "rowNode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTSelectableRow.prototype, "ttSelectableRowDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTSelectableRow.prototype, "onClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.enter', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTSelectableRow.prototype, "onEnterKey", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTSelectableRow.prototype, "onTouchEnd", null);
TTSelectableRow = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ttSelectableRow]',
        host: {
            '[class.ui-state-highlight]': 'selected'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, TreeTableService])
], TTSelectableRow);

let TTSelectableRowDblClick = class TTSelectableRowDblClick {
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.tt.isSelected(this.rowNode.node);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.tt.isSelected(this.rowNode.node);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.tt.handleRowClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
    }
    isEnabled() {
        return this.ttSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TTSelectableRowDblClick.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttSelectableRowDblClick"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TTSelectableRowDblClick.prototype, "rowNode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTSelectableRowDblClick.prototype, "ttSelectableRowDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dblclick', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTSelectableRowDblClick.prototype, "onClick", null);
TTSelectableRowDblClick = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ttSelectableRowDblClick]',
        host: {
            '[class.ui-state-highlight]': 'selected'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, TreeTableService])
], TTSelectableRowDblClick);

let TTContextMenuRow = class TTContextMenuRow {
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.contextMenuSource$.subscribe((node) => {
                this.selected = this.tt.equals(this.rowNode.node, node);
            });
        }
    }
    onContextMenu(event) {
        if (this.isEnabled()) {
            this.tt.handleRowRightClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
            event.preventDefault();
        }
    }
    isEnabled() {
        return this.ttContextMenuRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TTContextMenuRow.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttContextMenuRow"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TTContextMenuRow.prototype, "rowNode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTContextMenuRow.prototype, "ttContextMenuRowDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTContextMenuRow.prototype, "onContextMenu", null);
TTContextMenuRow = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ttContextMenuRow]',
        host: {
            '[class.ui-contextmenu-selected]': 'selected'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, TreeTableService])
], TTContextMenuRow);

let TTCheckbox = class TTCheckbox {
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.tt.isSelected(this.rowNode.node);
        });
    }
    ngOnInit() {
        this.checked = this.tt.isSelected(this.rowNode.node);
    }
    onClick(event) {
        if (!this.disabled) {
            this.tt.toggleNodeWithCheckbox({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
    }
    onFocus() {
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    onBlur() {
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TTCheckbox.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTCheckbox.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("value"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TTCheckbox.prototype, "rowNode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('box', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTCheckbox.prototype, "boxViewChild", void 0);
TTCheckbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-treeTableCheckbox',
        template: `
        <div class="ui-chkbox ui-treetable-chkbox ui-widget" (click)="onClick($event)">
            <div class="ui-helper-hidden-accessible">
                <input type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()">
            </div>
            <div #box [ngClass]="{'ui-chkbox-box ui-widget ui-state-default':true,
                'ui-state-active':checked, 'ui-state-disabled':disabled}">
                <span class="ui-chkbox-icon ui-clickable pi" [ngClass]="{'pi-check':checked, 'pi-minus': rowNode.node.partialSelected}"></span>
            </div>
        </div>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, TreeTableService])
], TTCheckbox);

let TTHeaderCheckbox = class TTHeaderCheckbox {
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
        this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
    }
    ngOnInit() {
        this.checked = this.updateCheckedState();
    }
    onClick(event, checked) {
        if (this.tt.value && this.tt.value.length > 0) {
            this.tt.toggleNodesWithCheckbox(event, !checked);
        }
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
    }
    onFocus() {
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    onBlur() {
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    }
    ngOnDestroy() {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }
    updateCheckedState() {
        let checked;
        const data = this.tt.filteredNodes || this.tt.value;
        if (data) {
            for (let node of data) {
                if (this.tt.isSelected(node)) {
                    checked = true;
                }
                else {
                    checked = false;
                    break;
                }
            }
        }
        else {
            checked = false;
        }
        return checked;
    }
};
TTHeaderCheckbox.ctorParameters = () => [
    { type: TreeTable },
    { type: TreeTableService }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('box', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TTHeaderCheckbox.prototype, "boxViewChild", void 0);
TTHeaderCheckbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-treeTableHeaderCheckbox',
        template: `
        <div class="ui-chkbox ui-treetable-header-chkbox ui-widget" (click)="onClick($event, cb.checked)">
            <div class="ui-helper-hidden-accessible">
                <input #cb type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="!tt.value||tt.value.length === 0">
            </div>
            <div #box [ngClass]="{'ui-chkbox-box ui-widget ui-state-default':true,
                'ui-state-active':checked, 'ui-state-disabled': (!tt.value || tt.value.length === 0)}">
                <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'pi pi-check':checked}"></span>
            </div>
        </div>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, TreeTableService])
], TTHeaderCheckbox);

let TTEditableColumn = class TTEditableColumn {
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editable-column');
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.tt.editingCellClick = true;
            if (this.tt.editingCell) {
                if (this.tt.editingCell !== this.el.nativeElement) {
                    if (!this.tt.isEditingCellValid()) {
                        return;
                    }
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.tt.editingCell, 'ui-editing-cell');
                    this.openCell();
                }
            }
            else {
                this.openCell();
            }
        }
    }
    openCell() {
        this.tt.updateEditingCell(this.el.nativeElement);
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editing-cell');
        this.tt.onEditInit.emit({ field: this.field, data: this.data });
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                let focusable = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.el.nativeElement, 'input, textarea');
                if (focusable) {
                    focusable.focus();
                }
            }, 50);
        });
    }
    closeEditingCell() {
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.tt.editingCell, 'ui-editing-cell');
        this.tt.editingCell = null;
        this.tt.unbindDocumentEditListener();
    }
    onKeyDown(event) {
        if (this.isEnabled()) {
            //enter
            if (event.keyCode == 13) {
                if (this.tt.isEditingCellValid()) {
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.tt.editingCell, 'ui-editing-cell');
                    this.closeEditingCell();
                    this.tt.onEditComplete.emit({ field: this.field, data: this.data });
                }
                event.preventDefault();
            }
            //escape
            else if (event.keyCode == 27) {
                if (this.tt.isEditingCellValid()) {
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.tt.editingCell, 'ui-editing-cell');
                    this.closeEditingCell();
                    this.tt.onEditCancel.emit({ field: this.field, data: this.data });
                }
                event.preventDefault();
            }
            //tab
            else if (event.keyCode == 9) {
                this.tt.onEditComplete.emit({ field: this.field, data: this.data });
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else
                    this.moveToNextCell(event);
            }
        }
    }
    findCell(element) {
        if (element) {
            let cell = element;
            while (cell && !_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(cell, 'ui-editing-cell')) {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    }
    moveToPreviousCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    moveToNextCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    findPreviousEditableColumn(cell) {
        let prevCell = cell.previousElementSibling;
        if (!prevCell) {
            let previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (prevCell) {
            if (_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevCell, 'ui-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    }
    findNextEditableColumn(cell) {
        let nextCell = cell.nextElementSibling;
        if (!nextCell) {
            let nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (nextCell) {
            if (_dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextCell, 'ui-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    }
    isEnabled() {
        return this.ttEditableColumnDisabled !== true;
    }
};
TTEditableColumn.ctorParameters = () => [
    { type: TreeTable },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttEditableColumn"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TTEditableColumn.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttEditableColumnField"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TTEditableColumn.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], TTEditableColumn.prototype, "ttEditableColumnDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTEditableColumn.prototype, "onClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTEditableColumn.prototype, "onKeyDown", null);
TTEditableColumn = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ttEditableColumn]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], TTEditableColumn);

let TreeTableCellEditor = class TreeTableCellEditor {
    constructor(tt, editableColumn) {
        this.tt = tt;
        this.editableColumn = editableColumn;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'input':
                    this.inputTemplate = item.template;
                    break;
                case 'output':
                    this.outputTemplate = item.template;
                    break;
            }
        });
    }
};
TreeTableCellEditor.ctorParameters = () => [
    { type: TreeTable },
    { type: TTEditableColumn }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], TreeTableCellEditor.prototype, "templates", void 0);
TreeTableCellEditor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-treeTableCellEditor',
        template: `
        <ng-container *ngIf="tt.editingCell === editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, TTEditableColumn])
], TreeTableCellEditor);

let TTRow = class TTRow {
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    onKeyDown(event) {
        switch (event.which) {
            //down arrow
            case 40:
                let nextRow = this.el.nativeElement.nextElementSibling;
                if (nextRow) {
                    nextRow.focus();
                }
                event.preventDefault();
                break;
            //down arrow
            case 38:
                let prevRow = this.el.nativeElement.previousElementSibling;
                if (prevRow) {
                    prevRow.focus();
                }
                event.preventDefault();
                break;
            //left arrow
            case 37:
                if (this.rowNode.node.expanded) {
                    this.tt.toggleRowIndex = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(this.el.nativeElement);
                    this.rowNode.node.expanded = false;
                    this.tt.onNodeCollapse.emit({
                        originalEvent: event,
                        node: this.rowNode.node
                    });
                    this.tt.updateSerializedValue();
                    this.tt.tableService.onUIUpdate(this.tt.value);
                    this.restoreFocus();
                }
                break;
            //right arrow
            case 39:
                if (!this.rowNode.node.expanded) {
                    this.tt.toggleRowIndex = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(this.el.nativeElement);
                    this.rowNode.node.expanded = true;
                    this.tt.onNodeExpand.emit({
                        originalEvent: event,
                        node: this.rowNode.node
                    });
                    this.tt.updateSerializedValue();
                    this.tt.tableService.onUIUpdate(this.tt.value);
                    this.restoreFocus();
                }
                break;
        }
    }
    restoreFocus() {
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                let row = _dom_domhandler__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.tt.containerViewChild.nativeElement, '.ui-treetable-tbody').children[this.tt.toggleRowIndex];
                if (row) {
                    row.focus();
                }
            }, 25);
        });
    }
};
TTRow.ctorParameters = () => [
    { type: TreeTable },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ttRow'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TTRow.prototype, "rowNode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], TTRow.prototype, "onKeyDown", null);
TTRow = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ttRow]',
        host: {
            '[attr.tabindex]': '"0"'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], TTRow);

let TreeTableToggler = class TreeTableToggler {
    constructor(tt) {
        this.tt = tt;
    }
    onClick(event) {
        this.rowNode.node.expanded = !this.rowNode.node.expanded;
        if (this.rowNode.node.expanded) {
            this.tt.onNodeExpand.emit({
                originalEvent: event,
                node: this.rowNode.node
            });
        }
        else {
            this.tt.onNodeCollapse.emit({
                originalEvent: event,
                node: this.rowNode.node
            });
        }
        this.tt.updateSerializedValue();
        this.tt.tableService.onUIUpdate(this.tt.value);
        event.preventDefault();
    }
};
TreeTableToggler.ctorParameters = () => [
    { type: TreeTable }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TreeTableToggler.prototype, "rowNode", void 0);
TreeTableToggler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-treeTableToggler',
        template: `
        <a class="ui-treetable-toggler ui-unselectable-text" *ngIf="rowNode.node.leaf === false || rowNode.level !== 0 || rowNode.node.children && rowNode.node.children.length" (click)="onClick($event)"
            [style.visibility]="rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'" [style.marginLeft]="rowNode.level * 16 + 'px'">
            <i [ngClass]="rowNode.node.expanded ? 'pi pi-fw pi-chevron-down' : 'pi pi-fw pi-chevron-right'"></i>
        </a>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeTable])
], TreeTableToggler);

let TreeTableModule = class TreeTableModule {
};
TreeTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _paginator_paginator__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"]],
        exports: [TreeTable, _common_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor],
        declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor]
    })
], TreeTableModule);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablecolgroupdemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablecolgroupdemo.ts ***!
  \************************************************************************/
/*! exports provided: TreeTableColGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableColGroupDemo", function() { return TreeTableColGroupDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TreeTableColGroupDemo = class TreeTableColGroupDemo {
    ngOnInit() {
        this.sales = [
            {
                data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
                expanded: true,
                children: [
                    {
                        data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
                        expanded: true,
                        children: [
                            {
                                data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' },
                            },
                            {
                                data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' },
                            }
                        ]
                    },
                    {
                        data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' },
                    }
                ]
            },
            {
                data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
                children: [
                    {
                        data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' },
                    },
                    {
                        data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' },
                    }
                ]
            },
            {
                data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
                children: [
                    {
                        data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' },
                    },
                    {
                        data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                    }
                ]
            },
            {
                data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
                children: [
                    {
                        data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' },
                    },
                    {
                        data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' },
                    }
                ]
            },
            {
                data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
                children: [
                    {
                        data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' },
                    },
                    {
                        data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' },
                    }
                ]
            },
            {
                data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
                children: [
                    {
                        data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' },
                    },
                    {
                        data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' },
                    }
                ]
            },
            {
                data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
                children: [
                    {
                        data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' },
                    },
                    {
                        data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' },
                    }
                ]
            },
            {
                data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
                children: [
                    {
                        data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' },
                    },
                    {
                        data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' },
                    }
                ]
            },
            {
                data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
                children: [
                    {
                        data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' },
                    },
                    {
                        data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' },
                    }
                ]
            },
            {
                data: { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
                children: [
                    {
                        data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' },
                    },
                    {
                        data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' },
                    }
                ]
            }
        ];
    }
    ;
};
TreeTableColGroupDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablecolgroupdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablecolgroupdemo.html")
    })
], TreeTableColGroupDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablecolresizedemo.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablecolresizedemo.ts ***!
  \*************************************************************************/
/*! exports provided: TreeTableColResizeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableColResizeDemo", function() { return TreeTableColResizeDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableColResizeDemo = class TreeTableColResizeDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFilesystem().then(files => this.files3 = files);
        this.nodeService.getFilesystem().then(files => this.files4 = files);
        this.cols = [
            { field: 'name', header: 'Name', width: '50%' },
            { field: 'size', header: 'Size', width: '30%' },
            { field: 'type', header: 'Type', width: '20%' }
        ];
    }
};
TreeTableColResizeDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableColResizeDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablecolresizedemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablecolresizedemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableColResizeDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablecoltoggledemo.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablecoltoggledemo.ts ***!
  \*************************************************************************/
/*! exports provided: TreeTableColToggleDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableColToggleDemo", function() { return TreeTableColToggleDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableColToggleDemo = class TreeTableColToggleDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        this.selectedColumns = this.cols;
    }
};
TreeTableColToggleDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableColToggleDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablecoltoggledemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablecoltoggledemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableColToggleDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablecontextmenudemo.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablecontextmenudemo.ts ***!
  \***************************************************************************/
/*! exports provided: TreeTableContextMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableContextMenuDemo", function() { return TreeTableContextMenuDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");




let TreeTableContextMenuDemo = class TreeTableContextMenuDemo {
    constructor(nodeService, messageService) {
        this.nodeService = nodeService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        this.items = [
            { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
            { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) }
        ];
    }
    viewFile(node) {
        this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.data.name + ' - ' + node.data.size });
    }
    toggleFile(node) {
        node.expanded = !node.expanded;
        this.files = [...this.files];
    }
};
TreeTableContextMenuDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] },
    { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
TreeTableContextMenuDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablecontextmenudemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablecontextmenudemo.html"),
        providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"], _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], TreeTableContextMenuDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetabledemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetabledemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TreeTableDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableDemoRoutingModule", function() { return TreeTableDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _treetabledemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treetabledemo */ "./src/app/showcase/components/treetable/treetabledemo.ts");
/* harmony import */ var _treetablepagedemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./treetablepagedemo */ "./src/app/showcase/components/treetable/treetablepagedemo.ts");
/* harmony import */ var _treetablesortdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treetablesortdemo */ "./src/app/showcase/components/treetable/treetablesortdemo.ts");
/* harmony import */ var _treetableselectiondemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treetableselectiondemo */ "./src/app/showcase/components/treetable/treetableselectiondemo.ts");
/* harmony import */ var _treetablesectionsdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./treetablesectionsdemo */ "./src/app/showcase/components/treetable/treetablesectionsdemo.ts");
/* harmony import */ var _treetablestyledemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treetablestyledemo */ "./src/app/showcase/components/treetable/treetablestyledemo.ts");
/* harmony import */ var _treetablelazydemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treetablelazydemo */ "./src/app/showcase/components/treetable/treetablelazydemo.ts");
/* harmony import */ var _treetablecolgroupdemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./treetablecolgroupdemo */ "./src/app/showcase/components/treetable/treetablecolgroupdemo.ts");
/* harmony import */ var _treetablescrolldemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./treetablescrolldemo */ "./src/app/showcase/components/treetable/treetablescrolldemo.ts");
/* harmony import */ var _treetablecoltoggledemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treetablecoltoggledemo */ "./src/app/showcase/components/treetable/treetablecoltoggledemo.ts");
/* harmony import */ var _treetableresponsivedemo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./treetableresponsivedemo */ "./src/app/showcase/components/treetable/treetableresponsivedemo.ts");
/* harmony import */ var _treetablecontextmenudemo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./treetablecontextmenudemo */ "./src/app/showcase/components/treetable/treetablecontextmenudemo.ts");
/* harmony import */ var _treetablecolresizedemo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./treetablecolresizedemo */ "./src/app/showcase/components/treetable/treetablecolresizedemo.ts");
/* harmony import */ var _treetablereorderdemo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./treetablereorderdemo */ "./src/app/showcase/components/treetable/treetablereorderdemo.ts");
/* harmony import */ var _treetableeditdemo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./treetableeditdemo */ "./src/app/showcase/components/treetable/treetableeditdemo.ts");
/* harmony import */ var _treetablefilterdemo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./treetablefilterdemo */ "./src/app/showcase/components/treetable/treetablefilterdemo.ts");



















let TreeTableDemoRoutingModule = class TreeTableDemoRoutingModule {
};
TreeTableDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _treetabledemo__WEBPACK_IMPORTED_MODULE_3__["TreeTableDemo"] },
                { path: 'page', component: _treetablepagedemo__WEBPACK_IMPORTED_MODULE_4__["TreeTablePageDemo"] },
                { path: 'sort', component: _treetablesortdemo__WEBPACK_IMPORTED_MODULE_5__["TreeTableSortDemo"] },
                { path: 'selection', component: _treetableselectiondemo__WEBPACK_IMPORTED_MODULE_6__["TreeTableSelectionDemo"] },
                { path: 'sections', component: _treetablesectionsdemo__WEBPACK_IMPORTED_MODULE_7__["TreeTableSectionsDemo"] },
                { path: 'style', component: _treetablestyledemo__WEBPACK_IMPORTED_MODULE_8__["TreeTableStyleDemo"] },
                { path: 'lazy', component: _treetablelazydemo__WEBPACK_IMPORTED_MODULE_9__["TreeTableLazyDemo"] },
                { path: 'colgroup', component: _treetablecolgroupdemo__WEBPACK_IMPORTED_MODULE_10__["TreeTableColGroupDemo"] },
                { path: 'scroll', component: _treetablescrolldemo__WEBPACK_IMPORTED_MODULE_11__["TreeTableScrollDemo"] },
                { path: 'coltoggle', component: _treetablecoltoggledemo__WEBPACK_IMPORTED_MODULE_12__["TreeTableColToggleDemo"] },
                { path: 'responsive', component: _treetableresponsivedemo__WEBPACK_IMPORTED_MODULE_13__["TreeTableResponsiveDemo"] },
                { path: 'contextmenu', component: _treetablecontextmenudemo__WEBPACK_IMPORTED_MODULE_14__["TreeTableContextMenuDemo"] },
                { path: 'colresize', component: _treetablecolresizedemo__WEBPACK_IMPORTED_MODULE_15__["TreeTableColResizeDemo"] },
                { path: 'reorder', component: _treetablereorderdemo__WEBPACK_IMPORTED_MODULE_16__["TreeTableReorderDemo"] },
                { path: 'edit', component: _treetableeditdemo__WEBPACK_IMPORTED_MODULE_17__["TreeTableEditDemo"] },
                { path: 'filter', component: _treetablefilterdemo__WEBPACK_IMPORTED_MODULE_18__["TreeTableFilterDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], TreeTableDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetabledemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetabledemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: TreeTableDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableDemoModule", function() { return TreeTableDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _treetabledemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./treetabledemo */ "./src/app/showcase/components/treetable/treetabledemo.ts");
/* harmony import */ var _treetabledemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treetabledemo-routing.module */ "./src/app/showcase/components/treetable/treetabledemo-routing.module.ts");
/* harmony import */ var _components_treetable_treetable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/treetable/treetable */ "./src/app/components/treetable/treetable.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_multiselect_multiselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/multiselect/multiselect */ "./src/app/components/multiselect/multiselect.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/contextmenu/contextmenu */ "./src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony import */ var _treetablesubmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./treetablesubmenu */ "./src/app/showcase/components/treetable/treetablesubmenu.ts");
/* harmony import */ var _treetablepagedemo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./treetablepagedemo */ "./src/app/showcase/components/treetable/treetablepagedemo.ts");
/* harmony import */ var _treetablesortdemo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./treetablesortdemo */ "./src/app/showcase/components/treetable/treetablesortdemo.ts");
/* harmony import */ var _treetableselectiondemo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./treetableselectiondemo */ "./src/app/showcase/components/treetable/treetableselectiondemo.ts");
/* harmony import */ var _treetablesectionsdemo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./treetablesectionsdemo */ "./src/app/showcase/components/treetable/treetablesectionsdemo.ts");
/* harmony import */ var _treetablestyledemo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./treetablestyledemo */ "./src/app/showcase/components/treetable/treetablestyledemo.ts");
/* harmony import */ var _treetablelazydemo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./treetablelazydemo */ "./src/app/showcase/components/treetable/treetablelazydemo.ts");
/* harmony import */ var _treetablecolgroupdemo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./treetablecolgroupdemo */ "./src/app/showcase/components/treetable/treetablecolgroupdemo.ts");
/* harmony import */ var _treetablescrolldemo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./treetablescrolldemo */ "./src/app/showcase/components/treetable/treetablescrolldemo.ts");
/* harmony import */ var _treetablecoltoggledemo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./treetablecoltoggledemo */ "./src/app/showcase/components/treetable/treetablecoltoggledemo.ts");
/* harmony import */ var _treetableresponsivedemo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./treetableresponsivedemo */ "./src/app/showcase/components/treetable/treetableresponsivedemo.ts");
/* harmony import */ var _treetablecontextmenudemo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./treetablecontextmenudemo */ "./src/app/showcase/components/treetable/treetablecontextmenudemo.ts");
/* harmony import */ var _treetablecolresizedemo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./treetablecolresizedemo */ "./src/app/showcase/components/treetable/treetablecolresizedemo.ts");
/* harmony import */ var _treetablereorderdemo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./treetablereorderdemo */ "./src/app/showcase/components/treetable/treetablereorderdemo.ts");
/* harmony import */ var _treetableeditdemo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./treetableeditdemo */ "./src/app/showcase/components/treetable/treetableeditdemo.ts");
/* harmony import */ var _treetablefilterdemo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./treetablefilterdemo */ "./src/app/showcase/components/treetable/treetablefilterdemo.ts");





























let TreeTableDemoModule = class TreeTableDemoModule {
};
TreeTableDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _treetabledemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeTableDemoRoutingModule"],
            _components_treetable_treetable__WEBPACK_IMPORTED_MODULE_6__["TreeTableModule"],
            _components_toast_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            _components_multiselect_multiselect__WEBPACK_IMPORTED_MODULE_9__["MultiSelectModule"],
            _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
            _components_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11__["ContextMenuModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_12__["CodeHighlighterModule"]
        ],
        declarations: [
            _treetabledemo__WEBPACK_IMPORTED_MODULE_4__["TreeTableDemo"],
            _treetablepagedemo__WEBPACK_IMPORTED_MODULE_14__["TreeTablePageDemo"],
            _treetablesortdemo__WEBPACK_IMPORTED_MODULE_15__["TreeTableSortDemo"],
            _treetableselectiondemo__WEBPACK_IMPORTED_MODULE_16__["TreeTableSelectionDemo"],
            _treetablesectionsdemo__WEBPACK_IMPORTED_MODULE_17__["TreeTableSectionsDemo"],
            _treetablestyledemo__WEBPACK_IMPORTED_MODULE_18__["TreeTableStyleDemo"],
            _treetablelazydemo__WEBPACK_IMPORTED_MODULE_19__["TreeTableLazyDemo"],
            _treetablecolgroupdemo__WEBPACK_IMPORTED_MODULE_20__["TreeTableColGroupDemo"],
            _treetablescrolldemo__WEBPACK_IMPORTED_MODULE_21__["TreeTableScrollDemo"],
            _treetablecoltoggledemo__WEBPACK_IMPORTED_MODULE_22__["TreeTableColToggleDemo"],
            _treetableresponsivedemo__WEBPACK_IMPORTED_MODULE_23__["TreeTableResponsiveDemo"],
            _treetablecontextmenudemo__WEBPACK_IMPORTED_MODULE_24__["TreeTableContextMenuDemo"],
            _treetablecolresizedemo__WEBPACK_IMPORTED_MODULE_25__["TreeTableColResizeDemo"],
            _treetablereorderdemo__WEBPACK_IMPORTED_MODULE_26__["TreeTableReorderDemo"],
            _treetableeditdemo__WEBPACK_IMPORTED_MODULE_27__["TreeTableEditDemo"],
            _treetablefilterdemo__WEBPACK_IMPORTED_MODULE_28__["TreeTableFilterDemo"],
            _treetablesubmenu__WEBPACK_IMPORTED_MODULE_13__["TreeTableSubmenu"]
        ]
    })
], TreeTableDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetabledemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetabledemo.ts ***!
  \****************************************************************/
/*! exports provided: TreeTableDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableDemo", function() { return TreeTableDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableDemo = class TreeTableDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTableDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetabledemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetabledemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetableeditdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetableeditdemo.ts ***!
  \********************************************************************/
/*! exports provided: TreeTableEditDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableEditDemo", function() { return TreeTableEditDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableEditDemo = class TreeTableEditDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTableEditDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableEditDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetableeditdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetableeditdemo.html"),
        styles: ["\n        :host ::ng-deep .ui-editing-cell {\n            padding: 0 !important;\n        }\n\n        :host ::ng-deep .ui-toggler-column.ui-editing-cell {\n            padding-left: 0.857em !important;\n        }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableEditDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablefilterdemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablefilterdemo.ts ***!
  \**********************************************************************/
/*! exports provided: TreeTableFilterDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableFilterDemo", function() { return TreeTableFilterDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableFilterDemo = class TreeTableFilterDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTableFilterDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableFilterDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablefilterdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablefilterdemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableFilterDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablelazydemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablelazydemo.ts ***!
  \********************************************************************/
/*! exports provided: TreeTableLazyDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableLazyDemo", function() { return TreeTableLazyDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableLazyDemo = class TreeTableLazyDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        //in a production application, retrieve the logical number of rows from a remote datasource
        this.totalRecords = 1000;
        this.loading = true;
    }
    loadNodes(event) {
        this.loading = true;
        //in a production application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(() => {
            this.loading = false;
            this.files = [];
            for (let i = 0; i < event.rows; i++) {
                let node = {
                    data: {
                        name: 'Item ' + (event.first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (event.first + i)
                    },
                    leaf: false
                };
                this.files.push(node);
            }
        }, 1000);
    }
    onNodeExpand(event) {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            const node = event.node;
            node.children = [
                {
                    data: {
                        name: node.data.name + ' - 0',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    },
                },
                {
                    data: {
                        name: node.data.name + ' - 1',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    }
                }
            ];
            this.files = [...this.files];
        }, 250);
    }
};
TreeTableLazyDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableLazyDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablelazydemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablelazydemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableLazyDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablepagedemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablepagedemo.ts ***!
  \********************************************************************/
/*! exports provided: TreeTablePageDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTablePageDemo", function() { return TreeTablePageDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTablePageDemo = class TreeTablePageDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };
            this.files.push(node);
        }
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTablePageDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTablePageDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablepagedemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablepagedemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTablePageDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablereorderdemo.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablereorderdemo.ts ***!
  \***********************************************************************/
/*! exports provided: TreeTableReorderDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableReorderDemo", function() { return TreeTableReorderDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableReorderDemo = class TreeTableReorderDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTableReorderDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableReorderDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablereorderdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablereorderdemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableReorderDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetableresponsivedemo.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetableresponsivedemo.ts ***!
  \**************************************************************************/
/*! exports provided: TreeTableResponsiveDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableResponsiveDemo", function() { return TreeTableResponsiveDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableResponsiveDemo = class TreeTableResponsiveDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTableResponsiveDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableResponsiveDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetableresponsivedemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetableresponsivedemo.html"),
        styles: ["\n        :host ::ng-deep .priority-2, \n        :host ::ng-deep .priority-3,\n        :host ::ng-deep .visibility-sm {\n            display: none;\n        }\n\n        @media screen and (max-width: 39.938em) {\n            :host ::ng-deep .visibility-sm {\n                display: inline;\n            }\n        }\n\n        @media screen and (min-width: 40em) {\n            :host ::ng-deep .priority-2 {\n                display: table-cell;\n            }\n        }\n\n        @media screen and (min-width: 64em) {\n            :host ::ng-deep .priority-3 {\n                display: table-cell;\n            }\n        }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableResponsiveDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablescrolldemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablescrolldemo.ts ***!
  \**********************************************************************/
/*! exports provided: TreeTableScrollDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableScrollDemo", function() { return TreeTableScrollDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableScrollDemo = class TreeTableScrollDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFilesystem().then(files => this.files3 = files);
        this.nodeService.getFilesystem().then(files => this.files4 = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        this.scrollableCols = [
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        this.frozenCols = [
            { field: 'name', header: 'Name' }
        ];
        //in a production application, retrieve the logical number of rows from a remote datasource
        this.totalRecords = 250000;
        this.showLoader = false;
    }
    loadNodes(event) {
        //in a production application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(() => {
            this.virtualFiles = [];
            //last chunk
            if (event.first === 249980)
                this.createLazyNodes(event.first, 20);
            else
                this.createLazyNodes(event.first, event.rows);
        }, 250);
    }
    createLazyNodes(index, length) {
        for (let i = 0; i < length; i++) {
            let node = {
                data: {
                    name: 'Item ' + (index + i),
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + (index + i)
                },
                leaf: false
            };
            this.virtualFiles.push(node);
        }
    }
    onNodeExpand(event) {
        this.showLoader = true;
        setTimeout(() => {
            this.showLoader = false;
            const node = event.node;
            node.children = [
                {
                    data: {
                        name: node.data.name + ' - 0',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    },
                },
                {
                    data: {
                        name: node.data.name + ' - 1',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    }
                }
            ];
            this.virtualFiles = [...this.virtualFiles];
        }, 250);
    }
};
TreeTableScrollDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableScrollDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablescrolldemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablescrolldemo.html"),
        styles: ["\n        .loading-text {\n            display: block;\n            background-color: #f1f1f1;\n            min-height: 19px;\n            animation: pulse 1s infinite ease-in-out;\n            text-indent: -99999px;\n            overflow: hidden;\n        }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableScrollDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablesectionsdemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablesectionsdemo.ts ***!
  \************************************************************************/
/*! exports provided: TreeTableSectionsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableSectionsDemo", function() { return TreeTableSectionsDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableSectionsDemo = class TreeTableSectionsDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTableSectionsDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableSectionsDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablesectionsdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablesectionsdemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableSectionsDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetableselectiondemo.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetableselectiondemo.ts ***!
  \*************************************************************************/
/*! exports provided: TreeTableSelectionDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableSelectionDemo", function() { return TreeTableSelectionDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");




let TreeTableSelectionDemo = class TreeTableSelectionDemo {
    constructor(nodeService, messageService) {
        this.nodeService = nodeService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFilesystem().then(files => this.files3 = files);
        this.nodeService.getFilesystem().then(files => this.files4 = files);
        this.nodeService.getFilesystem().then(files => this.files5 = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
    nodeSelect(event) {
        this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }
    nodeUnselect(event) {
        this.messageService.add({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }
};
TreeTableSelectionDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] },
    { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
TreeTableSelectionDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetableselectiondemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetableselectiondemo.html"),
        providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"], _components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], TreeTableSelectionDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablesortdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablesortdemo.ts ***!
  \********************************************************************/
/*! exports provided: TreeTableSortDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableSortDemo", function() { return TreeTableSortDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableSortDemo = class TreeTableSortDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => {
            this.files2 = files;
            this.files2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });
        });
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTableSortDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableSortDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablesortdemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablesortdemo.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableSortDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablestyledemo.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablestyledemo.ts ***!
  \*********************************************************************/
/*! exports provided: TreeTableStyleDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableStyleDemo", function() { return TreeTableStyleDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");



let TreeTableStyleDemo = class TreeTableStyleDemo {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
};
TreeTableStyleDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }
];
TreeTableStyleDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treetablestyledemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/treetable/treetablestyledemo.html"),
        styles: ["\n        .kb-row {\n            background-color: #1CA979 !important;\n            color: #ffffff !important;\n        }\n\n        .kb-cell {\n            background-color: #2CA8B1 !important;\n            color: #ffffff !important;\n        }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
], TreeTableStyleDemo);



/***/ }),

/***/ "./src/app/showcase/components/treetable/treetablesubmenu.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/treetable/treetablesubmenu.ts ***!
  \*******************************************************************/
/*! exports provided: TreeTableSubmenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableSubmenu", function() { return TreeTableSubmenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TreeTableSubmenu = class TreeTableSubmenu {
};
TreeTableSubmenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'treetable-submenu',
        template: `
        <div class="content-section content-submenu ui-helper-clearfix">
            <ul>
                <li><a [routerLink]="['/treetable']">&#9679; Documentation</a></li>
                <li><a [routerLink]="['/treetable/sections']">&#9679; Sections</a></li>
                <li><a [routerLink]="['/treetable/page']">&#9679; Page</a></li>
                <li><a [routerLink]="['/treetable/sort']">&#9679; Sort</a></li>
                <li><a [routerLink]="['/treetable/selection']">&#9679; Selection</a></li>
                <li><a [routerLink]="['/treetable/colgroup']">&#9679; ColGroup</a></li>
                <li><a [routerLink]="['/treetable/lazy']">&#9679; Lazy</a></li>
                <li><a [routerLink]="['/treetable/edit']">&#9679; Edit</a></li>
                <li><a [routerLink]="['/treetable/scroll']">&#9679; Scroll</a></li>
                <li><a [routerLink]="['/treetable/colresize']">&#9679; Resize</a></li>
                <li><a [routerLink]="['/treetable/reorder']">&#9679; Reorder</a></li>
                <li><a [routerLink]="['/treetable/coltoggle']">&#9679; Toggle</a></li>
                <li><a [routerLink]="['/treetable/style']">&#9679; Style</a></li>
                <li><a [routerLink]="['/treetable/contextmenu']">&#9679; ContextMenu</a></li>
                <li><a [routerLink]="['/treetable/responsive']">&#9679; Responsive</a></li>
                <li><a [routerLink]="['/treetable/filter']">&#9679; Filter</a></li>
            </ul>
        </div>
    `
    })
], TreeTableSubmenu);



/***/ })

}]);
//# sourceMappingURL=components-treetable-treetabledemo-module-es2015.js.map