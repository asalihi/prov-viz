export declare class MapperService {
    private static readonly defaultType;
    private direction;
    private static readonly defaultDirection;
    private globalGraph;
    private subGraph;
    /**
     * Formats the input data
     * @param input (optional) Data to be formatted as graphlib instance
     * @return Formatted data (Graphlib instance) if input, null otherwise
     */
    format(input?: Object): {
        provenance: boolean;
        simplified?: Object;
        extended: Object;
    };
    /**
     * Extends the graph
     * @param input Data of the subgraph to be formatted as graphlib instance
     * @return Formatted data (Graphlib instance) containing subgraph if input or saved global graph if any or null
     */
    extend(input: Object): {
        provenance: boolean;
        simplified?: Object;
        extended: Object;
    };
    /**
     * Retrieves the identifier of the added nodes during expand of graph
     * @param input Data of the subgraph to be appended to the global graph
     * @param entitiesOnly True if only new added entities must be considered, false otherwise
     * @return List of identifiers of added nodes, null if input does not contain nodes
     */
    retrieveNewNodesId(input: Object, entitiesOnly: boolean): string[];
    /**
     * Creates the Provenance graph
     */
    private createProvenanceGraph();
    /**
     * Creates generic graph
     */
    private createGenericGraph();
    /**
     * Updates Provenance graph by adding subgraph to the global graph
     */
    private updateProvenanceGraph();
    /**
     * Merges the global graph with the subgraph representing the immediate context of the element that was extended
     * @return Object containing the global graph with the subgraph representing the immediate context of the element that was extended (simplified and complete representations)
     */
    private mergeGraphs();
    /**
     * Merges (complete or simplified) graph with the subgraph representing the immediate context of the element that was extended
     * @param typeOfGraph Type of the graph that must be merged (simplified or complete)
     * @return Graphlib instance containing the complete (respectively simplified) graph and the subgraph representing the immediate context of the element that was extended
     */
    private mergeGraph(typeOfGraph);
    /**
     * Merges nodes of global graph and subgraph
     * @param typeOfGraph Type of the graph that must be merged (simplified or complete)
     * @return Array of merged nodes
     */
    private mergeNodes(typeOfGraph);
    /**
    * Merges edges of global graph and subgraph
    * @param typeOfGraph Type of the graph that must be merged (simplified or complete)
    * @return Array of merged edges
     */
    private mergeEdges(typeOfGraph);
}
