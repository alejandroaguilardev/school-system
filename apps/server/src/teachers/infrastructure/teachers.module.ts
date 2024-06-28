import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { TypeOrmTeacherRepository } from './repository/typeorm-teacher.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher]),
  ],
  controllers: [TeachersController],
  providers: [TeachersService, TypeOrmTeacherRepository],
  exports: [TypeOrmTeacherRepository]
})
export class TeachersModule { }
