import * as React from 'react';
type AlertDialogProps = {
    label: string;
    description: string | React.ReactNode;
    dismissLabel?: string;
    confirmLabel?: string;
    children?: React.ReactNode;
    onDismiss: () => void;
    onConfirm: () => void;
    disabled?: boolean;
    primaryDismiss?: boolean;
    className?: string;
};
export declare function AlertDialog({ label, description, confirmLabel, dismissLabel, children, onConfirm, onDismiss, disabled, primaryDismiss, className, }: AlertDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
