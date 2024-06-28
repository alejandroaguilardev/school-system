import { TeacherSearch } from '../../../src/teachers/application/search/teacher-search';
import { TeacherMother } from '../domain/teacher.mother';
import { teacherRepositoryMock } from '../domain/teacher.repository.mock';
import { CriteriaMother } from '../../common/domain/criteria-mother';
import { CommandCriteria } from '../../../src/common/application/criteria/command-criteria';

describe('TeacherSearch', () => {
  const useCase = new TeacherSearch(teacherRepositoryMock);

  it('should_successfully_teacher_search', async () => {
    const criteriaRequest = CriteriaMother.create();
    const criteria = CommandCriteria.fromData(criteriaRequest);
    const response = [
      TeacherMother.create(),
      TeacherMother.create(),
      TeacherMother.create(),
      TeacherMother.create(),
    ];
    teacherRepositoryMock.search.mockResolvedValueOnce({
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
      TeacherMother.create(),
      TeacherMother.create(),
      TeacherMother.create(),
      TeacherMother.create(),
    ];
    const criteria = CommandCriteria.fromData(criteriaRequest);

    const response = { count: data.length, rows: data };

    teacherRepositoryMock.search.mockResolvedValueOnce(response);
    await useCase.execute(criteria);
    const expected = CommandCriteria.fromData(criteriaRequest);
    expect(teacherRepositoryMock.search).toHaveBeenCalledWith(expected);
  });
});
