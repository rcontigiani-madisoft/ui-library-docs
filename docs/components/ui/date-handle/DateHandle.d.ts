type Size = "small" | "medium";
type Direction = "left" | "right";
type Props = {
    direction?: Direction;
    size?: Size;
    rounded?: boolean;
    onClick: () => void;
    ariaLabel: string;
    className?: string;
    disabled?: boolean;
};
export declare function DateHandle({ direction, size, rounded, ariaLabel, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
