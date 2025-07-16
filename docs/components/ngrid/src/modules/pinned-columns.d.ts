import { GridColumn } from '../typings';
export declare function handleColumnRef<T, E extends HTMLElement>(column: GridColumn<T>): ((instance: E | null) => void) | undefined;
