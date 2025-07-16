import { SidebarRoute, Route } from './sidebar-items';
import * as React from 'react';
type SidebarItemsProps = {
    items: SidebarRoute[];
    searchTerm?: string;
    activeRoute: Route[];
    LinkComponent?: React.ElementType;
};
export declare function SidebarItems({ items, activeRoute, searchTerm, LinkComponent, }: SidebarItemsProps): import("react/jsx-runtime").JSX.Element;
export {};
