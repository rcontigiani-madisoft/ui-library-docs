import { Collection } from './Collection';
import { Meta } from '@storybook/react';
declare const _default: Meta<typeof Collection>;
export default _default;
export declare const Default: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    items: string[];
    newItemValue: string;
    onChange: (items: string[]) => void;
    renderItem: (item: string, index: number) => React.ReactNode;
    addLabel?: string;
    deleteLabel?: string;
}>;
