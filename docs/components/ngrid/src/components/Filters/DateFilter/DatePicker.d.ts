import { OptionValue } from '../../../typings';
import * as React from "react";
type DatePickerProps = {
    id: string;
    label: string;
    value: OptionValue | null;
    disabled?: boolean;
    onChange: (newValue: OptionValue | null) => void;
};
declare const _default: React.FC<DatePickerProps>;
export default _default;
