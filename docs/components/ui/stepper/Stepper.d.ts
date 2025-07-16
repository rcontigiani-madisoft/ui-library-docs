import * as React from "react";
type Step = {
    title: string;
    icon?: React.ReactNode;
};
type StepperProps = {
    activeStep: number;
    steps: Step[];
};
export declare function Stepper({ activeStep, steps }: StepperProps): import("react/jsx-runtime").JSX.Element;
export {};
