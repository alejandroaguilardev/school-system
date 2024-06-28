import { faker } from '@faker-js/faker';
import { TeacherCreateRequest } from '../../../src/teachers/application/create/teacher-create-request';
import { IdMother } from '../../common/domain/id.mother';
import { Teacher } from '../../../src/teachers/domain/teacher';

export class TeacherMother {
  static create(data?: Partial<TeacherCreateRequest>): TeacherCreateRequest {
    return {
      name: data?.name ?? faker.person.firstName(),
      lastName: data?.lastName ?? faker.person.lastName(),
      email: data?.email ?? faker.internet.email(),
    };
  }
  static model(data?: Partial<Teacher>): Teacher {
    return {
      id: IdMother.create(),
      name: data?.name ?? faker.person.firstName(),
      lastName: data?.lastName ?? faker.person.lastName(),
      email: data?.email ?? faker.internet.email(),
    };
  }

}
