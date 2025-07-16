import { AlertDialog } from '../AlertDialog/AlertDialog';
import { AjaxActionButtonProps } from './RawActionButton';
import * as React from "react";
export declare function DeleteActionButton({ action, children, onClick, ariaLabel, }: AjaxActionButtonProps): import("react/jsx-runtime").JSX.Element;
type DeleteAlertDialogProps = Pick<React.ComponentProps<typeof AlertDialog>, "open" | "onConfirm" | "onDismiss">;
export declare function DeleteAlertDialog({ open, onConfirm, onDismiss, }: DeleteAlertDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
