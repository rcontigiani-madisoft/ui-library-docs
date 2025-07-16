type Action = {
    type: "render";
    start: number;
    end: number;
} | {
    type: "reset";
};
export declare const LazyRowsProvider: ({ initialState, children, }: import('../../../../../node_modules/react').PropsWithChildren<{
    initialState: {
        start: number;
        end: number;
    };
}>) => React.ReactElement, useLazyRowsDispatch: () => (action: Action) => void, useLazyRows: () => {
    start: number;
    end: number;
};
export {};
