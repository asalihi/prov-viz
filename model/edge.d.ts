export declare class Edge {
    private v;
    private w;
    private value;
    /**
     * Constructor of Edge
     * @param source Identifier of source of the edge
     * @param target Identifier of target of the edge
     * @param label (optional) Label to be displayed on the edge
     */
    constructor(source: string, target: string, label?: string);
    /**
     * Getter: source
     * @return Identifier of source of the edge
     */
    getSource(): string;
    /**
     * Setter: source
     * @param source Identifier of source of the edge
     */
    setSource(source: string): void;
    /**
     * Getter: target
     * @return Identifier of target of the edge
     */
    getTarget(): string;
    /**
     * Setter: target
     * @param target Identifier of target of the edge
     */
    setTarget(target: string): void;
    /**
     * Getter: label
     * @return Label of the edge
     */
    getLabel(): string;
    /**
     * Setter: label
     * @param label Label of the edge
     */
    setLabel(label: string): void;
    /**
     * Generic getter
     * @param property Property to be retrieved
     * @return Value associated to property if property exists, null otherwise
     */
    get(property: string): any;
    /**
     * Generic setter
     * @param property Property for which new value must be set
     * @param value New value to associate with property
     */
    set(property: string, value: any): void;
}
