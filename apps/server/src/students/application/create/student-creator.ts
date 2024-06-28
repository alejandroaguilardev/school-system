import { ResponseSuccess } from '../../../common/domain/response/response-success';
import {
  ResponseMessage,
  MessageDefault,
} from '../../../common/domain/response/response-message';
import { StudentRepository } from '../../domain/student.repository';
import { Student } from '../../domain/student';

export class StudentCreator {
  constructor(private readonly repository: StudentRepository) { }

  async execute(
    student: Student,
  ): Promise<ResponseSuccess<Student>> {

    const data = await this.repository.save(student);
    return ResponseMessage.createSuccessResponse(StudentCreator.messageSuccess(), data);
  }

  static messageSuccess(): string {
    return MessageDefault.SUCCESSFULLY_CREATED.replace(
      '{{elemento}}',
      'el profesor',
    );
  }
}
