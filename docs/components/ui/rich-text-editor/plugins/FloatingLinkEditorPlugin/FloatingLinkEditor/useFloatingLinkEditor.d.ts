import { LexicalEditor } from 'lexical';
import { Dispatch } from '../../../../../../../node_modules/react';
import * as React from 'react';
declare const useFloatingLinkEditorPlugin: (editor: LexicalEditor, setIsLink: Dispatch<boolean>, anchorElem: HTMLElement, isLinkEditMode: boolean, setIsLinkEditMode: Dispatch<boolean>, isLink: boolean) => {
    inputRef: React.RefObject<HTMLInputElement | null>;
    editorRef: React.RefObject<HTMLDivElement | null>;
    editedLinkUrl: string;
    monitorInputInteraction: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setEditedLinkUrl: Dispatch<React.SetStateAction<string>>;
    handleLinkSubmission: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>) => void;
    linkUrl: string;
};
export { useFloatingLinkEditorPlugin };
