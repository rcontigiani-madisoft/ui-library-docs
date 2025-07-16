type PageRangeMenuButtonProps = {
    currentPage: number;
    itemsCountPerPage: number;
    maxPageSize?: number;
    onPageSizeChange: (pageSize: number) => void;
    totalItemsCount: number;
};
export declare const PageRangeMenuButton: ({ currentPage, itemsCountPerPage, maxPageSize, onPageSizeChange, totalItemsCount, }: PageRangeMenuButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
