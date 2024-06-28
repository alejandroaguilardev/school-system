import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherCreator } from '../application/create/teacher-creator';
import { TypeOrmTeacherRepository } from './repository/typeorm-teacher.repository';
import { Teacher } from './entities/teacher.entity';
import { TeacherRemover } from '../application/remove/teacher-remover';
import { TeacherUpdater } from '../application/update/teacher-updater';
import { TeacherSearchById } from '../application/search-by-id/teacher-search-by-id';
import { TeacherSearch } from '../application/search/teacher-search';
import { CommandCriteria } from '../../common/application/criteria/command-criteria';
import { CriteriaDto } from '../..//common/infrastructure/dto/criteria.dto';

@Injectable()
export class TeachersService {
  constructor(
    private readonly repository: TypeOrmTeacherRepository,
  ) { }
  create(createTeacherDto: CreateTeacherDto) {
    const useCase = new TeacherCreator(this.repository);
    const teacher = Object.assign(new Teacher(), createTeacherDto);
    return useCase.execute(teacher)
  }

  findAll(criteriaDto: CriteriaDto) {
    const useCase = new TeacherSearch(this.repository);
    const criteria = CommandCriteria.fromData(criteriaDto);
    return useCase.execute(criteria)
  }

  findOne(id: number) {
    const useCase = new TeacherSearchById(this.repository);
    return useCase.execute(id)
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const useCase = new TeacherUpdater(this.repository);
    const teacher = Object.assign(new Teacher(), updateTeacherDto);

    return useCase.execute(id, teacher)
  }

  remove(id: number) {
    const useCase = new TeacherRemover(this.repository);
    return useCase.execute(id)
  }
}
