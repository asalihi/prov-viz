export declare class Edge {
    private v;
    private w;
    private value;
    constructor(source: string, target: string, label?: string);
    getSource(): string;
    setSource(source: string): void;
    getTarget(): string;
    setTarget(target: string): void;
    getLabel(): string;
    get(property: string): any;
    set(property: string, value: any): void;
}
