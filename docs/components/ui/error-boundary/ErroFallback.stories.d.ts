import { Meta } from '@storybook/react';
import { ErrorFallback } from './ErrorFallback';
import * as React from 'react';
declare const _default: Meta<typeof ErrorFallback>;
export default _default;
export declare const DefaultErrorFallback: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    error: Error;
    title?: string;
    message?: string | string[];
    className?: string;
    children?: React.ReactNode;
    reset?: () => void;
}>;
export declare const CustomErrorFallback: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    error: Error;
    title?: string;
    message?: string | string[];
    className?: string;
    children?: React.ReactNode;
    reset?: () => void;
}>;
