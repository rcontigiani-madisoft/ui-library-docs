import { Meta } from '@storybook/react';
import { DisclosureCheckbox } from './DisclosureCheckbox';
import * as React from 'react';
declare const _default: Meta<typeof DisclosureCheckbox>;
export default _default;
export declare const Disclosure: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    label: string;
    id?: string;
    hint?: string;
    children?: React.ReactNode;
    defaultChecked?: boolean;
    className?: string;
    error?: string;
}>;
export declare const DisclosureWithHint: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    label: string;
    id?: string;
    hint?: string;
    children?: React.ReactNode;
    defaultChecked?: boolean;
    className?: string;
    error?: string;
}>;
