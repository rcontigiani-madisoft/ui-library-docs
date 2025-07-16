import * as React from "react";
export declare function useResetLazyRows(): () => void;
export declare function useRowsLazyLoading(tbodyRef: React.RefObject<Element | null>, scrollContainerRef?: React.RefObject<Element | null>): {
    start: number;
    end: number;
};
