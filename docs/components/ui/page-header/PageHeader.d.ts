import * as React from 'react';
type PageHeaderProps = {
    title: string;
    titleId?: string;
    subtitle?: string;
    subtitleId?: string;
    className?: string;
    beforeChildren?: React.ReactNode;
    children?: React.ReactNode;
};
export declare function PageHeader({ title, titleId, subtitle, subtitleId, className, beforeChildren, children, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
