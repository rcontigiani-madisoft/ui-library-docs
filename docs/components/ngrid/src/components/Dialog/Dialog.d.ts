import * as React from "react";
type DialogProps = React.PropsWithChildren<{
    open: boolean;
    onDismiss?: () => void;
    closeOnClickOutside?: boolean;
    className?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    role?: "dialog" | "alertdialog";
}>;
export declare const Dialog: React.FC<DialogProps>;
export {};
