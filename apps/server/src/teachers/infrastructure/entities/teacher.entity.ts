import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Teacher as ITeacher } from '../../domain/teacher';
import { Classroom } from '../../../classrooms/infrastructure/entities/classroom.entity';

@Entity()
export class Teacher implements ITeacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @OneToMany(() => Classroom, (classroom) => classroom.teacher)
    classrooms: Classroom[];
}
