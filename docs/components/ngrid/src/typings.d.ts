import { JSONSchema7 } from 'json-schema';
import { icons } from './icons';
import * as React from "react";
export interface Entity {
    id: string;
    metadata?: {
        isRead?: boolean;
        actions?: string[];
    };
}
export type FormatQuery<T> = {
    value: unknown;
    item: T;
    field: string;
    rowActions: RowActions;
    params?: FormatParams;
    schema: JSONSchema7;
};
export interface FormatFn<T> {
    (query: FormatQuery<T>): React.ReactNode;
}
export type OptionValue<T = string> = {
    label: string;
    value: T;
};
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
export type GridResponse<T> = {
    data: T[];
    schema: JSONSchema7;
    count: number;
    actions: DataAction[];
};
export declare const operators: {
    eq: string;
    neq: string;
    like: string;
    notLike: string;
    in: string;
    notIn: string;
    gte: string;
    gt: string;
    lte: string;
    lt: string;
    isNotNull: string;
    isNull: string;
    between: string;
    isNotEmpty: string;
    isEmpty: string;
};
export type Operator = keyof typeof operators;
interface AbstractFilter<TOperator extends Operator, TValue> {
    label: string;
    operator: TOperator;
    value: TValue;
    field?: string;
}
type EmptyFilter = AbstractFilter<Operator, "">;
export type GridFilter<TValue extends string | number | boolean = string> = AbstractFilter<"like" | "eq" | "neq" | "gte" | "lte" | "gt" | "lt" | "notLike", TValue> | AbstractFilter<"isNull" | "isNotNull" | "isEmpty" | "isNotEmpty", null> | AbstractFilter<"in" | "notIn" | "between", TValue[]> | EmptyFilter;
export type GridSorting = {
    field: string;
    direction: "asc" | "desc";
};
export type GridView = {
    title: string;
    orderBy?: GridSorting | GridSorting[];
    filters?: Record<string, GridFilter<string | number | boolean>>;
    columns: string[];
    pinned?: string[];
};
export type GridRequest = {
    offset?: number;
    limit?: number;
    filters?: Record<string, GridFilter<string | number | boolean>>;
    orderBy?: GridSorting[];
    columns?: GridColumn<any>[];
    schema?: JSONSchema7;
    count?: number;
    actions?: DataAction[];
    search?: string;
    autocomplete?: boolean;
    exportFormat?: string;
    relatedFields?: string[];
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
    type: "select" | "unselect";
    item: T;
} | {
    type: "select-multiple" | "unselect-multiple";
    items: T[];
};
export type Icons = keyof typeof icons;
export type ActionConfigs<T = any> = {
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
    icon?: Icons | string;
    appearance?: "default" | "primary" | "danger" | "lightblue" | "green" | "orange" | "prune";
};
export type ActionPosition = "grid" | "bulk" | "both";
export type ActionConfirmOption = {
    title: string;
    body: React.ReactNode;
};
type LinkOptions = {
    item: unknown;
};
export type ActionConfig = PressableConfig & {
    display?: "menu" | "visible" | "custom";
    isVisible?: (item: unknown) => boolean;
    position?: ActionPosition;
    targetBlank?: boolean;
    badge?: string;
    customClass?: string;
    description?: string;
    LinkComponent?: React.ElementType;
    to?: (rowId: string | number, options: LinkOptions) => string;
    onSuccess?: (items: string[]) => void;
    confirm?: ActionConfirmOption;
    noBatchLimit?: boolean;
};
export type DataActionType = "LINK" | "LEGACY_GRID_MASS_ACTION" | "LEGACY_POST_MASS_ACTION" | "POST_MASS_ACTION" | "AJAX_ACTION" | "AJAX_MASS_ACTION" | "AJAX_MASS_EDIT_ACTION";
export type DataAction = {
    name: string;
    url: string;
    type: DataActionType;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    context: "generic" | "new" | "edit" | "delete" | "download";
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
    noBatchLimit?: boolean;
};
export type UIAction = ActionConfig & DataAction;
export type RowActions = {
    actions: UIAction[];
    menuActions: UIAction[];
};
export type LinkConfig = PressableConfig & {
    href: string;
    LinkComponent?: React.ElementType;
};
export type GridStatus = "init" | "loading" | "success" | "error" | "refreshing";
export type GridState<T extends Entity> = {
    status: GridStatus;
    columns: GridColumn<T>[];
    data: T[];
    count: number;
    actions?: DataAction[];
    extraActions?: DataAction[];
    schema?: JSONSchema7;
    error?: Error;
    loadingRows: string[];
    pendingColumns: string[];
    orderBy?: GridSorting[];
    filters?: Record<string, GridFilter<string | number | boolean>>;
    offset: number;
    limit: number;
    search?: string;
    ellipsisEnabled?: boolean;
    stickyHeader?: boolean;
    relatedFields?: string[];
    completedTutorials?: string[];
};
export type GridAction<T extends Entity> = {
    type: "fetch";
} | {
    type: "setData";
    data: GridResponse<T>;
} | {
    type: "pageChange";
    page: number;
} | {
    type: "limitChange";
    limit: number;
} | {
    type: "sort";
    field: string;
    direction: "asc" | "desc" | null;
} | {
    type: "filter";
    filters: Record<string, GridFilter>;
} | {
    type: "setFilter";
    field: string;
    filter: GridFilter<string | number | boolean> | null;
} | {
    type: "error";
    error: Error;
} | {
    type: "search";
    search: string;
} | {
    type: "set-preference";
    stickyHeader?: boolean;
    ellipsisEnabled?: boolean;
    columnPreference?: {
        field: string;
        hidden: boolean;
        pinned: boolean;
    };
} | {
    type: "reset";
} | {
    type: "swap-columns";
    srcIndex: number;
    destIndex: number;
} | {
    type: "refresh";
} | {
    type: "row-loading-start";
    rowId: string;
} | {
    type: "row-loading-end";
    rowId: string;
} | {
    type: "view-selection";
    view: GridView;
} | {
    type: "complete-tutorial";
    tutorialId: string;
};
export type FormatParams = {
    [K: string]: unknown;
};
export type BoolFormatTypes = "check" | "attachment" | "text";
export type FilterParams = {
    nullable: boolean;
    multi?: boolean;
};
export {};
