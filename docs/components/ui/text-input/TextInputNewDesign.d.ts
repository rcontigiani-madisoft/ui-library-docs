import { InputControlProps, ValidationProps } from '../control/Control';
import * as React from 'react';
export type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputControlProps;
export declare const TextInputNewDesign: ({ label, labelId, labelAriaLabelledBy, hint, appearance, message, className, extraContent, ...props }: TextInputProps) => import("react/jsx-runtime").JSX.Element;
export declare const Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ValidationProps>> & string;
