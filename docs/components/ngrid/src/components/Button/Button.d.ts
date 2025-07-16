import * as React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: "primary" | "text-primary" | "text" | "default" | "text-danger";
    size?: "small" | "medium" | "large" | "icon";
    noWrap?: boolean;
    ariaDisabled?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
}
declare function Button({ appearance, size, noWrap, ariaDisabled, className, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default Button;
