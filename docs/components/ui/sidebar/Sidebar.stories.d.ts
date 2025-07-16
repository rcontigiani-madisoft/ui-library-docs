import { Meta } from '@storybook/react';
import { Sidebar } from './Sidebar';
declare const _default: Meta<typeof Sidebar>;
export default _default;
export declare const Aside: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, {
    routes: import('./sidebar-items').SidebarRoute[];
    children?: React.ReactNode;
    className?: string;
    activePath?: string;
    LinkComponent?: React.ElementType;
    footer?: React.ReactNode;
    asideId?: string;
    navId?: string;
    ariaLabel?: string;
}>;
