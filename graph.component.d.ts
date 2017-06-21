import { ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { GraphService } from './graph.service';
import { MapperService } from './mapper.service';
import { GraphFormatterService } from './graph-formatter.service';
import { DagreD3RendererService } from './dagre-d3-renderer.service';
export declare class GraphComponent {
    private componentFactoryResolver;
    private graphService;
    private mapperService;
    private graphFormatterService;
    private dagreD3RendererService;
    private static readonly defaultMode;
    private static readonly simplifiedMode;
    private static readonly extendedMode;
    private static readonly delay;
    private mode;
    private rendering;
    private error;
    private graph;
    private formattedGraph;
    private nodeDetailComponentRef;
    private componentFactory;
    sourceId: string;
    svgContainer: any;
    nodeDetailContainer: any;
    ngGraphRendered: EventEmitter<Object>;
    ngGraphClicked: EventEmitter<Object>;
    ngNodeClicked: EventEmitter<Object>;
    ngNodeCtrlClicked: EventEmitter<Object>;
    ngNodeExpanded: EventEmitter<Object>;
    ngEdgeClicked: EventEmitter<Object>;
    ngEdgeCtrlClicked: EventEmitter<Object>;
    /**
     * Constructor of DumperComponent
     * @param componentFactoryResolver Injection of component factory resolver
     * @param mapperService Injection of mapper service
     * @param graphFormatterService Injection of graph formatter service
     * @param dagreD3Renderer Injection of dagre-d3 renderer service
     */
    constructor(componentFactoryResolver: ComponentFactoryResolver, graphService: GraphService, mapperService: MapperService, graphFormatterService: GraphFormatterService, dagreD3RendererService: DagreD3RendererService);
    /**
     * Lifecycle hook called when view of component has been fully initialized
     * (see Angular documentation: https://angular.io/docs/ts/latest/api/core/index/AfterViewInit-class.html)
     */
    ngAfterViewInit(): void;
    /**
     * Lifecycle hook called when data-bound property of a directive changes
     * (see Angular documentation: https://angular.io/docs/ts/latest/api/core/index/OnChanges-class.html)
     */
    ngOnChanges(changes: any): void;
    /**
     * Lifecycle hook called when component is destroyed
     * (see Angular documentation: https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html)
     */
    ngOnDestroy(): void;
    /**
     * Changes the mode for rendering graph (swtich between simplified and extended versions)
     * @param mode Selected mode for display
     */
    changeMode(mode: string): void;
    /**
     * Fits the content of the graph to the container with a delay of 500 ms
     */
    fitContent(): void;
    /**
     * Zooms in the graph with a delay of 250 ms
     */
    zoomIn(): void;
    /**
     * Zooms out the graph with a delay of 250 ms
     */
    zoomOut(): void;
    /**
     * Initializes the event emitters attached to the graph
     */
    private initializeGraphEventsListeners();
    /**
     * Sets the events listeners attached to the graph
     */
    private setGraphEventsListeners();
    /**
     * Creates the graph based on data provided
     */
    private createGraph();
    /**
     * Formats the graph (nodes and edges)
     */
    private formatGraph();
    /**
     * Displays the graph as SVG element
     * NOTE: By default, a delay of 500 ms is set before displaying graph for better user experience (loading icon does not disappear too rapidly when rendering is instant)
     */
    private displayGraph();
    /**
     * Expands a given node of the graph
     * @param event nodeId Identifier of the node to be expanded
     */
    private expandNode(nodeId);
    /**
     * Displays nodes and their associated edges with transition
     * @param newNodesId Identifiers of the nodes (with their respective links) to be displayed with transition
     */
    private displayNewNodesAndConnectionsWithTransition(newNodesId);
    /**
     * Display information about a node
     * @param nodeId Identifier of the node
     */
    private displayNodeDetails(nodeId);
    /**
     * Closes the view containing details of a node, if displayed
     */
    private closeNodeDetailView();
    /**
     * Closes context menu if any opened
     */
    private closeContextMenu();
    /**
     * Handles error
     * @param exception Exception raised during creation or rendering of the graph
     * @param flush If set to true, any SVG element rendered in container is removed from it (default: false)
     */
    private handleError(exception, flush?);
}
