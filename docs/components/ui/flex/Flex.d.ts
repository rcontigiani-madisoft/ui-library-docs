import * as React from 'react';
type FlexProps = {
    $center?: boolean;
    $flexDirection?: React.CSSProperties['flexDirection'];
    $flexWrap?: React.CSSProperties['flexWrap'];
    $justifyContent?: React.CSSProperties['justifyContent'];
    $alignItems?: React.CSSProperties['alignItems'];
    $gap?: React.CSSProperties['gap'];
};
export declare const Flex: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FlexProps>> & string;
export declare const Column: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FlexProps> & FlexProps, never>> & string;
export declare const Row: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FlexProps> & FlexProps, never>> & string;
export declare const FlexibleSpace: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
