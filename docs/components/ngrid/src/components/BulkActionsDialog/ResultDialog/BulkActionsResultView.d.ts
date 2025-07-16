import { ActionOption } from '../../../modules/bulk-actions/bulk-actions';
import { ActionItemResult } from '../../../modules/bulk-actions/bulk-actions.types';
type ResultViewProps = {
    results: ActionItemResult[];
    action: ActionOption;
    totalExecutions: number;
    errorTitle?: (item: any) => string;
    onComplete: (shouldRefetch: boolean) => void;
};
declare function BulkActionsResultView({ results, action, totalExecutions, onComplete, errorTitle, }: ResultViewProps): import("react/jsx-runtime").JSX.Element;
export default BulkActionsResultView;
