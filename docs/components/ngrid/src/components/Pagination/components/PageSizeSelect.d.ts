type PageSizeSelectProps = {
    itemsCountPerPage: number;
    maxPageSize: number;
    onPageSizeChange: (pageSize: number) => void;
};
export declare const PageSizeSelect: ({ itemsCountPerPage, maxPageSize, onPageSizeChange, }: PageSizeSelectProps) => import("react/jsx-runtime").JSX.Element;
export declare const pageSizeOptionClassName: (value: number) => "ngrid__pagination__item--superadmin" | undefined;
export {};
