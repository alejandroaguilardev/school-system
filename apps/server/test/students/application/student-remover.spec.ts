
import { studentRepositoryMock } from '../domain/student.repository.mock';
import { StudentRemover } from '../../../src/students/application/remove/student-remover';
import { IdMother } from '../../common/domain/id.mother';
import { StudentMother } from '../domain/student.mother';

describe('StudentCreator', () => {
  const useCase = new StudentRemover(studentRepositoryMock);

  it('should_successfully_remover_student', async () => {
    const id = IdMother.create();
    const dto = StudentMother.create();
    studentRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    const expected = await useCase.execute(id);
    expect(expected.message).toBe(StudentRemover.messageSuccess());
  });

  it('should_successfully_remover_student_to_have_called', async () => {
    const id = IdMother.create();
    const dto = StudentMother.create();
    studentRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    await useCase.execute(id);
    expect(studentRepositoryMock.remove).toHaveBeenCalledWith(id);
  });
});
