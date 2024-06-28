import {
  MessageDefault,
  ResponseMessage,
} from '../../../common/domain/response/response-message';
import { ResponseSuccess } from '../../../common/domain/response/response-success';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { StudentRepository } from '../../domain/student.repository';
import { Student } from '../../domain/student';

export class StudentUpdater {
  constructor(private readonly repository: StudentRepository) { }

  async execute(
    id: number,
    student: Student,
  ): Promise<ResponseSuccess<Student>> {
    await this.findExist(id);
    const data = await this.repository.update(id, student);
    return ResponseMessage.createSuccessResponse<Student>(StudentUpdater.messageSuccess(), data);
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
