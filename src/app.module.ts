import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { MySQLModule } from './provider/database/mysql/provider.module';
import { UserModule } from './models/user/user.module';
import { AuthModule } from './auth/auth.module';
import { SurveyQuestionModule } from './models/survey-question/survey-question.module';

@Module({
  imports: [
    AppConfigModule,
    MySQLModule,
    UserModule,
    AuthModule,
    SurveyQuestionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
