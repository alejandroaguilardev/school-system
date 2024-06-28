import { ClassroomMother } from '../domain/classroom.mother';
import { classroomRepositoryMock } from '../domain/classroom.repository.mock';
import { IdMother } from '../../common/domain/id.mother';
import { ClassroomAssignTeacher } from '../../../src/classrooms/application/assign-teacher/assign-teacher';
import { teacherRepositoryMock } from '../../teachers/domain/teacher.repository.mock';

describe('ClassroomAssignTeacher', () => {
    const useCase = new ClassroomAssignTeacher(classroomRepositoryMock, teacherRepositoryMock);

    it('should_successfully_classroom_create', async () => {
        const id = IdMother.create();
        const dto = ClassroomMother.teacher();
        const classroomData = ClassroomMother.model({ id, });
        classroomRepositoryMock.searchById.mockResolvedValueOnce(classroomData);
        const expected = await useCase.execute(id, dto.teacher);
        expect(expected.message).toBe(ClassroomAssignTeacher.messageSuccess());
    });
});
