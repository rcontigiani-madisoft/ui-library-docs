type HttpErrorResponse = {
    status: number;
    data: unknown;
};
export declare function isHttpErrorResponse(err: unknown | undefined): err is HttpErrorResponse;
/**
 * Estrapola un messaggio di errore leggibile dall'utente da un errore HTTP con il formato definito Redux Toolkit Query.
 */
export declare const parseHttpErrorMessage: (error: unknown) => string | string[];
export {};
