import { Appearance } from '../theme/theme.types';
export type RadioOption = {
    label: string;
    value: string;
};
type RadioGroupProps = {
    label: string;
    name: string;
    options: RadioOption[];
    className?: string;
    appearance?: Appearance;
    disabled?: boolean;
    required?: boolean;
    hint?: string;
    message?: string;
    value?: string;
    onChange?: (option: RadioOption) => void;
    defaultValue?: string;
};
export declare function RadioGroup({ label, className, options, name, appearance, required, defaultValue, disabled, hint, value, onChange, message, }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
