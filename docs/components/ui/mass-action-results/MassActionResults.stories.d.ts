import { Meta } from '@storybook/react';
import { MassActionResultsView } from './MassActionResults';
declare const _default: Meta<typeof MassActionResultsView>;
export default _default;
export declare const View: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    results: import('./mass-action-results.types').MassActionResults;
    successMessageExtractor?: (count: number) => string;
}>;
