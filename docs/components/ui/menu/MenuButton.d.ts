import { PolymorphicProps } from '../polimorphic/polymorphic';
import * as React from 'react';
declare const defaultElement = "button";
type MenuButtonProps<C extends React.ElementType> = PolymorphicProps<C, {
    disableArrowKeys?: boolean;
}>;
declare function MenuButton<C extends React.ElementType = typeof defaultElement>({ ref, as, className, disableArrowKeys, ...props }: MenuButtonProps<C>): import("react/jsx-runtime").JSX.Element;
export default MenuButton;
