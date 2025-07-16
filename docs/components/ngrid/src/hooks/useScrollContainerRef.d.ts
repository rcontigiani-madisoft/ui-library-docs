import * as React from "react";
type Params = {
    scrollContainerSelector?: string;
    containerRef: React.RefObject<HTMLDivElement | null>;
    stickyHeader?: boolean;
};
export declare function useScrollContainerRef({ scrollContainerSelector, containerRef, stickyHeader, }: Params): React.RefObject<HTMLDivElement | null> | undefined;
export {};
