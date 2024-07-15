import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './data-access-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    const Category = await this.categoryRepository.findOne({
      where: { id: +id },
    });
    if (!Category) {
      throw new Error('Category not found');
    }
    return Category;
  }

  create(Category: Category): Promise<Category> {
    const newCategory = this.categoryRepository.create(Category);
    return this.categoryRepository.save(newCategory);
  }

  async update(id: string, Category: Partial<Category>): Promise<Category> {
    const updatedCategory = await this.categoryRepository.preload({
      id: +id,
      ...Category,
    });
    if (!updatedCategory) {
      throw new Error('Category not found');
    }
    return this.categoryRepository.save(updatedCategory);
  }

  async remove(id: string): Promise<void> {
    const Category = await this.findOne(id);
    await this.categoryRepository.remove(Category);
  }
}