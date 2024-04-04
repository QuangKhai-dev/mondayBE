import { BadGatewayException, Injectable } from '@nestjs/common';
import { SurveyQuestionDto } from './dto/survey-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SurveyQuestionEntity } from './entity/survey-question.entity';

@Injectable()
export class SurveyQuestionService {
  constructor(
    @InjectRepository(SurveyQuestionEntity)
    private surveyQuestionEntity: Repository<SurveyQuestionEntity>,
  ) {}

  async createSurveyQuestion(dto: SurveyQuestionDto) {
    try {
      // chuyển đổi mảng thành chuỗi json
      const questionJson = JSON.stringify(dto.answers);
      // lưu trữ dữ liệu vào table
      const newQuestion = this.surveyQuestionEntity.create({
        ...dto,
        answers: questionJson,
      });
      await this.surveyQuestionEntity.save(newQuestion);
      return newQuestion;
    } catch (error) {
      throw new BadGatewayException('Có lỗi xảy ra vui lòng thử lại');
    }
  }

  async getAllSurveyQuestion() {
    try {
      // truy cập tới csdl để lấy danh sách câu hỏi khảo sát
      const listQuestion = await this.surveyQuestionEntity.find();
      return listQuestion.map((item) => {
        // chuyển đổi từ chuỗi json thành array
        const answers = JSON.parse(item.answers);
        return { ...item, answers };
      });
    } catch (error) {
      throw new BadGatewayException('Có lỗi xảy ra vui lòng thử lại');
    }
  }
}
