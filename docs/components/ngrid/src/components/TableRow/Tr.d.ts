import { Entity } from '../../typings';
import * as React from "react";
type Props<T> = React.PropsWithChildren<{
    item: T;
}>;
declare function Tr<T extends Entity>({ item, children }: Props<T>): import("react/jsx-runtime").JSX.Element;
export default Tr;
