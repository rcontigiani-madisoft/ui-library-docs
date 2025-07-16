import { ReactNode } from '../../../../../../../node_modules/react';
type Props = {
    disabled?: boolean;
    buttonAriaLabel?: string;
    icon?: ReactNode;
    buttonLabel?: string;
    title?: string;
    stopCloseOnClickSelf?: boolean;
    color: string;
    onChange?: (color: string, skipHistoryStack: boolean) => void;
};
export default function DropdownColorPicker({ disabled, stopCloseOnClickSelf, color, onChange, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
