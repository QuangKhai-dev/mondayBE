import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }
}
