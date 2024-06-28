import { Criteria } from '../../domain/criteria/criteria';

export class TypeormCriteriaConverter {
    static converter<T>(criteria: Criteria) {
        const {
            start,
            size,
            filters,
            sorting,
            globalFilter,
            globalFilterProperties,
            selectProperties,
        } = criteria;

        return {
            skip: start.value,
            take: size.value,
        };
    }
}
