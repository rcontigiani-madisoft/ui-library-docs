import * as React from "react";
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
type AsProp<C extends React.ElementType> = {
    as?: C;
};
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
export type PolymorphicProps<C extends React.ElementType, P = {}> = React.PropsWithChildren<P & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, P>>;
export type PolymorphicPropsWithRef<C extends React.ElementType, P = {}> = PolymorphicProps<C, P> & {
    ref?: PolymorphicRef<C>;
};
export {};
