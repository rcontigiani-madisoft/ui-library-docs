import { LexicalEditor } from 'lexical';
import { Dispatch } from '../../../../../../node_modules/react';
import { RichTextEditorConfigs } from '../../RichTextEditor';
declare const useFloatingTextFormatToolbarPlugin: (editor: LexicalEditor, anchorElem: HTMLElement, setIsLinkEditMode: Dispatch<boolean>, config: RichTextEditorConfigs) => import('../../../../../../node_modules/react').ReactPortal | null;
export { useFloatingTextFormatToolbarPlugin };
