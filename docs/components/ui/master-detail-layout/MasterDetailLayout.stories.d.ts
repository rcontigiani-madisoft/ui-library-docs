import { Meta } from '@storybook/react';
import { MasterDetailLayout } from './MasterDetailLayout';
import * as React from 'react';
declare const _default: Meta<typeof MasterDetailLayout>;
export default _default;
export declare const DefaultMasterDetailLayout: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    children: [React.ReactNode, React.ReactNode];
    masterRatio?: number;
    detailFlex?: number;
}>;
