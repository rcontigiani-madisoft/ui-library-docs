import { JSONSchema7 } from 'json-schema';
type Widget = {
    widget?: "email" | "autocomplete" | "checkbox" | "choice-expanded" | "textarea" | "asset" | "money" | "date-time" | "time";
};
type JSONSChemaWithWidget = JSONSchema7 & Widget;
export declare const isFieldset: (schema: JSONSChemaWithWidget) => boolean;
export declare const isTextInput: (schema: JSONSChemaWithWidget) => boolean;
export declare const isEmailInput: (schema: JSONSChemaWithWidget) => boolean;
export declare const isSelect: (schema: JSONSChemaWithWidget) => boolean | undefined;
export declare const isMultiSelect: (schema: JSONSChemaWithWidget) => boolean;
export declare const isAsyncSelect: (schema: JSONSChemaWithWidget) => schema is JSONSChemaWithWidget & {
    searchUrl: string;
    getByIdUrl: string;
};
export declare const isDateInput: (schema: JSONSChemaWithWidget) => boolean;
export declare const isTimeInput: (schema: JSONSChemaWithWidget) => boolean;
export declare const isNumberInput: (schema: JSONSChemaWithWidget) => boolean;
export declare const isCheckbox: (schema: JSONSChemaWithWidget) => boolean;
export declare const isRadio: (schema: JSONSChemaWithWidget) => boolean;
export declare const isTextArea: (schema: JSONSChemaWithWidget) => boolean;
export declare const isFileInput: (schema: JSONSChemaWithWidget & {
    items?: {
        widget?: "asset";
    };
}) => boolean;
export declare const isArrayInput: (schema: JSONSChemaWithWidget) => boolean;
export declare const getHint: (schema: JSONSChemaWithWidget & {
    attr?: {
        "help-block"?: string;
    };
}) => string | undefined;
export {};
