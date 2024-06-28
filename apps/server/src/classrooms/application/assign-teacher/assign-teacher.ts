import {
    MessageDefault,
    ResponseMessage,
} from '../../../common/domain/response/response-message';
import { ResponseSuccess } from '../../../common/domain/response/response-success';
import { ErrorNotFound } from '../../../common/domain/errors/error-not-found';
import { ClassroomRepository } from '../../domain/classroom.repository';
import { Classroom } from '../../domain/classroom';
import { TeacherRepository } from '../../../teachers/domain/teacher.repository';

export class ClassroomAssignTeacher {
    constructor(
        private readonly classroomRepository: ClassroomRepository,
        private readonly teacherRepository: TeacherRepository,
    ) { }

    async execute(
        id: number,
        teacherId: number,
    ): Promise<ResponseSuccess<Classroom>> {
        const classroom = await this.findExist(id);

        const teacher = await this.teacherRepository.searchById(teacherId);

        classroom.teacher = teacher;
        const data = await this.classroomRepository.save(classroom);
        return ResponseMessage.createSuccessResponse<Classroom>(ClassroomAssignTeacher.messageSuccess(), data);
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
