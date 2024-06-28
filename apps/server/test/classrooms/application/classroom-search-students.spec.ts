import { classroomRepositoryMock } from '../domain/classroom.repository.mock';
import { ClassroomMother } from '../domain/classroom.mother';
import { IdMother } from '../../common/domain/id.mother';
import { ClassroomSearchStudents } from '../../../src/classrooms/application/search-students/search-students';

describe('ClassroomFind', () => {
    const useCase = new ClassroomSearchStudents(classroomRepositoryMock);

    it('should_successfully_classroom_students', async () => {
        const id = IdMother.create();
        const response = ClassroomMother.students();
        classroomRepositoryMock.searchByIdStudents.mockResolvedValueOnce(response);
        const expected = await useCase.execute(id);
        expect(expected).toEqual(response);
    });
});


