import { Component, EventEmitter, Injectable, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { cloneDeep, concat, includes, isObject, remove, toPlainObject } from 'lodash';
import * as _ from 'lodash';
import { dispatch, event, mouse, select, selectAll, zoom, zoomIdentity } from 'd3';
import * as d3 from 'd3';
import { graphlib, intersect, render } from 'dagre-d3';
import * as dagreD3 from 'dagre-d3';

var EXPAND_DATA = {
    "7212ff61-b2f6-461f-8f4e-ffdae735e3d4": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "type": "activity",
                    "label": "<b>Generation of slice mpg141017_a1-2 for the reconstruction of rat hippocampus CA1 pyramidal cell morphology</b>",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "bundle_parent_3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "type": "agent",
                    "label": "<h5>2 CONTRIBUTORS</h5><b>Maurizio Rezzoli</b><br><b>Olivier Hagens</b>",
                    "metadata": {
                        "members": [
                            {
                                "id": "1c4d3683-dcfc-489f-adbb-5de815b1b89a",
                                "type": "agent",
                                "metadata": {
                                    "subType": "contributor"
                                }
                            },
                            {
                                "id": "2d16451c-6661-4b9a-aa7b-e4804386f577",
                                "type": "agent",
                                "metadata": {
                                    "subType": "contributor"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "807ded58-579d-452d-8dd2-a5568689b2bb",
                    "type": "entity",
                    "label": "<b>Rattus norvegicus</b><br><br><h5>SUBJECT</h5>",
                    "metadata": {
                        "subType": "specimen"
                    }
                },
                {
                    "id": "7212ff61-b2f6-461f-8f4e-ffdae735e3d4",
                    "type": "entity",
                    "label": "<b>Brain slice<br>mpg141017_a1-2<br><br><h5>SAMPLE</h5>",
                    "metadata": {
                        "subType": "sample",
                        "links": [
                            {
                                "rel": "up",
                                "href": "<HTTP>"
                            },
                            {
                                "rel": "down",
                                "href": "<HTTP>"
                            }
                        ]
                    }
                }
            ],
            "edges": [
                {
                    "source": "bundle_parent_3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "target": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "target": "807ded58-579d-452d-8dd2-a5568689b2bb",
                    "metadata": {
                        "label": "used"
                    }
                },
                {
                    "source": "7212ff61-b2f6-461f-8f4e-ffdae735e3d4",
                    "target": "3ee4bf2a-c8d0-4f10-b3b3-46b7151b4ea0",
                    "metadata": {
                        "label": "was generated from"
                    }
                }
            ]
        }
    },
    "78d02e77-98d0-430d-8516-8c712e06b002": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "78d02e77-98d0-430d-8516-8c712e06b002",
                    "type": "entity",
                    "label": "<b>Single cell</b><br>mpg141017_a1-2_idC<br><br><h5>SAMPLE</h5>",
                    "metadata": {
                        "subType": "sample"
                    }
                },
                {
                    "id": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "type": "activity",
                    "label": "<b>Reconstruction of rat hippocampus CA1 pyramidal cell mpg141017_a1-2_idC morphology</b>",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "bundle_parent_d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "type": "agent",
                    "label": "<h5>2 CONTRIBUTORS</h5><b>Ying Shi</b><br><b>Caroline Violot</b>",
                    "metadata": {
                        "members": [
                            {
                                "id": "03b67cb6-db1a-4acd-a628-8dd3e5f3ee12",
                                "type": "agent",
                                "metadata": {
                                    "subType": "contributor"
                                }
                            },
                            {
                                "id": "e58145a0-b78d-4b8a-bfda-fc4d32c7206b",
                                "type": "agent",
                                "metadata": {
                                    "subType": "contributor"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "6a14755f-19d7-4516-85e4-c8a01a1a3a2d",
                    "type": "entity",
                    "label": "<b>Single cell morphology reconstruction</b><br><br><h5>DATASET</h5>",
                    "metadata": {
                        "subType": "dataset"
                    }
                },
                {
                    "id": "f057227a-3623-45f8-99b1-4b241a800daf",
                    "type": "entity",
                    "label": "<b>Morphology localization</b><br><br><h5>DATASET</h5>",
                    "metadata": {
                        "subType": "dataset"
                    }
                },
                {
                    "id": "814fd236-04d2-4b20-9b7e-5c45789f33b6",
                    "label": "<b>mpg141017_a1-2_idC.ASC</b><br>2.74 MB<br><br><h5>FILE</h5>",
                    "type": "entity",
                    "metadata": {
                        "subType": "resource"
                    }
                },
                {
                    "id": "ab6373b4-b4be-450a-b094-02b37e9ed406",
                    "type": "entity",
                    "label": "<b>mpg141017_a1-2_idC.jpg</b><br>494 kB<br><br><h5>FILE</h5>",
                    "metadata": {
                        "subType": "resource"
                    }
                }
            ],
            "edges": [
                {
                    "source": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "target": "78d02e77-98d0-430d-8516-8c712e06b002",
                    "metadata": {
                        "label": "used"
                    }
                },
                {
                    "source": "bundle_parent_d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "target": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "6a14755f-19d7-4516-85e4-c8a01a1a3a2d",
                    "target": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "metadata": {
                        "label": "was generated from"
                    }
                },
                {
                    "source": "f057227a-3623-45f8-99b1-4b241a800daf",
                    "target": "d18742a9-fce3-4e5f-a420-781c68cab24b",
                    "metadata": {
                        "label": "was generated from"
                    }
                },
                {
                    "source": "814fd236-04d2-4b20-9b7e-5c45789f33b6",
                    "target": "6a14755f-19d7-4516-85e4-c8a01a1a3a2d",
                    "metadata": {
                        "label": "was generated from"
                    }
                },
                {
                    "source": "ab6373b4-b4be-450a-b094-02b37e9ed406",
                    "target": "f057227a-3623-45f8-99b1-4b241a800daf",
                    "metadata": {
                        "label": "is representation of"
                    }
                }
            ]
        }
    },
    "1dad440b-5dc3-490e-8cbc-1f21f69bcf0f": {
        "graph": {
            "type": "Provenance",
            "directed": true,
            "nodes": [
                {
                    "id": "1dad440b-5dc3-490e-8cbc-1f21f69bcf0f",
                    "type": "entity",
                    "label": "<b>Single cell</b><br>mpg141017_a1-2_idA<br><br><h5>SAMPLE</h5>",
                    "metadata": {
                        "subType": "sample"
                    }
                },
                {
                    "id": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "type": "activity",
                    "label": "<b>Reconstruction of rat hippocampus CA1 pyramidal cell mpg141017_a1-2_idA morphology</b>",
                    "metadata": {
                        "subType": "BBP Activity"
                    }
                },
                {
                    "id": "bundle_parent_585764f2-bf67-4338-b798-a9137404dcc4",
                    "type": "agent",
                    "label": "<h5>2 CONTRIBUTORS</h5><b>Ying Shi</b><br><b>Caroline Violot</b>",
                    "metadata": {
                        "members": [
                            {
                                "id": "03b67cb6-db1a-4acd-a628-8dd3e5f3ee12",
                                "type": "agent",
                                "metadata": {
                                    "subType": "contributor"
                                }
                            },
                            {
                                "id": "e58145a0-b78d-4b8a-bfda-fc4d32c7206b",
                                "type": "agent",
                                "metadata": {
                                    "subType": "contributor"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "f53b8016-6e30-4e17-a290-773c48775eda",
                    "type": "entity",
                    "label": "<b>Single cell morphology reconstruction</b><br><br><h5>DATASET</h5>",
                    "metadata": {
                        "subType": "dataset"
                    }
                },
                {
                    "id": "81a9e656-4794-4d4e-a710-81f22d477de2",
                    "type": "entity",
                    "label": "<b>Morphology localization</b><br><br><h5>DATASET</h5>",
                    "metadata": {
                        "subType": "dataset"
                    }
                },
                {
                    "id": "00f5f991-22c2-4c23-9da2-6b181a13e053",
                    "type": "entity",
                    "label": "<b>mpg141017_a1-2_idA.ASC</b><br>1.75 MB<br><br><h5>FILE</h5>",
                    "metadata": {
                        "subType": "resource"
                    }
                },
                {
                    "id": "a20c1cea-54b1-47f7-8ce3-0f00ce8fbc73",
                    "type": "entity",
                    "label": "<b>mpg141017_a1-2_idA.jpg</b><br>486 kB<br><br><h5>FILE</h5>",
                    "metadata": {
                        "subType": "resource"
                    }
                }
            ],
            "edges": [
                {
                    "source": "bundle_parent_585764f2-bf67-4338-b798-a9137404dcc4",
                    "target": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "metadata": {
                        "label": "was associated to"
                    }
                },
                {
                    "source": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "target": "1dad440b-5dc3-490e-8cbc-1f21f69bcf0f",
                    "metadata": {
                        "label": "used"
                    }
                },
                {
                    "source": "f53b8016-6e30-4e17-a290-773c48775eda",
                    "target": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "metadata": {
                        "label": "used"
                    }
                },
                {
                    "source": "81a9e656-4794-4d4e-a710-81f22d477de2",
                    "target": "585764f2-bf67-4338-b798-a9137404dcc4",
                    "metadata": {
                        "label": "is representation of"
                    }
                },
                {
                    "source": "00f5f991-22c2-4c23-9da2-6b181a13e053",
                    "target": "f53b8016-6e30-4e17-a290-773c48775eda",
                    "metadata": {
                        "label": "is representation of"
                    }
                },
                {
                    "source": "a20c1cea-54b1-47f7-8ce3-0f00ce8fbc73",
                    "target": "81a9e656-4794-4d4e-a710-81f22d477de2",
                    "metadata": {
                        "label": "is representation of"
                    }
                }
            ]
        }
    }
};

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
     * @param {?=} end Indicates if element must be appended at the end (by default, true)
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Node.prototype.append = function (property, element, end, key) {
        if (end === void 0) { end = true; }
        if (this.value[property]) {
            this.appendElement(property, element, end, key);
        }
    };
    /**
     * Appends element for given property based on type of attribute
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?} end Indicates if element must be appended at the end
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Node.prototype.appendElement = function (property, element, end, key) {
        if (typeof this.value[property] === 'string') {
            this.value[property] = end ? this.value[property] + element : element + this.value[property];
        }
        else if ((typeof this.value[property] === 'object') && key) {
            this.value[property][key] = element;
        }
        else if (Array.isArray(this.value[property])) {
            end ? this.value[property].push(element) : this.value[property].unshift(element);
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
    /**
     * Appends element for given property if aforesaid property exists
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?=} end Indicates if element must be appended at the end (by default, true)
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Edge.prototype.append = function (property, element, end, key) {
        if (end === void 0) { end = true; }
        if (this.value[property]) {
            this.appendElement(property, element, end, key);
        }
    };
    /**
     * Appends element for given property based on type of attribute
     * @param {?} property Property for which element must be appended
     * @param {?} element Element to append
     * @param {?} end Indicates if element must be appended at the end
     * @param {?=} key (optional) Key if property is an Object
     * @return {?}
     */
    Edge.prototype.appendElement = function (property, element, end, key) {
        if (typeof this.value[property] === 'string') {
            this.value[property] = end ? this.value[property] + element : element + this.value[property];
        }
        else if ((typeof this.value[property] === 'object') && key) {
            this.value[property][key] = element;
        }
        else if (Array.isArray(this.value[property])) {
            end ? this.value[property].push(element) : this.value[property].unshift(element);
        }
    };
    return Edge;
}());

var Graph = (function () {
    /**
     * Constructor of Graph
     * @param {?} data JSON-GRAPH instance
     * @param {?} type Type of the graph ('Provenance' for a provenance trail, something else (including null) for generic graph)
     * @param {?} direction Direction of the graph (see dagre documentation for accepted values)
     */
    function Graph(data, type, direction) {
        this.data = data;
        this.type = type;
        this.direction = direction;
        this.nodes = new Array();
        this.edges = new Array();
        this.nodesOfSimplifiedGraph = new Array();
        this.edgesOfSimplifiedGraph = new Array();
    }
    /**
     * Constructs the Graphlib instance of the graph
     * @return {?} Graphlib instance formatted as Object
     */
    Graph.prototype.getGraphlibRepresentationOfGraph = function () {
        if (this.type === 'Provenance') {
            return { provenance: true, simplified: this.simplifiedGraph, extended: this.completeGraph };
        }
        else {
            return { provenance: false, extended: this.completeGraph };
        }
    };
    /**
     * Constructs the complete graph
     * @return {?}
     */
    Graph.prototype.createCompleteGraph = function () {
        this.convertNodesAndEdges();
        this.storeCompleteGraph();
    };
    /**
     * Constructs the simplified version of the graph
     * @return {?}
     */
    Graph.prototype.createSimplifiedGraph = function () {
        this.cloneDeepNodesAndEdges();
        this.convertNodesAndEdgesForSimpleGraph();
        this.storeSimplifiedGraph();
    };
    /**
     * Updates nodes and edges of the graph
     * @param {?} completeGraph Updated graph that must be stored
     * @param {?} simplifiedGraph Updated graph that must be stored (simplified version)
     * @return {?}
     */
    Graph.prototype.update = function (completeGraph, simplifiedGraph) {
        this.updateCompleteGraph(completeGraph);
        this.updateSimplifiedGraph(simplifiedGraph);
    };
    /**
     * Updates nodes and edges of the complete graph
     * @param {?} completeGraph Updated graph that must be stored
     * @return {?}
     */
    Graph.prototype.updateCompleteGraph = function (completeGraph) {
        this.nodes = completeGraph['nodes'];
        this.edges = completeGraph['edges'];
        this.completeGraph = completeGraph;
    };
    /**
     * Updates nodes and edges of the simplified representation of the graph
     * @param {?} simplifiedGraph Updated graph that must be stored (simplified version)
     * @return {?}
     */
    Graph.prototype.updateSimplifiedGraph = function (simplifiedGraph) {
        this.nodesOfSimplifiedGraph = simplifiedGraph['nodes'];
        this.edgesOfSimplifiedGraph = simplifiedGraph['edges'];
        this.simplifiedGraph = simplifiedGraph;
    };
    /**
     * Retrieves the nodes of the specified graph
     * @param {?} typeOfGraph Type of the graph for which nodes must be retrieved ('simplified' for simplified version, something else (including null) for complete graph)
     * @return {?} Array of nodes of the graph
     */
    Graph.prototype.getNodes = function (typeOfGraph) {
        if (typeOfGraph === 'simplified') {
            return this.nodesOfSimplifiedGraph;
        }
        else {
            return this.nodes;
        }
    };
    /**
     * Retrieves the edges of the specified graph
     * @param {?} typeOfGraph Type of the graph for which edges must be retrieved ('simplified' for simplified version, something else (including null) for complete graph)
     * @return {?} Array of edges of the graph
     */
    Graph.prototype.getEdges = function (typeOfGraph) {
        if (typeOfGraph === 'simplified') {
            return this.edgesOfSimplifiedGraph;
        }
        else {
            return this.edges;
        }
    };
    /**
     * Stores the complete graph
     * @return {?}
     */
    Graph.prototype.storeCompleteGraph = function () {
        this.completeGraph = { value: { rankdir: this.direction }, nodes: this.nodes, edges: this.edges };
    };
    /**
     * Stores the simplified representation of the graph
     * @return {?}
     */
    Graph.prototype.storeSimplifiedGraph = function () {
        this.simplifiedGraph = { value: { rankdir: this.direction }, nodes: this.nodesOfSimplifiedGraph, edges: this.edgesOfSimplifiedGraph };
    };
    /**
     * Converts all the nodes and edges from JSON-GRAPH to Graphlib representation
     * @return {?}
     */
    Graph.prototype.convertNodesAndEdges = function () {
        if (this.data['graph']['nodes']) {
            this.convertNodes();
        }
        if (this.data['graph']['edges']) {
            this.convertEdges();
        }
    };
    /**
     * Converts all the nodes from JSON-GRAPH to Graphlib representation
     * @return {?}
     */
    Graph.prototype.convertNodes = function () {
        for (var _i = 0, _a = this.data['graph']['nodes']; _i < _a.length; _i++) {
            var jsonGraphNode = _a[_i];
            var /** @type {?} */ node = this.createNode(jsonGraphNode);
            this.nodes.push(node);
        }
    };
    /**
     * Creates Graphlib node from a JSON-GRAPH representation of a given node
     * @param {?} jsonGraphNode
     * @return {?} Graphlib node
     */
    Graph.prototype.createNode = function (jsonGraphNode) {
        var /** @type {?} */ id = jsonGraphNode['id'];
        var /** @type {?} */ type = jsonGraphNode['type'] || null;
        var /** @type {?} */ subType = (jsonGraphNode['metadata'] && jsonGraphNode['metadata']['subType']) || null;
        var /** @type {?} */ label = jsonGraphNode['label'] || null;
        var /** @type {?} */ node = new Node(id, type, subType, label);
        for (var /** @type {?} */ key in jsonGraphNode['metadata']) {
            node.set(key, jsonGraphNode['metadata'][key]);
        }
        node.set('labelType', 'html'); // By default, we enable HTML in labels
        return node;
    };
    /**
     * Converts all the edges from JSON-GRAPH to Graphlib representation
     * @return {?}
     */
    Graph.prototype.convertEdges = function () {
        for (var _i = 0, _a = this.data['graph']['edges']; _i < _a.length; _i++) {
            var jsonGraphEdge = _a[_i];
            if (this.checkIfSourceAndTargetExist(jsonGraphEdge)) {
                var /** @type {?} */ edge = this.createEdge(jsonGraphEdge);
                this.edges.push(edge);
            }
        }
    };
    /**
     * Creates Graphlib edge from a JSON-GRAPH representation of a given edge
     * @param {?} jsonGraphEdge
     * @return {?} Graphlib edge
     */
    Graph.prototype.createEdge = function (jsonGraphEdge) {
        var /** @type {?} */ source = jsonGraphEdge['source'];
        var /** @type {?} */ target = jsonGraphEdge['target'];
        var /** @type {?} */ label = jsonGraphEdge['label'] || null;
        var /** @type {?} */ edge = new Edge(source, target, label);
        for (var /** @type {?} */ key in jsonGraphEdge['metadata']) {
            edge.set(key, jsonGraphEdge['metadata'][key]);
        }
        return edge;
    };
    /**
     * Converts all nodes and edges to build simplified version of graph
     * @return {?}
     */
    Graph.prototype.convertNodesAndEdgesForSimpleGraph = function () {
        this.removeAgents();
        this.mergeDatasetsAndRelatedResources();
        this.removeActivities();
    };
    /**
     * Removes all the agents and their associated edges from the provenance trail
     * @return {?}
     */
    Graph.prototype.removeAgents = function () {
        var /** @type {?} */ agentsId = this.nodesOfSimplifiedGraph.filter(function (n) { return n.getType() === 'agent'; }).map(function (n) { return n.getId(); });
        this.nodesOfSimplifiedGraph = this.nodesOfSimplifiedGraph.filter(function (n) { return !includes(agentsId, n.getId()); });
        this.edgesOfSimplifiedGraph = this.edgesOfSimplifiedGraph.filter(function (e) { return !(includes(agentsId, e.getSource()) && !(includes(agentsId, e.getTarget()))); });
    };
    /**
     * Merges all the resources with their respective datasets
     * @return {?}
     */
    Graph.prototype.mergeDatasetsAndRelatedResources = function () {
        var /** @type {?} */ datasets = this.nodesOfSimplifiedGraph.filter(function (n) { return n.getType() === 'entity' && n.get('subType') === 'dataset'; });
        for (var _i = 0, datasets_1 = datasets; _i < datasets_1.length; _i++) {
            var dataset = datasets_1[_i];
            this.mergeDatasetAndRelatedResources(dataset);
        }
    };
    /**
     * Merges all the resources of a given dataset
     * @param {?} dataset Dataset for which resources must be merged with
     * IMPORTANT: dataset is modified through the function and by inner functions
     * @return {?}
     */
    Graph.prototype.mergeDatasetAndRelatedResources = function (dataset) {
        var /** @type {?} */ resourcesId = this.edgesOfSimplifiedGraph.filter(function (e) { return e.getTarget() === dataset.getId(); }).map(function (e) { return e.getSource(); });
        if (Array.isArray(resourcesId) && resourcesId.length) {
            var /** @type {?} */ resources = this.nodesOfSimplifiedGraph.filter(function (n) { return includes(resourcesId, n.getId()); });
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
     * Links a given dataset with all elements that are linked with resource it is linked with
     * @param {?} dataset Dataset to be considered for linking
     * @param {?} resource Resource linked with the dataset
     * @return {?}
     */
    Graph.prototype.linkDatasetWithElementsRelatedToResource = function (dataset, resource) {
        dataset.append('members', resource);
        var /** @type {?} */ elementsLinkedWithResource = this.edgesOfSimplifiedGraph.filter(function (e) { return e.getTarget() === resource.getId(); }).map(function (e) { return e.getSource(); });
        for (var _i = 0, elementsLinkedWithResource_1 = elementsLinkedWithResource; _i < elementsLinkedWithResource_1.length; _i++) {
            var element = elementsLinkedWithResource_1[_i];
            this.edgesOfSimplifiedGraph.push(new Edge(element, dataset.getId(), 'was derived from')); // By default, we consider derivation link between the entities
        }
    };
    /**
     * Changes the label of a dataset to show number of resources it contains
     * @param {?} dataset Dataset for which label is modified
     * @param {?} resources Resources linked to the dataset
     * IMPORTANT: dataset is modified through the function
     * @return {?}
     */
    Graph.prototype.changeLabelOfDataset = function (dataset, resources) {
        dataset.append('label', "<br>" + resources.length + " resource" + (resources.length > 1 ? 's' : ''));
    };
    /**
     * Removes all the resources from the simplified version of the graph
     * @param {?} resourcesId Identifiers of all the resources
     * @return {?}
     */
    Graph.prototype.removeResourcesFromSimplifiedGraph = function (resourcesId) {
        this.nodesOfSimplifiedGraph = this.nodesOfSimplifiedGraph.filter(function (n) { return !includes(resourcesId, n.getId()); });
        this.edgesOfSimplifiedGraph = this.edgesOfSimplifiedGraph.filter(function (e) { return !includes(resourcesId, e.getSource()) && !includes(resourcesId, e.getTarget()); });
    };
    /**
     * Removes all activities from the simplified version of the graph
     * @return {?}
     */
    Graph.prototype.removeActivities = function () {
        var /** @type {?} */ activities = this.nodesOfSimplifiedGraph.filter(function (n) { return n.getType() === 'activity' || n.get('subtype') === 'activity'; });
        for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
            var activity = activities_1[_i];
            this.linkSourcesAndGeneratedEntitiesOfActivity(activity);
        }
        this.nodesOfSimplifiedGraph = this.nodesOfSimplifiedGraph.filter(function (n) { return n.getType() === 'entity'; });
    };
    /**
     * Creates edges between all sources and generated entities of a given activity
     * @param {?} activity Activity to be considered for creation of edges between sources and generated entities
     * @return {?}
     */
    Graph.prototype.linkSourcesAndGeneratedEntitiesOfActivity = function (activity) {
        var /** @type {?} */ sourcesId = this.edgesOfSimplifiedGraph.filter(function (e) { return e.getSource() === activity.getId(); }).map(function (e) { return e.getTarget(); });
        var /** @type {?} */ generatedElementsId = this.edgesOfSimplifiedGraph.filter(function (e) { return e.getTarget() === activity.getId(); }).map(function (e) { return e.getSource(); });
        for (var _i = 0, sourcesId_1 = sourcesId; _i < sourcesId_1.length; _i++) {
            var sourceId = sourcesId_1[_i];
            for (var _a = 0, generatedElementsId_1 = generatedElementsId; _a < generatedElementsId_1.length; _a++) {
                var generatedElementId = generatedElementsId_1[_a];
                this.edgesOfSimplifiedGraph.push(new Edge(generatedElementId, sourceId, 'was derived from')); // By default, we assume derivation between entities
            }
        }
        this.edgesOfSimplifiedGraph = this.edgesOfSimplifiedGraph.filter(function (e) { return !(e.getSource() === activity.getId()) && !(e.getTarget() === activity.getId()); });
    };
    /**
     * Clones nodes and edges of the complete graph
     * @return {?}
     */
    Graph.prototype.cloneDeepNodesAndEdges = function () {
        this.cloneDeepNodes();
        this.cloneDeepEdges();
    };
    /**
     * Clones nodes of the complete graph
     * @return {?}
     */
    Graph.prototype.cloneDeepNodes = function () {
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.nodesOfSimplifiedGraph.push(cloneDeep(toPlainObject(node)));
        }
    };
    /**
     * Clones edges of the complete graph
     * @return {?}
     */
    Graph.prototype.cloneDeepEdges = function () {
        for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
            var edge = _a[_i];
            this.edgesOfSimplifiedGraph.push(cloneDeep(toPlainObject(edge)));
        }
    };
    /**
     * Checks if an edge is valid (i.e. both source and target exist in the graph)
     * @param {?} jsonGraphEdge JSON-GRAPH edge to be validated
     * @return {?} True if edge is valid, false otherwise
     */
    Graph.prototype.checkIfSourceAndTargetExist = function (jsonGraphEdge) {
        var /** @type {?} */ source = this.nodes.find(function (n) { return n.getId() === jsonGraphEdge['source']; });
        var /** @type {?} */ target = this.nodes.find(function (n) { return n.getId() === jsonGraphEdge['target']; });
        return (source && target) ? true : false;
    };
    return Graph;
}());

var MapperService = (function () {
    function MapperService() {
    }
    /**
     * Formats the input data
     * @param {?=} input (optional) Data to be formatted as graphlib instance
     * @return {?} Formatted data (Graphlib instance) if input, null otherwise
     */
    MapperService.prototype.format = function (input) {
        if (input) {
            var /** @type {?} */ type = input['graph']['type'] || MapperService.defaultType;
            this.direction = input['graph']['direction'] || MapperService.defaultDirection;
            this.globalGraph = new Graph(input, type, this.direction);
            if (input['graph'] && (input['graph']['type'] === 'Provenance')) {
                this.createProvenanceGraph();
            }
            else {
                this.createGenericGraph();
            }
            return this.globalGraph.getGraphlibRepresentationOfGraph();
        }
        else {
            return null;
        }
    };
    /**
     * Extends the graph
     * @param {?} input Data of the subgraph to be formatted as graphlib instance
     * @return {?} Formatted data (Graphlib instance) containing subgraph if input or saved global graph if any or null
     */
    MapperService.prototype.extend = function (input) {
        if (input && input['graph'] && (input['graph']['type'] === 'Provenance')) {
            this.subGraph = new Graph(input, 'Provenance', this.direction);
            this.updateProvenanceGraph();
            return this.mergeGraphs();
        }
        else {
            return (this.globalGraph && this.globalGraph.getGraphlibRepresentationOfGraph()) || null;
        }
    };
    /**
     * Creates the Provenance graph
     * @return {?}
     */
    MapperService.prototype.createProvenanceGraph = function () {
        this.globalGraph.createCompleteGraph();
        this.globalGraph.createSimplifiedGraph();
    };
    /**
     * Creates generic graph
     * @return {?}
     */
    MapperService.prototype.createGenericGraph = function () {
        this.globalGraph.createCompleteGraph();
    };
    /**
     * Updates Provenance graph by adding subgraph to the global graph
     * @return {?}
     */
    MapperService.prototype.updateProvenanceGraph = function () {
        this.subGraph.createCompleteGraph();
        this.subGraph.createSimplifiedGraph();
    };
    /**
     * Merges the global graph with the subgraph representing the immediate context of the element that was extended
     * @return {?} Object containing the global graph with the subgraph representing the immediate context of the element that was extended (simplified and complete representations)
     */
    MapperService.prototype.mergeGraphs = function () {
        var /** @type {?} */ completeGraph = this.mergeGraph('complete');
        var /** @type {?} */ simplifiedGraph = this.mergeGraph('simplified');
        this.globalGraph.update(completeGraph, simplifiedGraph);
        return { provenance: true, simplified: simplifiedGraph, extended: completeGraph };
    };
    /**
     * Merges (complete or simplified) graph with the subgraph representing the immediate context of the element that was extended
     * @param {?} typeOfGraph Type of the graph that must be merged (simplified or complete)
     * @return {?} Graphlib instance containing the complete (respectively simplified) graph and the subgraph representing the immediate context of the element that was extended
     */
    MapperService.prototype.mergeGraph = function (typeOfGraph) {
        var /** @type {?} */ nodes = this.mergeNodes(typeOfGraph);
        var /** @type {?} */ edges = this.mergeEdges(typeOfGraph);
        return { value: { rankdir: this.direction }, nodes: nodes, edges: edges };
    };
    /**
     * Merges nodes of global graph and subgraph
     * @param {?} typeOfGraph Type of the graph that must be merged (simplified or complete)
     * @return {?} Array of merged nodes
     */
    MapperService.prototype.mergeNodes = function (typeOfGraph) {
        var /** @type {?} */ globalGraphNodes = this.globalGraph.getNodes(typeOfGraph);
        var /** @type {?} */ globalGraphNodesId = globalGraphNodes.map(function (n) { return n.getId(); });
        var /** @type {?} */ subGraphNodes = this.subGraph.getNodes(typeOfGraph);
        var /** @type {?} */ subGraphNodesId = subGraphNodes.map(function (n) { return n.getId(); });
        var _loop_1 = function (id) {
            // We remove nodes from the original global graph if they are both in the subgrap and the global graph
            if (includes(globalGraphNodes, id)) {
                remove(globalGraphNodes, function (n) { return n.getId() === id; });
            }
        };
        for (var _i = 0, subGraphNodesId_1 = subGraphNodesId; _i < subGraphNodesId_1.length; _i++) {
            var id = subGraphNodesId_1[_i];
            _loop_1(/** @type {?} */ id);
        }
        return concat(globalGraphNodes, subGraphNodes);
    };
    /**
     * Merges edges of global graph and subgraph
     * @param {?} typeOfGraph Type of the graph that must be merged (simplified or complete)
     * @return {?} Array of merged edges
     */
    MapperService.prototype.mergeEdges = function (typeOfGraph) {
        return concat(this.globalGraph.getEdges(typeOfGraph), this.subGraph.getEdges(typeOfGraph));
    };
    return MapperService;
}());
MapperService.defaultType = 'Generic';
MapperService.defaultDirection = 'BT';
MapperService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
MapperService.ctorParameters = function () { return []; };

var ALLOWED_SHAPES = ['rect', 'diamond', 'circle', 'ellipse'];
var SHAPES = {
    'entity': 'rect',
    'activity': 'rect',
    'agent': 'hexagon',
    'default': 'diamond'
};
var SHAPE_ATTRIBUTES = {
    'entity': {
        'rx': '15',
        'ry': '15'
    },
    'activity': {
        'rx': '5',
        'ry': '5'
    },
    'agent': {
        'paddingTop': '15'
    }
};
var COLORS = {
    'entity': {
        'background': '#FFFC87',
        'border': 'transparent'
    },
    'activity': {
        'background': '#9FB1FC',
        'border': 'transparent'
    },
    'agent': {
        'background': '#FED37F',
        'border': 'transparent'
    },
    'default': {
        'background': 'white',
        'border': 'black'
    }
};

var GraphFormatterService = (function () {
    function GraphFormatterService() {
    }
    /**
     * Formats the Graph
     * @param {?} data Data representing graph to be formatted
     * @return {?} Object representing formatted graph
     */
    GraphFormatterService.prototype.format = function (data) {
        this.data = data;
        this.formatNodes();
        this.formatEdges();
        return this.data;
    };
    /**
     * Formats all the nodes
     * @return {?}
     */
    GraphFormatterService.prototype.formatNodes = function () {
        var _this = this;
        if (this.data && this.data['nodes']) {
            this.data['nodes'].forEach(function (v) { return _this.formatNode(v); });
        }
    };
    /**
     * Formats Node
     * @param {?} nodeId
     * @return {?}
     */
    GraphFormatterService.prototype.formatNode = function (nodeId) {
        var /** @type {?} */ node = this.data['nodes'].find(function (v) { return v === nodeId; });
        this.setNodeShape(node);
        this.setNodeShapeAttributes(node);
        this.setNodeStyle(node);
        /*if(node.getType() === 'entity') {
          this.setExpandControls(node);
        }*/
    };
    /**
     * Sets the shape of the node (by default, diamond is chosen)
     * @param {?} node Node for which shape must be set
     * IMPORTANT: node is modified through the function (shape is set)
     * @return {?}
     */
    GraphFormatterService.prototype.setNodeShape = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ subType = node.get('subType');
        var /** @type {?} */ shape = SHAPES[type] || SHAPES[subType] || (node.get('shape') && includes(ALLOWED_SHAPES, node.get('shape')) ? node.get('shape') : SHAPES['default']);
        node.set('shape', shape);
    };
    /**
     * Sets specific attributes for the shape of the node if any specified
     * @param {?} node Node for which shape attributes must be set
     * IMPORTANT: node is modified through the function (specific attributes of the shape are set)
     * @return {?}
     */
    GraphFormatterService.prototype.setNodeShapeAttributes = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ attributes = SHAPE_ATTRIBUTES[type];
        if (attributes) {
            for (var /** @type {?} */ attributeName in attributes) {
                node.set(attributeName, attributes[attributeName]);
            }
        }
    };
    /**
     * Sets the style of the node
     * @param {?} node Node for which style must be set
     * IMPORTANT: node is modified by inner function
     * @return {?}
     */
    GraphFormatterService.prototype.setNodeStyle = function (node) {
        this.setNodeColor(node);
    };
    /**
     * Sets the color of the node (by default, background is in white and borders are in black)
     * @param {?} node Node for which color must be set
     * IMPORTANT: node is modified through the function (style is set)
     * @return {?}
     */
    GraphFormatterService.prototype.setNodeColor = function (node) {
        var /** @type {?} */ type = node.getType();
        var /** @type {?} */ subType = node.get('subType');
        var /** @type {?} */ colorProperties = (node.get('color') && isObject(node.get('color'))) ? node.get('color') : (COLORS[type] || COLORS[subType] || COLORS['default']);
        var /** @type {?} */ backgroundColor = colorProperties['background'] || COLORS['default']['background'];
        var /** @type {?} */ borderColor = colorProperties['border'] || COLORS['default']['border'];
        node.set('style', "fill: " + backgroundColor + "; stroke: " + borderColor + ";");
    };
    /**
     * Formats all the edges
     * @return {?}
     */
    GraphFormatterService.prototype.formatEdges = function () {
        var _this = this;
        if (this.data && this.data['edges']) {
            this.data['edges'].forEach(function (e) { return _this.formatEdge(e); });
        }
    };
    /**
     * Formats an edge
     * @param {?} edge Edge to be formatted
     * IMPORTANT: Edge is modified by inner function
     * @return {?}
     */
    GraphFormatterService.prototype.formatEdge = function (edge) {
        this.setEdgeStyle(edge);
    };
    /**
     * Sets style of the edge
     * @param {?} edge Edge for which style must be set
     * IMPORTANT: edge is modified by inner function
     * @return {?}
     */
    GraphFormatterService.prototype.setEdgeStyle = function (edge) {
        this.setEdgeColor(edge);
        this.setEdgeStroke(edge);
    };
    /**
     * Sets the color of the edge
     * @param {?} edge Edge for which color must be set
     * IMPORTANT: edge is modified through the function (style is set)
     * @return {?}
     */
    GraphFormatterService.prototype.setEdgeColor = function (edge) {
        edge.set('style', 'fill: none; stroke: black; stroke-width: 1.5px;');
    };
    /**
     * Sets dotted style of the edge if needed
     * @param {?} edge Edge for which stroke must be modified
     * IMPORTANT: edge is modified through the function (style is modified)
     * @return {?}
     */
    GraphFormatterService.prototype.setEdgeStroke = function (edge) {
        if (edge.get('type') === 'dotted') {
            edge.append('style', 'stroke-dasharray: 5;');
        }
    };
    return GraphFormatterService;
}());
GraphFormatterService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
GraphFormatterService.ctorParameters = function () { return []; };

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
    },
    'nodeExpandedUp': function (element, nodeId) {
        dispatchNodeExpandEvent('nodeExpanded', element, nodeId, 'up');
    },
    'nodeExpandedDown': function (element, nodeId) {
        dispatchNodeExpandEvent('nodeExpanded', element, nodeId, 'down');
    }
};
/**
 * Dispatches a node event
 * @param {?} eventName Name of the event to be dispatched
 * @param {?} element DOM element on which node event must be dispatched
 * @param {?} nodeId Identifier of the node related to the event
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
 * Dispatches a node expand event
 * @param {?} eventName Name of the event to be dispatched
 * @param {?} element DOM element on which node event must be dispatched
 * @param {?} nodeId Identifier of the node related to the event
 * @param {?} direction Direction of expand
 * @return {?}
 */
