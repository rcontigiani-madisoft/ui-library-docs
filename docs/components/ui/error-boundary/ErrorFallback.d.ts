import * as React from "react";
type ErrorFallbackProps = {
    error: Error;
    title?: string;
    message?: string | string[];
    className?: string;
    children?: React.ReactNode;
    reset?: () => void;
};
export declare const ErrorFallback: ({ error, title, message, className, children, reset, }: ErrorFallbackProps) => import("react/jsx-runtime").JSX.Element;
export {};
