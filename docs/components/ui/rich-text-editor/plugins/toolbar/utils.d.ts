import { HeadingTagType } from '@lexical/rich-text';
import { EditorState, LexicalEditor, LexicalNode } from 'lexical';
export declare enum UpdateFontSizeType {
    increment = 1,
    decrement = 2
}
export declare const updateFontSizeInSelection: (editor: LexicalEditor, newFontSize: string | null, updateType: UpdateFontSizeType | null) => void;
export declare const updateFontSize: (editor: LexicalEditor, updateType: UpdateFontSizeType, inputValue: string) => void;
export declare const formatParagraph: (editor: LexicalEditor) => void;
export declare const updateLineHeight: (editor: LexicalEditor, lineHeight: string) => void;
export declare const formatHeading: (editor: LexicalEditor, blockType: string, headingSize: HeadingTagType) => void;
export declare const formatBulletList: (editor: LexicalEditor, blockType: string) => void;
export declare const formatNumberedList: (editor: LexicalEditor, blockType: string) => void;
export declare const formatQuote: (editor: LexicalEditor, blockType: string) => void;
export declare const clearFormatting: (editor: LexicalEditor) => void;
export declare const getSelectionLineHeight: (editor: LexicalEditor) => null;
export declare const editorHTML: (editor: LexicalEditor, editorState: EditorState) => string;
export declare const $findTopLevelElement: (node: LexicalNode) => LexicalNode;
