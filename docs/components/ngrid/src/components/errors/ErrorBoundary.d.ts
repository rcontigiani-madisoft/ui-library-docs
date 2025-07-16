import * as React from "react";
type ErrorBoundaryState = {
    error: Error | null;
};
type ErrorBoundaryProps = {
    children: React.ReactNode;
};
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    state: ErrorBoundaryState;
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export {};
