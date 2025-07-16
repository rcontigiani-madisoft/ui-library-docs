import { OptionValue } from '../../../typings';
type DayPickerProps = {
    inputId?: string;
    selected: OptionValue<Date> | null;
    onChange: (optionValue: OptionValue<Date> | null) => void;
    disabled?: boolean;
};
export declare function DayPicker({ inputId, selected, disabled, onChange, }: DayPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
