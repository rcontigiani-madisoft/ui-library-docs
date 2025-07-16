declare const useFormatDropDown: () => {
    getIcon: (blockType: string) => import("react/jsx-runtime").JSX.Element | undefined;
    blockType: "number" | "code" | "h1" | "h2" | "h3" | "paragraph" | "bullet" | "quote" | "check";
};
export { useFormatDropDown };
