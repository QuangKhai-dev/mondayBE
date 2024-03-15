import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { MySQLModule } from './provider/database/mysql/provider.module';
import { UserModule } from './models/user/user.module';

@Module({
  imports: [AppConfigModule, MySQLModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
