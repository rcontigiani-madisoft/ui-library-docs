import { EnumOption } from '../../utils';
import { Appearance } from '../theme/theme.types';
type CheckboxOption = EnumOption & {
    disabled?: boolean;
};
type CheckboxGroupProps = {
    label: string;
    name: string;
    options: CheckboxOption[];
    values: string[];
    onChange?: (value: string[]) => void;
    appearance?: Appearance;
    message?: string;
};
export declare function CheckboxGroup({ label, name, options, values, onChange, appearance, message, }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
