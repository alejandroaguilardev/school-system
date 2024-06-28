import { INestApplication } from '@nestjs/common';
import { InitTest } from '../../common/infrastructure/init-test';
import { ClassroomMother } from '../domain/classroom.mother';
import { CrudTest } from '../../common/infrastructure/crud-test';
import { ClassroomCreator } from '../../../src/classrooms/application/create/classroom-creator';
import { ClassroomUpdater } from '../../../src/classrooms/application/update/classroom-updater';
import { ClassroomRemover } from '../../../src/classrooms/application/remove/classroom-remover';
import { testStudentRoute } from '../../students/insfractucture/students.controller.spec';
import { testTeacherRoute } from '../../teachers/insfractucture/teachers.controller.spec';
import { TeacherMother } from '../../teachers/domain/teacher.mother';
import { StudentMother } from '../../students/domain/student.mother';
import * as request from 'supertest';

const route = '/classrooms';

describe('ClassroomsController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await InitTest.execute();
    await app.init();
  });


  it('/classrooms (POST)', async () => {
    const dto = ClassroomMother.create();
    const response = await CrudTest.create(app, route, dto);
    expect(response.body.message).toBe(ClassroomCreator.messageSuccess());
  });


  it('/classrooms/:id/assign-teacher (POST)', async () => {
    const dtoT = TeacherMother.create();
    const teacher = await CrudTest.create(app, testTeacherRoute, dtoT);

    const dto = ClassroomMother.create();
    const create = await CrudTest.create(app, route, dto);
    const id = create.body.data.id;

    const response = await request(app.getHttpServer())
      .post(`${route}/${id}/assign-teacher`)
      .send({ teacher: teacher.body.data.id })

    expect(response.body.data.id).toBe(id);
  });

  it('/classrooms/:id/assign-students (POST)', async () => {
    const dtoS = StudentMother.create();
    const student = await CrudTest.create(app, testStudentRoute, dtoS);

    const dto = ClassroomMother.create();
    const create = await CrudTest.create(app, route, dto);
    const id = create.body.data.id;


    const response = await request(app.getHttpServer())
      .post(`${route}/${id}/assign-students`)
      .send({ students: [student.body.data.id] })


    expect(response.body.data.id).toBe(id);
  });

  it('/classrooms (GET)', async () => {
    const response = await CrudTest.search(app, route);

    expect(Array.isArray(response.body.rows)).toBe(true);
    expect(typeof response.body.count).toBe('number');
  });

  it('/classrooms:id (GET)', async () => {
    const dto = ClassroomMother.create();
    const response = await CrudTest.searchById(
      app,
      route,
      dto,
    );
    expect(response.body.name).toBe(dto.name);
  });

  it('/classrooms:id/students (GET)', async () => {
    const dtoS = StudentMother.create();
    const student = await CrudTest.create(app, testStudentRoute, dtoS);

    const dto = ClassroomMother.create();
    const create = await CrudTest.create(app, route, dto);

    const id = create.body.data.id;

    await request(app.getHttpServer())
      .post(`${route}/${id}/assign-students`)
      .send({ students: [student.body.data.id] })

    const response = await request(app.getHttpServer())
      .get(`${route}/${id}/students`)
      .expect(200);
    expect(response.body[0].id).toBe(student.body.data.id);
  });

  it('/classrooms:id (PUT)', async () => {
    const dto = ClassroomMother.create();
    const create = await CrudTest.create(app, route, dto);
    const id = create.body.data.id;
    const dtoUpdate = ClassroomMother.create();

    const response = await CrudTest.updateOnly(
      app,
      route,
      id,
      dtoUpdate,
    );
    expect(response.body.message).toBe(ClassroomUpdater.messageSuccess());
  });

  it('/classrooms (DELETE)', async () => {
    const dto = ClassroomMother.create();
    const response = await CrudTest.remove(app, route, dto);
    expect(response.body.message).toBe(ClassroomRemover.messageSuccess());
  });
});
