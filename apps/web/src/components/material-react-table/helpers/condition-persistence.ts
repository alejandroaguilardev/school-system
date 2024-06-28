import { classroomsApi } from "../../../presentation/classrooms/service/classrooms.api";
import { studentsApi } from "../../../presentation/students/service/students.api";
import { teachersApi } from "../../../presentation/teachers/service/teachers.api";
import { ServiceSearch } from "../../../services/http/service-search";
import { COLLECTIONS, Collections } from "../../../types/collections";


export const conditionPersistence = (collection: Collections): ServiceSearch => {
    switch (collection) {
        case COLLECTIONS.classrooms:
            return classroomsApi.search;
        case COLLECTIONS.students:
            return studentsApi.search;
        case COLLECTIONS.teachers:
            return teachersApi.search;

        default:
            throw new Error("No existe la colección");
    }

}