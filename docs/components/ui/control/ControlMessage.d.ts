import { Appearance } from '../theme/theme.types';
import * as React from 'react';
type ControlMessageProps = React.PropsWithChildren<{
    appearance?: Appearance;
    className?: string;
}>;
export declare function ControlMessage({ appearance, children, className, }: ControlMessageProps): import("react/jsx-runtime").JSX.Element;
export {};
