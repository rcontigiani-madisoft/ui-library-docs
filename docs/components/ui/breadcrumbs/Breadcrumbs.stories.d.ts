import { StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';
declare const _default: {
    component: ({ items, className, LinkBehavior, }: {
        items: {
            label: string;
            href: string;
        }[];
        className?: string;
        LinkBehavior?: import('../../../../node_modules/react').FunctionComponent<{
            href?: string;
            children: React.ReactNode;
            className?: string;
            'aria-current'?: "page";
        }> | "a";
    }) => import("react/jsx-runtime").JSX.Element;
    title: string;
};
export default _default;
type Story = StoryObj<typeof Breadcrumbs>;
export declare const Default: Story;
export declare const WithCustomLink: Story;
