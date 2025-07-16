type FilePickerProps = {
    title?: string;
    multiple?: boolean;
    maxSizeInBytes?: number;
    mimeTypesMaxSizeInBytes?: Record<string, number>;
    onChange: (files: File[]) => void;
};
export declare function FilePicker({ title, multiple, maxSizeInBytes, mimeTypesMaxSizeInBytes, onChange, }: FilePickerProps): import("react/jsx-runtime").JSX.Element;
export declare function FilePickerErrors({ errors }: {
    errors?: string[];
}): import("react/jsx-runtime").JSX.Element | null;
export {};
