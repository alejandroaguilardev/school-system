import { INestApplication } from '@nestjs/common';
import { InitTest } from '../../common/infrastructure/init-test';
import { StudentMother } from '../domain/student.mother';
import { CrudTest } from '../../common/infrastructure/crud-test';
import { StudentCreator } from '../../../src/students/application/create/student-creator';
import { StudentUpdater } from '../../../src/students/application/update/student-updater';
import { StudentRemover } from '../../../src/students/application/remove/student-remover';

export const testStudentRoute = '/students';

describe('StudentsController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await InitTest.execute();
    await app.init();
  });

  it('/students (POST)', async () => {
    const dto = StudentMother.create();
    const response = await CrudTest.create(app, testStudentRoute, dto);
    expect(response.body.message).toBe(StudentCreator.messageSuccess());
  });

  it('/students (GET)', async () => {
    const response = await CrudTest.search(app, testStudentRoute);

    expect(Array.isArray(response.body.rows)).toBe(true);
    expect(typeof response.body.count).toBe('number');
  });

  it('/students:id (GET)', async () => {
    const dto = StudentMother.create();
    const response = await CrudTest.searchById(
      app,
      testStudentRoute,
      dto,
    );
    expect(response.body.name).toBe(dto.name);
  });

  it('/students:id (PUT)', async () => {
    const dto = StudentMother.create();
    const dtoUpdate = StudentMother.create();
    const response = await CrudTest.update(
      app,
      testStudentRoute,
      dto,
      dtoUpdate,
    );
    expect(response.body.message).toBe(StudentUpdater.messageSuccess());
  });

  it('/students (DELETE)', async () => {
    const dto = StudentMother.create();
    const response = await CrudTest.remove(app, testStudentRoute, dto);
    expect(response.body.message).toBe(StudentRemover.messageSuccess());
  });
});
