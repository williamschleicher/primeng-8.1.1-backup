(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tree-treedemo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/tree/treedemo.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/tree/treedemo.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Tree</span>\r\n        <span>Tree is used to display hierarchical data.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-tree [value]=\"filesTree0\"></p-tree>\r\n\r\n    <h3>Loader</h3>\r\n    <p-tree [value]=\"filesTree1\" [loading]=\"loading\"></p-tree>\r\n\r\n    <h3>Single Selection</h3>\r\n    <p-tree [value]=\"filesTree2\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"></p-tree>\r\n    <div style=\"margin-top:8px\">Selected Node: {{selectedFile ? selectedFile.label : 'none'}}</div>\r\n\r\n    <h3>Multiple Selection with Metakey</h3>\r\n    <p-tree [value]=\"filesTree3\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\"\r\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"></p-tree>\r\n    <div>Selected Nodes: <span *ngFor=\"let file of selectedFiles\">{{file.label}}</span></div>\r\n\r\n    <h3>Multiple Selection with Checkbox</h3>\r\n    <p-tree [value]=\"filesTree4\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\"></p-tree>\r\n    <div>Selected Nodes: <span *ngFor=\"let file of selectedFiles2\">{{file.label}}</span></div>\r\n\r\n    <h3>Lazy Loading</h3>\r\n    <p-tree [value]=\"lazyFiles\" (onNodeExpand)=\"nodeExpand($event)\" [style]=\"{'max-height':'200px','overflow':'auto'}\"></p-tree>\r\n\r\n    <h3>Template</h3>\r\n    <p-tree [value]=\"filesTree5\">\r\n        <ng-template let-node pTemplate=\"default\">\r\n            <input [(ngModel)]=\"node.label\" type=\"text\" style=\"width:100%\" class=\"ui-inputtext\">\r\n        </ng-template>\r\n    </p-tree>\r\n\r\n    <h3>Context Menu</h3>\r\n    <p-tree [value]=\"filesTree6\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [contextMenu]=\"cm\"></p-tree>\r\n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n\r\n    <h3>DragDrop</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <h4>Files</h4>\r\n            <p-tree [value]=\"filesTree7\" draggableNodes=\"true\" droppableNodes=\"true\" droppableScope=\"files\" draggableScope=\"server2\" ></p-tree>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-md-1\" style=\"text-align:center\">\r\n            <i class=\"fa fa-exchange\" style=\"font-size:36px;margin-top: 28px;\"></i>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <h4>Server 1</h4>\r\n            <p-tree [value]=\"filesTree8\" draggableNodes=\"true\" droppableNodes=\"true\"  droppableScope=\"server1\" draggableScope=\"files\"></p-tree>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-md-1\" style=\"text-align:center\">\r\n            <i class=\"fa fa-exchange\" style=\"font-size:36px;margin-top: 28px;\"></i>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-md-3\">\r\n            <h4>Server 2</h4>\r\n            <p-tree [value]=\"filesTree9\" draggableNodes=\"true\" droppableNodes=\"true\"  droppableScope=\"server2\" draggableScope=\"server1\"></p-tree>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-md-1\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <h3>Programatic Tree Expansion</h3>\r\n    <p-tree #expandingTree [value]=\"filesTree10\"></p-tree>\r\n    <div style=\"margin-top: 8px\">\r\n        <button pButton type=\"button\" label=\"Expand all\" (click)=\"expandAll()\" style=\"margin-right: .25em\"></button>\r\n        <button pButton type=\"button\" label=\"Collapse all\" (click)=\"collapseAll()\"></button>\r\n    </div>\r\n\r\n    <h3>Lenient Filter Mode</h3>\r\n    <p-tree [value]=\"filesTree11\" [filter]=\"true\"></p-tree>\r\n\r\n    <h3>Strict Filter Mode</h3>\r\n    <p-tree [value]=\"filesTree12\" [filter]=\"true\" filterMode=\"strict\"></p-tree>\r\n\r\n    <h3>Horizontal Tree</h3>\r\n    <p-tree [value]=\"filesTree13\" layout=\"horizontal\" selectionMode=\"single\" [(selection)]=\"selectedFile3\" ></p-tree>\r\n    <div style=\"margin-top:8px\">Selected Node: {{selectedFile3 ? selectedFile3.label : 'none'&#125;&#125;</div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TreeModule&#125; from 'primeng/tree';\r\nimport &#123;TreeNode&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Tree component requires an array of TreeNode objects as its value. Let's begin with the TreeNode api. Note that all of the properties are optional.</p>\r\n\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Label of the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>data</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Data represented by the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon of the node to display next to content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandedIcon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon to use in expanded state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapsedIcon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon to use in collapsed state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>children</td>\r\n                            <td>TreeNode[]</td>\r\n                            <td>null</td>\r\n                            <td>An array of treenodes as children.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>leaf</td>\r\n                            <td>boolean</td>\r\n                            <td>null</td>\r\n                            <td>Specifies if the node has children. Used in lazy loading.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expanded</td>\r\n                            <td>boolean</td>\r\n                            <td>null</td>\r\n                            <td>Whether the node is in an expanded or collapsed state.</td>\r\n\t\t\t\t\t\t</tr>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Type of the node to match ng-template type.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>parent</td>\r\n                            <td>TreeNode</td>\r\n                            <td>null</td>\r\n                            <td>Parent of the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>draggable</td>\r\n                            <td>boolean</td>\r\n                            <td>null</td>\r\n                            <td>Whether to disable dragging for a particular node even if draggableNodes is enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>droppable</td>\r\n                            <td>boolean</td>\r\n                            <td>null</td>\r\n                            <td>Whether to disable dropping for a particular node even if droppableNodes is enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectable</td>\r\n                            <td>boolean</td>\r\n                            <td>null</td>\r\n                            <td>Used to disable selection of a particular node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Unique key of the node.(<a href=\"https://github.com/primefaces/primeng/issues/7237#issue-409791407\" target=\"_blank\" rel=\"noopener noreferrer\">more</a>)</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>emptyMessage</td>\r\n                            <td>string</td>\r\n                            <td>No records found.</td>\r\n                            <td>Text to display when there is no data.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <p>Most of the time, nodes will be loaded from a remote datasoure, here is an example NodeService that fetches the data from a json file.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n@Injectable()\r\nexport class NodeService &#123;\r\n\r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getFiles() &#123;\r\n        return this.http.get('showcase/resources/data/files.json')\r\n                    .toPromise()\r\n                    .then(res =&gt; &lt;TreeNode[]&gt; res.json().data);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <p>The files.json file consists of sample data. In a real application, this should be a dynamic response generated from the remote call.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n&#123;\r\n    \"data\":\r\n    [\r\n        &#123;\r\n            \"label\": \"Documents\",\r\n            \"data\": \"Documents Folder\",\r\n            \"expandedIcon\": \"fa fa-folder-open\",\r\n            \"collapsedIcon\": \"fa fa-folder\",\r\n            \"children\": [&#123;\r\n                    \"label\": \"Work\",\r\n                    \"data\": \"Work Folder\",\r\n                    \"expandedIcon\": \"fa fa-folder-open\",\r\n                    \"collapsedIcon\": \"fa fa-folder\",\r\n                    \"children\": [&#123;\"label\": \"Expenses.doc\", \"icon\": \"fa fa-file-word-o\", \"data\": \"Expenses Document\"&#125;, &#123;\"label\": \"Resume.doc\", \"icon\": \"fa fa-file-word-o\", \"data\": \"Resume Document\"&#125;]\r\n                &#125;,\r\n                &#123;\r\n                    \"label\": \"Home\",\r\n                    \"data\": \"Home Folder\",\r\n                    \"expandedIcon\": \"fa fa-folder-open\",\r\n                    \"collapsedIcon\": \"fa fa-folder\",\r\n                    \"children\": [&#123;\"label\": \"Invoices.txt\", \"icon\": \"fa fa-file-word-o\", \"data\": \"Invoices for this month\"&#125;]\r\n                &#125;]\r\n        &#125;,\r\n        &#123;\r\n            \"label\": \"Pictures\",\r\n            \"data\": \"Pictures Folder\",\r\n            \"expandedIcon\": \"fa fa-folder-open\",\r\n            \"collapsedIcon\": \"fa fa-folder\",\r\n            \"children\": [\r\n                &#123;\"label\": \"barcelona.jpg\", \"icon\": \"fa fa-file-image-o\", \"data\": \"Barcelona Photo\"&#125;,\r\n                &#123;\"label\": \"logo.jpg\", \"icon\": \"fa fa-file-image-o\", \"data\": \"PrimeFaces Logo\"&#125;,\r\n                &#123;\"label\": \"primeui.png\", \"icon\": \"fa fa-file-image-o\", \"data\": \"PrimeUI Logo\"&#125;]\r\n        &#125;,\r\n        &#123;\r\n            \"label\": \"Movies\",\r\n            \"data\": \"Movies Folder\",\r\n            \"expandedIcon\": \"fa fa-folder-open\",\r\n            \"collapsedIcon\": \"fa fa-folder\",\r\n            \"children\": [&#123;\r\n                    \"label\": \"Al Pacino\",\r\n                    \"data\": \"Pacino Movies\",\r\n                    \"children\": [&#123;\"label\": \"Scarface\", \"icon\": \"fa fa-file-video-o\", \"data\": \"Scarface Movie\"&#125;, &#123;\"label\": \"Serpico\", \"icon\": \"fa fa-file-video-o\", \"data\": \"Serpico Movie\"&#125;]\r\n                &#125;,\r\n                &#123;\r\n                    \"label\": \"Robert De Niro\",\r\n                    \"data\": \"De Niro Movies\",\r\n                    \"children\": [&#123;\"label\": \"Goodfellas\", \"icon\": \"fa fa-file-video-o\", \"data\": \"Goodfellas Movie\"&#125;, &#123;\"label\": \"Untouchables\", \"icon\": \"fa fa-file-video-o\", \"data\": \"Untouchables Movie\"&#125;]\r\n                &#125;]\r\n        &#125;\r\n    ]\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <p>The component that uses this service makes a call to getFiles() and assigns them back to files property that is bound to the tree.</p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeDemoComponent implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Selection</h3>\r\n            <p>Tree supports 3 selection methods, single, multiple and checkbox. Selection is enabled by setting selectionMode property and providing a single TreeNode or\r\n            an array of TreeNodes to reference the selections depending on the selection mode.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeDemoComponent implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    selectedFile: TreeNode;\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>In multiple mode or checkbox mode, selection property should be an array. In multiple mode, items can either be selected\r\n        using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\r\n        devices metaKeySelection is turned off automatically. In checkbox mode, when inititing a tree with preselections, also set partialSelected\r\n        property on node so that minus icon can be displayed when necessary.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n    export class TreeDemoComponent implements OnInit &#123;\r\n\r\n        files: TreeNode[];\r\n\r\n        selectedFiles: TreeNode[];\r\n\r\n        constructor(private nodeService: NodeService) &#123;&#125;\r\n\r\n        ngOnInit() &#123;\r\n            this.nodeService.getFiles().then(files => this.files = files);\r\n        &#125;\r\n\r\n    &#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In checkbox mode, selections propagate up and down, if you prefer not to do so, propagation can be turned off by propagateSelectionDown and\r\n            propagateSelectionUp properties.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles\"\r\n                [propagateSelectionUp]=\"false\" [propagateSelectionDown]=\"false\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Tree provides onNodeSelect and onNodeUnselect options as callbacks for selection feature.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeSelect($event)\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeDemoComponent implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    selectedFiles: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n\r\n    nodeSelect(event) &#123;\r\n        //event.node = selected node\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Selection of a particular node can be disabled by setting the selectable property of the node to false.</p>\r\n\r\n            <h3>Icons</h3>\r\n            <p>Icon of a treenode is defined using the icon property, if you need an icon depending on the expand or collapse state, use\r\n                expandedIcon and collapsedIcon instead.</p>\r\n\r\n            <h3>Templating</h3>\r\n            <p>By default label of a treenode is displayed inside a tree node, in case you need to place custom content define a pTemplate that gets\r\n                the treenode as an implicit variable. Example below places an input field to create editable treenodes.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\"&gt;\r\n    &lt;ng-template let-node  pTemplate=\"default\"&gt;\r\n        &lt;input [(ngModel)]=\"node.label\" type=\"text\" style=\"width:100%\"&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Multiple templates are supported by matching the type property of the TreeNode with the type of pTemplate. If a node has no type,\r\n            then default ng-template is used.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\"&gt;\r\n    &lt;ng-template let-node  pTemplate=\"picture\"&gt;\r\n        &lt;img [attrs.src]=\"picture.path\"&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-node  pTemplate=\"default\"&gt;\r\n        &lt;input [(ngModel)]=\"node.label\" type=\"text\" style=\"width:100%\"&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Filtering</h3>\r\n            <p>Filtering is enabled by setting the <b>filter</b> property to true, by default label property of a node \r\n                is used to compare against the value in the text field, in order to customize which field(s) should be used during search define <b>filterBy</b> property.</p>\r\n    \r\n            <p>In addition <b>filterMode</b> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, \r\n                    in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"filesTree11\" [filter]=\"true\">&lt;/p-tree&gt;\r\n\r\n&lt;p-tree [value]=\"filesTree12\" [filter]=\"true\" filterMode=\"strict\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>ContextMenu</h3>\r\n            <p>Tree has exclusive integration with context menu created by binding a menu instance to the tree.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [contextMenu]=\"cm\"&gt;&lt;/p-tree&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy loading is handy to deal with large datasets. Instead of loading the whole tree, nodes can be loaded at onNodeExpand event.\r\n            Important part of implementing lazy loading is defining leaf property of a node as false, this will instruct tree to display an arrow icon\r\n            to indicate there are children of this node although they are not loaded yet. When the lazy node is expanded, onNodeExpand is called\r\n            and a remote call can be made to add the children to the expanded node.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" (onNodeExpand)=\"loadNode($event)\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeDemoComponent implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    selectedFiles: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        //initial nodes\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n\r\n    loadNode(event) &#123;\r\n        if(event.node) &#123;\r\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\r\n            this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);\r\n        &#125;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Assume at ngOnInit tree is initialized with a data like below that has nodes having no actual children but leaf property is set false.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n&#123;\r\n    \"data\":\r\n    [\r\n        &#123;\r\n            \"label\": \"Lazy Node 0\",\r\n            \"data\": \"Node 0\",\r\n            \"expandedIcon\": \"fa fa-folder-open\",\r\n            \"collapsedIcon\": \"fa fa-folder\",\r\n            \"leaf\": false\r\n        &#125;,\r\n        &#123;\r\n            \"label\": \"Lazy Node 1\",\r\n            \"data\": \"Node 1\",\r\n            \"expandedIcon\": \"fa fa-folder-open\",\r\n            \"collapsedIcon\": \"fa fa-folder\",\r\n            \"leaf\": false\r\n        &#125;,\r\n        &#123;\r\n            \"label\": \"Lazy Node 1\",\r\n            \"data\": \"Node 2\",\r\n            \"expandedIcon\": \"fa fa-folder-open\",\r\n            \"collapsedIcon\": \"fa fa-folder\",\r\n            \"leaf\": false\r\n        &#125;\r\n    ]\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Drag and Drop</h3>\r\n            <p>Nodes can be reordered within a tree and also can be transferred between multiple trees. To enable dragging from a tree set draggableNodes to true and to allow\r\n            dropping enable droppableNodes property. In addition, import TreeDragDropService and configure it as a provider at your component or module.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TreeDragDropService&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n            <p>Multiple trees can be used in a drag drop operation, in order to add constraints like rejecting drags from a certain tree but allow from another use draggableScope\r\n            and droppableScope properties which can be a string or an array. Following example uses 3 trees where second one only accepts drags from first tree and second one only\r\n            accepts from second tree whereas first tree accepts drops from 3rd tree.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\" draggableScope=\"a\" droppableScope=\"c\"&gt;&lt;/p-tree&gt;\r\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\" draggableScope=\"b\" droppableScope=\"a\"&gt;&lt;/p-tree&gt;\r\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\" draggableScope=\"c\" droppableScope=\"b\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In case, a drop should be accepted based on a condition, enable validateDrop property, define an event handler for onNodeDrop where the passed event and call the accept callback of the event\r\n                to accept a drop. Simply omitting the call of accept() will reject the drop.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\" [validateDrop]=\"true\" (onNodeDrop)=\"onDrop($event)\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nonDrop(event) {\r\n    if (condition) {\r\n        event.accept();\r\n    }\r\n}\r\n</code>\r\n</pre>\r\n\r\n            <h3>Loading Status</h3>\r\n            <p>Tree has a loading property, when enabled a spinner icon is displayed to indicate data load.</p>\r\n            <p>An optional loadingIcon property can be passed in case you prefer a different icon.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" [loading]=\"loading\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Horizontal Orientation</h3>\r\n            <p>Horizontal mode is the alternative option for orientation.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tree [value]=\"files\" layout=\"horizontal\"&gt;&lt;/p-tree&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                         <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of treenodes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectionMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines the selection mode, valid values \"single\", \"multiple\", and \"checkbox\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>A single treenode instance or an array to refer to the selections.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contextMenu</td>\r\n                            <td>ContextMenu</td>\r\n                            <td>null</td>\r\n                            <td>Context menu instance.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>layout</td>\r\n                            <td>string</td>\r\n                            <td>vertical</td>\r\n                            <td>Defines the orientation of the tree, valid values are 'vertical' and 'horizontal'.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>metaKeySelection</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\r\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>propagateSelectionUp</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether checkbox selections propagate to ancestor nodes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>propagateSelectionDown</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether checkbox selections propagate to descendant nodes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loading</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a loader to indicate data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loadingIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-circle-o-notch</td>\r\n                            <td>The icon to show while indicating data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>validateDrop</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filter</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specified, displays an input field to filter the items.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterBy</td>\r\n                            <td>string</td>\r\n                            <td>label</td>\r\n                            <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterMode</td>\r\n                            <td>string</td>\r\n                            <td>lenient</td>\r\n                            <td>Mode for filtering valid values are \"lenient\" and \"strict\". Default is lenient.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterPlaceholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Placeholder text to show when filter input is empty.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onNodeSelect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Selected node instance.</td>\r\n                            <td>Callback to invoke when a node is selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeUnselect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Unselected node instance.</td>\r\n                            <td>Callback to invoke when a node is unselected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeExpand</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Expanded node instance.</td>\r\n                            <td>Callback to invoke when a node is expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeCollapse</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Collapsed node instance.</td>\r\n                            <td>Callback to invoke when a node is collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeContextMenuSelect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Selected node instance.</td>\r\n                            <td>Callback to invoke when a node is selected with right click.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeDrop</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.dragNode: Dragged node instance <br>\r\n                                event.dropNode: Dropped node instance.\r\n                                event.index: Index of the dropped node within siblings.</td>\r\n                            <td>Callback to invoke when a node is dropped.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-tree</td>\r\n                            <td>Main container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-tree-horizontal</td>\r\n                            <td>Main container element in horizontal mode</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-tree-container</td>\r\n                            <td>Container of nodes</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treenode</td>\r\n                            <td>A treenode element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treenode-content</td>\r\n                            <td>Content of a treenode</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treenode-toggler</td>\r\n                            <td>Toggle icon</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treenode-icon</td>\r\n                            <td>Icon of a treenode</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treenode-label</td>\r\n                            <td>Label of a treenode</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treenode-children</td>\r\n                            <td>Container element for node children</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treenode-content-selected</td>\r\n                            <td>Content of a selected node.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree0\"&gt;&lt;/p-tree&gt;\r\n\r\n&lt;h3&gt;Loader&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree1\" [loading]=\"loading\"&gt;&lt;/p-tree&gt;\r\n\r\n&lt;h3&gt;Single Selection&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree2\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"&gt;&lt;/p-tree&gt;\r\n&lt;div style=\"margin-top:8px\"&gt;Selected Node: &#123;selectedFile ? selectedFile.label : 'none'&#125;&lt;/div&gt;\r\n\r\n&lt;h3&gt;Multiple Selection with Metakey&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree3\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\"\r\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"&gt;&lt;/p-tree&gt;\r\n&lt;div&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles\"&gt;&#123;file.label&#125; &lt;/span&gt;&lt;/div&gt;\r\n\r\n&lt;h3&gt;Multiple Selection with Checkbox&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree4\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\"&gt;&lt;/p-tree&gt;\r\n&lt;div&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles2\"&gt;&#123;file.label&#125; &lt;/span&gt;&lt;/div&gt;\r\n\r\n&lt;h3&gt;Lazy Loading&lt;/h3&gt;\r\n&lt;p-tree [value]=\"lazyFiles\" (onNodeExpand)=\"nodeExpand($event)\" [style]=\"&#123;'max-height':'200px','overflow':'auto'&#125;\"&gt;&lt;/p-tree&gt;\r\n\r\n&lt;h3&gt;Template&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree5\"&gt;\r\n    &lt;ng-template let-node pTemplate=\"default\"&gt;\r\n        &lt;input [(ngModel)]=\"node.label\" type=\"text\" style=\"width:100%\" class=\"ui-inputtext\"&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-tree&gt;\r\n\r\n&lt;h3&gt;Context Menu&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree6\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [contextMenu]=\"cm\"&gt;&lt;/p-tree&gt;\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n\r\n&lt;h3&gt;DragDrop&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n        &lt;h4&gt;Files&lt;/h4&gt;\r\n        &lt;p-tree [value]=\"filesTree7\" draggableNodes=\"true\" droppableNodes=\"true\" droppableScope=\"files\" draggableScope=\"server2\"&gt;&lt;/p-tree&gt;\r\n    &lt;/div&gt;\r\n\r\n    &lt;div class=\"ui-g-12 ui-md-1\" style=\"text-align:center\"&gt;\r\n        &lt;i class=\"fa fa-exchange\" style=\"font-size:36px;margin-top: 28px;\"&gt;&lt;/i&gt;\r\n    &lt;/div&gt;\r\n\r\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n        &lt;h4&gt;Server 1&lt;/h4&gt;\r\n        &lt;p-tree [value]=\"filesTree8\" draggableNodes=\"true\" droppableNodes=\"true\" droppableScope=\"server1\" draggableScope=\"files\"&gt;&lt;/p-tree&gt;\r\n    &lt;/div&gt;\r\n\r\n    &lt;div class=\"ui-g-12 ui-md-1\" style=\"text-align:center\"&gt;\r\n        &lt;i class=\"fa fa-exchange\" style=\"font-size:36px;margin-top: 28px;\"&gt;&lt;/i&gt;\r\n    &lt;/div&gt;\r\n\r\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n        &lt;h4&gt;Server 2&lt;/h4&gt;\r\n        &lt;p-tree [value]=\"filesTree9\" draggableNodes=\"true\" droppableNodes=\"true\" droppableScope=\"server2\" draggableScope=\"server1\"&gt;&lt;/p-tree&gt;\r\n    &lt;/div&gt;\r\n\r\n    &lt;div class=\"ui-g-12 ui-md-1\"&gt;\r\n\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Programatic Tree Expansion&lt;/h3&gt;\r\n&lt;p-tree #expandingTree [value]=\"filesTree10\"&gt;&lt;/p-tree&gt;\r\n&lt;div style=\"margin-top: 8px\"&gt;\r\n    &lt;button pButton type=\"button\" label=\"Expand all\" (click)=\"expandAll()\" style=\"margin-right: .25em\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" label=\"Collapse all\" (click)=\"collapseAll()\"&gt;&lt;/button&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Lenient Filter Mode&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree11\" [filter]=\"true\"&gt;&lt;/p-tree&gt;\r\n\r\n&lt;h3&gt;Strict Filter Mode&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree12\" [filter]=\"true\" filterMode=\"strict\"&gt;&lt;/p-tree&gt;\r\n\r\n&lt;h3&gt;Horizontal Tree&lt;/h3&gt;\r\n&lt;p-tree [value]=\"filesTree11\" layout=\"horizontal\" selectionMode=\"single\" [(selection)]=\"selectedFile3\" &gt;&lt;/p-tree&gt;\r\n&lt;div style=\"margin-top:8px\"&gt;Selected Node: &#123;selectedFile3 ? selectedFile3.label : 'none'&#125;&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeDemo implements OnInit &#123;\r\n\r\n    @ViewChild('expandingTree')\r\n    expandingTree: Tree;\r\n\r\n    filesTree1: TreeNode[];\r\n    filesTree2: TreeNode[];\r\n    filesTree3: TreeNode[];\r\n    filesTree4: TreeNode[];\r\n    filesTree5: TreeNode[];\r\n    filesTree6: TreeNode[];\r\n    filesTree7: TreeNode[];\r\n    filesTree8: TreeNode[];\r\n    filesTree9: TreeNode[];\r\n    filesTree10: TreeNode[];\r\n    filesTree11: TreeNode[];\r\n\r\n    lazyFiles: TreeNode[];\r\n\r\n    selectedFile: TreeNode;\r\n\r\n    selectedFile2: TreeNode;\r\n\r\n    selectedFile3: TreeNode;\r\n\r\n    selectedFiles: TreeNode[];\r\n\r\n    selectedFiles2: TreeNode[];\r\n\r\n    items: MenuItem[];\r\n\r\n    loading: boolean;\r\n\r\n    constructor(private nodeService: NodeService, private messageService: MessageService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.loading = true;\r\n        this.nodeService.getFiles().then(files => this.filesTree0 = files);\r\n        setTimeout(() => {\r\n            this.nodeService.getFiles().then(files => this.filesTree1 = files);\r\n            this.loading = false;\r\n        }, 3000);\r\n        this.nodeService.getFiles().then(files => this.filesTree2 = files);\r\n        this.nodeService.getFiles().then(files => this.filesTree3 = files);\r\n        this.nodeService.getFiles().then(files => this.filesTree4 = files);\r\n        this.nodeService.getFiles().then(files => this.filesTree5 = files);\r\n        this.nodeService.getFiles().then(files => this.filesTree6 = files);\r\n        this.nodeService.getFiles().then(files => this.filesTree7 = files);\r\n        this.filesTree8 = [\r\n            &#123;\r\n                label: \"Backup\",\r\n                data: \"Backup Folder\",\r\n                expandedIcon: \"fa fa-folder-open\",\r\n                collapsedIcon: \"fa fa-folder\"\r\n            &#125;\r\n        ];\r\n        this.filesTree9 = [\r\n            &#123;\r\n                label: \"Storage\",\r\n                data: \"Storage Folder\",\r\n                expandedIcon: \"fa fa-folder-open\",\r\n                collapsedIcon: \"fa fa-folder\"\r\n            &#125;\r\n        ];\r\n        this.nodeService.getFiles().then(files => this.filesTree10 = files);\r\n        this.nodeService.getFiles().then(files => &#123;\r\n            this.filesTree11 = [&#123;\r\n                label: 'Root',\r\n                children: files\r\n            &#125;];\r\n        &#125;);\r\n\r\n        this.nodeService.getLazyFiles().then(files => this.lazyFiles = files);\r\n\r\n        this.items = [\r\n            &#123;label: 'View', icon: 'fa fa-search', command: (event) => this.viewFile(this.selectedFile2)&#125;,\r\n            &#123;label: 'Unselect', icon: 'fa fa-close', command: (event) => this.unselectFile()&#125;\r\n        ];\r\n    &#125;\r\n\r\n    nodeSelect(event) &#123;\r\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Selected', detail: event.node.label&#125;);\r\n    &#125;\r\n\r\n    nodeUnselect(event) &#123;\r\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Unselected', detail: event.node.label&#125;);\r\n    &#125;\r\n\r\n    nodeExpandMessage(event) &#123;\r\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Expanded', detail: event.node.label&#125;);\r\n    &#125;\r\n\r\n    nodeExpand(event) &#123;\r\n        if(event.node) &#123;\r\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\r\n            this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);\r\n        &#125;\r\n    &#125;\r\n\r\n    viewFile(file: TreeNode) &#123;\r\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Selected with Right Click', detail: file.label&#125;);\r\n    &#125;\r\n\r\n    unselectFile() &#123;\r\n        this.selectedFile2 = null;\r\n    &#125;\r\n\r\n    expandAll()&#123;\r\n        this.filesTree6.forEach( node => &#123;\r\n            this.expandRecursive(node, true);\r\n        &#125; );\r\n    &#125;\r\n\r\n    collapseAll()&#123;\r\n        this.filesTree6.forEach( node => &#123;\r\n            this.expandRecursive(node, false);\r\n        &#125; );\r\n    &#125;\r\n\r\n    private expandRecursive(node:TreeNode, isExpand:boolean)&#123;\r\n        node.expanded = isExpand;\r\n        if(node.children)&#123;\r\n            node.children.forEach( childNode => &#123;\r\n                this.expandRecursive(childNode, isExpand);\r\n            &#125; );\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/components/utils/filterutils.ts":
/*!*************************************************!*\
  !*** ./src/app/components/utils/filterutils.ts ***!
  \*************************************************/
/*! exports provided: FilterUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtils", function() { return FilterUtils; });
/* harmony import */ var _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/objectutils */ "./src/app/components/utils/objectutils.ts");

