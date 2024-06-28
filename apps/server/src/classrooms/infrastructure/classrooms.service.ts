import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { TypeOrmClassroomRepository } from './repository/typeorm-classroom.repository';
import { CriteriaDto } from '../../common/infrastructure/dto/criteria.dto';
import { ClassroomCreator } from '../application/create/classroom-creator';
import { Classroom } from './entities/classroom.entity';
import { ClassroomSearch } from '../application/search/classroom-search';
import { CommandCriteria } from '../../common/application/criteria/command-criteria';
import { ClassroomSearchById } from '../application/search-by-id/classroom-search-by-id';
import { ClassroomUpdater } from '../application/update/classroom-updater';
import { ClassroomRemover } from '../application/remove/classroom-remover';
import { TypeOrmStudentRepository } from '../../students/infrastructure/repository/typeorm-student.repository';
import { TypeOrmTeacherRepository } from '../../teachers/infrastructure/repository/typeorm-teacher.repository';
import { AssignStudentsClassroomDto } from './dto/assign-students-classroom.dto';
import { AssignTeacherClassroomDto } from './dto/assign-teacher-classroom.dto';
import { ClassroomAssignTeacher } from '../application/assign-teacher/assign-teacher';
import { ClassroomAssignStudents } from '../application/assign-students/assign-students';
import { ClassroomSearchStudents } from '../application/search-students/search-students';


@Injectable()
export class ClassroomsService {
  constructor(
    private readonly repository: TypeOrmClassroomRepository,
    private readonly studentRepository: TypeOrmStudentRepository,
    private readonly teacherRepository: TypeOrmTeacherRepository,
  ) { }
  async create(createClassroomDto: CreateClassroomDto) {
    const useCase = new ClassroomCreator(this.repository);
    const classroom = new Classroom();
    return useCase.execute(classroom, createClassroomDto)
  }
  async assignTeacher(id: number, { teacher }: AssignTeacherClassroomDto) {
    const useCase = new ClassroomAssignTeacher(this.repository, this.teacherRepository);
    return useCase.execute(id, teacher)
  }
  async assignStudents(id: number, { students }: AssignStudentsClassroomDto) {
    const useCase = new ClassroomAssignStudents(this.repository, this.studentRepository);
    return useCase.execute(id, students)
  }

  findAll(criteriaDto: CriteriaDto) {
    const useCase = new ClassroomSearch(this.repository);
    const criteria = CommandCriteria.fromData(criteriaDto);
    return useCase.execute(criteria)
  }

  findOne(id: number) {
    const useCase = new ClassroomSearchById(this.repository);
    return useCase.execute(id)
  }

  findStudents(id: number) {
    const useCase = new ClassroomSearchStudents(this.repository);
    return useCase.execute(id)
  }

  async update(id: number, updateClassroomDto: UpdateClassroomDto) {
    const useCase = new ClassroomUpdater(this.repository);
    return useCase.execute(id, updateClassroomDto)
  }

  remove(id: number) {
    const useCase = new ClassroomRemover(this.repository);
    return useCase.execute(id)
  }
}