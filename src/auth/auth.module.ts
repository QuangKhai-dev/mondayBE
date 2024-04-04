import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from 'src/stragety/google.strategy';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/models/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/models/user/entities/user.entity';

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, ConfigService, UserService],
})
export class AuthModule {}
