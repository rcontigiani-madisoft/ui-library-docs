import { SelectOption, SelectOptionGroup } from '../select.types';
export declare const getOptionSelector: <Value extends string | number>(id: string, value: Value) => string;
export declare const getActiveDescendant: <Value extends string | number>(id: string, value: Value | null) => string | undefined;
export declare const findOptionValueBySearchTerm: <Value extends string | number>(searchTerm: string, options: SelectOption<Value>[]) => Value | null;
export declare const findOptionBySearchTerm: <Value extends string | number>(searchTerm: string, options: SelectOption<Value>[]) => SelectOption<Value> | null;
export declare const filterOptionsBySearchTerm: <Value extends string | number>(searchTerm: string, options: (SelectOption<Value> | SelectOptionGroup<Value>)[]) => (SelectOption<Value> | SelectOptionGroup<Value>)[];
