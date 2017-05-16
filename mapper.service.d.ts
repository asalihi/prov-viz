export declare class MapperService {
    private static readonly defaultDirection;
    private direction;
    private nodes;
    private simplifiedNodes;
    private edges;
    private simplifiedEdges;
    private input;
    private completeGraph;
    private simplifiedGraph;
    /**
     * Formats the input data
     * @param input (optional) Data to be formatted as graphlib instance
     * @return Formatted data (graphlib instance) if input, null otherwise
     */
    format(input?: Object): {
        provenance: boolean;
        simplified?: Object;
        extended: Object;
    };
    /**
     * Creates graph of a Provenance trail
     */
    private createProvenanceGraph();
    /**
     * Creates a generic graph
     */
    private createGenericGraph();
    /**
     * Creates the full graph associated to given Provenance trail
     */
    private createCompleteGraph();
    /**
     * Creates the simplified version of the graph associated to given Provenance trail
     */
    private createSimplifiedGraph();
    /**
     * Converts all the Nodes and Edges from JSON-GRAPH to graphlib representation
     */
    private convertNodesAndEdges();
    /**
     * Converts all the Nodes from JSON-GRAPH to graphlib representation
     */
    private convertNodes();
    /**
     * Converts all the Edges from JSON-GRAPH to graphlib representation
     */
    private convertEdges();
    /**
     * Converts all Nodes and Edges to build simplified version of graph
     */
    private convertNodesAndEdgesForSimpleGraph();
    /**
     * Removes all the Agents from the Provenance trail and associated Edges
     */
    private removeAgents();
    /**
     * Merges all the Resources with their respective Datasets
     */
    private mergeDatasetsAndRelatedResources();
    /**
     * Merge all the Resources of a given Dataset
     * @param dataset Dataset for which Resources must be merged with
     * IMPORTANT: dataset is modified through the function and by inner function
     */
    private mergeDatasetAndRelatedResources(dataset);
    /**
     * Links a given Dataset with all Elements that are linked with Resource it is linked with
     * @param dataset Dataset to be considered for linking
     * @param resource Resource linked with the Dataset
     */
    private linkDatasetWithElementsRelatedToResource(dataset, resource);
    /**
     * Changes the label of a Dataset to show number of Resources it contains
     * @param dataset Dataset for which label is modified
     * @param resources Resources linked to the Dataset
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
     * Clones Nodes and Edges of the complete graph
     */
    private cloneDeepNodesAndEdges();
    /**
     * Clones Nodes of the complete graph
     */
    private cloneDeepNodes();
    /**
     * Clones Edges of the complete graph
     */
    private cloneDeepEdges();
    /**
     * Checks if an Edge is valid (both source and target exist in the graph)
     * @param jsonGraphEdge JSON-GRAPH Edge to be validated
     * @return True if Edge is valid, false otherwise
     */
    private checkIfSourceAndTargetExist(jsonGraphEdge);
}
