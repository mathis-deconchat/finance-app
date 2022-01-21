import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    readonly username: string;

    readonly bio: string;


}