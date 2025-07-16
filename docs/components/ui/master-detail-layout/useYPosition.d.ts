import * as React from "react";
export declare function useYPosition<El extends HTMLElement>(): {
    refObject: React.RefObject<El | null>;
    yPosition: number;
};
