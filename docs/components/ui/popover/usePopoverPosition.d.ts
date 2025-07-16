import * as React from "react";
export declare const usePopoverPosition: (portalRef: React.RefObject<HTMLElement | null>, triggerRef: React.RefObject<HTMLElement | null>, containerRef?: React.RefObject<HTMLElement | null>, condition?: boolean, align?: "left" | "center") => {
    top: number;
    left: number;
};
