import { Body, Controller, Get, Post } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { SurveyQuestionDto } from './dto/survey-question.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('survey-question')
@ApiTags('survey-question')
export class SurveyQuestionController {
  constructor(private readonly surveyQuestionService: SurveyQuestionService) {}

  // create survey question
  @Post()
  createSurvey(@Body() dto: SurveyQuestionDto) {
    return this.surveyQuestionService.createSurveyQuestion(dto);
  }

  @Get()
  getAllSurveyQuestion() {
    return this.surveyQuestionService.getAllSurveyQuestion();
  }
}
