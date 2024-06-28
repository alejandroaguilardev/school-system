import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { TypeOrmStudentRepository } from './repository/typeorm-student.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService, TypeOrmStudentRepository],
  exports: [StudentsService, TypeOrmStudentRepository]
})
export class StudentsModule { }
