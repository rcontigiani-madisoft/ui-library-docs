/**
 * Fetch che bilancia il numero di chiamate eseguite in parallelo.
 * Il limite di chiamate eseguite in parallelo è stato concordato con il Team Backend.
 */
export declare function rateLimitFetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
