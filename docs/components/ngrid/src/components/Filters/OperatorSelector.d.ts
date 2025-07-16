import { Operator } from '../../typings';
import * as React from "react";
type OperatorSelectorProps = {
    value: Operator;
    onChange: (newValue: Operator) => void;
    options: Operator[];
};
export declare const OperatorSelector: React.FC<OperatorSelectorProps>;
export {};
