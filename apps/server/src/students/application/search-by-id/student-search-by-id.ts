import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { Student } from '../../domain/student';
import { StudentRepository } from '../../domain/student.repository';

export class StudentSearchById {
  constructor(private readonly repository: StudentRepository) { }

  async execute(
    id: number,
  ): Promise<Student> {

    const response = await this.repository.searchById(id);
    if (!response) {
      throw new ErrorNotFound(ErrorNotFound.messageDefault('profesor'));
    }

    return response;
  }
}
