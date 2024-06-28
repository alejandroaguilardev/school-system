import { ClassroomMother } from '../domain/classroom.mother';
import { classroomRepositoryMock } from '../domain/classroom.repository.mock';
import { ClassroomCreator } from '../../../src/classrooms/application/create/classroom-creator';
import { Classroom } from '../../../src/classrooms/infrastructure/entities/classroom.entity';
import { IdMother } from '../../common/domain/id.mother';

describe('ClassroomCreator', () => {
  const useCase = new ClassroomCreator(classroomRepositoryMock);

  it('should_successfully_classroom_create', async () => {
    const id = IdMother.create();
    const dto = ClassroomMother.create();
    classroomRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    const expected = await useCase.execute(new Classroom(), dto);
    expect(expected.message).toBe(ClassroomCreator.messageSuccess());
  });
});
