import { ActionConfigs, Entity, GridColumn, GridProps } from '../../typings';
export type TableRowProps<T extends Entity> = {
    item: T;
    actionConfigs: ActionConfigs<T>;
    isRowSelectionEnabled: boolean;
    visibleColumns: GridColumn<T>[];
    showActions: boolean;
    rowLabel: string;
    gridId?: string;
    urlParams?: string;
    queryParams?: string;
} & Pick<GridProps<T>, "onSelectionChange">;
declare function TableRow<T extends Entity>({ actionConfigs, isRowSelectionEnabled, gridId, urlParams, queryParams, visibleColumns, showActions, item, rowLabel, onSelectionChange, }: TableRowProps<T>): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof TableRow;
export default _default;
