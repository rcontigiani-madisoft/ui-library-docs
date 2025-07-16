import { BulkActionsDialogProps } from '../BulkActionsDialog.types';
type Props = {
    configStep: "EDIT" | "PARAMS";
} & BulkActionsDialogProps;
export declare function ConfigurationDialog({ configStep, action, totalExecutions, actionConfigs, urlParams, queryParams, onSubmit, onDismiss, onComplete, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
