import { Student } from '../../../students/domain/student';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { ClassroomRepository } from '../../domain/classroom.repository';

export class ClassroomSearchStudents {
    constructor(private readonly repository: ClassroomRepository) { }

    async execute(
        id: number,
    ): Promise<Student[]> {

        const response = await this.repository.searchByIdStudents(id);
        if (!response) {
            throw new ErrorNotFound(ErrorNotFound.messageDefault('profesor'));
        }

        return response;
    }
}
