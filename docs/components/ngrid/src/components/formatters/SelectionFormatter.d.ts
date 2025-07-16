type SelectionFormatterProps = {
    item: unknown;
    onItemSelect?: (item: unknown) => void;
    ariaLabel?: (item: unknown) => string;
};
declare function SelectionFormatter({ item, onItemSelect, ariaLabel, }: SelectionFormatterProps): import("react/jsx-runtime").JSX.Element;
export default SelectionFormatter;
