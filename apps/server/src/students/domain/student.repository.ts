import { Repository } from '../../common/domain/repository';
import { Student, NewStudent } from './student';

export interface StudentRepository extends Repository<Student> {
}
