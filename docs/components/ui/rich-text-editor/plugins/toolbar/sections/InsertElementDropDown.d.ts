import { LexicalEditor } from 'lexical';
import { RichTextEditorConfigs } from '../../../RichTextEditor';
type InsertElementDropDownProps = {
    disabled?: boolean;
    editor: LexicalEditor;
    config: RichTextEditorConfigs;
};
declare const InsertElementDropDown: ({ editor, disabled, config, }: InsertElementDropDownProps) => import("react/jsx-runtime").JSX.Element;
export { InsertElementDropDown };
