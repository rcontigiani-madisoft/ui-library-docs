import { SelectOption, SelectOptionGroup } from './select.types';
export declare const isSameOption: <V extends string | number>(op1: SelectOption<V>, op2: SelectOption<V>) => boolean;
export declare const isOptionGroup: <V extends string | number>(option: SelectOption<V> | SelectOptionGroup<V>) => option is SelectOptionGroup<V>;
export declare const flatOptionGroup: <Value extends string | number>(options: (SelectOption<Value> | SelectOptionGroup<Value>)[]) => SelectOption<Value>[];
export declare const findOptionLabelByValue: <Value extends string | number>(options: SelectOption<Value>[], value?: Value | null) => string;
export declare const findOptionByValue: <Value extends string | number>(options: SelectOption<Value>[], value: Value | null) => SelectOption<Value> | null;
