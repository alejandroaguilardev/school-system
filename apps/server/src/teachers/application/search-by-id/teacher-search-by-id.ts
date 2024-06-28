import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { Teacher } from '../../domain/teacher';
import { TeacherRepository } from '../../domain/teacher.repository';

export class TeacherSearchById {
  constructor(private readonly repository: TeacherRepository) { }

  async execute(
    id: number,
  ): Promise<Teacher> {

    const response = await this.repository.searchById(id);
    if (!response) {
      throw new ErrorNotFound(ErrorNotFound.messageDefault('profesor'));
    }

    return response;
  }
}
