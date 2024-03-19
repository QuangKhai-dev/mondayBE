import { BadGatewayException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bycrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>,
    private configService: ConfigService,
  ) {}
  async create(dto: UserDto) {
    try {
      // Kiểm tra email người dùng đã có trong hệ thống hay chưa
      const checkExist = this.userEntity.findOne({
        where: {
          email: dto.email,
        },
      });
      if (checkExist) {
        throw new BadGatewayException('Email đã có trong hệ thống');
      }

      // Mã hoá mật khẩu người dùng
      console.log(typeof this.configService.get('SALT'));
      const newPassword = await bycrypt.hash(
        dto.password,
        Number(this.configService.get('SALT')),
      );

      // tạo người dùng mới
      const newUser = this.userEntity.create({ ...dto, password: newPassword });
      await this.userEntity.save(newUser);
      return 'Tạo người dùng thành công';
    } catch (error) {
      throw new Error(error);
    }
  }
}
