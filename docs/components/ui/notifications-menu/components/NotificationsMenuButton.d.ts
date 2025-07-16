import * as React from "react";
type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type NotificationsMenuButtonProps = HTMLButtonProps & {
    count: number;
};
export declare function NotificationsMenuButton({ count, ...props }: NotificationsMenuButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
