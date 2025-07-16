import { Calendar } from './Calendar';
import { Meta } from '@storybook/react';
declare const _default: Meta<typeof Calendar>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    events: import('./Calendar').CalendarEvent<unknown>[];
    noEventText?: string;
    onEventClick?: ((event: import('./Calendar').CalendarEvent<unknown>) => void) | undefined;
    onDateClick?: (data: import('./Calendar').DateClickArg) => void;
    onEventContent?: ((ev: import('./Calendar').CalendarEvent<unknown>, view: string) => React.ReactNode | string) | undefined;
    onDatesSet?: (start: Date) => void;
    listView?: boolean;
    plugins?: import('@fullcalendar/core/index.js').PluginDef[];
    initialDate?: Date;
}>;
