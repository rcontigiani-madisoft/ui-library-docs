import { InputControlProps, ValidationProps } from '../control/Control';
import * as React from 'react';
type HTMLTextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export type TextAreaProps = HTMLTextAreaProps & InputControlProps & {
    minHeight?: React.CSSProperties['minHeight'];
};
export declare const TextArea: ({ className, label, labelId, labelAriaLabelledBy, hint, appearance, message, minHeight, extraContent, onPaste, ...props }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
export declare const TextAreaInput: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, {
    $minHeight?: React.CSSProperties["minHeight"];
} & ValidationProps & {
    $isNewDesign: boolean;
}>> & string;
export {};
