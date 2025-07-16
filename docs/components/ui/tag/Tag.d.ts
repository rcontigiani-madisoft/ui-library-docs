import { Appearance, Size } from '../theme/theme.types';
import * as React from "react";
type Props = {
    id?: string;
    appearance?: Appearance;
    size?: Size;
    noIcon?: boolean;
    className?: string;
    onClose?: () => void;
};
export declare function Tag({ id, appearance, noIcon, size, className, children, onClose, }: React.PropsWithChildren<Props>): import("react/jsx-runtime").JSX.Element;
export {};
