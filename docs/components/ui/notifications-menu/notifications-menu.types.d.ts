import * as React from 'react';
export type NotificationsMenuItemConfig = {
    key: string;
    title: string;
    count: number;
    icon?: React.ReactNode;
    children?: React.ReactNode;
};
