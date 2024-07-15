import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './data-access-article.entity';
import { ArticleService } from './data-access-article.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService],
  exports: [ArticleService, TypeOrmModule],
})
export class DataAccessArticleModule {}