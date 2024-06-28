import { IsString, IsNotEmpty, MinLength, MaxLength, } from 'class-validator';
import { ClassroomCreateRequest } from '../../application/create/classroom-create-request'

export class CreateClassroomDto implements ClassroomCreateRequest {
    @IsNotEmpty()
    @IsString()
    @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    @MaxLength(50, { message: 'El nombre no debe exceder los 50 caracteres' })
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2, { message: 'El apellido debe tener al menos 2 caracteres' })
    @MaxLength(250, { message: 'El apellido no debe exceder los 50 caracteres' })
    description: string;
}
