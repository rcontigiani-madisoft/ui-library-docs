export type UIErrorViewProps = React.PropsWithChildren<{
    title: string;
    message: string | string[];
}>;
export declare function ErrorView({ title, message, children }: UIErrorViewProps): import("react/jsx-runtime").JSX.Element;
