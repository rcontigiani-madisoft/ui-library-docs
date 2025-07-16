type DateRange = {
    from: Date;
    to: Date;
};
type LabeledDateRange = DateRange & {
    label: string;
};
type Props = {
    className?: string;
    selected?: DateRange;
    onSelect: (range: DateRange) => void;
    quickFilters?: LabeledDateRange[];
};
export declare function DateRangeSelectionWidget({ className, selected, onSelect, quickFilters, }: Props): import("react/jsx-runtime").JSX.Element;
export declare function formatToDateStringShortYear(date: Date | number): string;
export {};
