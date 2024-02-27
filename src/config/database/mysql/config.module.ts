import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { MySqlConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [MySqlConfigService],
  exports: [MySqlConfigService],
})
export class MySqlConfigModule {}
