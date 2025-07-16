import * as React from "react";
export type ChipTheme = "aquamarine" | "grass" | "grape" | "sunset" | "fucsia" | "cobalt";
type CloseProps = {
    onClose: () => void;
    closeLabel: string;
} | {
    onClose?: undefined;
    closeLabel?: undefined;
};
type Props = {
    backgroundColor?: string;
    color?: string;
    className?: string;
    theme?: ChipTheme;
} & CloseProps;
export declare function Chip({ className, children, backgroundColor, color, theme, onClose, closeLabel, }: React.PropsWithChildren<Props>): import("react/jsx-runtime").JSX.Element;
export {};
