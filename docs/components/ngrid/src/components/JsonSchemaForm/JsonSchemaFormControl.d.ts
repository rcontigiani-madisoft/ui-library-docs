import { FormInputProps } from '../FormInput/FormInput';
type Props = {
    title?: string;
    required: boolean;
} & Omit<FormInputProps, "id">;
export declare function JsonSchemaFormControl({ name, title, required, value, schema, error, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
