import {
    MessageDefault,
    ResponseMessage,
} from '../../../common/domain/response/response-message';
import { ResponseSuccess } from '../../../common/domain/response/response-success';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { ClassroomRepository } from '../../domain/classroom.repository';
import { Classroom } from '../../domain/classroom';
import { StudentRepository } from '../../../students/domain/student.repository';

export class ClassroomAssignStudents {
    constructor(
        private readonly classroomRepository: ClassroomRepository,
        private readonly studentRepository: StudentRepository,
    ) { }

    async execute(
        id: number,
        studentIds: number[]
    ): Promise<ResponseSuccess<Classroom>> {
        const classroom = await this.findExist(id);
        const students = await Promise.all(studentIds.map(id => this.studentRepository.searchById(id)));
        classroom.students = students;
        const data = await this.classroomRepository.save(classroom);
        return ResponseMessage.createSuccessResponse<Classroom>(ClassroomAssignStudents.messageSuccess(), data);
    }

    private async findExist(id: number) {
        const response = await this.classroomRepository.searchById(id);
        if (!response) {
            throw new ErrorNotFound(ErrorNotFound.messageDefault('clase'));
        }
        return response;
    }

    static messageSuccess(): string {
        return MessageDefault.SUCCESSFULLY_UPDATED.replace(
            '{{elemento}}',
            'la clase',
        );
    }
}
