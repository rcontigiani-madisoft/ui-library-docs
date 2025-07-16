import { AlertDialog } from './AlertDialog';
import { Meta } from '@storybook/react';
import * as React from 'react';
declare const _default: Meta<typeof AlertDialog>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    label: string;
    description: string | React.ReactNode;
    dismissLabel?: string;
    confirmLabel?: string;
    children?: React.ReactNode;
    onDismiss: () => void;
    onConfirm: () => void;
    disabled?: boolean;
    primaryDismiss?: boolean;
    className?: string;
}>;
export declare const DismissPrimary: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    label: string;
    description: string | React.ReactNode;
    dismissLabel?: string;
    confirmLabel?: string;
    children?: React.ReactNode;
    onDismiss: () => void;
    onConfirm: () => void;
    disabled?: boolean;
    primaryDismiss?: boolean;
    className?: string;
}>;
