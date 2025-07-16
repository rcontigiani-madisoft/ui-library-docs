import { PolymorphicProps } from '../polimorphic/polymorphic';
import * as React from 'react';
declare const defaultElement = "div";
type OnSelectFn = (() => void) | (() => boolean);
type MenuItemProps<C extends React.ElementType> = PolymorphicProps<C, {
    onSelect?: OnSelectFn;
    disabled?: boolean;
}>;
declare function MenuItem<C extends React.ElementType = typeof defaultElement>({ ref, as, onClick, onSelect, disabled, ...props }: MenuItemProps<C>): import("react/jsx-runtime").JSX.Element;
export default MenuItem;
