import { Meta } from '@storybook/react';
import { CharCounter } from './CharCounter';
declare const _default: Meta<typeof CharCounter>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    length: number;
    maxLength: number;
    warningThreshold?: number;
}>;
export declare const Warning: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    length: number;
    maxLength: number;
    warningThreshold?: number;
}>;
export declare const Error: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    length: number;
    maxLength: number;
    warningThreshold?: number;
}>;