function dispatchNodeExpandEvent(eventName, element, nodeId, direction) {
    var /** @type {?} */ event$$1 = new CustomEvent(eventName, {
        'detail': {
            'nodeId': nodeId,
            'direction': direction
        }
    });
    dispatchEvent(element, event$$1);
}
/**
 * Dispatches an edge event
 * @param {?} eventName Name of the event to be dispatched
 * @param {?} element DOM element on which edge event must be dispatched
 * @param {?} data Data containing relevant source and target of the edge related to the event
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

var DagreD3RendererService = (function () {
    function DagreD3RendererService() {
    }
    /**
     * Initializes the renderer
     * @param {?} containerElement DOM element where SVG will be attached
     * @param {?} data Object containing graph to render
     * @param {?=} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3RendererService.prototype.initialize = function (containerElement, data, options) {
        if (options === void 0) { options = {}; }
        this.flush();
        this.setParameters(containerElement, data, options);
        this.setEvents();
        this.setGraphClickEventListener();
        this.setShapes();
        this.constructGraph();
    };
    /**
     * Renders the graph
     * @param {?=} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3RendererService.prototype.renderGraph = function (options) {
        if (options === void 0) { options = {}; }
        this.group.call(this.render, this.graph);
        this.setNodesEvents();
        this.setEdgesEvents();
        this.formatText();
        this.setWidthAndHeight();
        this.setZoom();
        this.dispatch.call('graphRendered', this, this.containerElement);
    };
    /**
     * Fits the content of the graph to the container
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.fit = function (delay) {
        if (delay === void 0) { delay = 0; }
        var /** @type {?} */ bounds = this.group.node().getBBox();
        var /** @type {?} */ parent = this.group.node().parentElement;
        var /** @type {?} */ fullWidth = parent.clientWidth || parent.parentNode.clientWidth; // OR statement is needed to make it compatible with Chrome and Firefox
        var /** @type {?} */ fullHeight = parent.clientHeight || parent.parentNode.clientHeight; // OR statement is needed to make it compatible with Chrome and Firefox
        var /** @type {?} */ width = bounds.width;
        var /** @type {?} */ height = bounds.height;
        var /** @type {?} */ midX = bounds.x + width / 2;
        var /** @type {?} */ midY = bounds.y + height / 2;
        if (width !== 0 && height !== 0) {
            var /** @type {?} */ scale = 0.95 / Math.max(width / fullWidth, height / fullHeight);
            var /** @type {?} */ translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];
            this.container.transition().duration(delay).call(this.zoom.transform, zoomIdentity.translate(translate[0], translate[1]).scale(scale));
        }
    };
    /**
     * Zooms in the graph
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.zoomIn = function (delay) {
        if (delay === void 0) { delay = 0; }
        this.container.transition().duration(delay).call(this.zoom.scaleBy, this.zoomInMultiplicator);
    };
    /**
     * Zooms out the graph
     * @param {?=} delay (optional, default = 0) Delay of the transition
     * @return {?}
     */
    DagreD3RendererService.prototype.zoomOut = function (delay) {
        if (delay === void 0) { delay = 0; }
        this.container.transition().duration(delay).call(this.zoom.scaleBy, this.zoomOutMultiplicator);
    };
    /**
     * Removes rendered graph if any
     * @return {?}
     */
    DagreD3RendererService.prototype.flush = function () {
        select(this.containerElement).selectAll('svg').remove();
    };
    /**
     * Sets the options related to the renderer
     * @param {?} containerElement DOM element where SVG will be attached
     * @param {?} data Object containing graph to render
     * @param {?} options Options to associate with the renderer
     * @return {?}
     */
    DagreD3RendererService.prototype.setParameters = function (containerElement, data, options) {
        this.data = data;
        this.zoomInMultiplicator = options['zoom-in'] || 1.5;
        this.zoomOutMultiplicator = options['zoom-out'] || 0.75;
        this.containerElement = containerElement;
        this.container = select(this.containerElement).append('svg:svg');
        this.group = this.container.append('g');
        this.render = new render();
    };
    /**
     * Sets events attached to the graph
     * @return {?}
     */
    DagreD3RendererService.prototype.setEvents = function () {
        this.dispatch = dispatch.apply(d3, /** @type {?} */ ((Object.keys(EVENTS))));
        for (var /** @type {?} */ eventName in EVENTS) {
            // For each event dispatched by the renderer, we fire the appropriate event from the container (DOM element)
            this.dispatch.on(eventName, EVENTS[eventName]);
        }
    };
    /**
     * Sets the click on the graph event
     * @return {?}
     */
    DagreD3RendererService.prototype.setGraphClickEventListener = function () {
        var /** @type {?} */ that = this;
        this.container.on('click', function () {
            // User clicked on the SVG element (graph)
            if (event.srcElement.tagName == 'svg') {
                var /** @type {?} */ mousePosition = mouse(this);
                // Data passed to the event: graph container, DOM element, mouse position (x and y coordinates)
                that.dispatch.call('graphClicked', that.container, that.containerElement, mousePosition[0], mousePosition[1]);
            }
        });
    };
    /**
     * Sets all custom shapes used by renderer (shapes are appended to the render function of the renderer)
     * @return {?}
     */
    DagreD3RendererService.prototype.setShapes = function () {
        var _this = this;
        // See dagre-d3 documentation and demo example for mode details
        this.render.shapes()['hexagon'] = function (parent, bbox, node) { return _this.createHexagon(parent, bbox, node); };
    };
    /**
     * Creates and appends hexagon shape
     * @param {?} parent Parent element that will hosts the polygon
     * @param {?} bbox Bounding box of element
     * @param {?} node Node represented by the element on the graph
     * @return {?} Hexagon shape
     * IMPORTANT: parent is modified through the function (polygon representing the shape is inserted)
     */
    DagreD3RendererService.prototype.createHexagon = function (parent, bbox, node) {
        var /** @type {?} */ w = bbox.width;
        var /** @type {?} */ h = bbox.height;
        var /** @type {?} */ points = [{ x: 0, y: 0 }, { x: w, y: 0 }, { x: w, y: -5 / 4 * h }, { x: w / 2, y: -h * 3 / 2 }, { x: 0, y: -5 / 4 * h }];
        var /** @type {?} */ shape = parent.insert('polygon', ':first-child')
            .attr('points', points.map(function (d) { return d.x + ", " + d.y; }).join(' '))
            .attr('transform', "translate(" + -w / 2 + ", " + h * 3 / 4 + ")");
        node['intersect'] = function (point) { return intersect.polygon(node, points, point); };
        return shape;
    };
    /**
     * Constructs the graph (graph complies with graphlib format)
     * @return {?}
     */
    DagreD3RendererService.prototype.constructGraph = function () {
        this.graph = graphlib.json.read(this.data);
        this.setGraphTransition();
    };
    /**
     * Sets transition for the graph (duration is 1000 ms)
     * @return {?}
     */
    DagreD3RendererService.prototype.setGraphTransition = function () {
        this.graph.graph().transition = function (selection) {
            return selection.transition().duration(1000);
        };
    };
    /**
     * Sets events attached to the nodes
     * @return {?}
     */
    DagreD3RendererService.prototype.setNodesEvents = function () {
        var _this = this;
        var /** @type {?} */ that = this;
        selectAll('.node')
            .on('contextmenu', function () {
            // We prevent the context menu from displaying when user CTRL+clicks
            event.preventDefault();
        })
            .on('mousedown', function (nodeId) {
            event.stopPropagation();
            if (event.ctrlKey) {
                _this.dispatch.call('nodeCtrlClicked', _this, _this.containerElement, nodeId);
            }
            else {
                _this.dispatch.call('nodeClicked', _this, _this.containerElement, nodeId);
            }
        });
        selectAll('.expand-up')
            .on('mousedown', function (nodeId) {
            event.stopPropagation();
            that.dispatch.call('nodeExpandedUp', that, that.containerElement, nodeId);
        });
        selectAll('.expand-down')
            .on('mousedown', function (nodeId) {
            event.stopPropagation();
            that.dispatch.call('nodeExpandedDown', that, that.containerElement, nodeId);
        });
        selectAll('.expand-up, .expand-down')
            .on('mouseover', function () {
            select(this).attr('opacity', '1');
        })
            .on('mouseout', function () {
            select(this).attr('opacity', '0.2');
        });
    };
    /**
     * Sets events attached to the edges
     * @return {?}
     */
    DagreD3RendererService.prototype.setEdgesEvents = function () {
        var _this = this;
        selectAll('.edgePath, .edgeLabel')
            .on('contextmenu', function () {
            // We prevent the context menu from displaying when user CTRL+clicks
            event.preventDefault();
        })
            .on('mousedown', function (e) {
            event.stopPropagation();
            var /** @type {?} */ data = {};
            data['sourceId'] = e['v'] || null; // v represents source (see graphlib specification)
            data['targetId'] = e['w'] || null; // w represents target (see graphlib specification)
            if (event.ctrlKey) {
                _this.dispatch.call('edgeCtrlClicked', _this, _this.containerElement, data);
            }
            else {
                _this.dispatch.call('edgeClicked', _this, _this.containerElement, data);
            }
        });
    };
    /**
     * Formats text displayed on SVG element
     * @return {?}
     */
    DagreD3RendererService.prototype.formatText = function () {
        this.container.selectAll('svg text').style('font', "300 14px 'Helvetica Neue', Helvetica");
    };
    /**
     * Sets zoom functionality on the renderer
     * @return {?}
     */
    DagreD3RendererService.prototype.setZoom = function () {
        var _this = this;
        this.zoom = zoom().on('zoom', function () { _this.group.attr('transform', event.transform); });
        this.container.call(this.zoom);
        this.fit(); // By default, graph fits within the container
    };
    /**
     * Sets the width and the height of the SVG element such that it fully expands
     * @return {?}
     */
    DagreD3RendererService.prototype.setWidthAndHeight = function () {
        this.container.attr('width', '100%').attr('height', '100%');
    };
    return DagreD3RendererService;
}());
DagreD3RendererService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DagreD3RendererService.ctorParameters = function () { return []; };

