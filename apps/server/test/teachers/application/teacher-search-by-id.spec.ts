import { teacherRepositoryMock } from '../domain/teacher.repository.mock';
import { ErrorNotFound } from '../../../src/common/domain/errors/error-not-found';
import { TeacherSearchById } from '../../../src/teachers/application/search-by-id/teacher-search-by-id';
import { TeacherMother } from '../domain/teacher.mother';
import { IdMother } from '../../common/domain/id.mother';

describe('TeacherFind', () => {
  const useCase = new TeacherSearchById(teacherRepositoryMock);

  it('should_successfully_teacher_find_id', async () => {
    const id = IdMother.create();
    const response = TeacherMother.create();
    teacherRepositoryMock.searchById.mockResolvedValueOnce(response);
    const expected = await useCase.execute(id);
    expect(expected).toEqual(response);
  });

  it('should_successfully_teacher_find_id_to_have_call', async () => {
    const id = IdMother.create();
    const response = TeacherMother.create();
    teacherRepositoryMock.searchById.mockResolvedValueOnce(response);
    await useCase.execute(id);
    expect(teacherRepositoryMock.searchById).toHaveBeenCalledWith(id);
  });

  it('should_failed_teacher_find_id', async () => {
    const id = IdMother.create();
    const error = new ErrorNotFound(ErrorNotFound.messageDefault());
    teacherRepositoryMock.searchById.mockRejectedValueOnce(error);
    try {
      await useCase.execute(id);
      fail('should_failed_teacher_find_id');
    } catch (throwError) {
      expect(throwError.message).toBe(error.message);
    }
  });
});


