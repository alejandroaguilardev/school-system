import { faker } from '@faker-js/faker';
import { ClassroomCreateRequest } from '../../../src/classrooms/application/create/classroom-create-request';
import { IdMother } from '../../common/domain/id.mother';
import { Classroom } from '../../../src/classrooms/domain/classroom';
import { StudentMother } from '../../students/domain/student.mother';
import { TeacherMother } from '../../teachers/domain/teacher.mother';

export class ClassroomMother {
  static create(data?: Partial<ClassroomCreateRequest>): ClassroomCreateRequest {
    return {
      name: data?.name ?? faker.person.jobArea(),
      description: data?.description ?? faker.word.words(),
    };
  }
  static students(students?: number[]) {
    return {
      students: students ?? [IdMother.create()],
    };
  }
  static teacher(teacher?: number) {
    return {
      teacher: teacher ?? IdMother.create(),
    };
  }
  static model(data?: Partial<Classroom>): Classroom {
    return {
      id: data?.id ?? IdMother.create(),
      name: data?.name ?? faker.person.jobArea(),
      description: data?.description ?? faker.word.words(),
      teacher: data?.teacher ?? TeacherMother.model(),
      students: data?.students ?? [StudentMother.model()],
    };
  }

}
