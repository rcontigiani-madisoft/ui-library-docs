import { DateRangePicker } from './DateRangePicker';
import { Meta } from '@storybook/react';
declare const _default: Meta<typeof DateRangePicker>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, Omit<import('react-day-picker').PropsRange, "onSelect" | "mode"> & {
    quickFilters?: {
        label: string;
        from: Date;
        to: Date;
    }[];
    onSelect: (date?: import('react-day-picker').DateRange) => void;
}>;
export declare const Selected: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, Omit<import('react-day-picker').PropsRange, "onSelect" | "mode"> & {
    quickFilters?: {
        label: string;
        from: Date;
        to: Date;
    }[];
    onSelect: (date?: import('react-day-picker').DateRange) => void;
}>;
export declare const QuickFilters: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, Omit<import('react-day-picker').PropsRange, "onSelect" | "mode"> & {
    quickFilters?: {
        label: string;
        from: Date;
        to: Date;
    }[];
    onSelect: (date?: import('react-day-picker').DateRange) => void;
}>;
