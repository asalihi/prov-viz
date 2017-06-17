export declare class DagreD3RendererService {
    private static readonly highlightDelay;
    private data;
    private graph;
    private containerId;
    private containerElement;
    private container;
    private group;
    private zoom;
    private zoomInMultiplicator;
    private zoomOutMultiplicator;
    private render;
    private dispatch;
    private selectedNodeId;
    /**
     * Initializes the renderer
     * @param containerElement DOM element where SVG will be attached
     * @param data Object containing graph to render
     * @param options Options to associate with the renderer
     */
    initialize(containerElement: any, data: Object, options?: Object): void;
    /**
     * Renders the graph
     * @param options Options to associate with the renderer
     */
    renderGraph(options?: Object): void;
    /**
     * Fits the content of the graph to the container
     * @param delay (optional, default = 0) Delay of the transition
     */
    fit(delay?: number): void;
    /**
     * Zooms in the graph
     * @param delay (optional, default = 0) Delay of the transition
     */
    zoomIn(delay?: number): void;
    /**
     * Zooms out the graph
     * @param delay (optional, default = 0) Delay of the transition
     */
    zoomOut(delay?: number): void;
    /**
     * Removes rendered graph if any and unselected node if any selected
     */
    flush(): void;
    /**
     * Selects a node in the graph
     * @param nodeId Identifier of the node being selected
     */
    selectNode(nodeId: string): void;
    /**
     * Unselects the current selected node
     */
    unselectNode(): void;
    /**
     * Displays a set of nodes and associated edges with transition
     * @param nodesId Identifier of the nodes to be displayed with transition (with their respective edges)
     * @param duration (default is 2000) Duration of the transition
     */
    displayNodesAndEdgesWithTransition(nodesId: string[], duration?: number): void;
    /**
     * Closes context menu if any opened
     */
    closeContextMenu(): void;
    /**
     * Sets the options related to the renderer
     * @param containerElement DOM element where SVG will be attached
     * @param data Object containing graph to render
     * @param options Options to associate with the renderer
     */
    private setParameters(containerElement, data, options);
    /**
     * Sets events attached to the graph
     */
    private setEvents();
    /**
     * Sets the click on the graph event
     */
    private setGraphClickEventListener();
    /**
     * Sets all custom shapes used by renderer (shapes are appended to the render function of the renderer)
     */
    private setShapes();
    /**
     * Creates and appends hexagon shape
     * @param parent Parent element that will hosts the polygon
     * @param bbox Bounding box of element
     * @param node Node represented by the element on the graph
     * @return Hexagon shape
     * IMPORTANT: parent is modified through the function (polygon representing the shape is inserted)
     */
    private createHexagon(parent, bbox, node);
    /**
     * Constructs the graph (graph complies with graphlib format)
     */
    private constructGraph();
    /**
     * Sets events attached to the nodes
     */
    private setNodesEvents();
    /**
     * Retrieves the menu of the node
     * @param nodeId Identifier of the node
     * @return Menu configuration
     */
    private getMenuOfNode(nodeId);
    /**
     * Sets events attached to the edges
     */
    private setEdgesEvents();
    /**
     * Formats text displayed on SVG element
     */
    private formatText();
    /**
     * Sets zoom functionality on the renderer
     */
    private setZoom();
    /**
     * Sets the width and the height of the SVG element such that it fully expands
     */
    private setWidthAndHeight();
    /**
     * Changes the colors of a node
     * @param nodeId Identifier of the node for which background color is being modified
     * @param backgroundColor Color to use for background
     * @param borderColor Color to use for border
     * @param duration (default is 0) Duration of the transition
     */
    private changeNodeColors(nodeId, backgroundColor, borderColor, duration?);
    /**
     * Changes the colors of edges
     * @param sourceId Identifier of the source of the edge
     * @param targetId Identifier of the target of the edge
     * @param backgroundColor Color to use for background
     * @param borderColor Color to use for border
     * @param duration (default is 0) Duration of the transition
     */
    private changeEdgesColors(sourceId, targetId, backgroundColor, borderColor, duration?);
    /**
     * Changes the colors of d3 elements
     * @param d3Elements D3 selection
     * @param backgroundColor Color to use for background
     * @param borderColor Color to use for border
     * @param duration (default is 0) Duration of the transition
     */
    private changeD3ElementsColors(d3Elements, backgroundColor, borderColor, duration?);
    /**
     * Displays a set of nodes with transition
     * @param nodesId Identifier of the nodes that must be displayed with transition
     * @param duration (default is 2000) Duration of the transition
     */
    private displayNodesWithTransition(nodesId, duration?);
    /**
     * Displays edges of a set of nodes with transition
     * @param nodesId Identifier of the nodes for which edges must be displayed with transition
     * @param duration (default is 2000) Duration of the transition
     */
    private displayEdgesOfNodesWithTransition(nodesId, duration?);
}
