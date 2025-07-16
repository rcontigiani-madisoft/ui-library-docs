import { InputControlProps } from '../../control/Control';
import { SelectOption, SelectOptionGroup } from '../select.types';
import * as React from 'react';
export type AutoCompleteProps<Value extends string | number> = {
    ref?: React.RefObject<HTMLInputElement | null>;
    id?: string;
    name?: string;
    options: (SelectOption<Value> | SelectOptionGroup<Value>)[];
    value?: Value | null;
    onChange?: (value: Value | null) => void;
    defaultValue?: Value | null;
    clearable?: boolean;
    placeholder?: string;
    disabled?: boolean;
} & InputControlProps;
export declare function AutoComplete<Value extends string | number>({ ref, id: idProp, name, options, value, onChange, defaultValue, clearable, placeholder, disabled, ...controlProps }: AutoCompleteProps<Value>): import("react/jsx-runtime").JSX.Element;
