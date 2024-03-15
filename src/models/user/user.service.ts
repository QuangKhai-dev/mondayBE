import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>,
  ) {}
  async create(dto: UserDto) {
    try {
      // tạo người dùng mới
      const newUser = this.userEntity.create(dto);
      await this.userEntity.save(newUser);
      return 'Tạo người dùng thành công';
    } catch (error) {
      throw new Error(error);
    }
  }
}
