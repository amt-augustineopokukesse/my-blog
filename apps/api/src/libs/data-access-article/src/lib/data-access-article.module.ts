import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './data-access-article.entity';
import { ArticleRepository } from './data-access-article.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleRepository],
  exports: [ArticleRepository, TypeOrmModule],
})
export class DataAccessArticleModule {}