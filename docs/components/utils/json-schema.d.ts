import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
export type EnumOption = {
    label: string;
    value: string;
};
export declare function getEnumOptions(schema: JSONSchema7Definition | undefined | null, propertyName: string): EnumOption[];
export declare function getMultiEnumOptions(schema: JSONSchema7Definition | undefined | null, propertyName: string): EnumOption[];
export declare function getArrayItemSchema(schema: JSONSchema7 | undefined | null, propertyName: string): JSONSchema7 | undefined;
export declare function getAttrMessage(schema: JSONSchema7Definition | undefined | null, propertyName: string, attrKey: string): any;
export declare function enumOptions(schema: JSONSchema7): EnumOption[];
export declare function isEnumSchema(schema: JSONSchema7Definition | JSONSchema7Definition[] | undefined | null): schema is JSONSchema7;
export declare function isJsonSchema(schema: JSONSchema7Definition | JSONSchema7Definition[] | undefined | null): schema is JSONSchema7;
export declare function getEnumAttributes<T>(schema: JSONSchema7Definition | undefined | null, propertyName: string): Record<string, T>;
export declare function validOptionValueOrDefault(schema: JSONSchema7, propertyName: string, value: string | undefined): string | undefined;
export declare function getTextInputAttributes(schema?: JSONSchema7Definition): Partial<{
    maxLength: number;
    hint: string;
}>;
export declare function getMinMaxDateFromSchema(schema: JSONSchema7): {
    dateMin?: Date;
    dateMax?: Date;
};
type MaxInputSize = {
    maxSizeInBytes?: number;
    mimeTypesMaxSizeInBytes?: {
        [mimeType: string]: number;
    };
};
export declare function getInputMaxSizes(schema: JSONSchema7, fieldName: string): MaxInputSize;
export declare function isFieldPresent(schema: JSONSchema7Definition, fieldName: string): boolean;
export declare function cleanSchema(jsonSchema: JSONSchema7): {
    title: string;
    properties: {
        [k: string]: JSONSchema7Definition;
    };
    $id?: string | undefined;
    $ref?: string | undefined;
    $schema?: import('json-schema').JSONSchema7Version | undefined;
    $comment?: string | undefined;
    $defs?: {
        [key: string]: JSONSchema7Definition;
    } | undefined;
    type?: import('json-schema').JSONSchema7TypeName | import('json-schema').JSONSchema7TypeName[] | undefined;
    enum?: import('json-schema').JSONSchema7Type[] | undefined;
    const?: import('json-schema').JSONSchema7Type | undefined;
    multipleOf?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    items?: JSONSchema7Definition | JSONSchema7Definition[] | undefined;
    additionalItems?: JSONSchema7Definition | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    uniqueItems?: boolean | undefined;
    contains?: JSONSchema7Definition | undefined;
    maxProperties?: number | undefined;
    minProperties?: number | undefined;
    required?: string[] | undefined;
    patternProperties?: {
        [key: string]: JSONSchema7Definition;
    } | undefined;
    additionalProperties?: JSONSchema7Definition | undefined;
    dependencies?: {
        [key: string]: JSONSchema7Definition | string[];
    } | undefined;
    propertyNames?: JSONSchema7Definition | undefined;
    if?: JSONSchema7Definition | undefined;
    then?: JSONSchema7Definition | undefined;
    else?: JSONSchema7Definition | undefined;
    allOf?: JSONSchema7Definition[] | undefined;
    anyOf?: JSONSchema7Definition[] | undefined;
    oneOf?: JSONSchema7Definition[] | undefined;
    not?: JSONSchema7Definition | undefined;
    format?: string | undefined;
    contentMediaType?: string | undefined;
    contentEncoding?: string | undefined;
    definitions?: {
        [key: string]: JSONSchema7Definition;
    } | undefined;
    description?: string | undefined;
    default?: import('json-schema').JSONSchema7Type | undefined;
    readOnly?: boolean | undefined;
    writeOnly?: boolean | undefined;
    examples?: import('json-schema').JSONSchema7Type | undefined;
};
export {};
