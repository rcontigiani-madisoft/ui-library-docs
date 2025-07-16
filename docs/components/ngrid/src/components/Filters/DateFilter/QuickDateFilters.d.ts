import { Operator, OptionValue } from '../../../typings';
type QuickDateFilter = OptionValue<string> & {
    operator: Extract<Operator, "eq" | "between">;
};
type QuickDateFiltersProps = {
    selected: {
        from: Date;
        to: Date;
    } | null;
    onSelect: (rangeOption: QuickDateFilter) => void;
};
export declare function QuickDateFilters({ selected, onSelect, }: QuickDateFiltersProps): import("react/jsx-runtime").JSX.Element;
export declare function dateRangeFromValue(value: string | undefined): {
    from: Date;
    to: Date;
} | null;
export {};