var GraphComponent = (function () {
    /**
     * Constructor of DumperComponent
     * @param {?} mapperService Injection of Mapper service
     * @param {?} graphFormatterService
     * @param {?} dagreD3RendererService
     */
    function GraphComponent(mapperService, graphFormatterService, dagreD3RendererService) {
        this.mapperService = mapperService;
        this.graphFormatterService = graphFormatterService;
        this.dagreD3RendererService = dagreD3RendererService;
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
        this.formatGraph();
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
        this.dagreD3RendererService.fit(500);
    };
    /**
     * Zooms in the graph with a delay of 250 ms
     * @return {?}
     */
    GraphComponent.prototype.zoomIn = function () {
        this.dagreD3RendererService.zoomIn(250);
    };
    /**
     * Zooms out the graph with a delay of 250 ms
     * @return {?}
     */
    GraphComponent.prototype.zoomOut = function () {
        this.dagreD3RendererService.zoomOut(250);
    };
    /**
     * Initializes the EventEmitter attached to the graph
     * @return {?}
     */
    GraphComponent.prototype.initializeGraphEventsListeners = function () {
        for (var /** @type {?} */ eventName in EVENTS) {
            this["ng" + (eventName.charAt(0).toUpperCase() + eventName.slice(1))] = new EventEmitter();
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
        // For nodeExpanded event, we append a specific event listener to inform component that graph must be updated
        element.addEventListener('nodeExpanded', function (event$$1) {
            //TODO: CHANGE BEHAVIOR (THIS BEHAVIOR IS FOR TEST PURPOSE ONLY)
            var /** @type {?} */ nodeId = event$$1['detail']['nodeId'];
            var /** @type {?} */ direction = event$$1['detail']['direction'];
            if (EXPAND_DATA[nodeId]) {
                _this.graph = _this.mapperService.extend(EXPAND_DATA[nodeId]);
                _this.formatGraph();
                _this.displayGraph();
            }
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
     * Formats the graph (nodes and edges)
     * @return {?}
     */
    GraphComponent.prototype.formatGraph = function () {
        try {
            if (this.graph) {
                this.formattedGraph = {};
                for (var /** @type {?} */ key in this.graph) {
                    var /** @type {?} */ attribute = cloneDeep(this.graph[key]);
                    if (isObject(this.graph[key])) {
                        this.formattedGraph[key] = this.graphFormatterService.format(attribute);
                    }
                    else {
                        this.formattedGraph[key] = attribute;
                    }
                }
            }
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
                var /** @type {?} */ graphToDisplay = _this.formattedGraph['provenance'] ? _this.formattedGraph[_this.mode] : _this.formattedGraph[GraphComponent.extendedMode];
                _this.dagreD3RendererService.initialize(_this.svgContainer.nativeElement, graphToDisplay);
                _this.dagreD3RendererService.renderGraph();
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
            this.dagreD3RendererService.flush();
        }
    };
    return GraphComponent;
}());
GraphComponent.defaultMode = 'simplified';
GraphComponent.simplifiedMode = 'simplified';
GraphComponent.extendedMode = 'extended';
GraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'graph',
                providers: [MapperService, GraphFormatterService, DagreD3RendererService],
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
    { type: GraphFormatterService, },
    { type: DagreD3RendererService, },
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
