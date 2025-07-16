import * as React from 'react';
type StoreProviderProps = React.PropsWithChildren<{
    id: string;
    noSession?: boolean;
}>;
export declare function StoreProvider({ id, noSession, children }: StoreProviderProps): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
