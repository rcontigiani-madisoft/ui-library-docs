import * as React from 'react';
type DialogButtonProps = {
    title: string;
    dialogTitle?: string;
    children: (onDismiss: () => void) => React.ReactNode;
    appearance?: 'ghost' | 'outline' | 'filled';
    svgIcon?: React.ReactNode;
};
export declare function DialogButton({ title, dialogTitle, children, appearance, svgIcon, }: DialogButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
