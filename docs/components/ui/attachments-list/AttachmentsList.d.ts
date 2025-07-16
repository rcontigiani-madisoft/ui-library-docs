import { Allegato } from '../../types';
type AttachmentsListProps<Attachment extends Allegato> = {
    attachments: Attachment[];
    ariaLabelledBy?: string;
    beforeButtons?: (allegato: Attachment) => React.ReactNode;
    previewUrl: (id: string) => string;
    downloadUrl: (id: string) => string;
};
export declare function AttachmentsList<Attachment extends Allegato>({ attachments, ariaLabelledBy, beforeButtons, previewUrl, downloadUrl, }: AttachmentsListProps<Attachment>): import("react/jsx-runtime").JSX.Element | null;
export {};
