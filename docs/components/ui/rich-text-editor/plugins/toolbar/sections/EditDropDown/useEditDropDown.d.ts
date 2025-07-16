import { LexicalCommand, LexicalEditor, NodeKey, PasteCommandType } from 'lexical';
export interface ImagePayload {
    altText: string;
    caption?: LexicalEditor;
    height?: number;
    key?: NodeKey;
    maxWidth?: number;
    showCaption?: boolean;
    src: string;
    width?: number;
    captionsEnabled?: boolean;
}
export declare const DRAG_DROP_PASTE: LexicalCommand<Array<File>>;
export type InsertImagePayload = Readonly<ImagePayload>;
export declare const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload>;
export declare function eventFiles(event: DragEvent | PasteCommandType): [boolean, Array<File>, boolean];
declare const useEditDropDown: (editor: LexicalEditor) => {
    paste: () => void;
    pasteAsText: () => void;
    copy: () => void;
    cut: () => void;
    selectAll: () => void;
};
export { useEditDropDown };
