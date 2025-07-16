export declare const setAuthToken: (token: string) => void;
export declare class FetchError extends Error {
    body: any;
    status: number;
    constructor(message: string, status: number, body: any);
}
type Config = {
    rateLimiter?: boolean;
};
export declare function ajaxFetch<T>(input: RequestInfo, init?: RequestInit, config?: Config): Promise<T>;
export declare function downloadFile(url: string): Promise<void>;
export declare function ajaxDownloadFile(url: string, init?: RequestInit): Promise<void>;
export {};
