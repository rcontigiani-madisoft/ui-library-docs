import { LexicalEditor } from 'lexical';
declare const useFontSize: (editor: LexicalEditor) => {
    selectionFontSize: string;
    inputValue: string;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleInputBlur: () => void;
    setInputValue: import('../../../../../../../../node_modules/react').Dispatch<import('../../../../../../../../node_modules/react').SetStateAction<string>>;
};
export { useFontSize };
