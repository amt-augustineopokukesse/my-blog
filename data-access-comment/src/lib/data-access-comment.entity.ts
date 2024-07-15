import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  author!: string;
  @Column()
  content!: string;
  // Omitting relationships and using IDs for modularity
  @Column()
  articleId!: number;
}