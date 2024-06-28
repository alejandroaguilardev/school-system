import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Classroom } from '../entities/classroom.entity';
import { TypeOrmRepository } from '../../../common/infrastructure/typeorm/typeorm.repository';
import { ClassroomRepository } from '../../domain/classroom.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Criteria } from '../../../common/domain/criteria/criteria';
import { ResponseSearch } from '../../../common/domain/response/response-search';
import { TypeormCriteriaConverter } from '../../../common/infrastructure/typeorm/typeorm-criteria-converter';
import { Student } from '../../../students/infrastructure/entities/student.entity';

@Injectable()
export class TypeOrmClassroomRepository extends TypeOrmRepository<Classroom> implements ClassroomRepository {
    private classroomRepository: Repository<Classroom>;
    constructor(
        @InjectRepository(Classroom)
        repository: Repository<Classroom>,
    ) {
        super(repository);
        this.classroomRepository = repository;
    }


    async search(criteria: Criteria): Promise<ResponseSearch<Classroom>> {
        const { skip, take } = TypeormCriteriaConverter.converter(criteria);
        const [rows, count] = await this.classroomRepository.findAndCount({
            skip: skip * take,
            take,
            relations: ['teacher', 'students']
        });

        return { rows: rows as Classroom[], count };
    }

    async searchById(id: number): Promise<Classroom | null> {
        return this.classroomRepository.findOne({
            where: { id },
            relations: ['teacher', 'students'],
        });
    }

    async searchByIdStudents(id: number): Promise<Student[]> {
        const { students } = await this.classroomRepository.findOne({
            select: ["students"],
            where: { id },
            relations: ['students'],
        });
        return students;
    }

}
