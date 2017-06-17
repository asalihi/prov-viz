import { EventEmitter } from '@angular/core';
import { NodeDetailService } from './node-detail.service';
export declare class NodeDetailComponent {
    private nodeDetailService;
    private static readonly delay;
    private rendering;
    private error;
    private title;
    private content;
    nodeId: string;
    ngNodeDetailViewClosed: EventEmitter<any>;
    /**
     * Constructor of DumperComponent
     * @param nodeDetailService Injection of Node detail service
     */
    constructor(nodeDetailService: NodeDetailService);
    /**
     * Lifecycle hook called when view of component has been fully initialized
     * (see Angular documentation: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#oninit)
     */
    ngOnInit(): void;
    /**
     * Retrieves information of the node
     */
    private fetchInformation();
    /**
     * Sends an event to inform parent that user closed the view
     */
    private close();
    /**
     * Handles error
     * @param exception Exception raised during retrieve and display of node details
     */
    private handleError(exception);
}
