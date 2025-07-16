import { HTMLInputTypeAttribute } from '../../../../../../../node_modules/react';
type Props = Readonly<{
    'data-test-id'?: string;
    label: string;
    onChange: (val: string) => void;
    placeholder?: string;
    value: string;
    type?: HTMLInputTypeAttribute;
}>;
export default function TextInput({ label, value, onChange, placeholder, 'data-test-id': dataTestId, type, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
