import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ClassroomsService } from './classrooms.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { CriteriaDto } from '../../common/infrastructure/dto/criteria.dto';
import { AssignTeacherClassroomDto } from './dto/assign-teacher-classroom.dto';
import { AssignStudentsClassroomDto } from './dto/assign-students-classroom.dto';

@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) { }

  @Post(':id/assign-teacher')
  assignTeacher(@Param('id', ParseIntPipe) id: number, @Body() createTeacherDto: AssignTeacherClassroomDto) {
    return this.classroomsService.assignTeacher(id, createTeacherDto);
  }

  @Post(':id/assign-students')
  assignStudents(@Param('id', ParseIntPipe) id: number, @Body() createTeacherDto: AssignStudentsClassroomDto) {
    return this.classroomsService.assignStudents(id, createTeacherDto);
  }

  @Post()
  create(@Body() createTeacherDto: CreateClassroomDto) {
    return this.classroomsService.create(createTeacherDto);
  }

  @Get()
  findAll(
    @Query() criteriaDto: CriteriaDto
  ) {
    return this.classroomsService.findAll(criteriaDto);
  }
  @Get(':id/students')
  students(@Param('id', ParseIntPipe) id: number) {
    return this.classroomsService.findStudents(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.classroomsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTeacherDto: UpdateClassroomDto) {
    return this.classroomsService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.classroomsService.remove(id);
  }
}
