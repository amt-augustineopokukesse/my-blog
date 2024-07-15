import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './data-access-comment.entity';
import { CommentService } from './data-access-comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentService],
  exports: [CommentService, TypeOrmModule],
})
export class DataAccessCommentModule {}