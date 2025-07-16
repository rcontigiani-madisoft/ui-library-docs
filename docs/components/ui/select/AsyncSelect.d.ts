import { default as ReactSelect } from 'react-select/async';
import { InputControlProps } from '../control/Control';
import { SelectOption } from './select.types';
import * as React from "react";
type Props<V extends string | number> = InputControlProps & {
    name?: string;
    placeholder?: string;
    defaultValue?: SelectOption<V>;
    value?: SelectOption<V> | null;
    noOptionsMessage?: React.ComponentProps<typeof ReactSelect>["noOptionsMessage"];
    loadingMessage?: React.ComponentProps<typeof ReactSelect>["loadingMessage"];
    loadOptions: React.ComponentProps<typeof ReactSelect>["loadOptions"];
    isLoading?: boolean;
    onChange?: (newOption: SelectOption<V> | null) => void;
    cacheOptions?: boolean;
};
export declare function AsyncSelect<V extends string | number>({ name, placeholder, defaultValue, value, noOptionsMessage, loadingMessage, loadOptions, disabled, required, isLoading, onChange, cacheOptions, ...controlProps }: Props<V>): import("react/jsx-runtime").JSX.Element;
export {};
