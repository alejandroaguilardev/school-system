import { ClassroomRepository } from '../../domain/classroom.repository';
import { Criteria } from '../../../common/domain/criteria/criteria';
import { ResponseSearch } from '../../../common/domain/response/response-search';

import { Classroom } from '../../domain/classroom';

export class ClassroomSearch {
  constructor(private readonly repository: ClassroomRepository) { }

  execute(
    criteria: Criteria,
  ): Promise<ResponseSearch<Classroom>> {
    return this.repository.search(criteria);
  }
}
