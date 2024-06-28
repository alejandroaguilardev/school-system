
import { teacherRepositoryMock } from '../domain/teacher.repository.mock';
import { TeacherRemover } from '../../../src/teachers/application/remove/teacher-remover';
import { IdMother } from '../../common/domain/id.mother';
import { TeacherMother } from '../domain/teacher.mother';

describe('TeacherCreator', () => {
  const useCase = new TeacherRemover(teacherRepositoryMock);

  it('should_successfully_remover_teacher', async () => {
    const id = IdMother.create();
    const dto = TeacherMother.create();
    teacherRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    const expected = await useCase.execute(id);
    expect(expected.message).toBe(TeacherRemover.messageSuccess());
  });

  it('should_successfully_remover_teacher_to_have_called', async () => {
    const id = IdMother.create();
    const dto = TeacherMother.create();
    teacherRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    await useCase.execute(id);
    expect(teacherRepositoryMock.remove).toHaveBeenCalledWith(id);
  });
});
