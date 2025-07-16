export type NotifiableMessage = {
    message: string;
    level: 'success' | 'info' | 'warning';
    userReadableMessage: boolean;
};
type NotifiableErrorMessage = {
    message: string;
    level: 'error';
    userReadableMessage: boolean;
};
export type MassActionSuccessResponse = {
    id: string | null;
    success: true;
    messages?: NotifiableMessage[];
    data?: unknown;
};
export type MassActionErrorResponse = {
    id: string | null;
    errorType: string;
    message: string;
    userReadableError: boolean;
    messages?: NotifiableErrorMessage[];
};
export type MassActionItemResponse = MassActionSuccessResponse | MassActionErrorResponse;
export type MassActionResponse = {
    results: MassActionItemResponse[];
};
export type MassActionResults = {
    successCount: number;
    errors: {
        error: string;
        messages: string[];
    }[];
    warnings: string[];
    info: string[];
};
export {};
