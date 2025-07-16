import { Meta } from '@storybook/react';
import { ValueBox } from './ValueBox';
declare const _default: Meta<typeof ValueBox>;
export default _default;
export declare const DefaultValueBox: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    label: string;
    value: React.ReactNode;
    appearance?: "error";
    className?: string;
    emptyPlaceholder?: string;
} & {
    children?: import('../../../../node_modules/react').ReactNode | undefined;
}>;
export declare const NoStatusBox: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    label: string;
    value: React.ReactNode;
    appearance?: "error";
    className?: string;
    emptyPlaceholder?: string;
} & {
    children?: import('../../../../node_modules/react').ReactNode | undefined;
}>;
export declare const StatusBox: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, import('./ValueBox').StatusValueBoxProps>;
