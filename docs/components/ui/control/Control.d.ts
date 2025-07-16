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
export type InputControlProps = Omit<ControlProps, "children" | "inputId">;
export declare function Control({ children, label, labelId, labelAriaLabelledBy, inputId, appearance, className, hint, required, disabled, message, extraContent, }: ControlProps): import("react/jsx-runtime").JSX.Element;
export type ValidationProps = {
    $appearance?: Appearance;
    $defaultColor?: string;
};
export declare const controlBorderColor: (props: ValidationProps) => string;
export declare const controlTextColor: (props: ValidationProps) => string;
export declare const Label: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, never>> & string;
export declare function controlId(strings: TemplateStringsArray, inputProps: {
    id?: string;
    name?: string;
}): string | undefined;
export declare const inputStyles: import('styled-components').RuleSet<ValidationProps>;
export {};
