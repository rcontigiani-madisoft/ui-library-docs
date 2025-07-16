import { DateSelectionWidget } from './DateSelectionWidget';
import { Meta } from '@storybook/react';
declare const _default: Meta<typeof DateSelectionWidget>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    label: string;
    selected?: Date;
    onSelect: (date: Date) => void;
    className?: string;
    mode?: "month" | "week" | "day";
    disabled?: {
        after: Date;
        before: Date;
    };
}>;
export declare const Weekly: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    label: string;
    selected?: Date;
    onSelect: (date: Date) => void;
    className?: string;
    mode?: "month" | "week" | "day";
    disabled?: {
        after: Date;
        before: Date;
    };
}>;
