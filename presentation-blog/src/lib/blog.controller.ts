import { BlogService, IBlog, PartialBlog } from '@my-blog/business-logic-blog';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async findAllPosts(): Promise<PartialBlog[]> {
    return this.blogService.findAllPosts();
  }

  @Get(':id')
  async findPostById(@Param('id') id: string): Promise<IBlog> {
    return this.blogService.findPostById(id);
  }

  // ... other methods
}