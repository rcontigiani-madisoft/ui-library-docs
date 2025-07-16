import * as React from 'react';
type PageHeaderProps = {
    title: string;
    headerChildren?: React.ReactNode;
    tabTitles: string[];
    children: React.ReactNode;
};
export declare function TabsPageLayout({ title, headerChildren, tabTitles, children, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
