import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Student as IStudent } from '../../domain/student';
import { Classroom } from '../../../classrooms/infrastructure/entities/classroom.entity';

@Entity()
export class Student implements IStudent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @ManyToMany(() => Classroom, (classroom) => classroom.students)
    classrooms: Classroom[];
}
