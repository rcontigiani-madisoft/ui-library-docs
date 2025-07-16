import { InputControlProps } from '../../control/Control';
import * as React from "react";
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    comboboxRef: React.RefObject<HTMLInputElement | null>;
    appearance: InputControlProps["appearance"];
    ariaExpanded: boolean;
    activeDescendant?: string;
    clearable?: boolean;
    onClear: () => void;
};
export declare function AutoCompleteComboboxNewDesign({ comboboxRef, id, appearance, ariaExpanded, activeDescendant, value, clearable, onClear, ...inputProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
