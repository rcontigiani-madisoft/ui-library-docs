import { SelectOption, SelectOptionGroup } from '../select.types';
import * as React from 'react';
type Props<Value extends string | number> = {
    open: boolean;
    options: (SelectOption<Value> | SelectOptionGroup<Value>)[];
    searchTerm: string;
    comboboxRef: React.RefObject<HTMLInputElement | null>;
    containerRef?: React.RefObject<HTMLElement | null>;
} & OptionProps<Value>;
export declare function AutoCompletePopover<Value extends string | number>({ id, open, options, searchTerm, comboboxRef, containerRef, ...optionProps }: Props<Value>): import("react/jsx-runtime").JSX.Element;
type OptionProps<Value extends string | number> = {
    id: string;
    selected?: Value | null;
    optionWithVisualFocus: Value | null;
    onSelectOption: (option: SelectOption<Value>) => void;
    onHoverOption: (value: Value) => void;
};
export {};
