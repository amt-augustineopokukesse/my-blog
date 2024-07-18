// libs/config/src/lib/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'gusPg@m1n',
  database: 'your_database_name',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // This should be false in production for safety
};
