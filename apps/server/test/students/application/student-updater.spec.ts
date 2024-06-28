import { StudentUpdater } from '../../../src/students/application/update/student-updater';
import { ErrorNotFound } from '../../../src/common/domain/errors/error-not-found';
import { Student } from '../../../src/students/infrastructure/entities/student.entity';
import { StudentMother } from '../domain/student.mother';
import { studentRepositoryMock } from '../domain/student.repository.mock';
import { IdMother } from '../../common/domain/id.mother';

describe('StudentUpdater', () => {
  const studentUpdater: StudentUpdater = new StudentUpdater(studentRepositoryMock);

  it('should_successfully_student_updater', async () => {
    const id = IdMother.create();
    const dto = StudentMother.create();
    const student = Object.assign(new Student(), dto);

    studentRepositoryMock.searchById.mockResolvedValueOnce(dto);
    const expected = await studentUpdater.execute(id, student);
    expect(expected.message).toBe(StudentUpdater.messageSuccess());
  });

  it('should_successfully_student_updater_called_with', async () => {
    const id = IdMother.create();
    const dto = StudentMother.create();
    const student = Object.assign(new Student(), dto);
    studentRepositoryMock.searchById.mockResolvedValueOnce({ id, ...dto });
    await studentUpdater.execute(id, student);
    expect(studentRepositoryMock.update).toHaveBeenCalledWith(id, student);
  });

  it('should_failed_student_updater', async () => {
    const id = IdMother.create();
    const dto = StudentMother.create();
    const student = Object.assign(new Student(), dto);
    const error = new ErrorNotFound(ErrorNotFound.messageDefault("profesor"));
    try {
      await studentUpdater.execute(id, student);
      fail('should_failed_student_updater');
    } catch (throwError) {
      expect(throwError.message).toBe(error.message);
    }
  });
});
