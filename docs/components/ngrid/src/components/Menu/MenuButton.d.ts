import { PolymorphicPropsWithRef } from '../polymorphic';
import * as React from "react";
declare const defaultElement = "button";
type MenuButtonProps<C extends React.ElementType> = PolymorphicPropsWithRef<C, {}>;
type MenuButtonComponent = <C extends React.ElementType = typeof defaultElement>(p: MenuButtonProps<C>) => React.ReactNode | null;
declare const MenuButton: MenuButtonComponent;
export default MenuButton;
