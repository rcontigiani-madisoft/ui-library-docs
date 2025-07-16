import { FileAsset } from './FilePicker.types';
type AssetActionsProps = {
    asset: FileAsset;
    onDelete?: () => void;
    previewUrlBuilder?: (id: string) => string;
    downloadUrlBuilder?: (id: string) => string;
};
export declare function AssetActions({ asset, previewUrlBuilder, downloadUrlBuilder, onDelete, }: AssetActionsProps): import("react/jsx-runtime").JSX.Element;
export {};
