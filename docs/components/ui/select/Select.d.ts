import { InputControlProps } from '../control/Control';
import { SelectOption } from './select.types';
import * as React from 'react';
type HTMLSelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
type SelectProps = HTMLSelectProps & InputControlProps & {
    options: SelectOption<string>[];
    clearable?: boolean;
    placeholder?: string;
};
export declare function Select({ id, name, options, value, onChange, defaultValue, required, disabled, clearable, placeholder, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;
export {};
