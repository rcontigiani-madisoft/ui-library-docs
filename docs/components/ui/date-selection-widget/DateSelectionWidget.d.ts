import { Popover } from '../popover/Popover';
import * as React from "react";
type Mode = "day" | "week" | "month";
type Props = {
    label: string;
    selected?: Date;
    onSelect: (date: Date) => void;
    className?: string;
    mode?: Mode;
    disabled?: {
        after: Date;
        before: Date;
    };
};
export declare function DateSelectionWidget(props: Props): import("react/jsx-runtime").JSX.Element;
export declare const DatePopover: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    open: boolean;
    triggerRef: React.RefObject<HTMLElement | null>;
    onDismiss: () => void;
    align?: "left" | "center";
}, never>> & string & Omit<typeof Popover, keyof React.Component<any, {}, any>>;
export declare const ErrorText: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
export {};
