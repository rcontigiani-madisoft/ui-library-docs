import { Entity, GridColumn, GridProps, GridView } from '../typings';
export declare function gridViewState<T>(columns: GridColumn<T>[], view: GridView): {
    filters: Record<string, import('../typings').GridFilter<string | number | boolean>> | undefined;
    orderBy: import('../typings').GridSorting[] | undefined;
    columns: {
        hidden: boolean;
        pinned: boolean | undefined;
        field: string;
        title?: string;
        sorting?: boolean;
        format?: string | import('../typings').FormatFn<T> | undefined;
        formatParams?: import('../typings').FormatParams;
        clientSide?: boolean;
        filter?: boolean;
        filterParams?: import('../typings').FilterParams;
        dataContainerStyles?: React.CSSProperties;
        tableHeaderStyles?: React.CSSProperties;
        primary?: boolean;
        relatedFields?: string[];
        distinct?: boolean;
        autocomplete?: boolean;
    }[];
};
export declare function createDefaultView<T extends Entity>(props: Pick<GridProps<T>, "columns" | "initialFilters" | "initialOrderBy">): {
    title: string;
    columns: string[];
    filters: Record<string, import('../typings').GridFilter<string | number | boolean>> | undefined;
    orderBy: import('../typings').GridSorting | import('../typings').GridSorting[] | undefined;
    pinned: string[];
};
