import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('survey-question')
export class SurveyQuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionTitle: string;

  @Column()
  answers: string;
}
