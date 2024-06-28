import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { TypeOrmStudentRepository } from './repository/typeorm-student.repository';
import { StudentCreator } from '../application/create/student-creator';
import { Student } from './entities/student.entity';
import { CriteriaDto } from '../../common/infrastructure/dto/criteria.dto';
import { StudentSearch } from '../application/search/student-search';
import { CommandCriteria } from '../../common/application/criteria/command-criteria';
import { StudentSearchById } from '../application/search-by-id/student-search-by-id';
import { StudentUpdater } from '../application/update/student-updater';
import { StudentRemover } from '../application/remove/student-remover';

@Injectable()
export class StudentsService {
  constructor(
    private readonly repository: TypeOrmStudentRepository,
  ) { }
  create(createStudentDto: CreateStudentDto) {
    const useCase = new StudentCreator(this.repository);
    const student = Object.assign(new Student(), createStudentDto);
    return useCase.execute(student)
  }

  findAll(criteriaDto: CriteriaDto) {
    const useCase = new StudentSearch(this.repository);
    const criteria = CommandCriteria.fromData(criteriaDto);
    return useCase.execute(criteria)
  }

  findOne(id: number) {
    const useCase = new StudentSearchById(this.repository);
    return useCase.execute(id)
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const useCase = new StudentUpdater(this.repository);
    const student = Object.assign(new Student(), updateStudentDto);

    return useCase.execute(id, student)
  }

  remove(id: number) {
    const useCase = new StudentRemover(this.repository);
    return useCase.execute(id)
  }
}
