(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('lodash'), require('d3'), require('dagre-d3')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@ng-bootstrap/ng-bootstrap', 'lodash', 'd3', 'dagre-d3'], factory) :
	(factory((global['prov-viz'] = global['prov-viz'] || {}),global._angular_core,global._angular_common,global._ngBootstrap_ngBootstrap,global._,global.d3,global.dagreD3));
}(this, (function (exports,_angular_core,_angular_common,_ngBootstrap_ngBootstrap,_,d3,dagreD3) { 'use strict';

var Node = (function () {
    /**
     * Constructor of Node
     * @param {?} id (optional) Identifier of the Node (if empty, temporary identifier is created; pattern: 'temp_<UUID>' where UUID complies with V1)
     * @param {?=} type Type of Node according to Provenance specification in context of Provenance graph, null otherwise
     * @param {?=} subType (optional) Subtype of Node (by default, null)
     * @param {?=} label
     */
    function Node(id, type, subType, label) {
        this.v = id;
        this.value = {};
        this.value['type'] = type || null;
        this.value['label'] = label || this.getLabel();
        this.value['subType'] = subType || null;
    }
    /**
     * Getter: identifier
     * @return {?} Identifier of the Node
     */
    Node.prototype.getId = function () {
        return this.v;
    };
    /**
     * Setter: identifier
     * @param {?} id Identifier of the Node
     * @return {?}
     */
    Node.prototype.setId = function (id) {
        this.v = id;
    };
    /**
     * Getter: type
     * @return {?} Type of the Node
     */
    Node.prototype.getType = function () {
        return this.value['type'];
    };
    /**
     * Getter: label
     * @return {?} Label of the Node
     */
    Node.prototype.getLabel = function () {
        return this.value['label'] || (this.value['type'] && this.value['type'].toUpperCase()) || this.v;
    };
    /**
     * Generic getter
     * @param {?} property Property to be retrieved
     * @return {?} Value associated to property if property exists, null otherwise
     */
    Node.prototype.get = function (property) {
        return this.value[property];
    };
    /**
     * Generic setter
     * @param {?} property Property for which new value must be set
     * @param {?} value New value to associate with property
     * @return {?}
     */
    Node.prototype.set = function (property, value) {
        this.value[property] = value;
    };
    /**
     * Appends element for given property if aforesaid property exists
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Node.prototype.append = function (property, element, key) {
        if (this.value[property]) {
            this.appendElement(property, element, key);
        }
    };
    /**
     * Appends element for given property based on type of attribute
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Node.prototype.appendElement = function (property, element, key) {
        if (typeof this.value[property] === 'string') {
            this.value[property] += element;
        }
        else if ((typeof this.value[property] === 'object') && key) {
            this.value[property][key] = element;
        }
        else if (Array.isArray(this.value[property])) {
            this.value[property].push(element);
        }
    };
    return Node;
}());

var Edge = (function () {
    /**
     * Constructor of Edge
     * @param {?} source Identifier of source of the edge
     * @param {?} target Identifier of target of the edge
     * @param {?=} label (optional) Label to be displayed on the edge
     */
    function Edge(source, target, label) {
        this.v = source;
        this.w = target;
        this.value = {};
        this.value['label'] = label || this.getLabel();
    }
    /**
     * Getter: source
     * @return {?} Identifier of source of the edge
     */
    Edge.prototype.getSource = function () {
        return this.v;
    };
    /**
     * Setter: source
     * @param {?} source Identifier of source of the edge
     * @return {?}
     */
    Edge.prototype.setSource = function (source) {
        this.v = source;
    };
    /**
     * Getter: target
     * @return {?} Identifier of target of the edge
     */
    Edge.prototype.getTarget = function () {
        return this.w;
    };
    /**
     * Setter: target
     * @param {?} target Identifier of target of the edge
     * @return {?}
     */
    Edge.prototype.setTarget = function (target) {
        this.w = target;
    };
    /**
     * Getter: label
     * @return {?} Label of the edge
     */
    Edge.prototype.getLabel = function () {
        return this.value['label'] || '';
    };
    /**
     * Setter: label
     * @param {?} label Label of the edge
     * @return {?}
     */
    Edge.prototype.setLabel = function (label) {
        this.value['label'] = label;
    };
    /**
     * Generic getter
     * @param {?} property Property to be retrieved
     * @return {?} Value associated to property if property exists, null otherwise
     */
    Edge.prototype.get = function (property) {
        return this.value[property] || null;
    };
    /**
     * Generic setter
     * @param {?} property Property for which new value must be set
     * @param {?} value New value to associate with property
     * @return {?}
     */
    Edge.prototype.set = function (property, value) {
        this.value[property] = value;
    };
    return Edge;
}());

var MapperService = (function () {
    function MapperService() {
    }
    /**
     * Formats the input data
     * @param {?=} input (optional) Data to be formatted as graphlib instance
     * @return {?} Formatted data (graphlib instance) if input, null otherwise
     */
    MapperService.prototype.format = function (input) {
        if (input) {
            this.input = input;
            this.direction = this.input['graph']['direction'] || MapperService.defaultDirection;
            if (this.input['graph'] && (this.input['graph']['type'] === 'Provenance')) {
                this.createProvenanceGraph();
                return { provenance: true, simplified: this.simplifiedGraph, extended: this.completeGraph };
            }
            else {
                this.createGenericGraph();
                return { provenance: false, extended: this.completeGraph };
            }
        }
        else {
            return null;
        }
    };
    /**
     * Creates graph of a Provenance trail
     * @return {?}
     */
    MapperService.prototype.createProvenanceGraph = function () {
        this.createCompleteGraph();
        this.createSimplifiedGraph();
    };
    /**
     * Creates a generic graph
     * @return {?}
     */
    MapperService.prototype.createGenericGraph = function () {
        this.createCompleteGraph();
    };
    /**
     * Creates the full graph associated to given Provenance trail
     * @return {?}
     */
    MapperService.prototype.createCompleteGraph = function () {
        this.nodes = new Array();
        this.edges = new Array();
        this.convertNodesAndEdges();
        this.completeGraph = { value: { rankdir: this.direction }, nodes: this.nodes, edges: this.edges };
    };
    /**
     * Creates the simplified version of the graph associated to given Provenance trail
     * @return {?}
     */
    MapperService.prototype.createSimplifiedGraph = function () {
        this.simplifiedNodes = new Array();
        this.simplifiedEdges = new Array();
        this.cloneDeepNodesAndEdges();
        this.convertNodesAndEdgesForSimpleGraph();
        this.simplifiedGraph = { value: { rankdir: this.direction }, nodes: this.simplifiedNodes, edges: this.simplifiedEdges };
    };
    /**
     * Converts all the Nodes and Edges from JSON-GRAPH to graphlib representation
     * @return {?}
     */
    MapperService.prototype.convertNodesAndEdges = function () {
        if (this.input['graph']['nodes']) {
            this.convertNodes();
        }
        if (this.input['graph']['edges']) {
            this.convertEdges();
        }
    };
    /**
     * Converts all the Nodes from JSON-GRAPH to graphlib representation
     * @return {?}
     */
    MapperService.prototype.convertNodes = function () {
        for (var _i = 0, _a = this.input['graph']['nodes']; _i < _a.length; _i++) {
            var jsonGraphNode = _a[_i];
            var /** @type {?} */ id = jsonGraphNode['id'];
            var /** @type {?} */ type = jsonGraphNode['type'] || null;
            var /** @type {?} */ subType = (jsonGraphNode['metadata'] && jsonGraphNode['metadata']['subType']) || null;
            var /** @type {?} */ label = jsonGraphNode['label'] || null;
            var /** @type {?} */ node = new Node(id, type, subType, label);
            for (var /** @type {?} */ key in jsonGraphNode['metadata']) {
                node.set(key, jsonGraphNode['metadata'][key]);
            }
            node.set('labelType', 'html');
            this.nodes.push(node);
        }
    };
    /**
     * Converts all the Edges from JSON-GRAPH to graphlib representation
     * @return {?}
     */
    MapperService.prototype.convertEdges = function () {
        for (var _i = 0, _a = this.input['graph']['edges']; _i < _a.length; _i++) {
            var jsonGraphEdge = _a[_i];
            if (this.checkIfSourceAndTargetExist(jsonGraphEdge)) {
                var /** @type {?} */ source = jsonGraphEdge['source'];
                var /** @type {?} */ target = jsonGraphEdge['target'];
                var /** @type {?} */ edge = new Edge(source, target);
                for (var /** @type {?} */ key in jsonGraphEdge['metadata']) {
                    edge.set(key, jsonGraphEdge['metadata'][key]);
                }
                this.edges.push(edge);
            }
        }
    };
    /**
     * Converts all Nodes and Edges to build simplified version of graph
     * @return {?}
     */
    MapperService.prototype.convertNodesAndEdgesForSimpleGraph = function () {
        this.removeAgents();
        this.mergeDatasetsAndRelatedResources();
        this.removeActivities();
    };
    /**
     * Removes all the Agents from the Provenance trail and associated Edges
     * @return {?}
     */
    MapperService.prototype.removeAgents = function () {
        var /** @type {?} */ agentsId = this.simplifiedNodes.filter(function (n) { return n.getType() === 'agent'; }).map(function (n) { return n.getId(); });
        this.simplifiedNodes = this.simplifiedNodes.filter(function (n) { return !_.includes(agentsId, n.getId()); });
        this.simplifiedEdges = this.simplifiedEdges.filter(function (e) { return !(_.includes(agentsId, e.getSource()) && !(_.includes(agentsId, e.getTarget()))); });
    };
    /**
     * Merges all the Resources with their respective Datasets
     * @return {?}
     */
    MapperService.prototype.mergeDatasetsAndRelatedResources = function () {
        var /** @type {?} */ datasets = this.simplifiedNodes.filter(function (n) { return n.getType() === 'entity' && n.get('subType') === 'dataset'; });
        for (var _i = 0, datasets_1 = datasets; _i < datasets_1.length; _i++) {
            var dataset = datasets_1[_i];
            this.mergeDatasetAndRelatedResources(dataset);
        }
    };
    /**
     * Merge all the Resources of a given Dataset
     * @param {?} dataset Dataset for which Resources must be merged with
     * IMPORTANT: dataset is modified through the function and by inner function
     * @return {?}
     */
    MapperService.prototype.mergeDatasetAndRelatedResources = function (dataset) {
        var /** @type {?} */ resourcesId = this.simplifiedEdges.filter(function (e) { return e.getTarget() === dataset.getId(); }).map(function (e) { return e.getSource(); });
        if (Array.isArray(resourcesId) && resourcesId.length) {
            var /** @type {?} */ resources = this.simplifiedNodes.filter(function (n) { return _.includes(resourcesId, n.getId()); });
            dataset.set('members', []);
            for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                var resource = resources_1[_i];
                this.linkDatasetWithElementsRelatedToResource(dataset, resource);
            }
            this.changeLabelOfDataset(dataset, resources);
            this.removeResourcesFromSimplifiedGraph(resourcesId);
        }
    };
    /**
     * Links a given Dataset with all Elements that are linked with Resource it is linked with
     * @param {?} dataset Dataset to be considered for linking
     * @param {?} resource Resource linked with the Dataset
     * @return {?}
     */
    MapperService.prototype.linkDatasetWithElementsRelatedToResource = function (dataset, resource) {
        dataset.append('members', resource);
        var /** @type {?} */ elementsLinkedWithResource = this.simplifiedEdges.filter(function (e) { return e.getTarget() === resource.getId(); }).map(function (e) { return e.getSource(); });
        for (var _i = 0, elementsLinkedWithResource_1 = elementsLinkedWithResource; _i < elementsLinkedWithResource_1.length; _i++) {
            var element = elementsLinkedWithResource_1[_i];
            this.simplifiedEdges.push(new Edge(element, dataset.getId(), 'was derived from'));
        }
    };
    /**
     * Changes the label of a Dataset to show number of Resources it contains
     * @param {?} dataset Dataset for which label is modified
     * @param {?} resources Resources linked to the Dataset
     * IMPORTANT: dataset is modified through the function
     * @return {?}
     */
    MapperService.prototype.changeLabelOfDataset = function (dataset, resources) {
        dataset.append('label', "<br>" + resources.length + " resource" + (resources.length > 1 ? 's' : ''));
    };
    /**
     * Removes all the resources from the simplified version of the graph
     * @param {?} resourcesId Identifiers of all the resources
     * @return {?}
     */
    MapperService.prototype.removeResourcesFromSimplifiedGraph = function (resourcesId) {
        this.simplifiedNodes = this.simplifiedNodes.filter(function (n) { return !_.includes(resourcesId, n.getId()); });
        this.simplifiedEdges = this.simplifiedEdges.filter(function (e) { return !_.includes(resourcesId, e.getSource()) && !_.includes(resourcesId, e.getTarget()); });
    };
    /**
     * Removes all activities from the simplified version of the graph
     * @return {?}
     */
    MapperService.prototype.removeActivities = function () {
        var /** @type {?} */ activities = this.simplifiedNodes.filter(function (n) { return n.getType() === 'activity' || n.get('subtype') === 'activity'; });
        for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
            var activity = activities_1[_i];
            this.linkSourcesAndGeneratedEntitiesOfActivity(activity);
        }
        this.simplifiedNodes = this.simplifiedNodes.filter(function (n) { return n.getType() === 'entity'; });
    };
    /**
     * Creates edges between all sources and generated entities of a given activity
     * @param {?} activity Activity to be considered for creation of edges between sources and generated entities
     * @return {?}
     */
    MapperService.prototype.linkSourcesAndGeneratedEntitiesOfActivity = function (activity) {
        var /** @type {?} */ sourcesId = this.simplifiedEdges.filter(function (e) { return e.getSource() === activity.getId(); }).map(function (e) { return e.getTarget(); });
        var /** @type {?} */ generatedElementsId = this.simplifiedEdges.filter(function (e) { return e.getTarget() === activity.getId(); }).map(function (e) { return e.getSource(); });
        for (var _i = 0, sourcesId_1 = sourcesId; _i < sourcesId_1.length; _i++) {
            var sourceId = sourcesId_1[_i];
            for (var _a = 0, generatedElementsId_1 = generatedElementsId; _a < generatedElementsId_1.length; _a++) {
                var generatedElementId = generatedElementsId_1[_a];
                this.simplifiedEdges.push(new Edge(generatedElementId, sourceId, 'was derived from'));
            }
        }
        this.simplifiedEdges = this.simplifiedEdges.filter(function (e) { return !(e.getSource() === activity.getId()) && !(e.getTarget() === activity.getId()); });
    };
    /**
     * Clones Nodes and Edges of the complete graph
     * @return {?}
     */
    MapperService.prototype.cloneDeepNodesAndEdges = function () {
        this.cloneDeepNodes();
        this.cloneDeepEdges();
    };
    /**
     * Clones Nodes of the complete graph
     * @return {?}
     */
    MapperService.prototype.cloneDeepNodes = function () {
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.simplifiedNodes.push(_.cloneDeep(_.toPlainObject(node)));
        }
    };
    /**
     * Clones Edges of the complete graph
     * @return {?}
     */
    MapperService.prototype.cloneDeepEdges = function () {
        for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
            var edge = _a[_i];
            this.simplifiedEdges.push(_.cloneDeep(_.toPlainObject(edge)));
        }
    };
    /**
     * Checks if an Edge is valid (both source and target exist in the graph)
     * @param {?} jsonGraphEdge JSON-GRAPH Edge to be validated
     * @return {?} True if Edge is valid, false otherwise
     */
    MapperService.prototype.checkIfSourceAndTargetExist = function (jsonGraphEdge) {
        var /** @type {?} */ source = this.nodes.find(function (n) { return n.getId() === jsonGraphEdge['source']; });
        var /** @type {?} */ target = this.nodes.find(function (n) { return n.getId() === jsonGraphEdge['target']; });
        return (source && target) ? true : false;
    };
    return MapperService;
}());
MapperService.defaultDirection = 'BT';
MapperService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
MapperService.ctorParameters = function () { return []; };

