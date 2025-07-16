import { GridColumn } from '../typings';
export declare function useIsFilterActive<T>(column: GridColumn<T>): boolean;
export declare function useFilterBySelected(selectedRowsIds: string[]): () => void;
export declare function useRemoveSelectedRowsFilter(): () => void;
