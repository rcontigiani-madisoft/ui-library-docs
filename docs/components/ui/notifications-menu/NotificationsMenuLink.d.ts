import { PolymorphicProps } from '../polimorphic/polymorphic';
import * as React from "react";
type NotificationProps<C extends React.ElementType> = PolymorphicProps<C, {
    title: string;
    timestamp?: string;
}>;
export declare function NotificationsMenuLink<C extends React.ElementType = "a">({ as, title, children, timestamp, ...props }: NotificationProps<C>): import("react/jsx-runtime").JSX.Element;
export {};
