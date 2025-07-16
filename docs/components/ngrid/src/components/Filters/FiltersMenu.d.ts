import { GridColumn } from '../../typings';
type FiltersMenuProps = {
    columns: GridColumn<any>[];
    onItemClick: (column: GridColumn<any>) => void;
    className?: string;
};
export declare function FiltersMenu({ columns, onItemClick, className, }: FiltersMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
