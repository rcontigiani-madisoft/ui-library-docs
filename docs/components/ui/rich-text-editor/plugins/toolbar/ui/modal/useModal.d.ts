import { JSX } from '../../../../../../../../node_modules/react';
export default function useModal(): [
    JSX.Element | null,
    (title: string, showModal: (onClose: () => void) => JSX.Element) => void
];
