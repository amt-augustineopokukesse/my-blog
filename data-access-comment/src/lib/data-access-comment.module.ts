import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './data-access-comment.entity';
import { CommentRepository } from './data-access-comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentRepository],
  exports: [CommentRepository, TypeOrmModule],
})
export class DataAccessCommentModule {}