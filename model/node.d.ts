export declare class Node {
    protected v?: string;
    protected value: Object;
    constructor(type: string, subType?: string, id?: string, label?: string);
    getId(): string;
    setId(id: string): void;
    getType(): string;
    getLabel(): string;
    get(property: string): any;
    set(property: string, value: any): void;
    append(property: string, element: any, key?: string): void;
    private appendElement(property, element, key?);
}
