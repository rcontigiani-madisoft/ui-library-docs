import { JSONSchema7 } from 'json-schema';
import { GridColumn } from '../typings';
export declare function getColumnTitle<T>(column: GridColumn<T>): string;
type VisibleColumnsParams<T> = {
    columns: GridColumn<T>[];
    schema?: JSONSchema7;
};
export declare function getVisibleColumns<T>({ columns, schema, }: VisibleColumnsParams<T>): GridColumn<T>[];
export declare function sortPinnedFirst<T>(columns: GridColumn<T>[]): GridColumn<T>[];
export declare function isSortable<T>(column: GridColumn<T>): boolean;
export declare function isFilterable<T>(column: GridColumn<T>): boolean;
export declare function isVisible<T>(column: GridColumn<T>): boolean;
export declare function getColumnPrimaryKey<T>(columns: GridColumn<T>[]): string;
export {};
