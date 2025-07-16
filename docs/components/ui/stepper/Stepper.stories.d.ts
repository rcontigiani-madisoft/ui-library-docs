import { Meta } from '@storybook/react';
import { Stepper } from './Stepper';
declare const _default: Meta<typeof Stepper>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    activeStep: number;
    steps: {
        title: string;
        icon?: React.ReactNode;
    }[];
}>;
