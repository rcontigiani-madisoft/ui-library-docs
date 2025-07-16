export declare class BulkActionError extends Error {
    constructor(message: string);
}
export declare class TooManyItems extends BulkActionError {
    constructor(actionName: string, itemsLength: number, maxItems: number);
}
export declare class ActionNotFound extends BulkActionError {
    constructor();
}
export declare class UnknownActionType extends BulkActionError {
    constructor();
}
export declare class MissingGridIdentifier extends BulkActionError {
    static NOT_FOUND_GRID_ID: string;
    static NOT_FOUND_ELEMENT: string;
    static NOT_FOUND_CONTAINER: string;
}
