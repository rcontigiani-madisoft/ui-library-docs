export declare function fileToBase64(file: File | Blob): Promise<string>;
export declare function explodeFilename(filename: string): {
    name: string;
    ext: string;
};
export declare function readableBytes(bytes: number): string;
/**
 * Ritorna true se il filename rappresenta un formato supportato dal tag HTML img.
 * @param {string} filename Il nome del file
 */
export declare function isValidImgSource(filename: string): boolean;
export declare function replaceExtension(file: File, newExtension: string): string;
export declare function isMimeTypePreviewable(mimeType?: string): boolean;
export declare function isFilePreviewable(filename?: string): boolean;
