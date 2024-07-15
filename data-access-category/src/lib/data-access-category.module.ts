import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './data-access-category.entity';
import { CategoryRepository } from './data-access-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryRepository],
  exports: [CategoryRepository, TypeOrmModule],
})
export class DataAccessCategoryModule {}