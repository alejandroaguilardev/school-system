import { studentRepositoryMock } from '../domain/student.repository.mock';
import { ErrorNotFound } from '../../../src/common/domain/errors/error-not-found';
import { StudentSearchById } from '../../../src/students/application/search-by-id/student-search-by-id';
import { StudentMother } from '../domain/student.mother';
import { IdMother } from '../../common/domain/id.mother';

describe('StudentFind', () => {
  const useCase = new StudentSearchById(studentRepositoryMock);

  it('should_successfully_student_find_id', async () => {
    const id = IdMother.create();
    const response = StudentMother.create();
    studentRepositoryMock.searchById.mockResolvedValueOnce(response);
    const expected = await useCase.execute(id);
    expect(expected).toEqual(response);
  });

  it('should_successfully_student_find_id_to_have_call', async () => {
    const id = IdMother.create();
    const response = StudentMother.create();
    studentRepositoryMock.searchById.mockResolvedValueOnce(response);
    await useCase.execute(id);
    expect(studentRepositoryMock.searchById).toHaveBeenCalledWith(id);
  });

  it('should_failed_student_find_id', async () => {
    const id = IdMother.create();
    const error = new ErrorNotFound(ErrorNotFound.messageDefault());
    studentRepositoryMock.searchById.mockRejectedValueOnce(error);
    try {
      await useCase.execute(id);
      fail('should_failed_student_find_id');
    } catch (throwError) {
      expect(throwError.message).toBe(error.message);
    }
  });
});


