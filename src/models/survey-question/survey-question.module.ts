import { Module } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { SurveyQuestionController } from './survey-question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyQuestionEntity } from './entity/survey-question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyQuestionEntity])],
  controllers: [SurveyQuestionController],
  providers: [SurveyQuestionService],
})
export class SurveyQuestionModule {}
