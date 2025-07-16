import { Entity, GridAction, GridProps, GridState } from '../typings';
import * as React from "react";
type GridContextType = [GridState<any>, React.Dispatch<GridAction<any>>];
export declare function useGridContext(): GridContextType;
type InitialStateProps = "columns" | "pageSize" | "stickyHeader" | "urlParams" | "initialFilters" | "ellipsizeLongTexts" | "initialOrderBy" | "extraActions" | "relatedFields";
type ProviderProps<T extends Entity> = React.PropsWithChildren<Pick<GridProps<T>, "id" | "ajaxUrl" | "noSession" | "noActions" | InitialStateProps>>;
export declare function GridContextProvider<T extends Entity>({ children, ...props }: ProviderProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function isInitialLoading<Item extends Entity>(state: GridState<Item>): boolean;
export {};
