import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { StudentCreateRequest } from '../../application/create/student-create-request'

export class CreateStudentDto implements StudentCreateRequest {
    @IsNotEmpty()
    @IsString()
    @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    @MaxLength(50, { message: 'El nombre no debe exceder los 50 caracteres' })
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2, { message: 'El apellido debe tener al menos 2 caracteres' })
    @MaxLength(50, { message: 'El apellido no debe exceder los 50 caracteres' })
    lastName: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'El email debe ser un correo electrónico válido' })
    @MaxLength(100, { message: 'El email no debe exceder los 100 caracteres' })
    email: string;

}
