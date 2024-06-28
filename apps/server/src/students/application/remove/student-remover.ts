import { StudentRepository } from '../../domain/student.repository';
import { ResponseSuccess } from '../../../common/domain/response/response-success';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { Student } from '../../domain/student';
import {
  ResponseMessage,
  MessageDefault,
} from '../../../common/domain/response/response-message';

export class StudentRemover {
  constructor(private readonly repository: StudentRepository) { }

  async execute(
    id: number,
  ): Promise<ResponseSuccess<Student>> {
    await this.findExist(id);
    const data = await this.repository.remove(id);
    return ResponseMessage.createSuccessResponse<Student>(StudentRemover.messageSuccess(), data);
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
