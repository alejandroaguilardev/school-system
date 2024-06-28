import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { Classroom } from '../../domain/classroom';
import { ClassroomRepository } from '../../domain/classroom.repository';

export class ClassroomSearchById {
  constructor(private readonly repository: ClassroomRepository) { }

  async execute(
    id: number,
  ): Promise<Classroom> {

    const response = await this.repository.searchById(id);
    if (!response) {
      throw new ErrorNotFound(ErrorNotFound.messageDefault('profesor'));
    }

    return response;
  }
}
