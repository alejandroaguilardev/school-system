import {
  MessageDefault,
  ResponseMessage,
} from '../../../common/domain/response/response-message';
import { ResponseSuccess } from '../../../common/domain/response/response-success';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { TeacherRepository } from '../../domain/teacher.repository';
import { Teacher } from '../../domain/teacher';

export class TeacherUpdater {
  constructor(private readonly repository: TeacherRepository) { }

  async execute(
    id: number,
    teacher: Teacher,
  ): Promise<ResponseSuccess<Teacher>> {
    await this.findExist(id);
    const data = await this.repository.update(id, teacher);
    return ResponseMessage.createSuccessResponse<Teacher>(TeacherUpdater.messageSuccess(), data);
  }

  private async findExist(id) {
    const response = await this.repository.searchById(id);
    if (!response) {
      throw new ErrorNotFound(ErrorNotFound.messageDefault('profesor'));
    }
  }

  static messageSuccess(): string {
    return MessageDefault.SUCCESSFULLY_UPDATED.replace(
      '{{elemento}}',
      'el profesor',
    );
  }
}
