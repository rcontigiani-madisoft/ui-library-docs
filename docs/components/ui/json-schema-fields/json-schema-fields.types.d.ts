import { SelectOption } from '../select/select.types';
import { JSONSchema7 } from 'json-schema';
import { UploadedFileAsset } from '../file-picker';
import { RadioOption } from '../radio-group/RadioGroup';
import * as React from 'react';
export type JSONSChemaFieldsProps = {
    schema: JSONSchema7;
    defaultValues?: any;
    values?: any;
    onChange?: (data: {
        values: any;
    }) => void;
    errors?: unknown;
    errorExtractor: (errors: unknown | undefined, name: string) => string | undefined;
    nameFormatter?: (name: string) => string;
    labelFormatter?: (label: string) => string;
    Components: JSONSchemaFieldsComponents;
};
type Attributes = {
    label: string;
    name: string;
    required?: boolean;
    hint?: string;
    error?: string;
};
type TextInputAttributes = Attributes & {
    minLength?: number;
    maxLength?: number;
    value?: string;
    defaultValue?: string;
    onChange?: ({ value }: {
        value: string;
    }) => void;
};
export type JSONSchemaFieldsComponents = {
    FieldsetComponent: React.FC<React.PropsWithChildren<Pick<Attributes, 'label'>>>;
    TextareaComponent: React.FC<TextInputAttributes>;
    TextInputComponent: React.FC<TextInputAttributes>;
    EmailInputComponent: React.FC<TextInputAttributes>;
    DateInputComponent: React.FC<Attributes & Omit<TextInputAttributes, 'maxLength' | 'minLength'> & {
        dateMin?: Date;
        dateMax?: Date;
    }>;
    TimeInputComponent: React.FC<Attributes & Omit<TextInputAttributes, 'maxLength' | 'minLength'>>;
    NumberInputComponent: React.FC<TextInputAttributes>;
    CheckboxComponent: React.FC<Attributes & {
        defaultChecked?: boolean;
        checked?: boolean;
        onChange?: ({ value }: {
            value: boolean;
        }) => void;
    }>;
    RadioComponent: React.FC<Attributes & {
        defaultValue?: string;
        value?: string;
        onChange?: ({ value }: {
            value: string;
        }) => void;
        options: RadioOption[];
    }>;
    SelectComponent: React.FC<Attributes & {
        defaultValue?: string;
        value?: string;
        onChange?: ({ value }: {
            value: string;
        }) => void;
        options: SelectOption<string>[];
    }>;
    MultiSelectComponent: React.FC<Attributes & {
        options: SelectOption<string>[];
        defaultValue?: string[];
        value?: SelectOption<string>[];
        onChange?: ({ value }: {
            value: string[];
        }) => void;
    }>;
    AsyncSelectComponent: React.FC<Attributes & {
        searchUrl: string;
        initialValueUrl: string;
        defaultValue?: string;
        value?: string;
        onChange?: ({ value }: {
            value?: string;
        }) => void;
    }>;
    FileInputComponent: React.FC<Attributes & {
        schema: JSONSchema7;
        defaultValue?: UploadedFileAsset | UploadedFileAsset[];
        value?: UploadedFileAsset | UploadedFileAsset[];
        onChange?: ({ value, }: {
            value?: Omit<UploadedFileAsset, 'id'> | Omit<UploadedFileAsset, 'id'>[];
        }) => void;
    }>;
    ArrayInputComponent: React.FC<Attributes & Pick<JSONSChemaFieldsProps, 'errors' | 'errorExtractor' | 'Components'> & {
        schema: JSONSchema7;
        defaultValues?: unknown[];
        values?: unknown[];
        onChange?: ({ value }: {
            value: unknown[];
        }) => void;
    }>;
};
export {};
