import { ResponseSuccess } from '../../../common/domain/response/response-success';
import {
  ResponseMessage,
  MessageDefault,
} from '../../../common/domain/response/response-message';
import { TeacherRepository } from '../../domain/teacher.repository';
import { Teacher } from '../../domain/teacher';

export class TeacherCreator {
  constructor(private readonly repository: TeacherRepository) { }

  async execute(
    teacher: Teacher,
  ): Promise<ResponseSuccess<Teacher>> {

    const data = await this.repository.save(teacher);
    return ResponseMessage.createSuccessResponse(TeacherCreator.messageSuccess(), data);
  }

  static messageSuccess(): string {
    return MessageDefault.SUCCESSFULLY_CREATED.replace(
      '{{elemento}}',
      'el profesor',
    );
  }
}
