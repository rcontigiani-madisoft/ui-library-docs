import * as React from 'react';
type MasterDetailLayoutProps = {
    children: [React.ReactNode, React.ReactNode];
    masterRatio?: number;
    detailFlex?: number;
};
export declare function MasterDetailLayout({ children, masterRatio, detailFlex, }: MasterDetailLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
