export type SelectOption<V extends string | number> = {
    label: string;
    value: V;
    disabled?: boolean;
};
export type SelectOptionGroup<Value extends string | number> = {
    label: string;
    options: SelectOption<Value>[];
};
