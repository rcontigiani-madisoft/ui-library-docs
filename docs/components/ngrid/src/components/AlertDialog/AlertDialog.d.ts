import * as React from "react";
type AlertDialogProps = {
    open?: boolean;
    label: string;
    description: string | React.ReactNode;
    dismissLabel?: string;
    confirmLabel?: string;
    children?: React.ReactNode;
    onDismiss: () => void;
    onConfirm: () => void;
    disabled?: boolean;
};
export declare function AlertDialog({ open, label, description, confirmLabel, dismissLabel, children, onConfirm, onDismiss, disabled, }: AlertDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
