import { JSONSchema7 } from 'json-schema';
import { ValidationMessage } from '../../modules/error';
import * as React from "react";
type FormElementProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>;
type FormValues = Record<string, string | number | boolean | string[] | number[] | null>;
type JsonSchemaFormProps = Omit<FormElementProps, "onSubmit"> & {
    schema: JSONSchema7;
    validationErrors?: ValidationMessage[];
    onSubmit: (values: FormValues) => void;
    ignoredFields?: string[];
};
export declare function JsonSchemaForm({ schema, ignoredFields, validationErrors, className, children, onSubmit, ...props }: JsonSchemaFormProps): import("react/jsx-runtime").JSX.Element;
export {};
