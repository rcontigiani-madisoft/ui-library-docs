type State = {
    selected: string[];
};
type Action = {
    type: "selectAll";
    items: string[];
} | {
    type: "deselectAll";
    items: string[];
} | {
    type: "toggleItemSelection";
    item: string;
} | {
    type: "clearAllSelection";
};
export declare const useRowSelectionState: () => State, useRowSelectionDispatch: () => (action: Action) => void, RowSelectionProvider: ({ initialState, children, }: import('../../../../../node_modules/react').PropsWithChildren<{
    initialState: State;
}>) => React.ReactElement;
export {};
