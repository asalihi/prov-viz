export declare class Node {
    protected v?: string;
    protected value: Object;
    /**
     * Constructor of Node
     * @param type Type of Node according to Provenance specification in context of Provenance graph, null otherwise
     * @param subType (optional) Subtype of Node (by default, null)
     * @param id (optional) Identifier of the Node (if empty, temporary identifier is created; pattern: 'temp_<UUID>' where UUID complies with V1)
     */
    constructor(id: string, type?: string, subType?: string, label?: string);
    /**
     * Getter: identifier
     * @return Identifier of the Node
     */
    getId(): string;
    /**
     * Setter: identifier
     * @param id Identifier of the Node
     */
    setId(id: string): void;
    /**
     * Getter: type
     * @return Type of the Node
     */
    getType(): string;
    /**
     * Getter: label
     * @return Label of the Node
     */
    getLabel(): string;
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
    /**
     * Appends element for given property if aforesaid property exists
    * @param property Property for which element must be appended
    * @param element Element to append
    * @param end Indicates if element must be appended at the end (by default, true)
    * @param key (optional) Key if property is an Object
    */
    append(property: string, element: any, end?: boolean, key?: string): void;
    /**
     * Appends element for given property based on type of attribute
     * @param property Property for which element must be appended
     * @param element Element to append
     * @param key (optional) Key if property is an Object
     * @param end Indicates if element must be appended at the end
     */
    private appendElement(property, element, end, key?);
}
