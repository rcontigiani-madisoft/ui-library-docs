export declare function canvasToBlob(canvas: HTMLCanvasElement, type?: string, quality?: number): Blob;
export type ImgResizeOptions = {
    maxWidth?: number;
    maxHeight?: number;
    type?: 'image/jpeg' | 'image/png';
    quality?: number;
};
export declare function resizeImage(file: File, options?: ImgResizeOptions): Promise<File>;
