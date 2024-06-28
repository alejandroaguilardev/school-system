import { TeacherMother } from '../domain/teacher.mother';
import { teacherRepositoryMock } from '../domain/teacher.repository.mock';
import { TeacherCreator } from '../../../src/teachers/application/create/teacher-creator';
import { Teacher } from '../../../src/teachers/infrastructure/entities/teacher.entity';

describe('TeacherCreator', () => {
  const useCase = new TeacherCreator(teacherRepositoryMock);

  it('should_successfully_teacher_create', async () => {
    const dto = TeacherMother.create();
    const teacher = Object.assign(new Teacher(), dto);
    const expected = await useCase.execute(teacher);
    expect(expected.message).toBe(TeacherCreator.messageSuccess());
  });
});
