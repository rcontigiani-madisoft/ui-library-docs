import { MonthPicker } from './MonthPicker';
import { Meta } from '@storybook/react';
import * as React from 'react';
declare const _default: Meta<typeof MonthPicker>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    selected: Date | undefined;
    onSelect: (date: Date) => void;
    ButtonComponent?: React.FC<React.PropsWithChildren<{
        onClick: () => void;
        className?: string;
    }>>;
}>;
