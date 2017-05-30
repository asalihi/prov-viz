export declare class DagreD3RendererService {
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
     * Removes rendered graph if any
     */
    flush(): void;
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
     * Sets transition for the graph (duration is 1000 ms)
     */
    private setGraphTransition();
    /**
     * Sets events attached to the nodes
     */
    private setNodesEvents();
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
}
