import { JSONSchema7 } from 'json-schema';
import { GridColumn, GridFilter } from '../../typings';
import * as React from "react";
type FilterItemProps<T> = {
    column: GridColumn<T>;
    currentValue?: GridFilter<string | number | boolean>;
    url: string;
    scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
    globalSchema: JSONSchema7 | undefined;
    onSubmit: (key: string, filter: GridFilter<string | number | boolean> | null) => void;
};
export declare function FilterItem<T>({ column, currentValue, url, scrollContainerRef, globalSchema, onSubmit, }: FilterItemProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
