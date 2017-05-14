import { Component, EventEmitter, Injectable, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { cloneDeep, includes, toPlainObject } from 'lodash';
import * as _ from 'lodash';
import { v1 } from 'uuid';
import * as uuid from 'uuid';
import { dispatch, event, mouse, select, selectAll, zoom, zoomIdentity } from 'd3';
import * as d3 from 'd3';
import { graphlib, intersect, render } from 'dagre-d3';
import * as dagreD3 from 'dagre-d3';

var Node = (function () {
    /**
     * @param {?} type
     * @param {?=} subType
     * @param {?=} id
     * @param {?=} label
     */
    function Node(type, subType, id, label) {
        this.v = id || "temp_" + v1();
        this.value = {};
        this.value['type'] = type;
        this.value['label'] = label || this.getLabel();
        this.value['subType'] = subType || null;
    }
    /**
     * @return {?}
     */
    Node.prototype.getId = function () {
        return this.v;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    Node.prototype.setId = function (id) {
        this.v = id;
    };
    /**
     * @return {?}
     */
    Node.prototype.getType = function () {
        return this.value['type'];
    };
    /**
     * @return {?}
     */
    Node.prototype.getLabel = function () {
        return this.value['label'] || this.value['type'].toUpperCase();
    };
    /**
     * @param {?} property
     * @return {?}
     */
    Node.prototype.get = function (property) {
        return this.value[property];
    };
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    Node.prototype.set = function (property, value) {
        this.value[property] = value;
    };
    /**
     * @param {?} property
     * @param {?} element
     * @param {?=} key
     * @return {?}
     */
    Node.prototype.append = function (property, element, key) {
        if (this.value[property]) {
            this.appendElement(property, element, key);
        }
    };
    /**
     * @param {?} property
     * @param {?} element
     * @param {?=} key
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
     * @param {?} source
     * @param {?} target
     * @param {?=} label
     */
    function Edge(source, target, label) {
        this.v = source;
        this.w = target;
        this.value = {};
        this.value['label'] = label || this.getLabel();
    }
    /**
     * @return {?}
     */
    Edge.prototype.getSource = function () {
        return this.v;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    Edge.prototype.setSource = function (source) {
        this.v = source;
    };
    /**
     * @return {?}
     */
    Edge.prototype.getTarget = function () {
        return this.w;
    };
    /**
     * @param {?} target
     * @return {?}
     */
    Edge.prototype.setTarget = function (target) {
        this.w = target;
    };
    /**
     * @return {?}
     */
    Edge.prototype.getLabel = function () {
        return this.value['label'] || '';
    };
    /**
     * @param {?} property
     * @return {?}
     */
    Edge.prototype.get = function (property) {
        return this.value[property];
    };
    /**
     * @param {?} property
     * @param {?} value
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
     * @param {?=} input
     * @return {?}
     */
    MapperService.prototype.format = function (input) {
        if (input) {
            this.input = input;
            this.createCompleteGraph();
            this.createSimplifiedGraph();
            return { simplified: this.simplifiedGraph, extended: this.completeGraph };
        }
        else {
            return null;
        }
    };
    /**
     * @return {?}
     */
    MapperService.prototype.createCompleteGraph = function () {
        this.convertNodesAndEdges();
        this.completeGraph = { value: { rankdir: 'BT' }, nodes: this.nodes, edges: this.edges };
    };
    /**
     * @return {?}
     */
    MapperService.prototype.createSimplifiedGraph = function () {
        this.convertNodesAndEdgesForSimpleGraph();
        this.simplifiedGraph = { value: { rankdir: 'BT' }, nodes: this.simplifiedNodes, edges: this.simplifiedEdges };
    };
    /**
     * @return {?}
     */
    MapperService.prototype.convertNodesAndEdges = function () {
        this.nodes = new Array();
        this.simplifiedNodes = new Array();
        this.edges = new Array();
        this.simplifiedEdges = new Array();
        if (this.input['graph']['nodes']) {
            this.convertNodes();
        }
        if (this.input['graph']['edges']) {
            this.convertEdges();
        }
    };
    /**
     * @return {?}
     */
    MapperService.prototype.convertNodes = function () {
        for (var _i = 0, _a = this.input['graph']['nodes']; _i < _a.length; _i++) {
            var jsonGraphNode = _a[_i];
            var /** @type {?} */ type = jsonGraphNode['type'];
            var /** @type {?} */ subType = (jsonGraphNode['metadata'] && jsonGraphNode['metadata']['subType']) || null;
            var /** @type {?} */ label = jsonGraphNode['label'] || null;
            var /** @type {?} */ node = new Node(type, subType, jsonGraphNode['id'], label);
            for (var /** @type {?} */ key in jsonGraphNode['metadata']) {
                node.set(key, jsonGraphNode['metadata'][key]);
            }
            node.set('labelType', 'html');
            this.appendNode(node);
        }
    };
    /**
     * @return {?}
     */
    MapperService.prototype.convertEdges = function () {
        for (var _i = 0, _a = this.input['graph']['edges']; _i < _a.length; _i++) {
            var jsonGraphEdge = _a[_i];
            if (this.checkIfSourceAndTargetExist(jsonGraphEdge)) {
                var /** @type {?} */ edge = new Edge(jsonGraphEdge['source'], jsonGraphEdge['target']);
                for (var /** @type {?} */ key in jsonGraphEdge['metadata']) {
                    edge.set(key, jsonGraphEdge['metadata'][key]);
                }
                this.appendEdge(edge);
            }
        }
    };
    /**
     * @return {?}
     */
    MapperService.prototype.convertNodesAndEdgesForSimpleGraph = function () {
        this.removeAgents();
        this.mergeDatasetsAndRelatedResources();
        this.removeActivities();
    };
    /**
     * @return {?}
     */
    MapperService.prototype.removeAgents = function () {
        var /** @type {?} */ agentsId = this.simplifiedNodes.filter(function (n) { return n.getType() === 'agent'; }).map(function (n) { return n.getId(); });
        this.simplifiedNodes = this.simplifiedNodes.filter(function (n) { return !includes(agentsId, n.getId()); });
        this.simplifiedEdges = this.simplifiedEdges.filter(function (e) { return !(includes(agentsId, e.getSource()) && !(includes(agentsId, e.getTarget()))); });
    };
    /**
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
     * @param {?} dataset
     * @return {?}
     */
    MapperService.prototype.mergeDatasetAndRelatedResources = function (dataset) {
        var /** @type {?} */ resourcesId = this.simplifiedEdges.filter(function (e) { return e.getTarget() === dataset.getId(); }).map(function (e) { return e.getSource(); });
        if (Array.isArray(resourcesId) && resourcesId.length) {
            var /** @type {?} */ resources = this.simplifiedNodes.filter(function (n) { return includes(resourcesId, n.getId()); });
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
     * @param {?} dataset
     * @param {?} resource
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
     * @param {?} dataset
     * @param {?} resources
     * @return {?}
     */
    MapperService.prototype.changeLabelOfDataset = function (dataset, resources) {
        dataset.append('label', "<br>" + resources.length + " resource" + (resources.length > 1 ? 's' : ''));
    };
    /**
     * @param {?} resourcesId
     * @return {?}
     */
    MapperService.prototype.removeResourcesFromSimplifiedGraph = function (resourcesId) {
        this.simplifiedNodes = this.simplifiedNodes.filter(function (n) { return !includes(resourcesId, n.getId()); });
        this.simplifiedEdges = this.simplifiedEdges.filter(function (e) { return !includes(resourcesId, e.getSource()) && !includes(resourcesId, e.getTarget()); });
    };
    /**
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
     * @param {?} activity
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
     * @param {?} node
     * @return {?}
     */
    MapperService.prototype.appendNode = function (node) {
        this.nodes.push(node);
        this.simplifiedNodes.push(cloneDeep(toPlainObject(node)));
    };
    /**
     * @param {?} edge
     * @return {?}
     */
    MapperService.prototype.appendEdge = function (edge) {
        this.edges.push(edge);
        this.simplifiedEdges.push(cloneDeep(toPlainObject(edge)));
    };
    /**
     * @param {?} jsonGraphEdge
     * @return {?}
     */
    MapperService.prototype.checkIfSourceAndTargetExist = function (jsonGraphEdge) {
        var /** @type {?} */ source = this.nodes.find(function (n) { return n.getId() === jsonGraphEdge['source']; });
        var /** @type {?} */ target = this.nodes.find(function (n) { return n.getId() === jsonGraphEdge['target']; });
        return (source && target) ? true : false;
    };
    return MapperService;
}());
MapperService.decorators = [
    { type: Injectable },
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
 * @param {?} eventName
 * @param {?} element
 * @param {?} nodeId
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
 * @param {?} eventName
 * @param {?} element
 * @param {?} data
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
 * @param {?} element
 * @param {?} event
 * @return {?}
 */
function dispatchEvent(element, event$$1) {
    element.dispatchEvent(event$$1);
}

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
     * @param {?} containerElement
     * @param {?} data
     * @param {?=} options
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
     * @param {?=} options
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
     * @param {?=} delay
     * @return {?}
     */
    DagreD3Renderer.fit = function (delay) {
        if (delay === void 0) { delay = 0; }
        var /** @type {?} */ bounds = DagreD3Renderer.group.node().getBBox();
        var /** @type {?} */ parent = DagreD3Renderer.group.node().parentElement;
        var /** @type {?} */ fullWidth = parent.clientWidth || parent.parentNode.clientWidth;
        var /** @type {?} */ fullHeight = parent.clientHeight || parent.parentNode.clientHeight;
        var /** @type {?} */ width = bounds.width;
        var /** @type {?} */ height = bounds.height;
        var /** @type {?} */ midX = bounds.x + width / 2;
        var /** @type {?} */ midY = bounds.y + height / 2;
        if (width !== 0 && height !== 0) {
            var /** @type {?} */ scale = 0.95 / Math.max(width / fullWidth, height / fullHeight);
            var /** @type {?} */ translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];
            DagreD3Renderer.container.transition().duration(delay).call(DagreD3Renderer.zoom.transform, zoomIdentity.translate(translate[0], translate[1]).scale(scale));
        }
    };
    /**
     * @param {?=} delay
     * @return {?}
     */
    DagreD3Renderer.zoomIn = function (delay) {
        if (delay === void 0) { delay = 0; }
        DagreD3Renderer.container.transition().duration(delay).call(DagreD3Renderer.zoom.scaleBy, DagreD3Renderer.zoomInMultiplicator);
    };
    /**
     * @param {?=} delay
     * @return {?}
     */
    DagreD3Renderer.zoomOut = function (delay) {
        if (delay === void 0) { delay = 0; }
        DagreD3Renderer.container.transition().duration(delay).call(DagreD3Renderer.zoom.scaleBy, DagreD3Renderer.zoomOutMultiplicator);
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.flush = function () {
        select(DagreD3Renderer.containerElement).selectAll('svg').remove();
    };
    /**
     * @param {?} containerElement
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    DagreD3Renderer.setParameters = function (containerElement, data, options) {
        DagreD3Renderer.data = data;
        DagreD3Renderer.zoomInMultiplicator = options['zoom-in'] || 1.5;
        DagreD3Renderer.zoomOutMultiplicator = options['zoom-out'] || 0.75;
        DagreD3Renderer.containerElement = containerElement;
        DagreD3Renderer.container = select(DagreD3Renderer.containerElement).append('svg:svg');
        DagreD3Renderer.group = DagreD3Renderer.container.append('g');
        DagreD3Renderer.render = new render();
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.setEvents = function () {
        DagreD3Renderer.dispatch = dispatch.apply(d3, /** @type {?} */ ((Object.keys(EVENTS))));
        for (var /** @type {?} */ eventName in EVENTS) {
            DagreD3Renderer.dispatch.on(eventName, EVENTS[eventName]);
        }
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.setGraphClickEventListener = function () {
        DagreD3Renderer.container.on('click', function () {
            if (event.srcElement.tagName == 'svg') {
                var /** @type {?} */ mousePosition = mouse(this);
                DagreD3Renderer.dispatch.call('graphClicked', DagreD3Renderer.container, DagreD3Renderer.containerElement, mousePosition[0], mousePosition[1]);
            }
        });
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.setShapes = function () {
        DagreD3Renderer.render.shapes()['hexagon'] = function (parent, bbox, node) { return DagreD3Renderer.createHexagon(parent, bbox, node); };
    };
    /**
     * @param {?} parent
     * @param {?} bbox
     * @param {?} node
     * @return {?}
     */
    DagreD3Renderer.createHexagon = function (parent, bbox, node) {
        var /** @type {?} */ w = bbox.width;
        var /** @type {?} */ h = bbox.height;
        var /** @type {?} */ points = [{ x: 0, y: 0 }, { x: w, y: 0 }, { x: w, y: -h }, { x: w / 2, y: -h * 3 / 2 }, { x: 0, y: -h }];
        var /** @type {?} */ shape = parent.insert('polygon', ':first-child')
            .attr('points', points.map(function (d) { return d.x + ", " + d.y; }).join(' '))
            .attr('transform', "translate(" + -w / 2 + ", " + h * 3 / 4 + ")");
        node['intersect'] = function (point) { return intersect.polygon(node, points, point); };
        return shape;
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.formatNodes = function () {
        if (DagreD3Renderer.data && DagreD3Renderer.data['nodes']) {
            DagreD3Renderer.data['nodes'].forEach(function (v) { return DagreD3Renderer.formatNode(v); });
        }
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    DagreD3Renderer.formatNode = function (nodeId) {
        var /** @type {?} */ node = DagreD3Renderer.data['nodes'].find(function (v) { return v === nodeId; });
        DagreD3Renderer.setNodeShape(node);
        DagreD3Renderer.setNodeStyle(node);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DagreD3Renderer.setNodeShape = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ subType = node.get('subType');
        var /** @type {?} */ shape = SHAPES[type] || SHAPES[subType] || SHAPES['default'];
        node.set('shape', shape);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DagreD3Renderer.setNodeStyle = function (node) {
        DagreD3Renderer.setNodeColor(node);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DagreD3Renderer.setNodeColor = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ subType = node.get('subType');
        var /** @type {?} */ colorProperties = COLORS[type] || COLORS[subType] || COLORS['default'];
        var /** @type {?} */ backgroundColor = colorProperties['background'];
        var /** @type {?} */ borderColor = colorProperties['border'];
        node.set('style', "fill: " + backgroundColor + "; stroke: " + borderColor + ";");
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.formatEdges = function () {
        if (DagreD3Renderer.data && DagreD3Renderer.data['edges']) {
            DagreD3Renderer.data['edges'].forEach(function (e) { return DagreD3Renderer.formatEdge(e); });
        }
    };
    /**
     * @param {?} edge
     * @return {?}
     */
    DagreD3Renderer.formatEdge = function (edge) {
        DagreD3Renderer.setEdgeStyle(edge);
    };
    /**
     * @param {?} edge
     * @return {?}
     */
    DagreD3Renderer.setEdgeStyle = function (edge) {
        DagreD3Renderer.setEdgeColor(edge);
    };
    /**
     * @param {?} edge
     * @return {?}
     */
    DagreD3Renderer.setEdgeColor = function (edge) {
        edge.set('style', "fill: none; stroke: black; stroke-width: 1.5px;");
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.constructGraph = function () {
        DagreD3Renderer.graph = graphlib.json.read(DagreD3Renderer.data);
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.setNodesEvents = function () {
        var _this = this;
        selectAll('.node')
            .on('contextmenu', function () {
            event.preventDefault();
        })
            .on('mousedown', function (nodeId) {
            event.stopPropagation();
            if (event.ctrlKey) {
                DagreD3Renderer.dispatch.call('nodeCtrlClicked', _this, DagreD3Renderer.containerElement, nodeId);
            }
            else {
                DagreD3Renderer.dispatch.call('nodeClicked', _this, DagreD3Renderer.containerElement, nodeId);
            }
        });
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.setEdgesEvents = function () {
        var _this = this;
        selectAll('.edgePath, .edgeLabel')
            .on('contextmenu', function () {
            event.preventDefault();
        })
            .on('mousedown', function (e) {
            event.stopPropagation();
            var /** @type {?} */ data = {};
            data['sourceId'] = e['v'] || null;
            data['targetId'] = e['w'] || null;
            if (event.ctrlKey) {
                DagreD3Renderer.dispatch.call('edgeCtrlClicked', _this, DagreD3Renderer.containerElement, data);
            }
            else {
                DagreD3Renderer.dispatch.call('edgeClicked', _this, DagreD3Renderer.containerElement, data);
            }
        });
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.formatText = function () {
        DagreD3Renderer.container.selectAll('svg text').style('font', "300 14px 'Helvetica Neue', Helvetica");
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.setZoom = function () {
        DagreD3Renderer.zoom = zoom().on('zoom', function () { DagreD3Renderer.group.attr('transform', event.transform); });
        DagreD3Renderer.container.call(DagreD3Renderer.zoom);
        DagreD3Renderer.fit();
    };
    /**
     * @return {?}
     */
    DagreD3Renderer.setWidthAndHeight = function () {
        DagreD3Renderer.container.attr('width', '100%').attr('height', '100%');
    };
    return DagreD3Renderer;
}());

var GraphComponent = (function () {
    /**
     * @param {?} mapperService
     */
    function GraphComponent(mapperService) {
        this.mapperService = mapperService;
        this.mode = GraphComponent.defaultMode;
        this.initializeGraphEventsListeners();
    }
    /**
     * @return {?}
     */
    GraphComponent.prototype.ngAfterViewInit = function () {
        this.setGraphEventsListeners();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GraphComponent.prototype.ngOnChanges = function (changes) {
        this.rendering = true;
        this.createGraph();
        this.displayGraph();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    GraphComponent.prototype.changeMode = function (mode) {
        if (this.mode !== mode) {
            this.mode = (mode === 'simplified' || mode === 'extended') ? mode : GraphComponent.defaultMode;
            this.rendering = true;
            this.displayGraph();
        }
    };
    /**
     * @return {?}
     */
    GraphComponent.prototype.fitContent = function () {
        DagreD3Renderer.fit(500);
    };
    /**
     * @return {?}
     */
    GraphComponent.prototype.zoomIn = function () {
        DagreD3Renderer.zoomIn(250);
    };
    /**
     * @return {?}
     */
    GraphComponent.prototype.zoomOut = function () {
        DagreD3Renderer.zoomOut(250);
    };
    /**
     * @return {?}
     */
    GraphComponent.prototype.initializeGraphEventsListeners = function () {
        for (var /** @type {?} */ eventName in EVENTS) {
            this["ng" + (eventName.charAt(0).toUpperCase() + eventName.slice(1))] = new EventEmitter();
        }
    };
    
    /**
     * @return {?}
     */
    GraphComponent.prototype.setGraphEventsListeners = function () {
        var _this = this;
        var /** @type {?} */ element = this.svgContainer.nativeElement;
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
     * @return {?}
     */
    GraphComponent.prototype.createGraph = function () {
        this.graph = this.mapperService.format(this.data);
    };
    /**
     * @return {?}
     */
    GraphComponent.prototype.displayGraph = function () {
        var _this = this;
        setTimeout(function () {
            DagreD3Renderer.initialize(_this.svgContainer.nativeElement, _this.graph[_this.mode]);
            DagreD3Renderer.renderGraph();
        }, 500);
    };
    return GraphComponent;
}());
GraphComponent.defaultMode = 'simplified';
GraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'graph',
                providers: [MapperService],
                inputs: ['data:graph'],
                outputs: ['ngGraphRendered', 'ngGraphClicked', 'ngNodeClicked', 'ngNodeCtrlClicked', 'ngEdgeClicked', 'ngEdgeCtrlClicked'],
                template: "<div class=\"rendering\" *ngIf=\"rendering\"> <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw fa-5x\"></i> </div> <div ngbDropdown class=\"select-view\" *ngIf=\"!rendering\"> <button id=\"selectView\" class=\"btn btn-primary\" ngbDropdownToggle>Mode</button> <div class=\"dropdown-menu\" aria-labelledby=\"selectView\"> <button id=\"simplifiedMode\" class=\"dropdown-item text-center\" [class.selected]=\"this.mode==='simplified'\" (click)=\"changeMode('simplified')\">Simplified</button> <button id=\"extendedMode\" class=\"dropdown-item text-center\" [class.selected]=\"this.mode==='extended'\" (click)=\"changeMode('extended')\">Extended</button> </div> </div> <div id=\"zoom-controls\" *ngIf=\"!rendering\"> <button id=\"zoom-fit\" class=\"btn btn-primary\" (click)=\"fitContent()\"><i class=\"fa fa-arrows-alt\"></i></button> <button id=\"zoom-in\" class=\"btn btn-primary\" (click)=\"zoomIn()\"><i class=\"fa fa-search-plus\"></i></button> <button id=\"zoom-out\" class=\"btn btn-primary\" (click)=\"zoomOut()\"><i class=\"fa fa-search-minus\"></i></button> </div> <div #svgContainer id=\"svg-container\"></div> ",
                styles: [":host { height: 100%; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; border: 1px solid rgba(0, 0, 0, 0.15); overflow: hidden; } .rendering { width: 100%; height: 100%; position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; background-color: rgba(0, 0, 0, 0.025); } .rendering > i { align-self: center; color: #0275d8; } .select-view { position: absolute; top: 0; right: 0; padding-top: 10px; padding-right: 10px; } .select-view > .dropdown-menu { left: auto; right: 10px; } .selected { color: white; background-color: #0275d8; } #svg-container { width: 100%; height: 100%; margin: 20px; } #zoom-controls { display: flex; flex-direction: column; position: absolute; top: 0; left: 0; padding-left: 10px; } #zoom-controls > button { margin-top: 10px; } "]
            },] },
];
/**
 * @nocollapse
 */
GraphComponent.ctorParameters = function () { return [
    { type: MapperService, },
]; };
GraphComponent.propDecorators = {
    'svgContainer': [{ type: ViewChild, args: ['svgContainer',] },],
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NgbModule.forRoot()
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

export { ProvVizModule, GraphComponent };
