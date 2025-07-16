import { UserReadableError } from './errors';
export declare class FetchError extends Error {
    response: Response;
    data: any;
    constructor(response: Response);
    init(): Promise<void>;
}
export declare const isUserReadableErrorMessage: (error: unknown) => error is UserReadableError;
