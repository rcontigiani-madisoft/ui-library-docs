type Options = {
    gap?: number;
    align?: "left" | "center";
    container?: HTMLElement | null;
};
export declare function calculatePopoverPosition(trigger: HTMLElement, popover: HTMLElement, { gap, align, container }?: Options): {
    top: number;
    left: number;
};
export {};
