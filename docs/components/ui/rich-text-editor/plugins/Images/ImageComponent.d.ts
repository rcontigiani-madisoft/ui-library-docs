import { LexicalCommand, LexicalEditor, NodeKey } from 'lexical';
import { JSX } from '../../../../../../node_modules/react';
export declare const RIGHT_CLICK_IMAGE_COMMAND: LexicalCommand<MouseEvent>;
export default function ImageComponent({ src, altText, nodeKey, width, height, maxWidth, showCaption, caption, }: {
    altText: string;
    caption: LexicalEditor;
    height: 'inherit' | number;
    maxWidth: number;
    nodeKey: NodeKey;
    resizable: boolean;
    showCaption: boolean;
    src: string;
    width: 'inherit' | number;
    captionsEnabled: boolean;
}): JSX.Element;
