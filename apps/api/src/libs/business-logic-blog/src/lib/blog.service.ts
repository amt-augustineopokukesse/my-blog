import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '@my-blog/data-access-article';
import { CategoryRepository } from '@my-blog/data-access-category';
import { CommentRepository } from '@my-blog/data-access-comment';
import { ArticleCategoryRepository } from '@my-blog/data-access-article-category';
import { IBlog, PartialBlog } from './blog.interface';

@Injectable()
export class BlogService {
  constructor(
    private articleRepository: ArticleRepository,
    private categoryRepository: CategoryRepository,
    private commentRepository: CommentRepository,
    private articleCategoryRepository: ArticleCategoryRepository
  ) {}

  async findAllPosts(): Promise<PartialBlog[]> {
    const articles = await this.articleRepository.findAll();
    return articles.map((article) => {
      return {
        id: article.id,
        title: article.title,
        content: article.content,
        author: article.author,
      };
    });
  }

  async findPostById(id: string): Promise<IBlog> {
    const article = await this.articleRepository.findOne(id);
    const comments = await this.commentRepository.findAll();
    const categories = await this.categoryRepository.findAll();
    const articleCategories = await this.articleCategoryRepository.findAll();

    return {
      id: article.id,
      title: article.title,
      content: article.content,
      author: article.author,
      comments: comments
        .filter((comment) => comment.articleId === article.id)
        ?.map((comment) => {
          return {
            id: comment.id,
            author: comment.author,
            content: comment.content,
          };
        }),
      categories: articleCategories
        .filter((articleCategory) => articleCategory.articleId === article.id)
        ?.map((articleCategory) => {
          return categories
            .filter((category) => category.id === articleCategory.categoryId)
            .map((category) => {
              return {
                id: category.id,
                name: category.name,
                description: category.description,
              };
            });
        })
        .flat(),
    };
  }

  async createPost(article: PartialBlog): Promise<Partial<IBlog>> {
    const newArticle = this.articleRepository.create(article);
    return newArticle;
  }
}