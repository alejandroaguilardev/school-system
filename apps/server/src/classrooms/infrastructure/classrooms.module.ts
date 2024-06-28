import { Module } from '@nestjs/common';
import { ClassroomsService } from './classrooms.service';
import { ClassroomsController } from './classrooms.controller';
import { TypeOrmClassroomRepository } from './repository/typeorm-classroom.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './entities/classroom.entity';
import { StudentsModule } from '../../students/infrastructure/students.module';
import { TeachersModule } from '../../teachers/infrastructure/teachers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Classroom]),
    StudentsModule,
    TeachersModule
  ],
  controllers: [ClassroomsController],
  providers: [ClassroomsService, TypeOrmClassroomRepository],
})
export class ClassroomsModule { }
