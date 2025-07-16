import * as React from 'react';
export type FormLayoutProps = {
    title: string;
    formId: string;
    headingId?: string;
    headingAs?: React.ElementType;
    children?: React.ReactNode;
    headerChildren?: React.ReactNode;
    titlePrefixNode?: React.ReactNode;
};
export declare function FormLayout({ children, title, formId, headingId, headingAs, headerChildren, titlePrefixNode, }: FormLayoutProps): import("react/jsx-runtime").JSX.Element;
export declare const FormHeader: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('styled-components').FastOmit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof {
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
export declare const FormBody: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const FormTitle: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
