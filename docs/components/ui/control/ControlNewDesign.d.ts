import { Appearance } from '../theme/theme.types';
import * as React from "react";
type ControlProps = {
    label: string;
    labelId?: string;
    labelAriaLabelledBy?: string;
    inputId?: string;
    className?: string;
    appearance?: Appearance;
    disabled?: boolean;
    children?: React.ReactNode;
    required?: boolean;
    hint?: string;
    message?: string;
    extraContent?: React.ReactNode;
};
export declare function ControlNewDesign({ children, label, labelId, labelAriaLabelledBy, inputId, appearance, className, hint, required, message, extraContent, }: ControlProps): import("react/jsx-runtime").JSX.Element;
export type ValidationProps = {
    $appearance?: Appearance;
    $defaultColor?: string;
};
export declare const controlBorderColor: (props: ValidationProps) => string;
export declare const controlTextColor: (props: ValidationProps) => string;
export declare const inputStyles: import('styled-components').RuleSet<ValidationProps>;
export {};
