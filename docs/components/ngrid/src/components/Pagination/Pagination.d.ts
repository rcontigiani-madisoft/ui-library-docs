import * as React from 'react';
export type PaginationProps = {
    currentPage: number;
    itemsCountPerPage: number;
    totalItemsCount: number;
    onPageChange: (page: number) => void;
    pageRangeDisplayed?: number;
    onPageSizeChange?: (pageSize: number) => void;
    maxPageSize?: number;
    isCompact?: boolean;
    children?: React.ReactNode;
};
declare function Pagination({ currentPage, itemsCountPerPage, totalItemsCount, onPageChange, onPageSizeChange, maxPageSize, pageRangeDisplayed, isCompact, children, }: PaginationProps): import("react/jsx-runtime").JSX.Element | null;
export default Pagination;