var EVENTS = {
    'graphRendered': function (element) {
        var /** @type {?} */ event$$1 = new Event('graphRendered');
        dispatchEvent(element, event$$1);
    },
    'graphClicked': function (element, x, y) {
        var /** @type {?} */ event$$1 = new CustomEvent('graphClicked', {
            'detail': {
                'x': x,
                'y': y
            }
        });
        dispatchEvent(element, event$$1);
    },
    'nodeClicked': function (element, nodeId) {
        dispatchNodeEvent('nodeClicked', element, nodeId);
    },
    'nodeCtrlClicked': function (element, nodeId) {
        dispatchNodeEvent('nodeCtrlClicked', element, nodeId);
    },
    'edgeClicked': function (element, data) {
        dispatchEdgeEvent('edgeClicked', element, data);
    },
    'edgeCtrlClicked': function (element, data) {
        dispatchEdgeEvent('edgeCtrlClicked', element, data);
    }
};
/**
 * Dispatches a Node event
 * @param {?} eventName Name of the event to be dispatched
 * @param {?} element DOM element on which Node event must be dispatched
 * @param {?} nodeId Identifier of the Node related to the event
 * @return {?}
 */
function dispatchNodeEvent(eventName, element, nodeId) {
    var /** @type {?} */ event$$1 = new CustomEvent(eventName, {
        'detail': {
            'nodeId': nodeId
        }
    });
    dispatchEvent(element, event$$1);
}
/**
 * Dispatches an Edge event
 * @param {?} eventName Name of the event to be dispatched
 * @param {?} element DOM element on which Edge event must be dispatched
 * @param {?} data Data containing relevant source and target of the Edge related to the event
 * @return {?}
 */
