import { ElementFormatType } from 'lexical';
declare const useElementFormatDropdown: () => {
    getIcon: (elementFormat: ElementFormatType) => import("react/jsx-runtime").JSX.Element | undefined;
    formatOption: {
        name: string;
    };
    elementFormat: ElementFormatType;
};
export { useElementFormatDropdown };
