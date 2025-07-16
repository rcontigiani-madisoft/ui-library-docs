import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
import { GridColumn, RowActions } from '../typings';
import * as React from "react";
export declare function formatCell<T>(column: GridColumn<T>, item: T, rowActions: RowActions, schema: JSONSchema7): React.ReactNode;
/**
 * Utilizzato principalmente per formattare i valori nei filtri. Alcuni formatters
 * (es: valuta e anno-scolastico) vengono anche utilizzati nelle celle perchè il formatter
 * coincide.
 * @param value
 * @param schemaDef
 */
export declare function formatFromSchema(value: unknown, schemaDef?: JSONSchema7Definition): string;
