import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class SurveyQuestionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  questionTitle: string;

  @ApiProperty()
  @IsNotEmpty()
  // @IsJSON()
  answers: string;
}
