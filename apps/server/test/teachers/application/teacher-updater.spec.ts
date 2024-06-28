import { TeacherUpdater } from '../../../src/teachers/application/update/teacher-updater';
import { ErrorNotFound } from '../../../src/common/domain/errors/error-not-found';
import { Teacher } from '../../../src/teachers/infrastructure/entities/teacher.entity';
import { TeacherMother } from '../domain/teacher.mother';
import { teacherRepositoryMock } from '../domain/teacher.repository.mock';
import { IdMother } from '../../common/domain/id.mother';

describe('TeacherUpdater', () => {
  const teacherUpdater: TeacherUpdater = new TeacherUpdater(teacherRepositoryMock);

  it('should_successfully_teacher_updater', async () => {
    const id = IdMother.create();
    const dto = TeacherMother.create();
    const teacher = Object.assign(new Teacher(), dto);

    teacherRepositoryMock.searchById.mockResolvedValueOnce(dto);
    const expected = await teacherUpdater.execute(id, teacher);
    expect(expected.message).toBe(TeacherUpdater.messageSuccess());
  });

  it('should_successfully_teacher_updater_called_with', async () => {
    const id = IdMother.create();
    const dto = TeacherMother.create();
    const teacher = Object.assign(new Teacher(), dto);
    teacherRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    await teacherUpdater.execute(id, teacher);
    expect(teacherRepositoryMock.update).toHaveBeenCalledWith(id, teacher);
  });

  it('should_failed_teacher_updater', async () => {
    const id = IdMother.create();
    const dto = TeacherMother.create();
    const teacher = Object.assign(new Teacher(), dto);
    const error = new ErrorNotFound(ErrorNotFound.messageDefault("profesor"));
    try {
      await teacherUpdater.execute(id, teacher);
      fail('should_failed_teacher_updater');
    } catch (throwError) {
      expect(throwError.message).toBe(error.message);
    }
  });
});
