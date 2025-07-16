type BulkActionsMessageProps<T> = {
    error?: string;
    selectedCount: number;
    countLimit: number;
    value: T | null;
};
declare function BulkActionsMessage<T>({ error, selectedCount, countLimit, value, }: BulkActionsMessageProps<T>): import("react/jsx-runtime").JSX.Element;
export default BulkActionsMessage;
