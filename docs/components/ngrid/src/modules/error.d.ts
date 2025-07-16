type ExceptionMessage = {
    level: "info" | "success" | "warning" | "error";
    message: string;
    userReadableMessage: boolean;
};
type ApiExceptionCore = {
    id: string;
    message: string;
    userReadableError: boolean;
    messages?: ExceptionMessage[];
};
type ApiCommonException = {
    errorType: "GENERIC_ERROR" | "UNKNOWN_ERROR" | "FIELDS_NOT_FOUND";
} & ApiExceptionCore;
export type ValidationMessage = {
    field: string;
    message: string;
};
export type ApiValidationException = {
    errorType: "VALIDATION_ERROR";
    violations: ValidationMessage[];
} & ApiExceptionCore;
export type ApiException = ApiCommonException | ApiValidationException;
export declare function apiErrorMessage(err: unknown, defaultMessage?: string): string;
export declare function apiErrorMessages({ message, userReadableError, messages, }: ApiException): string[];
export declare function isApiException(err: unknown): err is ApiException;
export declare const isApiValidationException: (error: ApiException) => error is ApiValidationException;
export declare const getFieldValidationMessage: (field: string, errors?: ValidationMessage[]) => string | undefined;
export {};
