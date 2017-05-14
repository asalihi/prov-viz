import { EventEmitter } from '@angular/core';
import { MapperService } from './mapper.service';
export declare class GraphComponent {
    private mapperService;
    private static readonly defaultMode;
    private mode;
    private rendering;
    private graph;
    data: Object;
    svgContainer: any;
    ngGraphRendered: EventEmitter<Object>;
    ngGraphClicked: EventEmitter<Object>;
    ngNodeClicked: EventEmitter<Object>;
    ngNodeCtrlClicked: EventEmitter<Object>;
    ngEdgeClicked: EventEmitter<Object>;
    ngEdgeCtrlClicked: EventEmitter<Object>;
    constructor(mapperService: MapperService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    changeMode(mode: string): void;
    fitContent(): void;
    zoomIn(): void;
    zoomOut(): void;
    private initializeGraphEventsListeners();
    private setGraphEventsListeners();
    private createGraph();
    private displayGraph();
}
