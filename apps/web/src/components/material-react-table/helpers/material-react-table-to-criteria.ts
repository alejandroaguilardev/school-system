import { MRT_ColumnFiltersState, MRT_PaginationState, MRT_SortingState } from 'material-react-table';
import { Criteria } from '../../../types/criteria/criteria';
import { Operator } from '../../../types/criteria/filters';
import { GlobalFilterProperties } from '../../../types/criteria/global-filter-properties';
import { OrderValue } from '../../../types/criteria/sorting';


export interface MaterialReactTableToCriteria {
    columnFilters: MRT_ColumnFiltersState,
    globalFilter: string,
    sorting: MRT_SortingState,
    pagination: MRT_PaginationState,
    globalFilterProperties: GlobalFilterProperties[]
    selectProperties: string[]
}

export const materialReactTableToCriteria = ({ columnFilters, globalFilter, sorting, pagination, selectProperties, globalFilterProperties }: MaterialReactTableToCriteria): Criteria => {

    return {
        start: pagination.pageIndex,
        size: pagination.pageSize,
        filters: columnFilters.map(_ => ({ field: _.id, value: _.value, operator: Operator.CONTAINS })),
        sorting: sorting.map(({ id, desc }) => ({ orderBy: id, orderType: desc ? OrderValue.DESC : OrderValue.ASC })),
        globalFilter,
        globalFilterProperties,
        selectProperties: selectProperties,
    }
}