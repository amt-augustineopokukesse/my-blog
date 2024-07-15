import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleCategory } from './data-access-article-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleCategoryRepository {
  constructor(
    @InjectRepository(ArticleCategory)
    private articleCategoryRepository: Repository<ArticleCategory>
  ) {}

  findAll(): Promise<ArticleCategory[]> {
    return this.articleCategoryRepository.find();
  }

  create(article: ArticleCategory): Promise<ArticleCategory> {
    const newArticle = this.articleCategoryRepository.create(article);
    return this.articleCategoryRepository.save(newArticle);
  }

  async remove(articleId?: string, categoryId?: string): Promise<void> {
    let options = {};
    articleId ? (options = { ...options, articleId: +articleId }) : options;
    categoryId ? (options = { ...options, categoryId: +categoryId }) : options;
    const articleCategory = await this.articleCategoryRepository.findOne({
      where: options,
    });
    if (!articleCategory) {
      throw new Error('ArticleCategory not found');
    }
    await this.articleCategoryRepository.remove(articleCategory);
  }
}