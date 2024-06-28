import { StudentMother } from '../domain/student.mother';
import { studentRepositoryMock } from '../domain/student.repository.mock';
import { StudentCreator } from '../../../src/students/application/create/student-creator';
import { Student } from '../../../src/students/infrastructure/entities/student.entity';

describe('StudentCreator', () => {
  const useCase = new StudentCreator(studentRepositoryMock);

  it('should_successfully_student_create', async () => {
    const dto = StudentMother.create();
    const student = Object.assign(new Student(), dto);
    const expected = await useCase.execute(student);
    expect(expected.message).toBe(StudentCreator.messageSuccess());
  });
});
