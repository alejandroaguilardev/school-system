import { IsPositive, IsInt } from 'class-validator';

export class AssignTeacherClassroomDto {
    @IsPositive()
    @IsInt()
    teacher: number;
}
