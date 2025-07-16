import { ApiException } from '../error';
export type ActionItemSuccess = {
    id: string;
    type: "success";
    msg?: NotifiableMessage[];
};
export type ActionItemError = {
    id: string;
    type: "error";
    msg?: string[];
};
export type ActionItemResult = ActionItemSuccess | ActionItemError;
export type NotifiableMessage = {
    message: string;
    level: "success" | "info" | "warning";
    userReadableMessage: boolean;
};
type AjaxActionSuccessResponse = {
    id: string;
    messages?: NotifiableMessage[];
    success: true;
};
type AjaxActionErrorResponse = ApiException;
export type AjaxActionItemResponse = AjaxActionSuccessResponse | AjaxActionErrorResponse;
export type AjaxResponse = {
    results: AjaxActionItemResponse[];
};
export {};
