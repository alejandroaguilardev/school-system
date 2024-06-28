import { StudentSearch } from '../../../src/students/application/search/student-search';
import { StudentMother } from '../domain/student.mother';
import { studentRepositoryMock } from '../domain/student.repository.mock';
import { CriteriaMother } from '../../common/domain/criteria-mother';
import { CommandCriteria } from '../../../src/common/application/criteria/command-criteria';

describe('StudentSearch', () => {
  const useCase = new StudentSearch(studentRepositoryMock);

  it('should_successfully_student_search', async () => {
    const criteriaRequest = CriteriaMother.create();
    const criteria = CommandCriteria.fromData(criteriaRequest);
    const response = [
      StudentMother.create(),
      StudentMother.create(),
      StudentMother.create(),
      StudentMother.create(),
    ];
    studentRepositoryMock.search.mockResolvedValueOnce({
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
      StudentMother.create(),
      StudentMother.create(),
      StudentMother.create(),
      StudentMother.create(),
    ];
    const criteria = CommandCriteria.fromData(criteriaRequest);

    const response = { count: data.length, rows: data };

    studentRepositoryMock.search.mockResolvedValueOnce(response);
    await useCase.execute(criteria);
    const expected = CommandCriteria.fromData(criteriaRequest);
    expect(studentRepositoryMock.search).toHaveBeenCalledWith(expected);
  });
});
