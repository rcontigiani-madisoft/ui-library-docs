import { GridFilter, Operator, OptionValue } from '../../typings';
import { FilterConfig } from '../filter-config';
export type DurationOperator = Extract<Operator, "between" | "eq" | "gte" | "lte" | "neq">;
export declare function createDurationFilter({ label, value }: OptionValue<string>, operator: DurationOperator, field?: string): GridFilter<number>;
export declare function isDurationOperator(operator: Operator): operator is DurationOperator;
export declare function isDurationFilter(filterType: FilterConfig["type"], optionValue: OptionValue<string | number | boolean>): optionValue is OptionValue<string>;
