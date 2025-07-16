import { PolymorphicProps } from '../polimorphic/polymorphic';
import * as React from "react";
export type ButtonProps = {
    variant?: "primary" | "positive" | "negative";
    appearance?: "filled" | "outline" | "ghost" | "subtle";
    size?: "small" | "medium" | "large";
    LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
    RightIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
    iconSize?: number;
};
type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps;
type IconButtonProps<C extends React.ElementType> = PolymorphicProps<C, Props>;
export declare const ButtonGroup: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('styled-components').FastOmit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof {
    $center?: boolean;
    $flexDirection?: React.CSSProperties["flexDirection"];
    $flexWrap?: React.CSSProperties["flexWrap"];
    $justifyContent?: React.CSSProperties["justifyContent"];
    $alignItems?: React.CSSProperties["alignItems"];
    $gap?: React.CSSProperties["gap"];
}> & {
    $center?: boolean;
    $flexDirection?: React.CSSProperties["flexDirection"];
    $flexWrap?: React.CSSProperties["flexWrap"];
    $justifyContent?: React.CSSProperties["justifyContent"];
    $alignItems?: React.CSSProperties["alignItems"];
    $gap?: React.CSSProperties["gap"];
}, never>, never>> & string;
export declare function LegacyButton<C extends React.ElementType = "button">({ variant, appearance, size, children, LeftIcon, RightIcon, iconSize, className, as, ...props }: IconButtonProps<C>): import("react/jsx-runtime").JSX.Element;
export declare function NewDesignButton<C extends React.ElementType = "button">({ variant, appearance, size, children, LeftIcon, RightIcon, iconSize, ...props }: IconButtonProps<C>): import("react/jsx-runtime").JSX.Element;
export declare const Button: typeof NewDesignButton;
export {};
