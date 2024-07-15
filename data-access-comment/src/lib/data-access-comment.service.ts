import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './data-access-comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentRepository {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async findOne(id: string): Promise<Comment> {
    const comment = await this.commentRepository.findOne({
      where: { id: +id },
    });
    if (!comment) {
      throw new Error('Comment not found');
    }
    return comment;
  }

  create(comment: Comment): Promise<Comment> {
    const newComment = this.commentRepository.create(comment);
    return this.commentRepository.save(newComment);
  }

  async update(id: string, comment: Partial<Comment>): Promise<Comment> {
    const updatedComment = await this.commentRepository.preload({
      id: +id,
      ...comment,
    });
    if (!updatedComment) {
      throw new Error('Comment not found');
    }
    return this.commentRepository.save(updatedComment);
  }

  async remove(id: string): Promise<void> {
    const comment = await this.findOne(id);
    await this.commentRepository.remove(comment);
  }
}