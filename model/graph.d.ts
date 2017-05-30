import { Node } from './node';
import { Edge } from './edge';
export declare class Graph {
    private data;
    private type;
    private direction;
    private nodes;
    private nodesOfSimplifiedGraph;
    private edges;
    private edgesOfSimplifiedGraph;
    private completeGraph;
    private simplifiedGraph;
    /**
     * Constructor of Graph
     * @param data JSON-GRAPH instance
     * @param type Type of the graph ('Provenance' for a provenance trail, something else (including null) for generic graph)
     * @param direction Direction of the graph (see dagre documentation for accepted values)
     */
    constructor(data: Object, type: string, direction: string);
    /**
     * Constructs the Graphlib instance of the graph
     * @return Graphlib instance formatted as Object
     */
    getGraphlibRepresentationOfGraph(): {
        provenance: boolean;
        simplified?: Object;
        extended: Object;
    };
    /**
     * Constructs the complete graph
     */
    createCompleteGraph(): void;
    /**
     * Constructs the simplified version of the graph
     */
    createSimplifiedGraph(): void;
    /**
     * Updates nodes and edges of the graph
     * @param completeGraph Updated graph that must be stored
     * @param simplifiedGraph Updated graph that must be stored (simplified version)
     */
    update(completeGraph: {
        value: {
            rankdir: string;
        };
        nodes: Node[];
        edges: Edge[];
    }, simplifiedGraph: {
        value: {
            rankdir: string;
        };
        nodes: Node[];
        edges: Edge[];
    }): void;
    /**
     * Updates nodes and edges of the complete graph
     * @param completeGraph Updated graph that must be stored
     */
    private updateCompleteGraph(completeGraph);
    /**
     * Updates nodes and edges of the simplified representation of the graph
     * @param simplifiedGraph Updated graph that must be stored (simplified version)
     */
    private updateSimplifiedGraph(simplifiedGraph);
    /**
     * Retrieves the nodes of the specified graph
     * @param typeOfGraph Type of the graph for which nodes must be retrieved ('simplified' for simplified version, something else (including null) for complete graph)
     * @return Array of nodes of the graph
     */
    getNodes(typeOfGraph: string): Node[];
    /**
    * Retrieves the edges of the specified graph
    * @param typeOfGraph Type of the graph for which edges must be retrieved ('simplified' for simplified version, something else (including null) for complete graph)
    * @return Array of edges of the graph
    */
    getEdges(typeOfGraph: string): Edge[];
    /**
     * Stores the complete graph
     */
    private storeCompleteGraph();
    /**
     * Stores the simplified representation of the graph
     */
    private storeSimplifiedGraph();
    /**
     * Converts all the nodes and edges from JSON-GRAPH to Graphlib representation
     */
    private convertNodesAndEdges();
    /**
     * Converts all the nodes from JSON-GRAPH to Graphlib representation
     */
    private convertNodes();
    /**
     * Creates Graphlib node from a JSON-GRAPH representation of a given node
     * @return Graphlib node
     */
    private createNode(jsonGraphNode);
    /**
     * Converts all the edges from JSON-GRAPH to Graphlib representation
     */
    private convertEdges();
    /**
     * Creates Graphlib edge from a JSON-GRAPH representation of a given edge
     * @return Graphlib edge
     */
    private createEdge(jsonGraphEdge);
    /**
     * Converts all nodes and edges to build simplified version of graph
     */
    private convertNodesAndEdgesForSimpleGraph();
    /**
     * Removes all the agents and their associated edges from the provenance trail
     */
    private removeAgents();
    /**
     * Merges all the resources with their respective datasets
     */
    private mergeDatasetsAndRelatedResources();
    /**
     * Merges all the resources of a given dataset
     * @param dataset Dataset for which resources must be merged with
     * IMPORTANT: dataset is modified through the function and by inner functions
     */
    private mergeDatasetAndRelatedResources(dataset);
    /**
     * Links a given dataset with all elements that are linked with resource it is linked with
     * @param dataset Dataset to be considered for linking
     * @param resource Resource linked with the dataset
     */
    private linkDatasetWithElementsRelatedToResource(dataset, resource);
    /**
     * Changes the label of a dataset to show number of resources it contains
     * @param dataset Dataset for which label is modified
     * @param resources Resources linked to the dataset
     * IMPORTANT: dataset is modified through the function
     */
    private changeLabelOfDataset(dataset, resources);
    /**
     * Removes all the resources from the simplified version of the graph
     * @param resourcesId Identifiers of all the resources
     */
    private removeResourcesFromSimplifiedGraph(resourcesId);
    /**
     * Removes all activities from the simplified version of the graph
     */
    private removeActivities();
    /**
     * Creates edges between all sources and generated entities of a given activity
     * @param activity Activity to be considered for creation of edges between sources and generated entities
     */
    private linkSourcesAndGeneratedEntitiesOfActivity(activity);
    /**
     * Clones nodes and edges of the complete graph
     */
    private cloneDeepNodesAndEdges();
    /**
     * Clones nodes of the complete graph
     */
    private cloneDeepNodes();
    /**
     * Clones edges of the complete graph
     */
    private cloneDeepEdges();
    /**
     * Checks if an edge is valid (i.e. both source and target exist in the graph)
     * @param jsonGraphEdge JSON-GRAPH edge to be validated
     * @return True if edge is valid, false otherwise
     */
    private checkIfSourceAndTargetExist(jsonGraphEdge);
}
