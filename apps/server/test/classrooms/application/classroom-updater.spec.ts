import { ClassroomUpdater } from '../../../src/classrooms/application/update/classroom-updater';
import { ErrorNotFound } from '../../../src/common/domain/errors/error-not-found';
import { Classroom } from '../../../src/classrooms/infrastructure/entities/classroom.entity';
import { ClassroomMother } from '../domain/classroom.mother';
import { classroomRepositoryMock } from '../domain/classroom.repository.mock';
import { IdMother } from '../../common/domain/id.mother';

describe('ClassroomUpdater', () => {
  const useCase = new ClassroomUpdater(classroomRepositoryMock);

  it('should_successfully_classroom_updater', async () => {
    const id = IdMother.create();
    const dto = ClassroomMother.create();
    const classroom = Object.assign(new Classroom(), dto);

    classroomRepositoryMock.searchById.mockResolvedValueOnce(dto);
    const expected = await useCase.execute(id, classroom);
    expect(expected.message).toBe(ClassroomUpdater.messageSuccess());
  });



  it('should_failed_classroom_updater', async () => {
    const id = IdMother.create();
    const dto = ClassroomMother.create();
    const classroom = Object.assign(new Classroom(), dto);
    const error = new ErrorNotFound(ErrorNotFound.messageDefault("profesor"));
    try {
      await useCase.execute(id, classroom);
      fail('should_failed_classroom_updater');
    } catch (throwError) {
      expect(throwError.message).toBe(error.message);
    }
  });
});
