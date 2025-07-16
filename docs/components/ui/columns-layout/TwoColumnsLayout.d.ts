import * as React from 'react';
type TwoColumnsLayoutProps = {
    children: React.ReactNode;
    secondary: React.ReactNode;
    isSecondaryOpen: boolean;
    secondaryWidth?: string;
    mobileBreakpoint?: number;
    left?: boolean;
    className?: string;
};
export declare function TwoColumnsLayout({ children, secondary, isSecondaryOpen, secondaryWidth, mobileBreakpoint, left, className, }: TwoColumnsLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
