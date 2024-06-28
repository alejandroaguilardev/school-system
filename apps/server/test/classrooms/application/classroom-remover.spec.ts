
import { classroomRepositoryMock } from '../domain/classroom.repository.mock';
import { ClassroomRemover } from '../../../src/classrooms/application/remove/classroom-remover';
import { IdMother } from '../../common/domain/id.mother';
import { ClassroomMother } from '../domain/classroom.mother';

describe('ClassroomCreator', () => {
  const useCase = new ClassroomRemover(classroomRepositoryMock);

  it('should_successfully_remover_classroom', async () => {
    const id = IdMother.create();
    const dto = ClassroomMother.create();
    classroomRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    const expected = await useCase.execute(id);
    expect(expected.message).toBe(ClassroomRemover.messageSuccess());
  });

  it('should_successfully_remover_classroom_to_have_called', async () => {
    const id = IdMother.create();
    const dto = ClassroomMother.create();
    classroomRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    await useCase.execute(id);
    expect(classroomRepositoryMock.remove).toHaveBeenCalledWith(id);
  });
});
