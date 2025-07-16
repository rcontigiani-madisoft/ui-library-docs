import { JSX } from '../../../../../../node_modules/react';
import { EditorThemeClasses, Klass, LexicalEditor, LexicalNode } from 'lexical';
export type InsertTableCommandPayload = Readonly<{
    columns: string;
    rows: string;
    includeHeaders?: boolean;
}>;
export type CellContextShape = {
    cellEditorConfig: null | CellEditorConfig;
    cellEditorPlugins: null | JSX.Element | Array<JSX.Element>;
    set: (cellEditorConfig: null | CellEditorConfig, cellEditorPlugins: null | JSX.Element | Array<JSX.Element>) => void;
};
export type CellEditorConfig = Readonly<{
    namespace: string;
    nodes?: ReadonlyArray<Klass<LexicalNode>>;
    onError: (error: Error, editor: LexicalEditor) => void;
    readOnly?: boolean;
    theme?: EditorThemeClasses;
}>;
export declare const CellContext: import('../../../../../../node_modules/react').Context<CellContextShape>;
export declare function TableContext({ children }: {
    children: JSX.Element;
}): import("react/jsx-runtime").JSX.Element;
export declare function InsertTableDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): JSX.Element;
export interface TablePluginProps {
    /**
     * When `false` (default `true`), merged cell support (colspan and rowspan) will be disabled and all
     * tables will be forced into a regular grid with 1x1 table cells.
     */
    hasCellMerge?: boolean;
    /**
     * When `false` (default `true`), the background color of TableCellNode will always be removed.
     */
    hasCellBackgroundColor?: boolean;
    /**
     * When `true` (default `true`), the tab key can be used to navigate table cells.
     */
    hasTabHandler?: boolean;
    /**
     * When `true` (default `false`), tables will be wrapped in a `<div>` to enable horizontal scrolling
     */
    hasHorizontalScroll?: boolean;
}
/**
 * A plugin to enable all of the features of Lexical's TableNode.
 *
 * @param props - See type for documentation
 * @returns An element to render in your LexicalComposer
 */
export declare function TablePlugin({ hasCellMerge, hasCellBackgroundColor, hasTabHandler, hasHorizontalScroll, }: TablePluginProps): JSX.Element | null;