class FilterUtils {
    static filter(value, fields, filterValue, filterMatchMode) {
        let filteredItems = [];
        let filterText = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filterValue).toLowerCase();
        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    let fieldValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(String(_utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].resolveFieldData(item, field))).toLowerCase();
                    if (FilterUtils[filterMatchMode](fieldValue, filterText)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }
        return filteredItems;
    }
    static startsWith(value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
        let stringValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase();
        return stringValue.slice(0, filterValue.length) === filterValue;
    }
    static contains(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
        let stringValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase();
        return stringValue.indexOf(filterValue) !== -1;
    }
    static endsWith(value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
        let stringValue = _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase();
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    }
    static equals(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase() == _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
    }
    static notEquals(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }
        if (value === undefined || value === null) {
            return true;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
        else
            return _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLowerCase() != _utils_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLowerCase();
    }
    static in(value, filter) {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        for (let i = 0; i < filter.length; i++) {
            if (filter[i] === value || (value.getTime && filter[i].getTime && value.getTime() === filter[i].getTime())) {
                return true;
            }
        }
        return false;
    }
    static lt(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
        else
            return value < filter;
    }
    static lte(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
        else
            return value <= filter;
    }
    static gt(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
        else
            return value > filter;
    }
    static gte(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
        else
            return value >= filter;
    }
}


