import { useState } from "react";
import {
    MRT_ColumnFiltersState,
    MRT_PaginationState,
    MRT_SortingState
} from "material-react-table";

export const INITIAL_PAGINATION: MRT_PaginationState = {
    pageIndex: 0,
    pageSize: 10,
};

interface Props {
    initialPagination?: MRT_PaginationState,
    columnQueryFilters?: MRT_ColumnFiltersState,
    sortingQueryFilters?: MRT_SortingState,
}

interface UseMaterialReactPaginationResult {
    columnFilters: MRT_ColumnFiltersState;
    globalFilter: string;
    sorting: MRT_SortingState;
    pagination: MRT_PaginationState;
    setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
    setSorting: React.Dispatch<React.SetStateAction<MRT_SortingState>>;
    setPagination: React.Dispatch<React.SetStateAction<MRT_PaginationState>>;
    setColumnFilters: React.Dispatch<React.SetStateAction<MRT_ColumnFiltersState>>;
}

export const useMaterialReactPagination = (props?: Props): UseMaterialReactPaginationResult => {
    const [pagination, setPagination] = useState<MRT_PaginationState>(
        props?.initialPagination ?? INITIAL_PAGINATION
    );

    const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
        props?.columnQueryFilters ?? []
    );

    const [sorting, setSorting] = useState<MRT_SortingState>(
        props?.sortingQueryFilters ?? []
    );

    const [globalFilter, setGlobalFilter] = useState<string>('');

    return {
        columnFilters,
        globalFilter,
        sorting,
        pagination,
        setGlobalFilter,
        setSorting,
        setPagination,
        setColumnFilters
    };
};
