import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './data-access-category.entity';
import { CategoryService } from './data-access-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService],
  exports: [CategoryService, TypeOrmModule],
})
export class DataAccessCategoryModule {}