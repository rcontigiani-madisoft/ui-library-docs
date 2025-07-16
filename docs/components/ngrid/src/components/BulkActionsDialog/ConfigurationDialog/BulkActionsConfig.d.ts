import { JSONSchema7 } from 'json-schema';
import { ActionOption, ActionParams } from '../../../modules/bulk-actions/bulk-actions';
import * as React from "react";
export type BulkActionsConfigFormProps = {
    schema: JSONSchema7;
    onSubmit: (params: ActionParams) => void;
};
type BulkActionsConfigProps = {
    action: ActionOption;
    message?: React.ReactNode;
    urlParams?: string;
    queryParams?: string;
    submitted: boolean;
    onSubmit: (params: ActionParams) => void;
    onDismiss: () => void;
    children: ({ schema, onSubmit, }: BulkActionsConfigFormProps) => React.ReactElement | null;
};
declare function BulkActionsConfig({ action, message, urlParams, queryParams, children, submitted, onSubmit, onDismiss, }: BulkActionsConfigProps): import("react/jsx-runtime").JSX.Element;
export default BulkActionsConfig;