/***/ }),

/***/ "./src/app/showcase/components/tree/treedemo-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/tree/treedemo-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TreeDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDemoRoutingModule", function() { return TreeDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _treedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treedemo */ "./src/app/showcase/components/tree/treedemo.ts");




let TreeDemoRoutingModule = class TreeDemoRoutingModule {
};
TreeDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _treedemo__WEBPACK_IMPORTED_MODULE_3__["TreeDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], TreeDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/tree/treedemo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/showcase/components/tree/treedemo.module.ts ***!
  \*************************************************************/
/*! exports provided: TreeDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDemoModule", function() { return TreeDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _treedemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./treedemo */ "./src/app/showcase/components/tree/treedemo.ts");
/* harmony import */ var _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treedemo-routing.module */ "./src/app/showcase/components/tree/treedemo-routing.module.ts");
/* harmony import */ var _components_tree_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tree/tree */ "./src/app/components/tree/tree.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/contextmenu/contextmenu */ "./src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");












let TreeDemoModule = class TreeDemoModule {
};
TreeDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeDemoRoutingModule"],
            _components_tree_tree__WEBPACK_IMPORTED_MODULE_6__["TreeModule"],
            _components_toast_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            _components_button_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _components_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"],
            _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"],
            _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_11__["CodeHighlighterModule"]
        ],
        declarations: [
            _treedemo__WEBPACK_IMPORTED_MODULE_4__["TreeDemo"]
        ]
    })
], TreeDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/tree/treedemo.ts":
/*!******************************************************!*\
  !*** ./src/app/showcase/components/tree/treedemo.ts ***!
  \******************************************************/
