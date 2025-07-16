import * as React from "react";
type FlagContextType = {
    openFlag: (content: React.ReactNode, options?: Omit<FlagConfig, "content">) => void;
    closeFlag: (id: string) => void;
};
export type FlagConfig = {
    content: React.ReactNode;
    id?: string;
    duration?: number;
    appearance?: "success" | "warning" | "error" | "info" | "default";
    html?: boolean;
};
type FlagsProviderProps = React.PropsWithChildren<{
    className?: string;
}>;
export declare function FlagsProvider({ children, className }: FlagsProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useFlag(): FlagContextType;
export {};
