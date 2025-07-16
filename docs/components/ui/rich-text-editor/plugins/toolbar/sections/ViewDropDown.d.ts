import { LexicalEditor } from 'lexical';
import { RichTextEditorConfigs } from '../../../RichTextEditor';
type ViewDropDownProps = {
    editor: LexicalEditor;
    disabled: boolean;
    config: RichTextEditorConfigs;
};
declare const ViewDropDown: ({ editor, disabled, config, }: ViewDropDownProps) => import("react/jsx-runtime").JSX.Element;
export { ViewDropDown };
