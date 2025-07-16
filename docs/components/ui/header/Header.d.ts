import * as React from 'react';
type Props = React.PropsWithChildren<{
    className?: string;
    childrenBefore?: React.ReactNode;
}>;
export declare const Header: {
    Banner: React.FC<Props>;
    Link: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>> & string;
    Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
    ButtonDropdown: ({ children, ...props }: Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        children?: React.ReactNode | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    HeaderText: ({ children, ...props }: Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
        children?: React.ReactNode | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    Separator: () => import("react/jsx-runtime").JSX.Element;
};
export {};
