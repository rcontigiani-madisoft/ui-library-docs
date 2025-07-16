import { Entity, GridProps } from '../typings';
export declare function useReset(): () => void;
export declare function useIsResettable<T extends Entity>(props: Pick<GridProps<T>, "initialFilters" | "initialOrderBy" | "columns" | "stickyHeader">): boolean;
