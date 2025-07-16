import * as React from "react";
type TooltipProps = {
    id: string;
    message: string;
};
type Props = React.PropsWithChildren<TooltipProps>;
export declare function Tooltip({ id, message, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
