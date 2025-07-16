import { SidebarRoute } from './sidebar-items';
import * as React from 'react';
type SidebarProps = {
    routes: SidebarRoute[];
    children?: React.ReactNode;
    className?: string;
    activePath?: string;
    LinkComponent?: React.ElementType;
    footer?: React.ReactNode;
    asideId?: string;
    navId?: string;
    ariaLabel?: string;
};
export declare function Sidebar({ routes, children, className, activePath, LinkComponent, footer, ariaLabel, asideId, navId, }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
