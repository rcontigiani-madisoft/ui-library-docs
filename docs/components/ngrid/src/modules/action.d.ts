import { ActionConfigs, Entity, GridColumn, UIAction } from '../typings';
export declare function useActions(urlParams: string | undefined, queryParams: string | undefined): {
    url: string;
    name: string;
    type: import('../typings').DataActionType;
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
}[];
export declare function useRowActions(item: unknown, actionConfigs: ActionConfigs, urlParams: string | undefined, queryParams: string | undefined): {
    actions: UIAction[];
    menuActions: UIAction[];
};
export declare function saveLastRowSelected(gridId: string, rowId: string): void;
export declare function useSubmitAjaxAction<T>(rowId: string, action: UIAction, errorTitle?: (item: T) => string): () => void;
export declare function errorTitleFn<T>(columns: GridColumn<T>[], errorTitle?: (item: T) => string): (item: T) => string;
export declare function getAriaLabel<T extends Entity>(actionLabel: string, subjectField: string, item: T): string;
