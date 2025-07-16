type State = {
    completedTutorials: string[];
};
type Action = {
    type: "complete";
    tutorialId: string;
} | {
    type: "resetAll";
};
export declare const useTutorialsState: () => State, useTutorialsDispatch: () => (action: Action) => void, TutorialsProvider: ({ initialState, children, }: import('../../../../../node_modules/react').PropsWithChildren<{
    initialState: State;
}>) => React.ReactElement;
export {};
