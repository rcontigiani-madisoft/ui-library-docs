import { JSX, ReactNode } from '../../../../../../../node_modules/react';
import * as React from 'react';
export declare function DropDownItem({ children, onClick, title, }: {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    title?: string;
}): import("react/jsx-runtime").JSX.Element;
export default function DropDown({ disabled, buttonLabel, buttonAriaLabel, icon, children, stopCloseOnClickSelf, }: {
    disabled?: boolean;
    buttonAriaLabel?: string;
    icon?: ReactNode;
    buttonLabel?: string;
    children: ReactNode;
    stopCloseOnClickSelf?: boolean;
}): JSX.Element;
