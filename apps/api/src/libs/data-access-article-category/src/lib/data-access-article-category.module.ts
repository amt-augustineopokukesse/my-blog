import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleCategory } from './data-access-article-category.entity';
import { ArticleCategoryRepository } from './data-access-article-category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleCategory])],
  providers: [ArticleCategoryRepository],
  exports: [ArticleCategoryRepository, TypeOrmModule],
})
export class DataAccessArticleCategoryModule {}