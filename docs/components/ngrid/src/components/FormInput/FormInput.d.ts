import { JSONSchema7 } from 'json-schema';
import { ActionParams } from '../../modules/bulk-actions/bulk-actions';
type ValueType = ActionParams[string];
export type FormInputProps = {
    id: string;
    name: string;
    schema: JSONSchema7;
    value: ValueType;
    onChange: (value: ValueType) => void;
    error?: string;
};
declare function FormInput(props: FormInputProps): import("react/jsx-runtime").JSX.Element;
export declare function isMultiValue(schema: JSONSchema7): boolean;
export default FormInput;
