export type FileAsset = UploadingFileAsset | UploadedFileAsset;
export type UploadingFileAsset = {
    name: string;
    file: File;
    fileToken: string;
    id?: string;
};
export type UploadedFileAsset = {
    name: string;
    id: string;
    fileToken?: string;
};
