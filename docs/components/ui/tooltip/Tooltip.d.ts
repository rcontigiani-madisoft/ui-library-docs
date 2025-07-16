import * as React from "react";
export type TooltipProps = {
    id: string;
    message: string;
    isHtml?: boolean;
    className?: string;
};
type Props = React.PropsWithChildren<TooltipProps>;
export declare function Tooltip({ id, message, isHtml, className, children }: Props): import("react/jsx-runtime").JSX.Element;
export declare const InlineTooltip: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<TooltipProps & {
    children?: React.ReactNode | undefined;
}, never>> & string & Omit<typeof Tooltip, keyof React.Component<any, {}, any>>;
export {};
