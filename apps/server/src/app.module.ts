import { Module } from '@nestjs/common';
import { TeachersModule } from './teachers/infrastructure/teachers.module';
import { StudentsModule } from './students/infrastructure/students.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomsModule } from './classrooms/infrastructure/classrooms.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TeachersModule,
    StudentsModule,
    ClassroomsModule]
  ,
})
export class AppModule { }
