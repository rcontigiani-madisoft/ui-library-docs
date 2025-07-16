import * as React from "react";
export type AlertProps = {
    title: string;
    appearance?: "success" | "danger" | "info" | "warning";
    onClose?: () => void;
};
declare function Alert({ title, appearance, children, onClose, }: React.PropsWithChildren<AlertProps>): import("react/jsx-runtime").JSX.Element;
export default Alert;
