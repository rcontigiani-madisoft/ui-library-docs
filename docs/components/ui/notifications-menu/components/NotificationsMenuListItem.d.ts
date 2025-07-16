import * as React from 'react';
type NotificationsMenuItemProps = {
    children?: string;
    icon?: React.ReactNode;
    count?: number;
    onSelect: () => void;
    disabled?: boolean;
};
export declare function NotificationsMenuListItem({ icon, children, count, onSelect, disabled, }: NotificationsMenuItemProps): import("react/jsx-runtime").JSX.Element;
export {};
