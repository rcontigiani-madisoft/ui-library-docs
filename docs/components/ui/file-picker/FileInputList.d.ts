import { FileAsset } from './FilePicker.types';
type FileInputListProps = {
    files: FileAsset[];
    namePrefix?: string;
    onDelete: (index: number) => void;
    previewUrlBuilder?: (id: string) => string;
    downloadUrlBuilder?: (id: string) => string;
    onChange?: (asset: FileAsset, index: number) => void;
};
export declare function FileInputList({ files, namePrefix, onDelete, previewUrlBuilder, downloadUrlBuilder, onChange, }: FileInputListProps): import("react/jsx-runtime").JSX.Element;
export {};
