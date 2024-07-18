import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ArticleCategory {
  @PrimaryColumn()
  articleId!: number;

  @PrimaryColumn()
  categoryId!: number;
}