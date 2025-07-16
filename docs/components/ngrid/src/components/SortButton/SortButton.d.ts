import { GridColumn, GridState } from '../../typings';
type SortDirection = "asc" | "desc" | null;
type SortButtonProps<T> = {
    column: GridColumn<T>;
};
export declare function SortButton<T>({ column }: SortButtonProps<T>): import("react/jsx-runtime").JSX.Element | null;
export declare function getSortDirection(state: GridState<any>, column: GridColumn<any>): SortDirection;
export {};
