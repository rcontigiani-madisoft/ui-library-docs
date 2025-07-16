import { ActionOption, ActionParams, OnDataCallback } from '../../modules/bulk-actions/bulk-actions';
import { ActionConfigs } from '../../typings';
export type BulkActionsDialogProps = {
    totalExecutions: number;
    onSubmit: (params: ActionParams | null, onData: OnDataCallback) => void;
    onDismiss: () => void;
    onComplete: (shouldRefetch: boolean) => void;
    action: ActionOption;
    actionConfigs?: ActionConfigs;
    urlParams?: string;
    queryParams?: string;
};
