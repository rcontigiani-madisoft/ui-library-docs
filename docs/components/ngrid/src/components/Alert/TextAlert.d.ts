import { AlertProps } from './Alert';
export type TextAlertProps = AlertProps & {
    messages?: string[];
};
declare function TextAlert({ messages, ...alertProps }: TextAlertProps): import("react/jsx-runtime").JSX.Element;
export default TextAlert;
