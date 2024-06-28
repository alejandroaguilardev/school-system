import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { Teacher } from '../../../teachers/infrastructure/entities/teacher.entity';
import { Student } from '../../../students/infrastructure/entities/student.entity';
import { Classroom as IClassroom } from '../../domain/classroom';

@Entity('classrooms')
export class Classroom implements IClassroom {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => Teacher, (teacher) => teacher.classrooms, { eager: true })
    @JoinColumn({ name: 'teacherId' })
    teacher: Teacher;

    @ManyToMany(() => Student, (student) => student.classrooms, { cascade: true, eager: true })
    @JoinTable({
        name: 'student_classroom',
        joinColumns: [{ name: 'classroom_id', referencedColumnName: 'id' }],
        inverseJoinColumns: [{ name: 'student_id', referencedColumnName: 'id' }],
    })
    students: Student[];
}
