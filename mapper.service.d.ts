export declare class MapperService {
    private nodes;
    private simplifiedNodes;
    private edges;
    private simplifiedEdges;
    private input;
    private completeGraph;
    private simplifiedGraph;
    format(input?: Object): {
        simplified: Object;
        extended: Object;
    };
    private createCompleteGraph();
    private createSimplifiedGraph();
    private convertNodesAndEdges();
    private convertNodes();
    private convertEdges();
    private convertNodesAndEdgesForSimpleGraph();
    private removeAgents();
    private mergeDatasetsAndRelatedResources();
    private mergeDatasetAndRelatedResources(dataset);
    private linkDatasetWithElementsRelatedToResource(dataset, resource);
    private changeLabelOfDataset(dataset, resources);
    private removeResourcesFromSimplifiedGraph(resourcesId);
    private removeActivities();
    private linkSourcesAndGeneratedEntitiesOfActivity(activity);
    private appendNode(node);
    private appendEdge(edge);
    private checkIfSourceAndTargetExist(jsonGraphEdge);
}
