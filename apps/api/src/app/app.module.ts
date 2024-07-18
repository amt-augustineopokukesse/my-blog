import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PresentationBlogModule } from '@my-blog/presentation-blog';

@Module({
  imports: [PresentationBlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
