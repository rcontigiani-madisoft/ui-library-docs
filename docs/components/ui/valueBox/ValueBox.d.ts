import * as React from "react";
type NumberBoxProps = React.PropsWithChildren<{
    label: string;
    value: React.ReactNode;
    appearance?: "error";
    className?: string;
    emptyPlaceholder?: string;
}>;
export declare function ValueBox({ children, label, value, appearance, className, emptyPlaceholder, }: NumberBoxProps): import("react/jsx-runtime").JSX.Element;
export interface StatusValueBoxProps extends Omit<NumberBoxProps, "children" | "appearance"> {
    isError: boolean;
    errorMessage: string;
}
export declare function StatusValueBox({ value, className, isError, errorMessage, label, }: StatusValueBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
