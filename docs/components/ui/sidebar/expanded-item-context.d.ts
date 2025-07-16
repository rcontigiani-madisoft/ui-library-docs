import { Route } from './sidebar-items';
import * as React from 'react';
type ExpandedItemContextType = {
    isItemExpanded: (route: Route[]) => boolean | undefined;
    expandItem: (expandedRoutes: Route[]) => void;
    toggleItem: (route: Route, parentRoutes?: Route[]) => void;
};
type ExpandedItemContextProviderProps = React.PropsWithChildren<{
    activeRoute?: Route[];
}>;
declare const ExpandedItemContextProvider: React.FC<ExpandedItemContextProviderProps>;
declare function useExpandedItem(): ExpandedItemContextType;
export { ExpandedItemContextProvider, useExpandedItem };
