import * as React from "react";
type HTMLCheckboxProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type CheckboxProps = HTMLCheckboxProps & {
    label: string;
    hint?: string;
    isSwitch?: boolean;
    ariaDescribedBy?: string;
};
export declare function CheckboxNewDesign({ label, hint, id, isSwitch, ariaDescribedBy, className, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export declare const CheckboxInput: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> & string;
export {};
