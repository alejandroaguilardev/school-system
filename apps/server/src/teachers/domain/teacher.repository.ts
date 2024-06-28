import { Repository } from '../../common/domain/repository';
import { Teacher, NewTeacher } from './teacher';

export interface TeacherRepository extends Repository<Teacher> { }
