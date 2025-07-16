import { SelectOption, SelectOptionGroup } from '../select.types';
type ComboboxState = {
    value: string;
    searchValue: string;
};
type PopoverState<Value extends string | number> = {
    open: boolean;
    visualFocusOption: Value | null;
};
type Props<Value extends string | number> = {
    id: string;
    initialValue?: Value | null;
    options: (SelectOption<Value> | SelectOptionGroup<Value>)[];
    onChange?: (value: Value | null) => void;
};
export declare function useAutoComplete<Value extends string | number>({ id, initialValue, options, onChange, }: Props<Value>): {
    selectedValue: Value | null;
    activeDescendant: string | undefined;
    filteredOptions: (SelectOption<Value> | SelectOptionGroup<Value>)[];
    comboboxState: ComboboxState;
    onComboboxChange: (value: string) => void;
    clearCombobox: () => void;
    popoverState: PopoverState<Value>;
    openPopover: (visualFocusOption?: Value | null) => void;
    closePopover: () => void;
    selectOption: (option: SelectOption<Value>) => void;
    selectOptionByComboboxValue: () => void;
    selectVisuallyFocusedOption: () => void;
    setVisualFocus: (visualFocusOption: Value | null) => void;
    moveVisualFocusDown: () => void;
    moveVisualFocusUp: () => void;
};
export {};
