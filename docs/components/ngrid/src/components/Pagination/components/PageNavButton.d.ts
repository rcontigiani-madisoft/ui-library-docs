type PageNavButtonProps = {
    icon: "start" | "previous" | "next" | "end";
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    "aria-label": string;
    className?: string;
    disabled?: boolean;
};
export declare const PageNavButton: React.FC<PageNavButtonProps>;
export {};
