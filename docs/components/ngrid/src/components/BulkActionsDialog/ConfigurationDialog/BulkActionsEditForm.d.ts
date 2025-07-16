import { BulkActionsConfigFormProps } from './BulkActionsConfig';
import { ValidationMessage } from '../../../modules/error';
type Props = {
    validationErrors?: ValidationMessage[];
} & BulkActionsConfigFormProps;
declare function BulkActionsEditForm({ schema, validationErrors, onSubmit }: Props): import("react/jsx-runtime").JSX.Element;
export default BulkActionsEditForm;
