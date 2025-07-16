import * as React from "react";
type PopoverProps = React.ComponentPropsWithoutRef<"div"> & {
    open: boolean;
    triggerRef: React.RefObject<HTMLElement | null>;
    containerRef?: React.RefObject<HTMLDivElement | null>;
    onDismiss: () => void;
};
export declare function Popover({ children, className, open, onDismiss, triggerRef, containerRef, ...props }: PopoverProps): React.ReactPortal | null;
export {};
