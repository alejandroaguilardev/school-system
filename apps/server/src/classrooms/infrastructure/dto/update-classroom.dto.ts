import { CreateClassroomDto } from './create-classroom.dto';
import { ClassroomUpdateRequest } from '../../../classrooms/application/update/classroom-create-request';

export class UpdateClassroomDto extends CreateClassroomDto implements ClassroomUpdateRequest { }
