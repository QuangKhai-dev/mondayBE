import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsJSON,
  IsNotEmpty,
  IsString,
  ArrayNotEmpty,
  ValidateNested,
} from 'class-validator';

class SurveyQuestionAnswer {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}

export class SurveyQuestionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  questionTitle: string;

  @ApiProperty({
    type: SurveyQuestionAnswer,
    default: [
      {
        name: 'abc',
        value: 'cdg',
      },
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({
    each: true,
  })
  @Type(() => SurveyQuestionAnswer)
  answers: string;
}
