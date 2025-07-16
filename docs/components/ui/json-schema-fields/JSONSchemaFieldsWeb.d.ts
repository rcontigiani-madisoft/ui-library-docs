import { JSONSchemaFieldsComponents, JSONSChemaFieldsProps } from './json-schema-fields.types';
type Props = Omit<JSONSChemaFieldsProps, "Components"> & {
    Components: Partial<Omit<JSONSchemaFieldsComponents, "AsyncSelectComponent" | "FileInputComponent">> & Pick<JSONSchemaFieldsComponents, "AsyncSelectComponent" | "FileInputComponent">;
};
export declare function JSONSchemaFieldsWeb({ Components, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export declare const JSONSchemaArrayInput: JSONSchemaFieldsComponents["ArrayInputComponent"];
export {};
