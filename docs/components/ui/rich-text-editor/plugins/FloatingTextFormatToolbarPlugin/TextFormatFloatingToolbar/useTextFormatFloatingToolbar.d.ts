import { LexicalEditor } from 'lexical';
import { Dispatch } from '../../../../../../../node_modules/react';
declare const useTextFormatFloatingToolbar: (editor: LexicalEditor, setIsLinkEditMode: Dispatch<boolean>, isLink: boolean, anchorElem: HTMLElement) => {
    popupCharStylesEditorRef: import('../../../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    insertLink: () => void;
};
export { useTextFormatFloatingToolbar };
