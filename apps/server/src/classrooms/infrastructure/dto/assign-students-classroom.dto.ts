import { IsInt, IsArray } from 'class-validator';
import { Transform } from 'class-transformer';

export class AssignStudentsClassroomDto {
    @IsArray()
    @IsInt({ each: true })
    @Transform(({ value }: { value: string[] }) => value.map((id) => +id))
    students: number[];

}
