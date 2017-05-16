import { EventEmitter } from '@angular/core';
import { MapperService } from './mapper.service';
export declare class GraphComponent {
    private mapperService;
    private static readonly defaultMode;
    private static readonly simplifiedMode;
    private static readonly extendedMode;
    private mode;
    private rendering;
    private error;
    private graph;
    data: Object;
    svgContainer: any;
    ngGraphRendered: EventEmitter<Object>;
    ngGraphClicked: EventEmitter<Object>;
    ngNodeClicked: EventEmitter<Object>;
    ngNodeCtrlClicked: EventEmitter<Object>;
    ngEdgeClicked: EventEmitter<Object>;
    ngEdgeCtrlClicked: EventEmitter<Object>;
    /**
     * Constructor of DumperComponent
     * @param mapperService Injection of Mapper service
     */
    constructor(mapperService: MapperService);
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
     * Initializes the EventEmitter attached to the graph
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
     * Displays the graph as SVG element
     * NOTE: By default, a delay of 500 ms is set before displaying graph for better user experience (loading icon does not disappear too rapidly when rendering is instant)
     */
    private displayGraph();
    /**
     * Handles error
     * @param exception Exception raised during creation or rendering of the graph
     * @param flush If set to true, any SVG element rendered in container is removed from it (default: false)
     */
    private handleError(exception, flush?);
}
