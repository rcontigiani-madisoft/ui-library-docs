import { ApiException, ValidationException } from './../types';
export declare function apiErrorMessage(err: unknown, defaultMessage?: string): string;
export declare function isApiException(err: unknown): err is ApiException;
export declare const isValidationException: (error: ApiException) => error is ValidationException;
export declare const isUserReadableErrorMessage: (error: unknown) => error is ApiException;
export declare const getUserReadableErrorMessage: (error: ApiException) => string | string[];
export declare const isLockConflitException: (error: unknown) => error is ApiException;
