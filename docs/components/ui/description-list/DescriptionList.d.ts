import * as React from 'react';
export declare const DescriptionList: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, never>> & string;
export declare const Dt: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
export declare const Dd: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
type TermProps = {
    dt: string;
    children?: React.ReactNode;
};
export declare const Term: ({ dt, children }: TermProps) => import("react/jsx-runtime").JSX.Element;
export declare const OptionalTerm: ({ dt, children }: TermProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
