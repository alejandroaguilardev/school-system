import { TeacherRepository } from '../../domain/teacher.repository';
import { ResponseSuccess } from '../../../common/domain/response/response-success';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { Teacher } from '../../domain/teacher';
import {
  ResponseMessage,
  MessageDefault,
} from '../../../common/domain/response/response-message';

export class TeacherRemover {
  constructor(private readonly repository: TeacherRepository) { }

  async execute(
    id: number,
  ): Promise<ResponseSuccess<Teacher>> {
    await this.findExist(id);
    const data = await this.repository.remove(id);
    return ResponseMessage.createSuccessResponse<Teacher>(TeacherRemover.messageSuccess(), data);
  }


  private async findExist(id) {
    const response = await this.repository.searchById(id);
    if (!response) {
      throw new ErrorNotFound(ErrorNotFound.messageDefault('profesor'));
    }
  }

  static messageSuccess(): string {
    return MessageDefault.SUCCESSFULLY_DELETED.replace(
      '{{elemento}}',
      'el profesor',
    );
  }
}
