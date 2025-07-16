import { GridColumn } from '../../typings';
export type ColumnPreferences = {
    field: string;
    hidden: boolean;
    pinned: boolean;
};
type Props<T> = {
    column: GridColumn<T>;
    onChange: (preference: ColumnPreferences) => void;
};
declare function ColumnPreferenceItem<T>({ column, onChange }: Props<T>): import("react/jsx-runtime").JSX.Element;
export default ColumnPreferenceItem;
