import { LexicalEditor } from 'lexical';
import { ReactNode } from '../../../../node_modules/react';
export type RichTextEditorConfigs = {
    hideTable?: boolean;
    hideHorizontalRule?: boolean;
    hidePreview?: boolean;
    hidePrint?: boolean;
    hideSourceCode?: boolean;
    hideLineHeight?: boolean;
    hideFontFamily?: boolean;
    hideFontSize?: boolean;
    hideFontFormat?: boolean;
    hideLink?: boolean;
    hideColor?: boolean;
    hideAlignment?: boolean;
    customPlugins?: ReactNode;
    customHeadComponent?: ReactNode;
    customElementComponent?: ReactNode;
};
export type RichTextEditorProps = {
    id?: string;
    name?: string;
    defaultValue?: string | null;
    disabled?: boolean;
    onBlur?: (content?: string) => void;
    onInit?: (editor: LexicalEditor) => void;
    config?: RichTextEditorConfigs;
};
export declare function RichTextEditor({ id, name, defaultValue, disabled, onInit, onBlur, config, }: RichTextEditorProps): import("react/jsx-runtime").JSX.Element;
