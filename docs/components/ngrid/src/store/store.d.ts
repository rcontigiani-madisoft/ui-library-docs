import * as React from "react";
type Action = {
    type: string;
};
type Dispatch<TAction extends Action> = (action: TAction) => void;
export declare function createStore<TState, TAction extends Action>(reducer: (state: TState, action: TAction) => TState, initialState: TState): {
    useStoreState: () => TState;
    useStoreDispatch: () => Dispatch<TAction>;
    Provider: ({ initialState, children, }: React.PropsWithChildren<{
        initialState: TState;
    }>) => React.ReactElement;
};
export {};
