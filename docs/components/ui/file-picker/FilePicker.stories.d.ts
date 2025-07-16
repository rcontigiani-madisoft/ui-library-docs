import { Meta } from '@storybook/react';
import { FilePicker } from './FilePicker';
declare const _default: Meta<typeof FilePicker>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    title?: string;
    multiple?: boolean;
    maxSizeInBytes?: number;
    mimeTypesMaxSizeInBytes?: Record<string, number>;
    onChange: (files: File[]) => void;
}>;
export declare const Single: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    title?: string;
    multiple?: boolean;
    maxSizeInBytes?: number;
    mimeTypesMaxSizeInBytes?: Record<string, number>;
    onChange: (files: File[]) => void;
}>;
