import { TeacherRepository } from '../../domain/teacher.repository';
import { Criteria } from '../../../common/domain/criteria/criteria';
import { ResponseSearch } from '../../../common/domain/response/response-search';

import { Teacher } from '../../domain/teacher';

export class TeacherSearch {
  constructor(private readonly repository: TeacherRepository) { }

  execute(
    criteria: Criteria,
  ): Promise<ResponseSearch<Teacher>> {
    return this.repository.search(criteria);
  }
}
