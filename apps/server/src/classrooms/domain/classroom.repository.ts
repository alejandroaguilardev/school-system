import { Student } from '../../students/domain/student';
import { Repository } from '../../common/domain/repository';
import { Classroom } from './classroom';

export interface ClassroomRepository extends Repository<Classroom> {
    searchByIdStudents(id: number): Promise<Student[]>;
}
