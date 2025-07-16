import * as React from 'react';
type IconProps = React.SVGProps<SVGSVGElement> & {
    SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    size?: number;
    title?: string;
};
export declare function Icon({ size, SVGIcon, ...props }: IconProps): import("react/jsx-runtime").JSX.Element;
export {};
