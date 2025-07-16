import * as React from 'react';
export interface Entity {
    id: string;
    metadata?: {
        isRead?: boolean;
        actions?: string[];
    };
}
type FilterParams = {
    nullable: boolean;
};
type FormatParams = {
    [K: string]: unknown;
};
type FormatQuery<T> = {
    value: unknown;
    item: T;
    field: string;
    rowActions: RowActions;
    params?: FormatParams;
};
export interface FormatFn<T> {
    (query: FormatQuery<T>): React.ReactNode;
}
export type GridColumn<T> = {
    field: string;
    title?: string;
    pinned?: boolean;
    sorting?: boolean;
    format?: string | FormatFn<T>;
    formatParams?: FormatParams;
    clientSide?: boolean;
    filter?: boolean;
    filterParams?: FilterParams;
    hidden?: boolean;
    dataContainerStyles?: React.CSSProperties;
    tableHeaderStyles?: React.CSSProperties;
    primary?: boolean;
    relatedFields?: string[];
    distinct?: boolean;
    autocomplete?: boolean;
};
type Operator = 'eq' | 'neq' | 'like' | 'notLike' | 'in' | 'gte' | 'lte' | 'isNotNull' | 'isNull' | 'between' | 'isNotEmpty' | 'isEmpty';
interface AbstractFilter<TOperator extends Operator, TValue> {
    label: string;
    operator: TOperator;
    value: TValue;
    field?: string;
}
type EmptyFilter = AbstractFilter<Operator, ''>;
export type GridFilter<TValue extends string | number | boolean = string> = AbstractFilter<'like' | 'eq' | 'neq' | 'gte' | 'lte' | 'notLike', TValue> | AbstractFilter<'isNull' | 'isNotNull' | 'isEmpty' | 'isNotEmpty', null> | AbstractFilter<'in' | 'between', TValue[]> | EmptyFilter;
type GridSorting = {
    field: string;
    direction: 'asc' | 'desc';
};
type GridView = {
    title: string;
    orderBy?: GridSorting | GridSorting[];
    filters?: Record<string, GridFilter<string | number | boolean>>;
    columns: string[];
    pinned?: string[];
};
export type GridProps<T extends Entity> = {
    id?: string;
    rowSelection?: boolean;
    scrollContainerSelector?: string;
    /** Sticky header si attiva solo se si imposta una `maxHeight` */
    stickyHeader?: boolean;
    maxHeight?: string | number;
    searchHint?: string;
    columns: GridColumn<T>[];
    ajaxUrl: string;
    pageSize?: number;
    maxPageSize?: number;
    actionConfigs?: ActionConfigs<T>;
    initialFilters?: Record<string, GridFilter<string | number | boolean>>;
    initialOrderBy?: GridSorting[] | GridSorting;
    initialSelected?: string[];
    noSession?: boolean;
    newItemLink?: string | LinkConfig;
    extraLinks?: LinkConfig[];
    extraElements?: React.ReactNode[];
    extraActions?: DataAction[];
    urlParams?: string;
    queryParams?: string;
    ellipsizeLongTexts?: boolean;
    preferences?: boolean;
    exportToDoc?: boolean;
    noActions?: boolean;
    relatedFields?: string[];
    authToken?: string;
    LinkComponent?: React.ElementType;
    views?: GridView[];
    onComplete?: (err?: unknown) => void;
    onSelectionChange?: (data: SelectionChangeArgs<T>) => void;
};
type SelectionChangeArgs<T> = {
    type: 'select' | 'unselect';
    item: T;
} | {
    type: 'select-multiple' | 'unselect-multiple';
    items: T[];
};
export type ActionConfigs<T = unknown> = {
    title?: string;
    containerStyles?: React.CSSProperties;
    headerStyles?: React.CSSProperties;
    actions?: {
        [key: string]: string | ActionConfig;
    };
    errorTitle?: (item: T) => string;
};
type PressableConfig = {
    label: string;
    icon?: string;
    appearance?: 'default' | 'primary' | 'danger' | 'lightblue' | 'green' | 'orange' | 'prune';
};
type ActionPosition = 'grid' | 'bulk' | 'both';
type LinkOptions = {
    item: unknown;
};
export type ActionConfig = PressableConfig & {
    display?: 'menu' | 'visible' | 'custom';
    isVisible?: (item: unknown) => boolean;
    position?: ActionPosition;
    targetBlank?: boolean;
    badge?: string;
    customClass?: string;
    description?: string;
    LinkComponent?: React.ElementType;
    to?: (rowId: string | number, options: LinkOptions) => string;
    onSuccess?: (items: string[]) => void;
    noBatchLimit?: boolean;
};
type DataActionType = 'LINK' | 'LEGACY_GRID_MASS_ACTION' | 'LEGACY_POST_MASS_ACTION' | 'AJAX_ACTION' | 'AJAX_MASS_ACTION' | 'AJAX_MASS_EDIT_ACTION';
export type DataAction = {
    name: string;
    url: string;
    type: DataActionType;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    context: 'generic' | 'new' | 'edit' | 'delete' | 'download';
    urlParams?: {
        [key: string]: string;
    };
    bodyParams?: string[] | {
        [key: string]: string;
    };
    bodySchemaUrl?: string;
    maxItems: number | null;
    isSuperAdmin?: boolean;
    titleParams?: {
        [key: string]: string;
    };
};
type UIAction = ActionConfig & DataAction;
type RowActions = {
    actions: UIAction[];
    menuActions: UIAction[];
};
type LinkConfig = PressableConfig & {
    href: string;
    LinkComponent?: React.ElementType;
};
export {};
