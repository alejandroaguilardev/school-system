import { ResponseSuccess } from '../../../common/domain/response/response-success';
import {
  ResponseMessage,
  MessageDefault,
} from '../../../common/domain/response/response-message';
import { ClassroomRepository } from '../../domain/classroom.repository';
import { Classroom } from '../../domain/classroom';
import { ClassroomCreateRequest } from './classroom-create-request';

export class ClassroomCreator {
  constructor(
    private readonly classroomRepository: ClassroomRepository

  ) { }

  async execute(
    classroom: Classroom,
    request: ClassroomCreateRequest
  ): Promise<ResponseSuccess<Classroom>> {

    classroom.name = request.name;
    classroom.description = request.description;
    classroom.students = [];
    const data = await this.classroomRepository.save(classroom);
    return ResponseMessage.createSuccessResponse(ClassroomCreator.messageSuccess(), data);
  }

  static messageSuccess(): string {
    return MessageDefault.SUCCESSFULLY_CREATED.replace(
      '{{elemento}}',
      'la clase',
    );
  }
}
