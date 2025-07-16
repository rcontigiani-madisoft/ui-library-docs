import { GridColumn } from '../../typings';
type Props<T> = {
    visibleColumns: GridColumn<T>[];
    hint?: string;
};
export default function Search<T>({ visibleColumns, hint }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
