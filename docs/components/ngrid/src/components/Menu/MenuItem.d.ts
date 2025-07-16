import { PolymorphicPropsWithRef } from '../polymorphic';
import * as React from "react";
declare const defaultElement = "div";
type MenuItemProps<C extends React.ElementType> = PolymorphicPropsWithRef<C, {
    onSelect?: () => void;
    disabled?: boolean;
}>;
type MenuItemComponent = <C extends React.ElementType = typeof defaultElement>(p: MenuItemProps<C>) => React.ReactNode | null;
declare const MenuItem: MenuItemComponent;
export default MenuItem;
