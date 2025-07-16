import { Appearance } from '../theme/theme.types';
import * as React from 'react';
export type AlertProps = {
    title: string;
    className?: string;
    appearance?: Appearance;
    ariaRole?: React.AriaRole | null;
    onClose?: () => void;
};
export declare function Alert({ title, appearance, ariaRole, className, children, onClose, }: React.PropsWithChildren<AlertProps>): import("react/jsx-runtime").JSX.Element;
