import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { MySQLModule } from './provider/database/mysql/provider.module';

@Module({
  imports: [AppConfigModule, MySQLModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
