import * as React from "react";
type DisclosureCheckboxProps = {
    label: string;
    id?: string;
    hint?: string;
    children?: React.ReactNode;
    defaultChecked?: boolean;
    className?: string;
    error?: string;
};
export declare function DisclosureCheckbox({ defaultChecked, ...props }: DisclosureCheckboxProps): import("react/jsx-runtime").JSX.Element;
type ControlledDisclosureCheckboxProps = DisclosureCheckboxProps & {
    isOpen: boolean;
    onClick: () => void;
};
export declare function ControlledDisclosureCheckbox({ label, id, hint, children, isOpen, className, error, onClick, }: ControlledDisclosureCheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
