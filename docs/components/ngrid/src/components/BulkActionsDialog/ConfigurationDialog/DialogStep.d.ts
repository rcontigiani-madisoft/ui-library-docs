import * as React from "react";
type DialogStepProps = {
    children?: React.ReactNode;
    step: "previous" | "current" | "next";
};
export declare const DialogStep: React.FC<DialogStepProps>;
export {};
