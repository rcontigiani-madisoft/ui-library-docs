import { PluginDef } from '@fullcalendar/core';
export type CalendarEvent<E = undefined> = {
    id: string;
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    extendedProps: E;
};
export type DateClickArg = {
    date: Date;
    allDay: boolean;
    event: MouseEvent | TouchEvent;
};
type Props<E> = {
    events: CalendarEvent<E>[];
    noEventText?: string;
    onEventClick?: (event: CalendarEvent<E>) => void;
    onDateClick?: (data: DateClickArg) => void;
    onEventContent?: (ev: CalendarEvent<E>, view: string) => React.ReactNode | string;
    onDatesSet?: (start: Date) => void;
    listView?: boolean;
    plugins?: PluginDef[];
    initialDate?: Date;
};
export declare function Calendar<E>({ events, onEventClick, onDateClick, onEventContent, onDatesSet, listView, initialDate, noEventText, }: Props<E>): import("react/jsx-runtime").JSX.Element;
export {};
