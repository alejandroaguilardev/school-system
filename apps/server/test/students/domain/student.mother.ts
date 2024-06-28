import { faker } from '@faker-js/faker';
import { StudentCreateRequest } from '../../../src/students/application/create/student-create-request';
import { Student } from '../../../src/students/domain/student';
import { IdMother } from '../../common/domain/id.mother';

export class StudentMother {
  static create(data?: Partial<StudentCreateRequest>): StudentCreateRequest {
    return {
      name: data?.name ?? faker.person.firstName(),
      lastName: data?.lastName ?? faker.person.lastName(),
      email: data?.email ?? faker.internet.email(),
    };
  }
  static model(data?: Partial<Student>): Student {
    return {
      id: IdMother.create(),
      name: data?.name ?? faker.person.firstName(),
      lastName: data?.lastName ?? faker.person.lastName(),
      email: data?.email ?? faker.internet.email(),
    };
  }
}
