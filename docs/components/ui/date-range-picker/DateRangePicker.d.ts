import { DateRange, PropsRange } from 'react-day-picker';
type LabeledDateRange = {
    label: string;
    from: Date;
    to: Date;
};
type DateRangePickerProps = Omit<PropsRange, "mode" | "onSelect"> & {
    quickFilters?: LabeledDateRange[];
    onSelect: (date?: DateRange) => void;
};
export declare function DateRangePicker({ selected, onSelect, quickFilters, }: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
