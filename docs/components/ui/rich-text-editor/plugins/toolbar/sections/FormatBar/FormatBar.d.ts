import { LexicalEditor } from 'lexical';
import { RichTextEditorConfigs } from '../../../../RichTextEditor';
type FormatBarProps = {
    disabled?: boolean;
    editor: LexicalEditor;
    config: RichTextEditorConfigs;
};
declare const FormatBar: ({ editor, disabled, config }: FormatBarProps) => import("react/jsx-runtime").JSX.Element;
export { FormatBar };