function dispatchEdgeEvent(eventName, element, data) {
    var /** @type {?} */ event$$1 = new CustomEvent(eventName, {
        'detail': {
            'sourceId': data['sourceId'] || null,
            'targetId': data['targetId'] || null
        }
    });
    dispatchEvent(element, event$$1);
}
/**
 * Dispatches a DOM event
 * @param {?} element DOM element on which event must be dispatched
 * @param {?} event Event to be dispatched
 * @return {?}
 */
function dispatchEvent(element, event$$1) {
    element.dispatchEvent(event$$1);
}

var ALLOWED_SHAPES = ['rect', 'diamond', 'circle', 'ellipse'];
var SHAPES = {
    'entity': 'ellipse',
    'activity': 'rect',
    'agent': 'hexagon',
    'default': 'diamond'
};
var COLORS = {
    'entity': {
        'background': '#FFFC87',
        'border': '#808080'
    },
    'activity': {
        'background': '#9FB1FC',
        'border': 'blue'
    },
    'agent': {
        'background': '#FED37F',
        'border': 'black'
    },
    'default': {
        'background': 'white',
        'border': 'black'
    }
};

var DagreD3Renderer = (function () {
    function DagreD3Renderer() {
    }
    /**
     * Initializes the renderer
     * @param {?} containerElement DOM element where SVG will be attached
     * @param {?} data Object containing graph to render
     * @param {?=} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3Renderer.initialize = function (containerElement, data, options) {
        if (options === void 0) { options = {}; }
        DagreD3Renderer.flush();
        DagreD3Renderer.setParameters(containerElement, data, options);
        DagreD3Renderer.setEvents();
        DagreD3Renderer.setGraphClickEventListener();
        DagreD3Renderer.setShapes();
        DagreD3Renderer.formatNodes();
        DagreD3Renderer.formatEdges();
        DagreD3Renderer.constructGraph();
    };
    /**
     * Renders the graph
     * @param {?=} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3Renderer.renderGraph = function (options) {
        if (options === void 0) { options = {}; }
        DagreD3Renderer.render(DagreD3Renderer.group, DagreD3Renderer.graph);
        DagreD3Renderer.setNodesEvents();
        DagreD3Renderer.setEdgesEvents();
        DagreD3Renderer.formatText();
        DagreD3Renderer.setWidthAndHeight();
        DagreD3Renderer.setZoom();
        DagreD3Renderer.dispatch.call('graphRendered', this, DagreD3Renderer.containerElement);
    };
    /**
     * Fits the content of the graph to the container
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3Renderer.fit = function (delay) {
        if (delay === void 0) { delay = 0; }
        var /** @type {?} */ bounds = DagreD3Renderer.group.node().getBBox();
        var /** @type {?} */ parent = DagreD3Renderer.group.node().parentElement;
        var /** @type {?} */ fullWidth = parent.clientWidth || parent.parentNode.clientWidth; // OR statement is needed to make it compatible with Chrome and Firefox
        var /** @type {?} */ fullHeight = parent.clientHeight || parent.parentNode.clientHeight; // OR statement is needed to make it compatible with Chrome and Firefox
        var /** @type {?} */ width = bounds.width;
        var /** @type {?} */ height = bounds.height;
        var /** @type {?} */ midX = bounds.x + width / 2;
        var /** @type {?} */ midY = bounds.y + height / 2;
        if (width !== 0 && height !== 0) {
            var /** @type {?} */ scale = 0.95 / Math.max(width / fullWidth, height / fullHeight);
            var /** @type {?} */ translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];
            DagreD3Renderer.container.transition().duration(delay).call(DagreD3Renderer.zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
        }
    };
    /**
     * Zooms in the graph
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3Renderer.zoomIn = function (delay) {
        if (delay === void 0) { delay = 0; }
        DagreD3Renderer.container.transition().duration(delay).call(DagreD3Renderer.zoom.scaleBy, DagreD3Renderer.zoomInMultiplicator);
    };
    /**
     * Zooms out the graph
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3Renderer.zoomOut = function (delay) {
        if (delay === void 0) { delay = 0; }
        DagreD3Renderer.container.transition().duration(delay).call(DagreD3Renderer.zoom.scaleBy, DagreD3Renderer.zoomOutMultiplicator);
    };
    /**
     * Removes rendered graph if any
     * @return {?}
     */
    DagreD3Renderer.flush = function () {
        d3.select(DagreD3Renderer.containerElement).selectAll('svg').remove();
    };
    /**
     * Sets the options related to the renderer
     * @param {?} containerElement DOM element where SVG will be attached
     * @param {?} data Object containing graph to render
     * @param {?} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3Renderer.setParameters = function (containerElement, data, options) {
        DagreD3Renderer.data = data;
        DagreD3Renderer.zoomInMultiplicator = options['zoom-in'] || 1.5;
        DagreD3Renderer.zoomOutMultiplicator = options['zoom-out'] || 0.75;
        DagreD3Renderer.containerElement = containerElement;
        DagreD3Renderer.container = d3.select(DagreD3Renderer.containerElement).append('svg:svg');
        DagreD3Renderer.group = DagreD3Renderer.container.append('g');
        DagreD3Renderer.render = new dagreD3.render();
    };
    /**
     * Sets events attached to the graph
     * @return {?}
     */
    DagreD3Renderer.setEvents = function () {
        DagreD3Renderer.dispatch = d3.dispatch.apply(d3, /** @type {?} */ ((Object.keys(EVENTS))));
        for (var /** @type {?} */ eventName in EVENTS) {
            // For each event dispatched by the renderer, we fire the appropriate event from the container (DOM element)
            DagreD3Renderer.dispatch.on(eventName, EVENTS[eventName]);
        }
    };
    /**
     * Sets the click on the graph event
     * @return {?}
     */
    DagreD3Renderer.setGraphClickEventListener = function () {
        DagreD3Renderer.container.on('click', function () {
            // User clicked on the SVG element (graph)
            if (d3.event.srcElement.tagName == 'svg') {
                var /** @type {?} */ mousePosition = d3.mouse(this);
                // Data passed to the event: graph container, DOM element, mouse position (x and y coordinates)
                DagreD3Renderer.dispatch.call('graphClicked', DagreD3Renderer.container, DagreD3Renderer.containerElement, mousePosition[0], mousePosition[1]);
            }
        });
    };
    /**
     * Sets all custom shapes used by renderer (shapes are appended to the render function of the renderer)
     * @return {?}
     */
    DagreD3Renderer.setShapes = function () {
        // See dagre-d3 documentation and demo example for mode details
        DagreD3Renderer.render.shapes()['hexagon'] = function (parent, bbox, node) { return DagreD3Renderer.createHexagon(parent, bbox, node); };
    };
    /**
     * Creates and appends hexagon shape
     * @param {?} parent Parent element that will hosts the polygon
     * @param {?} bbox Bounding box of element
     * @param {?} node Node represented by the element on the graph
     * @return {?} Hexagon shape
     * IMPORTANT: parent is modified through the function (polygon representing the shape is inserted)
     */
    DagreD3Renderer.createHexagon = function (parent, bbox, node) {
        var /** @type {?} */ w = bbox.width;
        var /** @type {?} */ h = bbox.height;
        var /** @type {?} */ points = [{ x: 0, y: 0 }, { x: w, y: 0 }, { x: w, y: -h }, { x: w / 2, y: -h * 3 / 2 }, { x: 0, y: -h }];
        var /** @type {?} */ shape = parent.insert('polygon', ':first-child')
            .attr('points', points.map(function (d) { return d.x + ", " + d.y; }).join(' '))
            .attr('transform', "translate(" + -w / 2 + ", " + h * 3 / 4 + ")");
        node['intersect'] = function (point) { return dagreD3.intersect.polygon(node, points, point); };
        return shape;
    };
    /**
     * Formats all the Nodes
     * @return {?}
     */
    DagreD3Renderer.formatNodes = function () {
        if (DagreD3Renderer.data && DagreD3Renderer.data['nodes']) {
            DagreD3Renderer.data['nodes'].forEach(function (v) { return DagreD3Renderer.formatNode(v); });
        }
    };
    /**
     * Formats Node
     * @param {?} nodeId
     * @return {?}
     */
    DagreD3Renderer.formatNode = function (nodeId) {
        var /** @type {?} */ node = DagreD3Renderer.data['nodes'].find(function (v) { return v === nodeId; });
        DagreD3Renderer.setNodeShape(node);
        DagreD3Renderer.setNodeStyle(node);
    };
    /**
     * Sets the shape of the Node (by default, diamond is chosen)
     * @param {?} node Node for which shape must be set
     * IMPORTANT: Node is modified through the function (shape is set)
     * @return {?}
     */
    DagreD3Renderer.setNodeShape = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ subType = node.get('subType');
        var /** @type {?} */ shape = SHAPES[type] || SHAPES[subType] || (node.get('shape') && _.includes(ALLOWED_SHAPES, node.get('shape')) ? node.get('shape') : SHAPES['default']);
        node.set('shape', shape);
    };
    /**
     * Sets the style of the Node
     * @param {?} node Node for which style must be set
     * IMPORTANT: Node is modified by inner function
     * @return {?}
     */
    DagreD3Renderer.setNodeStyle = function (node) {
        DagreD3Renderer.setNodeColor(node);
    };
    /**
     * Sets the color of the Node (by default, background is in white and borders are in black)
     * @param {?} node Node for which color must be set
     * IMPORTANT: Node is modified through the function (style is set)
     * @return {?}
     */
    DagreD3Renderer.setNodeColor = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ subType = node.get('subType');
        var /** @type {?} */ colorProperties = COLORS[type] || COLORS[subType] || ((node.get('color') && _.isObject(node.get('color'))) ? node.get('color') : COLORS['default']);
        var /** @type {?} */ backgroundColor = colorProperties['background'] || COLORS['default']['background'];
        var /** @type {?} */ borderColor = colorProperties['border'] || COLORS['default']['border'];
        node.set('style', "fill: " + backgroundColor + "; stroke: " + borderColor + ";");
    };
    /**
     * Formats all the Edges
     * @return {?}
     */
    DagreD3Renderer.formatEdges = function () {
        if (DagreD3Renderer.data && DagreD3Renderer.data['edges']) {
            DagreD3Renderer.data['edges'].forEach(function (e) { return DagreD3Renderer.formatEdge(e); });
        }
    };
    /**
     * Formats an Edge
     * @param {?} edge Edge to be formatted
     * IMPORTANT: Edge is modified by inner function
     * @return {?}
     */
    DagreD3Renderer.formatEdge = function (edge) {
        DagreD3Renderer.setEdgeStyle(edge);
    };
    /**
     * Sets style of the Edge
     * @param {?} edge Edge for which style must be set
     * IMPORTANT: Edge is modified by inner function
     * @return {?}
     */
    DagreD3Renderer.setEdgeStyle = function (edge) {
        DagreD3Renderer.setEdgeColor(edge);
    };
    /**
     * Sets the color of the Edge
     * @param {?} edge Edge for which color must be set
     * IMPORTANT: Node is modified through the function (style is set)
     * @return {?}
     */
    DagreD3Renderer.setEdgeColor = function (edge) {
        edge.set('style', 'fill: none; stroke: black; stroke-width: 1.5px;');
    };
    /**
     * Constructs the graph (graph complies with graphlib format)
     * @return {?}
     */
    DagreD3Renderer.constructGraph = function () {
        DagreD3Renderer.graph = dagreD3.graphlib.json.read(DagreD3Renderer.data);
    };
    /**
     * Sets events attached to the Nodes
     * @return {?}
     */
    DagreD3Renderer.setNodesEvents = function () {
        var _this = this;
        d3.selectAll('.node')
            .on('contextmenu', function () {
            // We prevent the context menu from displaying when user CTRL+clicks
            d3.event.preventDefault();
        })
            .on('mousedown', function (nodeId) {
            d3.event.stopPropagation();
            if (d3.event.ctrlKey) {
                DagreD3Renderer.dispatch.call('nodeCtrlClicked', _this, DagreD3Renderer.containerElement, nodeId);
            }
            else {
                DagreD3Renderer.dispatch.call('nodeClicked', _this, DagreD3Renderer.containerElement, nodeId);
            }
        });
    };
    /**
     * Sets events attached to the Edges
     * @return {?}
     */
    DagreD3Renderer.setEdgesEvents = function () {
        var _this = this;
        d3.selectAll('.edgePath, .edgeLabel')
            .on('contextmenu', function () {
            // We prevent the context menu from displaying when user CTRL+clicks
            d3.event.preventDefault();
        })
            .on('mousedown', function (e) {
            d3.event.stopPropagation();
            var /** @type {?} */ data = {};
            data['sourceId'] = e['v'] || null; // v represents source (see graphlib specification)
            data['targetId'] = e['w'] || null; // w represents target (see graphlib specification)
            if (d3.event.ctrlKey) {
                DagreD3Renderer.dispatch.call('edgeCtrlClicked', _this, DagreD3Renderer.containerElement, data);
            }
            else {
                DagreD3Renderer.dispatch.call('edgeClicked', _this, DagreD3Renderer.containerElement, data);
            }
        });
    };
    /**
     * Formats text displayed on SVG element
     * @return {?}
     */
    DagreD3Renderer.formatText = function () {
        DagreD3Renderer.container.selectAll('svg text').style('font', "300 14px 'Helvetica Neue', Helvetica");
    };
    /**
     * Sets zoom functionality on the renderer
     * @return {?}
     */
    DagreD3Renderer.setZoom = function () {
        DagreD3Renderer.zoom = d3.zoom().on('zoom', function () { DagreD3Renderer.group.attr('transform', d3.event.transform); });
        DagreD3Renderer.container.call(DagreD3Renderer.zoom);
        DagreD3Renderer.fit(); // By default, graph fits within the container
    };
    /**
     * Sets the width and the height of the SVG element such that it fully expands
     * @return {?}
     */
    DagreD3Renderer.setWidthAndHeight = function () {
        DagreD3Renderer.container.attr('width', '100%').attr('height', '100%');
    };
    return DagreD3Renderer;
}());

