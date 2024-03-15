import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';
export class UserDto {
  @IsString()
  @ApiProperty()
  fullName: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsEmail()
  @ApiProperty()
  email: string;
}
