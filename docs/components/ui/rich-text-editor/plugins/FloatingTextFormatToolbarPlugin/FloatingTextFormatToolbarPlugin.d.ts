import { Dispatch } from '../../../../../../node_modules/react';
import { RichTextEditorConfigs } from '../../RichTextEditor';
type FloatingTextFormatToolbarPluginProps = {
    anchorElem?: HTMLElement;
    setIsLinkEditMode: Dispatch<boolean>;
    config: RichTextEditorConfigs;
};
declare const FloatingTextFormatToolbarPlugin: ({ anchorElem, setIsLinkEditMode, config, }: FloatingTextFormatToolbarPluginProps) => import('../../../../../../node_modules/react').ReactPortal | null;
export default FloatingTextFormatToolbarPlugin;
