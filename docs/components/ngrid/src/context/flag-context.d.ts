import { FlagState } from '../components/Flag/Flag';
import * as React from "react";
type FlagContextType = [FlagState[], (flag: FlagState) => void];
export declare function useFlagContext(): FlagContextType;
type Props = {
    children: React.ReactNode;
};
export declare function FlagContextProvider({ children }: Props): React.ReactElement;
export {};
