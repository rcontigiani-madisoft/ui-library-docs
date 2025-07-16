import { JSONSchema7Definition } from 'json-schema';
type EnumOption = {
    label: string;
    value: string;
};
export declare function getEnumOptions(schema: JSONSchema7Definition | undefined | null, propertyName: string): EnumOption[];
export declare function getMultiEnumOptions(schema: JSONSchema7Definition | undefined | null, propertyName: string): EnumOption[];
export {};
