import * as React from 'react';
type ErrorBoundaryProps = {
    children?: React.ReactNode;
    onReset?: () => void;
    onError?: (error: Error) => void;
};
export declare const ErrorBoundary: ({ children, onReset, onError, }: ErrorBoundaryProps) => import("react/jsx-runtime").JSX.Element;
export {};
