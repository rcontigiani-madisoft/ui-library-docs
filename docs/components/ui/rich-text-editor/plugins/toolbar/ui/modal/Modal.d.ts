import { ReactNode } from '../../../../../../../../node_modules/react';
declare const Modal: ({ onClose, children, title, closeOnClickOutside, }: {
    children: ReactNode;
    closeOnClickOutside?: boolean;
    onClose: () => void;
    title: string;
}) => import('../../../../../../../../node_modules/react').ReactPortal;
export default Modal;
