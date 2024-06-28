import {
  MessageDefault,
  ResponseMessage,
} from '../../../common/domain/response/response-message';
import { ResponseSuccess } from '../../../common/domain/response/response-success';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { ClassroomRepository } from '../../domain/classroom.repository';
import { Classroom } from '../../domain/classroom';
import { StudentRepository } from '../../../students/domain/student.repository';
import { TeacherRepository } from '../../../teachers/domain/teacher.repository';
import { ClassroomUpdateRequest } from './classroom-create-request';

export class ClassroomUpdater {
  constructor(
    private readonly classroomRepository: ClassroomRepository,


  ) { }

  async execute(
    id: number,
    request: ClassroomUpdateRequest,
  ): Promise<ResponseSuccess<Classroom>> {
    const classroom = await this.findExist(id);

    classroom.name = request.name;
    classroom.description = request.description;
    const data = await this.classroomRepository.save(classroom);
    return ResponseMessage.createSuccessResponse<Classroom>(ClassroomUpdater.messageSuccess(), data);
  }

  private async findExist(id: number) {
    const response = await this.classroomRepository.searchById(id);
    if (!response) {
      throw new ErrorNotFound(ErrorNotFound.messageDefault('profesor'));
    }
    return response;
  }

  static messageSuccess(): string {
    return MessageDefault.SUCCESSFULLY_UPDATED.replace(
      '{{elemento}}',
      'el profesor',
    );
  }
}
