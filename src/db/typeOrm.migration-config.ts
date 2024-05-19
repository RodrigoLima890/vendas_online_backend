import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { StateEntity } from './entities/state.entity';

config();

const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('POSTGRES_HOST'),
  username: configService.get<string>('POSTGRES_USER'),
  database: configService.get<string>('POSTGRES_DB'),
  port: +configService.get<number>('POSTGRES_PORT'),
  password: configService.get<string>('POSTGRES_PASSWORD'),
  entities: [StateEntity],
  synchronize: false,
  migrations: [`${__dirname}/migrations/**`],
};

export default new DataSource(dataSourceOptions);
