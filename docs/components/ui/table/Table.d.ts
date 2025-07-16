import * as React from 'react';
type HTMLTableProps = React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
export declare function Table(props: HTMLTableProps): import("react/jsx-runtime").JSX.Element;
export declare const TR: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $selected?: boolean;
}>> & string;
export declare const TH: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, {
    $selected?: boolean;
}>> & string;
export declare const TD: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $selected?: boolean;
}>> & string;
export declare const Caption: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
export {};
