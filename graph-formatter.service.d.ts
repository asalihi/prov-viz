export declare class GraphFormatterService {
    private data;
    /**
     * Formats the Graph
     * @param data Data representing graph to be formatted
     * @return Object representing formatted graph
     */
    format(data: Object): Object;
    /**
     * Formats all the nodes
     */
    private formatNodes();
    /**
     * Formats Node
     * @param nodeID Identifier of the node to be formatted
     */
    private formatNode(nodeId);
    /**
     * Sets the shape of the node (by default, diamond is chosen)
     * @param node Node for which shape must be set
     * IMPORTANT: node is modified through the function (shape is set)
     */
    private setNodeShape(node);
    /**
     * Sets specific attributes for the shape of the node if any specified
     * @param node Node for which shape attributes must be set
     * IMPORTANT: node is modified through the function (specific attributes of the shape are set)
     */
    private setNodeShapeAttributes(node);
    /**
     * Sets the style of the node
     * @param node Node for which style must be set
     * IMPORTANT: node is modified by inner function
     */
    private setNodeStyle(node);
    /**
     * Sets the color of the node (by default, background is in white and borders are in black)
     * @param node Node for which color must be set
     * IMPORTANT: node is modified through the function (style is set)
     */
    private setNodeColor(node);
    /**
     * Formats all the edges
     */
    private formatEdges();
    /**
     * Formats an edge
     * @param edge Edge to be formatted
     * IMPORTANT: Edge is modified by inner function
     */
    private formatEdge(edge);
    /**
     * Sets style of the edge
     * @param edge Edge for which style must be set
     * IMPORTANT: edge is modified by inner function
     */
    private setEdgeStyle(edge);
    /**
     * Sets the color of the edge
     * @param edge Edge for which color must be set
     * IMPORTANT: edge is modified through the function (style is set)
     */
    private setEdgeColor(edge);
    /**
     * Sets dotted style of the edge if needed
     * @param edge Edge for which stroke must be modified
     * IMPORTANT: edge is modified through the function (style is modified)
     */
    private setEdgeStroke(edge);
}
