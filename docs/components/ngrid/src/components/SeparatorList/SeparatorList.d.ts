import * as React from "react";
type Props = {
    values: unknown[];
    separator?: React.ReactNode;
    renderItem: (value: unknown) => React.ReactNode;
};
declare function SeparatorList({ values, renderItem, separator }: Props): import("react/jsx-runtime").JSX.Element;
export default SeparatorList;
