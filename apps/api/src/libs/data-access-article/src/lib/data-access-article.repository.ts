import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "./data-access-article.entity";

@Injectable()
export class ArticleRepository {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>
  ) {}

  findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async findOne(id: string): Promise<Article> {
    const article = await this.articleRepository.findOne({where: {id: +id}});
    if (!article) {
      throw new Error('Article not found');
    }
    return article;
  }

  create(article: Article): Promise<Article> {
    const newArticle = this.articleRepository.create(article);
    return this.articleRepository.save(newArticle);
  }

  async update(id: string, article: Partial<Article>): Promise<Article> {
    const updatedArticle = await this.articleRepository.preload({
      id: +id,
      ...article
    });
    if (!updatedArticle) {
      throw new Error('Article not found');
    }
    return this.articleRepository.save(updatedArticle);
  }

  async remove(id: string): Promise<void> {
    const article = await this.findOne(id);
    await this.articleRepository.remove(article);
  }
}

