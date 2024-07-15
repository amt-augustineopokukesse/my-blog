import { Module } from '@nestjs/common';
import { DataAccessArticleModule } from '@my-blog/data-access-article';
import { DataAccessArticleCategoryModule } from '@my-blog/data-access-article-category';
import { DataAccessCommentModule } from '@my-blog/data-access-comment';
import { DataAccessCategoryModule } from '@my-blog/data-access-category';
import { BlogService } from './blog.service';

@Module({
  imports: [
    DataAccessArticleModule,
    DataAccessArticleCategoryModule,
    DataAccessCommentModule,
    DataAccessCategoryModule,
  ],
  providers: [BlogService],
  exports: [BlogService],
})
export class BusinessLogicBlogModule {}
