import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
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

  async deleteSurveyQuestion(id: number) {
    try {
      // tìm kiếm câu hỏi trong csdl, nếu không có báo về lỗi
      const isExist = await this.surveyQuestionEntity.findOne({
        where: {
          id,
        },
      });
      if (!isExist) {
        throw new BadRequestException('Không tìm thấy câu hỏi');
      }
      // xoá phần tử đó khỏi csdl
      await this.surveyQuestionEntity.remove(isExist);
      return 'Đã xoá thành công';
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadGatewayException('Có lỗi xảy ra vui lòng thử lại');
    }
  }

  async updateSurveyQuestion(id: number, dto: SurveyQuestionDto) {
    // kiểm tra xem câu hỏi có trong csdl hay không
    try {
      // tìm kiếm câu hỏi trong csdl, nếu không có báo về lỗi
      const isExist = await this.surveyQuestionEntity.findOne({
        where: {
          id,
        },
      });
      if (!isExist) {
        throw new BadRequestException('Không tìm thấy câu hỏi');
      }
      // update dữ liệu trong csdl
      const answersJson = JSON.stringify(dto.answers);
      await this.surveyQuestionEntity.update(id, {
        ...dto,
        answers: answersJson,
      });
      return 'Cập nhật dữ liệu thành công';
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadGatewayException('Có lỗi xảy ra');
    }
  }
}