var GraphComponent = (function () {
    /**
     * Constructor of DumperComponent
     * @param {?} mapperService Injection of Mapper service
     */
    function GraphComponent(mapperService) {
        this.mapperService = mapperService;
        this.mode = GraphComponent.defaultMode;
        this.initializeGraphEventsListeners();
    }
    /**
     * Lifecycle hook called when view of component has been fully initialized
     * (see Angular documentation: https://angular.io/docs/ts/latest/api/core/index/AfterViewInit-class.html)
     * @return {?}
     */
    GraphComponent.prototype.ngAfterViewInit = function () {
        this.setGraphEventsListeners();
    };
    /**
     * Lifecycle hook called when data-bound property of a directive changes
     * (see Angular documentation: https://angular.io/docs/ts/latest/api/core/index/OnChanges-class.html)
     * @param {?} changes
     * @return {?}
     */
    GraphComponent.prototype.ngOnChanges = function (changes) {
        this.rendering = true;
        this.error = false;
        this.createGraph();
        this.displayGraph();
    };
    /**
     * Changes the mode for rendering graph (swtich between simplified and extended versions)
     * @param {?} mode Selected mode for display
     * @return {?}
     */
    GraphComponent.prototype.changeMode = function (mode) {
        if (this.mode !== mode) {
            this.mode = (mode === GraphComponent.simplifiedMode || mode === GraphComponent.extendedMode) ? mode : GraphComponent.defaultMode;
            this.rendering = true;
            this.error = false;
            this.displayGraph();
        }
    };
    /**
     * Fits the content of the graph to the container with a delay of 500 ms
     * @return {?}
     */
    GraphComponent.prototype.fitContent = function () {
        DagreD3Renderer.fit(500);
    };
    /**
     * Zooms in the graph with a delay of 250 ms
     * @return {?}
     */
    GraphComponent.prototype.zoomIn = function () {
        DagreD3Renderer.zoomIn(250);
    };
    /**
     * Zooms out the graph with a delay of 250 ms
     * @return {?}
     */
    GraphComponent.prototype.zoomOut = function () {
        DagreD3Renderer.zoomOut(250);
    };
    /**
     * Initializes the EventEmitter attached to the graph
     * @return {?}
     */
    GraphComponent.prototype.initializeGraphEventsListeners = function () {
        for (var /** @type {?} */ eventName in EVENTS) {
            this["ng" + (eventName.charAt(0).toUpperCase() + eventName.slice(1))] = new _angular_core.EventEmitter();
        }
    };
    
    /**
     * Sets the events listeners attached to the graph
     * @return {?}
     */
    GraphComponent.prototype.setGraphEventsListeners = function () {
        var _this = this;
        var /** @type {?} */ element = this.svgContainer.nativeElement;
        // For graphRendered event, we append a specific event listener to inform component that rendering is done
        element.addEventListener('graphRendered', function (event$$1) {
            _this.rendering = false;
        });
        var _loop_1 = function (eventName) {
            element.addEventListener(eventName, function (event$$1) {
                _this["ng" + (eventName.charAt(0).toUpperCase() + eventName.slice(1))].emit(event$$1['detail'] || null);
            });
        };
        for (var /** @type {?} */ eventName in EVENTS) {
            _loop_1(/** @type {?} */ eventName);
        }
    };
    /**
     * Creates the graph based on data provided
     * @return {?}
     */
    GraphComponent.prototype.createGraph = function () {
        try {
            this.graph = this.mapperService.format(this.data);
        }
        catch (e) {
            this.handleError(e);
        }
    };
    /**
     * Displays the graph as SVG element
     * NOTE: By default, a delay of 500 ms is set before displaying graph for better user experience (loading icon does not disappear too rapidly when rendering is instant)
     * @return {?}
     */
    GraphComponent.prototype.displayGraph = function () {
        var _this = this;
        setTimeout(function () {
            try {
                var /** @type {?} */ graphToDisplay = _this.graph['provenance'] ? _this.graph[_this.mode] : _this.graph[GraphComponent.extendedMode];
                DagreD3Renderer.initialize(_this.svgContainer.nativeElement, graphToDisplay);
                DagreD3Renderer.renderGraph();
            }
            catch (e) {
                _this.handleError(e, true);
            }
        }, 500);
    };
    /**
     * Handles error
     * @param {?} exception Exception raised during creation or rendering of the graph
     * @param {?=} flush If set to true, any SVG element rendered in container is removed from it (default: false)
     * @return {?}
     */
    GraphComponent.prototype.handleError = function (exception, flush) {
        if (flush === void 0) { flush = false; }
        this.rendering = false;
        this.error = true;
        console.error(exception);
        if (flush) {
            DagreD3Renderer.flush();
        }
    };
    return GraphComponent;
}());
GraphComponent.defaultMode = 'simplified';
GraphComponent.simplifiedMode = 'simplified';
GraphComponent.extendedMode = 'extended';
GraphComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'graph',
                providers: [MapperService],
                inputs: ['data:graph'],
                outputs: ['ngGraphRendered', 'ngGraphClicked', 'ngNodeClicked', 'ngNodeCtrlClicked', 'ngEdgeClicked', 'ngEdgeCtrlClicked'],
                template: "<div class=\"rendering\" *ngIf=\"rendering\"> <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw fa-5x\"></i> </div> <div class=\"error\" *ngIf=\"error\"> <i class=\"fa fa fa-exclamation-circle fa-fw fa-5x\"></i> <br/> Graph could not be rendered. </div> <div ngbDropdown class=\"select-view\" *ngIf=\"!rendering && !error && graph && graph['provenance']\"> <button id=\"selectView\" class=\"btn btn-primary\" ngbDropdownToggle>Mode</button> <div class=\"dropdown-menu\" aria-labelledby=\"selectView\"> <button id=\"simplifiedMode\" class=\"dropdown-item text-center\" [class.selected]=\"this.mode==='simplified'\" (click)=\"changeMode('simplified')\">Simplified</button> <button id=\"extendedMode\" class=\"dropdown-item text-center\" [class.selected]=\"this.mode==='extended'\" (click)=\"changeMode('extended')\">Extended</button> </div> </div> <div id=\"zoom-controls\" *ngIf=\"!rendering && !error\"> <button id=\"zoom-fit\" class=\"btn btn-primary\" (click)=\"fitContent()\"><i class=\"fa fa-arrows-alt\"></i></button> <button id=\"zoom-in\" class=\"btn btn-primary\" (click)=\"zoomIn()\"><i class=\"fa fa-search-plus\"></i></button> <button id=\"zoom-out\" class=\"btn btn-primary\" (click)=\"zoomOut()\"><i class=\"fa fa-search-minus\"></i></button> </div> <div #svgContainer id=\"svg-container\"></div> ",
                styles: [":host { height: 100%; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; border: 1px solid rgba(0, 0, 0, 0.15); overflow: hidden; } .rendering, .error { width: 100%; height: 100%; position: absolute; top: 0; left: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; } .rendering { background-color: rgba(0, 0, 0, 0.025); } .error { background-color: rgba(255, 0, 0, 0.05); } .rendering > i { align-self: center; color: #0275d8; } .select-view { position: absolute; top: 0; right: 0; padding-top: 10px; padding-right: 10px; } .select-view > .dropdown-menu { left: auto; right: 10px; } .selected { color: white; background-color: #0275d8; } #svg-container { width: 100%; height: 100%; margin: 20px; } #zoom-controls { display: flex; flex-direction: column; position: absolute; top: 0; left: 0; padding-left: 10px; } #zoom-controls > button { margin-top: 10px; } "]
            },] },
];
/**
 * @nocollapse
 */
GraphComponent.ctorParameters = function () { return [
    { type: MapperService, },
]; };
GraphComponent.propDecorators = {
    'svgContainer': [{ type: _angular_core.ViewChild, args: ['svgContainer',] },],
};

var ProvVizModule = (function () {
    function ProvVizModule() {
    }
    /**
     * @return {?}
     */
    ProvVizModule.forRoot = function () {
        return {
            ngModule: ProvVizModule
        };
    };
    return ProvVizModule;
}());
ProvVizModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule,
                    _ngBootstrap_ngBootstrap.NgbModule.forRoot()
                ],
                declarations: [
                    GraphComponent
                ],
                exports: [
                    GraphComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ProvVizModule.ctorParameters = function () { return []; };

exports.ProvVizModule = ProvVizModule;
exports.GraphComponent = GraphComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
