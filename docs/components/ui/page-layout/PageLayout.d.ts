import * as React from 'react';
type Props = {
    title: string;
    titleId?: string;
    children: React.ReactNode;
    headerChildren?: React.ReactNode;
    headerBeforeChildren?: React.ReactNode;
};
export declare function PageLayout({ title, titleId, children, headerChildren, headerBeforeChildren, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
