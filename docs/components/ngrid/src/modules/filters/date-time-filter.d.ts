import { GridFilter, Operator, OptionValue } from '../../typings';
import { FilterConfig } from '../filter-config';
type OperatorWithValue = Exclude<Operator, "isNull" | "isNotNull" | "isEmpty" | "isNotEmpty">;
export declare function createDateTimeFilter({ label, value }: OptionValue<string>, operator: OperatorWithValue, field?: string): GridFilter<string>;
export declare function isDateTimeFilter(filterType: FilterConfig["type"], optionValue: OptionValue<string | number | boolean>): optionValue is OptionValue<string>;
export {};
