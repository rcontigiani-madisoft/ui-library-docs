import { InputControlProps } from '../control/Control';
import { RichTextEditorProps } from './RichTextEditor';
export type RichTextEditorFieldProps = InputControlProps & Omit<RichTextEditorProps, 'id'> & {
    id: string;
};
export declare function RichTextEditorField({ id, name, defaultValue, disabled, onBlur, onInit, config, ...controlProps }: RichTextEditorFieldProps): import("react/jsx-runtime").JSX.Element;
