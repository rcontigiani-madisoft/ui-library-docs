import { Entity } from '../typings';
export declare function useSelectedRows(): string[];
export declare function useIsRowSelected(rowId: string): boolean;
export declare function useToggleSelectAll(items: Entity[], select: boolean): () => void;
export declare function useToggleSelectItem(rowId: string): () => void;
export declare function useClearSelectedRows(): () => void;
