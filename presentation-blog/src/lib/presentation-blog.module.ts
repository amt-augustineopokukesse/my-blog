import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BusinessLogicBlogModule } from '@my-blog/business-logic-blog';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'gusPg@m1n',
      database: 'my-blog',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    BusinessLogicBlogModule
  ],
  controllers: [BlogController],
  providers: [],
  exports: [],
})
export class PresentationBlogModule {}