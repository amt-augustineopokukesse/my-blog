// libs/data-access-article/src/lib/dto/create-article.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  readonly title!: string;

  @IsString()
  @IsNotEmpty()
  readonly content!: string;

  @IsString()
  @IsNotEmpty()
  readonly author!: string;
}
