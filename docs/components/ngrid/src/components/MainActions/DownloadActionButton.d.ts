import { AjaxActionButtonProps } from './RawActionButton';
export declare function DownloadActionButton({ action, children, ariaLabel, }: AjaxActionButtonProps): import("react/jsx-runtime").JSX.Element;
export declare function useDownload(url: string): {
    downloading: boolean;
    download: () => Promise<void>;
};
