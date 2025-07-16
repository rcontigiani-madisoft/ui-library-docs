import { GridRequest, GridResponse } from '../typings';
export declare function fetchData<T>(url: string, params: GridRequest): Promise<GridResponse<T>>;
export declare function buildURL(baseUrl: string, reqParams: GridRequest): string;
type AutoCompleteParams = {
    url: string;
    field: string;
    value?: string;
};
export declare function fetchAutocomplete({ url: baseUrl, field, value, }: AutoCompleteParams): Promise<GridResponse<string>>;
export declare function searchByField(url: string, field: string, value: string): Promise<GridResponse<unknown>>;
export declare function fetchAllItems(url: string, ...fields: string[]): Promise<GridResponse<unknown>>;
export {};
