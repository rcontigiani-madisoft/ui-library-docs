import { GridColumn, RowActions } from '../../typings';
type CellProps<T> = {
    column: GridColumn<T>;
    item: T;
    rowActions: RowActions;
};
declare function Cell<T>({ column, item, rowActions }: CellProps<T>): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof Cell;
export default _default;
