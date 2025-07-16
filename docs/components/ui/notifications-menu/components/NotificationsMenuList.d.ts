import { NotificationsMenuItemConfig } from '../notifications-menu.types';
type NotificationsMenuItemsListProps = {
    items: NotificationsMenuItemConfig[];
    onItemSelect: (item: NotificationsMenuItemConfig) => void;
    visible: boolean;
};
export declare const NotificationsMenuList: ({ items, onItemSelect, visible, }: NotificationsMenuItemsListProps) => import("react/jsx-runtime").JSX.Element;
export {};
