import { classroomRepositoryMock } from '../domain/classroom.repository.mock';
import { ErrorNotFound } from '../../../src/common/domain/errors/error-not-found';
import { ClassroomSearchById } from '../../../src/classrooms/application/search-by-id/classroom-search-by-id';
import { ClassroomMother } from '../domain/classroom.mother';
import { IdMother } from '../../common/domain/id.mother';

describe('ClassroomFind', () => {
  const useCase = new ClassroomSearchById(classroomRepositoryMock);

  it('should_successfully_classroom_find_id', async () => {
    const id = IdMother.create();
    const response = ClassroomMother.create();
    classroomRepositoryMock.searchById.mockResolvedValueOnce(response);
    const expected = await useCase.execute(id);
    expect(expected).toEqual(response);
  });

  it('should_successfully_classroom_find_id_to_have_call', async () => {
    const id = IdMother.create();
    const response = ClassroomMother.create();
    classroomRepositoryMock.searchById.mockResolvedValueOnce(response);
    await useCase.execute(id);
    expect(classroomRepositoryMock.searchById).toHaveBeenCalledWith(id);
  });

  it('should_failed_classroom_find_id', async () => {
    const id = IdMother.create();
    const error = new ErrorNotFound(ErrorNotFound.messageDefault());
    classroomRepositoryMock.searchById.mockRejectedValueOnce(error);
    try {
      await useCase.execute(id);
      fail('should_failed_classroom_find_id');
    } catch (throwError) {
      expect(throwError.message).toBe(error.message);
    }
  });
});


