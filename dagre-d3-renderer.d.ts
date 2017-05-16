export declare class DagreD3Renderer {
    private static data;
    private static graph;
    private static containerId;
    private static containerElement;
    private static container;
    private static group;
    private static zoom;
    private static zoomInMultiplicator;
    private static zoomOutMultiplicator;
    private static render;
    private static dispatch;
    /**
     * Initializes the renderer
     * @param containerElement DOM element where SVG will be attached
     * @param data Object containing graph to render
     * @param options Options to associate with the renderer
     */
    static initialize(containerElement: any, data: Object, options?: Object): void;
    /**
     * Renders the graph
     * @param options Options to associate with the renderer
     */
    static renderGraph(options?: Object): void;
    /**
     * Fits the content of the graph to the container
     * @param delay (optional, default = 0) Delay of the transition
     */
    static fit(delay?: number): void;
    /**
     * Zooms in the graph
     * @param delay (optional, default = 0) Delay of the transition
     */
    static zoomIn(delay?: number): void;
    /**
     * Zooms out the graph
     * @param delay (optional, default = 0) Delay of the transition
     */
    static zoomOut(delay?: number): void;
    /**
     * Removes rendered graph if any
     */
    static flush(): void;
    /**
     * Sets the options related to the renderer
     * @param containerElement DOM element where SVG will be attached
     * @param data Object containing graph to render
     * @param options Options to associate with the renderer
     */
    private static setParameters(containerElement, data, options);
    /**
     * Sets events attached to the graph
     */
    private static setEvents();
    /**
     * Sets the click on the graph event
     */
    private static setGraphClickEventListener();
    /**
     * Sets all custom shapes used by renderer (shapes are appended to the render function of the renderer)
     */
    private static setShapes();
    /**
     * Creates and appends hexagon shape
     * @param parent Parent element that will hosts the polygon
     * @param bbox Bounding box of element
     * @param node Node represented by the element on the graph
     * @return Hexagon shape
     * IMPORTANT: parent is modified through the function (polygon representing the shape is inserted)
     */
    private static createHexagon(parent, bbox, node);
    /**
     * Formats all the Nodes
     */
    private static formatNodes();
    /**
     * Formats Node
     * @param nodeID Identifier of the Node to be formatted
     * IMPORTANT: Node is modified by inner functions
     */
    private static formatNode(nodeId);
    /**
     * Sets the shape of the Node (by default, diamond is chosen)
     * @param node Node for which shape must be set
     * IMPORTANT: Node is modified through the function (shape is set)
     */
    private static setNodeShape(node);
    /**
     * Sets the style of the Node
     * @param node Node for which style must be set
     * IMPORTANT: Node is modified by inner function
     */
    private static setNodeStyle(node);
    /**
     * Sets the color of the Node (by default, background is in white and borders are in black)
     * @param node Node for which color must be set
     * IMPORTANT: Node is modified through the function (style is set)
     */
    private static setNodeColor(node);
    /**
     * Formats all the Edges
     */
    private static formatEdges();
    /**
     * Formats an Edge
     * @param edge Edge to be formatted
     * IMPORTANT: Edge is modified by inner function
     */
    private static formatEdge(edge);
    /**
     * Sets style of the Edge
     * @param edge Edge for which style must be set
     * IMPORTANT: Edge is modified by inner function
     */
    private static setEdgeStyle(edge);
    /**
     * Sets the color of the Edge
     * @param edge Edge for which color must be set
     * IMPORTANT: Node is modified through the function (style is set)
     */
    private static setEdgeColor(edge);
    /**
     * Constructs the graph (graph complies with graphlib format)
     */
    private static constructGraph();
    /**
     * Sets events attached to the Nodes
     */
    private static setNodesEvents();
    /**
     * Sets events attached to the Edges
     */
    private static setEdgesEvents();
    /**
     * Formats text displayed on SVG element
     */
    private static formatText();
    /**
     * Sets zoom functionality on the renderer
     */
    private static setZoom();
    /**
     * Sets the width and the height of the SVG element such that it fully expands
     */
    private static setWidthAndHeight();
}
