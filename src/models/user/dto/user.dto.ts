import { IsString, IsEmail } from 'class-validator';
export class UserDto {
  @IsString()
  fullName: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
