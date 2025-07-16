import { ActionConfigs, ActionConfirmOption, DataAction, OptionValue } from '../../typings';
import { ActionItemResult } from './bulk-actions.types';
import { ApiValidationException } from '../error';
export interface ActionOption extends OptionValue, DataAction {
    description?: string;
    onSuccess?: (items: string[]) => void;
    confirm?: ActionConfirmOption;
    noBatchLimit?: boolean;
}
export type ActionParams = Record<string, string | number | boolean | string[] | number[] | null>;
export type OnDataCallback = (results: ActionItemResult[], error?: ApiValidationException) => void;
type SubmitBulkActionParams = {
    elementRef: {
        current: HTMLElement | null;
    };
    ids: string[];
    action: DataAction;
    params: ActionParams | null;
    onData: OnDataCallback;
};
export declare function submitBulkAction({ elementRef, ids, action, params, onData, }: SubmitBulkActionParams): void;
export declare function listBulkActionOptions(configs?: ActionConfigs, actions?: DataAction[]): Array<ActionOption>;
export declare function validateAction(action: ActionOption, ids: string[]): void;
export declare const isGridAction: (configs: ActionConfigs, action: DataAction) => boolean;
type ConfigStepName = "EDIT" | "PARAMS";
export declare const configurationStepName: (action: DataAction) => ConfigStepName | null;
export {};
