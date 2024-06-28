import { Student } from "../../students/domain/student";
import { Teacher } from "../../teachers/domain/teacher";

export interface Classroom {
    id: number;
    name: string;
    description: string;
    teacher: Teacher | undefined;
    students: Student[];
}

export interface NewClassroom extends Omit<Classroom, "id" | "teacher" | "students"> { }

export interface AssignTeacher {
    teacher?: number;
}
export interface AssignStudents {
    students: number[];
}
