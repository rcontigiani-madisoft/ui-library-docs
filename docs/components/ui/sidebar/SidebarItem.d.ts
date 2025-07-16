import { SidebarRoute, Route } from './sidebar-items';
import * as React from "react";
type SidebarItemOwnProps<As extends React.ElementType = React.ElementType> = {
    sidebarRoute: SidebarRoute;
    as?: As;
    parentRoute?: Route[];
    searchTerm?: string;
    activeRoute: Route[];
    isButtonLink?: boolean;
};
type SidebarItemProps<E extends React.ElementType> = SidebarItemOwnProps<E> & Omit<React.ComponentProps<E>, keyof SidebarItemOwnProps>;
declare const DEFAULT_LINK_COMPONENT = "a";
export declare function SidebarItem<T extends React.ElementType = typeof DEFAULT_LINK_COMPONENT>({ sidebarRoute, activeRoute, searchTerm, parentRoute, as, }: SidebarItemProps<T>): import("react/jsx-runtime").JSX.Element;
type MenuItemProps = {
    $isActive?: boolean;
    $hasActiveChild?: boolean;
};
export declare const SidebarLink: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, MenuItemProps>> & string;
export {};
