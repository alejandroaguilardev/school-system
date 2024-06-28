import { ClassroomSearch } from '../../../src/classrooms/application/search/classroom-search';
import { ClassroomMother } from '../domain/classroom.mother';
import { classroomRepositoryMock } from '../domain/classroom.repository.mock';
import { CriteriaMother } from '../../common/domain/criteria-mother';
import { CommandCriteria } from '../../../src/common/application/criteria/command-criteria';

describe('ClassroomSearch', () => {
  const useCase = new ClassroomSearch(classroomRepositoryMock);

  it('should_successfully_classroom_search', async () => {
    const criteriaRequest = CriteriaMother.create();
    const criteria = CommandCriteria.fromData(criteriaRequest);
    const response = [
      ClassroomMother.create(),
      ClassroomMother.create(),
      ClassroomMother.create(),
      ClassroomMother.create(),
    ];
    classroomRepositoryMock.search.mockResolvedValueOnce({
      count: response.length,
      response,
    });

    const expected = await useCase.execute(criteria);

    expect(expected).toEqual({ count: response.length, response });
    expect(expected.count).toEqual(response.length);
  });

  it('should_successfully_role_search_to_have_call', async () => {
    const criteriaRequest = CriteriaMother.create();
    const data = [
      ClassroomMother.create(),
      ClassroomMother.create(),
      ClassroomMother.create(),
      ClassroomMother.create(),
    ];
    const criteria = CommandCriteria.fromData(criteriaRequest);

    const response = { count: data.length, rows: data };

    classroomRepositoryMock.search.mockResolvedValueOnce(response);
    await useCase.execute(criteria);
    const expected = CommandCriteria.fromData(criteriaRequest);
    expect(classroomRepositoryMock.search).toHaveBeenCalledWith(expected);
  });
});
