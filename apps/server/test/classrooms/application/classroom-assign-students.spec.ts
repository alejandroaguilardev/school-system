import { ClassroomMother } from '../domain/classroom.mother';
import { classroomRepositoryMock } from '../domain/classroom.repository.mock';
import { studentRepositoryMock } from '../../students/domain/student.repository.mock';
import { IdMother } from '../../common/domain/id.mother';
import { ClassroomAssignStudents } from '../../../src/classrooms/application/assign-students/assign-students';

describe('ClassroomAssignStudents', () => {
    const useCase = new ClassroomAssignStudents(classroomRepositoryMock, studentRepositoryMock);

    it('should_successfully_classroom_create', async () => {
        const id = IdMother.create();
        const dto = ClassroomMother.students();
        const classroomData = ClassroomMother.model({ id, });
        classroomRepositoryMock.searchById.mockResolvedValueOnce(classroomData);
        const expected = await useCase.execute(id, dto.students);
        expect(expected.message).toBe(ClassroomAssignStudents.messageSuccess());
    });
});
