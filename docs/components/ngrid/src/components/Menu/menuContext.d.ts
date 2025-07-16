import * as React from "react";
type MenuContextType = {
    menuId: string;
    isOpen: boolean;
    open: (forward?: boolean) => void;
    close: () => void;
    activeDescendant: string;
    setActiveDescendant: (id: string) => void;
};
type MenuProviderProps = {
    children?: React.ReactNode;
};
declare function MenuProvider({ children }: MenuProviderProps): import("react/jsx-runtime").JSX.Element;
declare function useMenuContext(): MenuContextType;
export { MenuProvider, useMenuContext };
