type MonthSelectionWidgetProps = {
    selected: Date | undefined;
    onSelect: (date: Date) => void;
    className?: string;
};
export declare function MonthSelectionWidget({ selected, onSelect, className, }: MonthSelectionWidgetProps): import("react/jsx-runtime").JSX.Element;
export declare const pickerButtonStyles: import('styled-components').RuleSet<object>;
export {};
