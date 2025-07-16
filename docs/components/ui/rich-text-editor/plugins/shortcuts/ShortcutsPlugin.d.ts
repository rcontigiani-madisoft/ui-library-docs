import { LexicalCommand, LexicalEditor } from 'lexical';
import { Dispatch } from '../../../../../../node_modules/react';
export declare const INSERT_INLINE_COMMAND: LexicalCommand<void>;
export default function ShortcutsPlugin({ editor, setIsLinkEditMode, }: {
    editor: LexicalEditor;
    setIsLinkEditMode: Dispatch<boolean>;
}): null;
