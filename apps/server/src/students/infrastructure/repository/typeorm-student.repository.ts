import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';
import { TypeOrmRepository } from '../../../common/infrastructure/typeorm/typeorm.repository';
import { StudentRepository } from '../../domain/student.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmStudentRepository extends TypeOrmRepository<Student> implements StudentRepository {
    constructor(
        @InjectRepository(Student)
        repository: Repository<Student>,
    ) {
        super(repository);
    }

}
