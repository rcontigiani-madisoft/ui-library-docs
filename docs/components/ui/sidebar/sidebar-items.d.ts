import * as React from "react";
export type Route = {
    path: string;
    replace?: boolean;
};
export type SidebarRoute = Route & {
    label: string;
    icon?: React.ReactNode;
    children?: SidebarRoute[];
};
export declare function findActiveRoute(routes: SidebarRoute[], activePath?: string): Route[];
export declare function filterRoutes(routes: SidebarRoute[], searchTerm?: string): SidebarRoute[];
export declare function matchesSearch(route: SidebarRoute, searchTerm: string): boolean;
export declare function sidebarElementId(path: string, prefix?: string): string;
export declare function sidebarItemHref(path: Route[]): string;
export declare function isSubRoute(route1: Route[], route2: Route[]): boolean;
export declare function isRouteEqual(route1: Route[], route2: Route[]): boolean;
export declare function toRoute({ path, replace }: SidebarRoute): Route;
