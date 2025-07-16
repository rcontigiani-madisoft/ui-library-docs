import { JSONSchema7 } from 'json-schema';
import { GridColumn } from '../../typings';
export declare const generateHint: (columns: string[]) => string;
export declare const getSearchableColumnsTitle: <T>(schema: JSONSchema7, columns: GridColumn<T>[]) => string[];
