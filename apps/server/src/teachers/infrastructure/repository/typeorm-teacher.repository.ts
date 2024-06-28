import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Teacher } from '../entities/teacher.entity';
import { TypeOrmRepository } from '../../../common/infrastructure/typeorm/typeorm.repository';
import { TeacherRepository } from '../../domain/teacher.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmTeacherRepository extends TypeOrmRepository<Teacher> implements TeacherRepository {
    constructor(
        @InjectRepository(Teacher)
        repository: Repository<Teacher>,
    ) {
        super(repository);
    }

}
