type LinkInterface = React.FC<{
    href?: string;
    children: React.ReactNode;
    className?: string;
    'aria-current'?: 'page';
}>;
type BreadcrumbsProps = {
    items: {
        label: string;
        href: string;
    }[];
    className?: string;
    LinkBehavior?: LinkInterface | 'a';
};
export declare const Breadcrumbs: ({ items, className, LinkBehavior, }: BreadcrumbsProps) => import("react/jsx-runtime").JSX.Element;
export {};
