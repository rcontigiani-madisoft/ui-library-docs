import { GridColumn } from '../../typings';
import { ColumnPreferences } from './ColumnPreferenceItem';
type Props = {
    columns: GridColumn<any>[];
    onSortPreference: (srcIndex: number, destIndex: number) => void;
    onChangePreference: (preference: ColumnPreferences) => void;
};
export declare function SortableColumnPreferences({ columns, onSortPreference, onChangePreference, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
