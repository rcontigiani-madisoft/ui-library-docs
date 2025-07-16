import { JSONSchema7 } from 'json-schema';
import { DataAction } from './ngrid.types';
export interface ListResponse<T> {
    data: T[];
    count: number;
    actions?: DataAction[];
    schema: JSONSchema7;
}
interface FormValidation {
    errors: string[];
    children: Record<string, FormValidation>;
}
export interface FormResponse<RequestBody, ResponseBody> {
    values: RequestBody;
    object: ResponseBody;
    validation: FormValidation;
}
export type MassActionFormResponse<RequestBody> = FormResponse<RequestBody, MassActionResponse>;
export type BatchRequest = {
    path: string;
    method: string;
    body: string;
};
export type BatchResponse = {
    status: number;
    body: string;
};
type BaseNotifiableMessage = {
    message: string;
    userReadableMessage: boolean;
};
type NotifiableSuccessMessage = {
    level: "success" | "info" | "warning";
} & BaseNotifiableMessage;
type NotifiableErrorMessage = {
    level: "error";
} & BaseNotifiableMessage;
type NotifiableMessage = NotifiableSuccessMessage | NotifiableErrorMessage;
type MassActionSuccessResponse = {
    id: string | null;
    success: true;
    messages?: NotifiableSuccessMessage[];
    data?: unknown;
};
type MassActionErrorResponse = {
    id: string | null;
    errorType: string;
    message: string;
    userReadableError: boolean;
    messages?: NotifiableErrorMessage[];
};
type MassActionItemResponse = MassActionSuccessResponse | MassActionErrorResponse;
export type MassActionResponse = {
    results: MassActionItemResponse[];
};
type BaseApiException = {
    message: string;
    userReadableError: boolean;
    messages?: NotifiableMessage[];
};
export type CommonException = {
    errorType: "GENERIC_ERROR" | "UNKNOWN_ERROR" | "FIELDS_NOT_FOUND" | "CONFLICT";
} & BaseApiException;
export type ValidationException = {
    errorType: "VALIDATION_ERROR";
    violations: {
        field: string;
        message: string;
    }[];
} & BaseApiException;
export type ApiException = CommonException | ValidationException;
export {};
