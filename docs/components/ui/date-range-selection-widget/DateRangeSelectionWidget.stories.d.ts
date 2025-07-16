import { DateRangeSelectionWidget } from './DateRangeSelectionWidget';
import { Meta } from '@storybook/react';
declare const _default: Meta<typeof DateRangeSelectionWidget>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    className?: string;
    selected?: {
        from: Date;
        to: Date;
    };
    onSelect: (range: {
        from: Date;
        to: Date;
    }) => void;
    quickFilters?: ({
        from: Date;
        to: Date;
    } & {
        label: string;
    })[];
}>;
export declare const QuickFilters: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    className?: string;
    selected?: {
        from: Date;
        to: Date;
    };
    onSelect: (range: {
        from: Date;
        to: Date;
    }) => void;
    quickFilters?: ({
        from: Date;
        to: Date;
    } & {
        label: string;
    })[];
}>;
