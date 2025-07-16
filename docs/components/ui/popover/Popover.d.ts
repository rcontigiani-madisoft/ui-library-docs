import * as React from 'react';
type PopoverProps = React.ComponentPropsWithoutRef<'div'> & {
    open: boolean;
    triggerRef: React.RefObject<HTMLElement | null>;
    onDismiss: () => void;
    align?: 'left' | 'center';
};
export declare function Popover({ open, onDismiss, triggerRef, align, ...props }: PopoverProps): React.ReactPortal | null;
export {};
