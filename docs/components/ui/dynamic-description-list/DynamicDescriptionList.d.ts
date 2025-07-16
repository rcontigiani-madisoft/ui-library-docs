import * as React from "react";
export type DynamicDescriptionListField = {
    label: string;
} & ({
    type: "string";
    value: string;
} | {
    type: "bool";
    value: boolean | null;
} | {
    type: "date";
    value: string;
} | {
    type: "image";
    value: string;
} | {
    type: "array";
    value: string[];
});
type Props = {
    fields: DynamicDescriptionListField[];
    ImageComponent: React.FC<{
        src: string;
        alt: string;
    }>;
};
export declare function DynamicDescriptionList({ fields, ImageComponent }: Props): import("react/jsx-runtime").JSX.Element;
export {};
