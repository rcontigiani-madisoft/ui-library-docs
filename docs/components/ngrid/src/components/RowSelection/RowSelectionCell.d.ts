import { Entity, GridProps } from '../../typings';
type RowSelectionCellProps<T extends Entity> = {
    item: T;
    rowLabel: string;
} & Pick<GridProps<T>, "onSelectionChange">;
declare function RowSelectionCell<T extends Entity>({ item, rowLabel, onSelectionChange, }: RowSelectionCellProps<T>): import("react/jsx-runtime").JSX.Element;
export default RowSelectionCell;
