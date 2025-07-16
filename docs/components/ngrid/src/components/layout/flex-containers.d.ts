import * as React from "react";
type FlexProps = {
    center?: boolean;
    flexWrap?: React.CSSProperties["flexWrap"];
    justifyContent?: React.CSSProperties["justifyContent"];
    alignItems?: React.CSSProperties["alignItems"];
    flexDirection?: React.CSSProperties["flexDirection"];
    gap?: React.CSSProperties["gap"];
} & React.DetailsHTMLAttributes<HTMLDivElement>;
type ReactFlexProps = React.PropsWithChildren<FlexProps>;
export declare function Flex({ className, center, flexDirection, flexWrap, justifyContent, alignItems, gap, children, style, ...props }: ReactFlexProps): import("react/jsx-runtime").JSX.Element;
export declare function Column(props?: Omit<ReactFlexProps, "flexDirection">): import("react/jsx-runtime").JSX.Element;
export declare function Row(props?: Omit<ReactFlexProps, "flexDirection">): import("react/jsx-runtime").JSX.Element;
export {};
