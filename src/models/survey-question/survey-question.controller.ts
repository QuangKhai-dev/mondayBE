import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { SurveyQuestionDto } from './dto/survey-question.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';

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

  @Delete('/:id')
  @ApiParam({
    name: 'id',
    description: 'Nhập vào id câu hỏi khảo sát',
  })
  deleteSurveyQuestion(@Param('id', new ParseIntPipe()) id: number) {
    console.log(id);
    return this.surveyQuestionService.deleteSurveyQuestion(id);
  }

  @Put('/:id')
  @ApiParam({
    name: 'id',
    description: 'Nhập vào id câu hỏi khảo sát',
  })
  updateSurveyQuestion(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: SurveyQuestionDto,
  ) {
    return this.surveyQuestionService.updateSurveyQuestion(id, dto);
  }
}
