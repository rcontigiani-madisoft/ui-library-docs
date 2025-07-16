type DialogState<T> = {
    open: false;
} | ({
    open: true;
} & T);
export declare function useDialogState<T>(): {
    dialogState: DialogState<T>;
    openDialog: (args: T) => void;
    closeDialog: () => void;
};
export {};
