import { UIAction } from '../../typings';
import * as React from "react";
export type AjaxActionButtonProps = React.PropsWithChildren<{
    action: UIAction;
    onClick: () => void;
    ariaLabel: string;
    disabled?: boolean;
}>;
export declare function RawActionButton({ action, children, onClick, disabled, ariaLabel, }: AjaxActionButtonProps): import("react/jsx-runtime").JSX.Element;
