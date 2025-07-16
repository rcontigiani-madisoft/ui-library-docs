import { JSONSchema7 } from 'json-schema';
import { GridColumn, Operator } from '../typings';
type FilterType = "text" | "number" | "boolean" | "enum" | "async-enum" | "lazy-enum" | "long-text" | "school-year" | "time" | "date-time" | "date" | "durata";
export type FilterConfig = {
    type: FilterType;
    inputId: string;
    labelText: string;
    operators: Operator[];
};
export declare function getFilterConfig<T>(column: GridColumn<T>, globalSchema: JSONSchema7 | undefined): FilterConfig;
export {};
