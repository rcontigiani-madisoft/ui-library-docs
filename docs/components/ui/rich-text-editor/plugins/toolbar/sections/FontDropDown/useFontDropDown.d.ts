import { LexicalEditor } from 'lexical';
declare const useFontDropDown: (editor: LexicalEditor) => {
    FONT_FAMILY_OPTIONS: [string, string][];
    handleFontFamilyChange: (option: string) => void;
    fontFamily: string;
};
export { useFontDropDown };
