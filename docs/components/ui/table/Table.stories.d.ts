import { Table } from './Table';
declare const _default: {
    title: string;
    component: typeof Table;
    subcomponents: {
        TR: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
            $selected?: boolean;
        }>> & string;
        TH: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, {
            $selected?: boolean;
        }>> & string;
        TD: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
            $selected?: boolean;
        }>> & string;
    };
};
export default _default;
export declare const Base: () => import("react/jsx-runtime").JSX.Element;
export declare const Selected: () => import("react/jsx-runtime").JSX.Element;
