type ErrorData = {
    code: number;
    message?: string;
};
export declare const parseNativeErrorMessage: (error: Error, defaultMessage?: string) => string;
export declare function parseFetchError(e: Error): ErrorData;
export {};
