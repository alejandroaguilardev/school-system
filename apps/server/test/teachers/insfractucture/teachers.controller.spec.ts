import { INestApplication } from '@nestjs/common';
import { InitTest } from '../../common/infrastructure/init-test';
import { TeacherMother } from '../domain/teacher.mother';
import { CrudTest } from '../../common/infrastructure/crud-test';
import { TeacherCreator } from '../../../src/teachers/application/create/teacher-creator';
import { TeacherUpdater } from '../../../src/teachers/application/update/teacher-updater';
import { TeacherRemover } from '../../../src/teachers/application/remove/teacher-remover';

export const testTeacherRoute = '/teachers';

describe('TeachersController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await InitTest.execute();
    await app.init();
  });

  it('/teachers (POST)', async () => {
    const dto = TeacherMother.create();
    const response = await CrudTest.create(app, testTeacherRoute, dto);
    expect(response.body.message).toBe(TeacherCreator.messageSuccess());
  });

  it('/teachers (GET)', async () => {
    const response = await CrudTest.search(app, testTeacherRoute);

    expect(Array.isArray(response.body.rows)).toBe(true);
    expect(typeof response.body.count).toBe('number');
  });

  it('/teachers:id (GET)', async () => {
    const dto = TeacherMother.create();
    const response = await CrudTest.searchById(
      app,
      testTeacherRoute,
      dto,
    );
    expect(response.body.name).toBe(dto.name);
  });

  it('/teachers:id (PUT)', async () => {
    const dto = TeacherMother.create();
    const dtoUpdate = TeacherMother.create();
    const response = await CrudTest.update(
      app,
      testTeacherRoute,
      dto,
      dtoUpdate,
    );
    expect(response.body.message).toBe(TeacherUpdater.messageSuccess());
  });

  it('/teachers (DELETE)', async () => {
    const dto = TeacherMother.create();
    const response = await CrudTest.remove(app, testTeacherRoute, dto);
    expect(response.body.message).toBe(TeacherRemover.messageSuccess());
  });
});
