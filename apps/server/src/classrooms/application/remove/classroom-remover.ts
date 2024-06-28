import { ClassroomRepository } from '../../domain/classroom.repository';
import { ResponseSuccess } from '../../../common/domain/response/response-success';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { Classroom } from '../../domain/classroom';
import {
  ResponseMessage,
  MessageDefault,
} from '../../../common/domain/response/response-message';

export class ClassroomRemover {
  constructor(private readonly repository: ClassroomRepository) { }

  async execute(
    id: number,
  ): Promise<ResponseSuccess<Classroom>> {
    await this.findExist(id);
    const data = await this.repository.remove(id);
    return ResponseMessage.createSuccessResponse<Classroom>(ClassroomRemover.messageSuccess(), data);
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
      'la clase',
    );
  }
}
