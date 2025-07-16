import { Meta } from '@storybook/react';
import { Dialog } from './Dialog';
import * as React from 'react';
declare const _default: Meta<typeof Dialog>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    open: boolean;
    onDismiss?: () => void;
    closeOnClickOutside?: boolean;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    role?: "dialog" | "alertdialog";
} & {
    children?: React.ReactNode | undefined;
}>;
