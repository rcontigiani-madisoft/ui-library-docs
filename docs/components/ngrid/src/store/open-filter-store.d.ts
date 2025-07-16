type State = {
    openFilter?: string;
};
type Action = {
    type: "open";
    filterName: string;
} | {
    type: "close";
};
export declare const OpenFilterProvider: ({ initialState, children, }: import('../../../../../node_modules/react').PropsWithChildren<{
    initialState: State;
}>) => React.ReactElement, useOpenFilterDispatch: () => (action: Action) => void, useOpenFilterState: () => State;
export {};
