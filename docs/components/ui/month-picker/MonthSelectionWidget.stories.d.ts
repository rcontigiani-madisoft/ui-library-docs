import { MonthSelectionWidget } from './MonthSelectionWidget';
import { Meta } from '@storybook/react';
declare const _default: Meta<typeof MonthSelectionWidget>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    selected: Date | undefined;
    onSelect: (date: Date) => void;
    className?: string;
}>;
