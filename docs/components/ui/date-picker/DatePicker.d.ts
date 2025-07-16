import { PropsSingle, PropsSingleRequired } from 'react-day-picker';
interface DatePickerInterfaceBase {
    disabled?: {
        after: Date;
        before: Date;
    };
    modifiersStyles: {
        modifiers?: {
            weekday: Date[];
        };
        modifiersClassNames?: {
            weekday: string;
        };
    };
}
interface DatePickerRequired extends DatePickerInterfaceBase {
    required: true;
    selected: Date;
    onSelect: PropsSingleRequired['onSelect'];
}
interface DatePickerOptional extends DatePickerInterfaceBase {
    required?: false | undefined;
    selected?: Date | undefined;
    onSelect: PropsSingle['onSelect'];
}
export type DatePickerInterface = DatePickerRequired | DatePickerOptional;
export declare function DatePicker({ modifiersStyles, ...props }: DatePickerInterface): import("react/jsx-runtime").JSX.Element;
export {};
