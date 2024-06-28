import { StudentRepository } from '../../domain/student.repository';
import { Criteria } from '../../../common/domain/criteria/criteria';
import { ResponseSearch } from '../../../common/domain/response/response-search';

import { Student } from '../../domain/student';

export class StudentSearch {
  constructor(private readonly repository: StudentRepository) { }

  execute(
    criteria: Criteria,
  ): Promise<ResponseSearch<Student>> {
    return this.repository.search(criteria);
  }
}
