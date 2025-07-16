import * as React from "react";
type EmptyProps = {
    title?: string;
    className?: string;
    children?: React.ReactNode;
    size?: string;
    Illustration?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
};
export declare function Empty({ title, className, children, Illustration, size, }: EmptyProps): import("react/jsx-runtime").JSX.Element;
export {};
