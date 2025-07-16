import * as React from "react";
type MonthPickerProps = {
    selected: Date | undefined;
    onSelect: (date: Date) => void;
    ButtonComponent?: React.FC<React.PropsWithChildren<{
        onClick: () => void;
        className?: string;
    }>>;
};
export declare function MonthPicker({ selected, onSelect, ButtonComponent, }: MonthPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
