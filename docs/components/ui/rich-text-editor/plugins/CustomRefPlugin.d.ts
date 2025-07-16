import { LexicalEditor } from 'lexical';
type CustomRefPluginProps = {
    onInit?: (editor: LexicalEditor) => void;
};
declare const CustomRefPlugin: ({ onInit }: CustomRefPluginProps) => null;
export { CustomRefPlugin };
