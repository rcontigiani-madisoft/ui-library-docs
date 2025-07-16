import { Entity } from '../../typings';
import { default as TableRow } from '../TableRow/TableRow';
import * as React from "react";
type TableRowProps<T extends Entity> = Omit<React.ComponentProps<typeof TableRow<T>>, "item" | "rowLabel">;
type TableBodyProps<T extends Entity> = TableRowProps<T> & {
    scrollContainerRef?: React.RefObject<Element | null>;
};
export declare function TableBody<T extends Entity>({ scrollContainerRef, ...props }: TableBodyProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
