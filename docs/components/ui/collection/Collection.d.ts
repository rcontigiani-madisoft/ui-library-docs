import * as React from "react";
type Props<T> = {
    items: T[];
    newItemValue: T;
    onChange: (items: T[]) => void;
    renderItem: (item: T, index: number) => React.ReactNode;
    addLabel?: string;
    deleteLabel?: string;
};
export declare function Collection<T>({ items, newItemValue, onChange, renderItem, addLabel, deleteLabel, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
