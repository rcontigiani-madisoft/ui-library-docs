type ApiException = {
    message: string;
    userReadableError: boolean;
};
export type UserReadableError = {
    errorType: 'MAINTENANCE_ERROR';
} & ApiException;
export {};