/*! exports provided: TreeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDemo", function() { return TreeDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");
/* harmony import */ var _components_tree_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tree/tree */ "./src/app/components/tree/tree.ts");
/* harmony import */ var _components_common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/common/api */ "./src/app/components/common/api.ts");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");






let TreeDemo = class TreeDemo {
    constructor(nodeService, messageService) {
        this.nodeService = nodeService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.loading = true;
        this.nodeService.getFiles().then(files => this.filesTree0 = files);
        setTimeout(() => {
            this.nodeService.getFiles().then(files => this.filesTree1 = files);
            this.loading = false;
        }, 3000);
        this.nodeService.getFiles().then(files => this.filesTree2 = files);
        this.nodeService.getFiles().then(files => this.filesTree3 = files);
        this.nodeService.getFiles().then(files => this.filesTree4 = files);
        this.nodeService.getFiles().then(files => this.filesTree5 = files);
        this.nodeService.getFiles().then(files => this.filesTree6 = files);
        this.nodeService.getFiles().then(files => this.filesTree7 = files);
        this.filesTree8 = [
            {
                label: "Backup",
                data: "Backup Folder",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder"
            }
        ];
        this.filesTree9 = [
            {
                label: "Storage",
                data: "Storage Folder",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder"
            }
        ];
        this.nodeService.getFiles().then(files => this.filesTree10 = files);
        this.nodeService.getFiles().then(files => this.filesTree11 = files);
        this.nodeService.getFiles().then(files => this.filesTree12 = files);
        this.nodeService.getFiles().then(files => {
            this.filesTree13 = [{
                    label: 'Root',
                    children: files
                }];
        });
        this.nodeService.getLazyFiles().then(files => this.lazyFiles = files);
        this.items = [
            { label: 'View', icon: 'fa fa-search', command: (event) => this.viewFile(this.selectedFile2) },
            { label: 'Unselect', icon: 'fa fa-close', command: (event) => this.unselectFile() }
        ];
    }
    nodeSelect(event) {
        this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }
    nodeUnselect(event) {
        this.messageService.add({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }
    nodeExpandMessage(event) {
        this.messageService.add({ severity: 'info', summary: 'Node Expanded', detail: event.node.label });
    }
    nodeExpand(event) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
        }
    }
    viewFile(file) {
        this.messageService.add({ severity: 'info', summary: 'Node Selected with Right Click', detail: file.label });
    }
    unselectFile() {
        this.selectedFile2 = null;
    }
    expandAll() {
        this.filesTree10.forEach(node => {
            this.expandRecursive(node, true);
        });
    }
    collapseAll() {
        this.filesTree10.forEach(node => {
            this.expandRecursive(node, false);
        });
    }
    expandRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
};
TreeDemo.ctorParameters = () => [
    { type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"] },
    { type: _components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expandingTree', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_tree_tree__WEBPACK_IMPORTED_MODULE_3__["Tree"])
], TreeDemo.prototype, "expandingTree", void 0);
TreeDemo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./treedemo.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/tree/treedemo.html"),
        providers: [_components_common_api__WEBPACK_IMPORTED_MODULE_4__["TreeDragDropService"], _components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
        styles: ["\n        h4 {\n            text-align: center;\n            margin: 0 0 8px 0;\n        }\n\n        .ui-inputtext {\n            padding-top: 0;\n            padding-bottom: 0;\n            font-size: 12px;\n        }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"], _components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
], TreeDemo);



/***/ })

}]);
//# sourceMappingURL=components-tree-treedemo-module-es2015.js.map